// Application State
let currentUser = {
    username: '',
    leagueCode: '',
    predictions: {},
    totalScore: 0,
    gameweekScores: {}
};

let currentGameweek = 4; // Current gameweek based on date
let fixturesData = [];
let leagueData = null;
let allFixturesData = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadUserData();
    if (!currentUser.username) {
        showModal('welcome-modal');
    } else {
        updateUserDisplay();
        loadFixturesData();
        loadLeagueData();
    }
}

// User Management
function loadUserData() {
    const userData = localStorage.getItem('wsl2_user_data');
    if (userData) {
        currentUser = { ...currentUser, ...JSON.parse(userData) };
    }
}

function saveUserData() {
    localStorage.setItem('wsl2_user_data', JSON.stringify(currentUser));
}

function setUsername() {
    const username = document.getElementById('username-input').value.trim();
    if (username && username.length >= 2) {
        currentUser.username = username;
        saveUserData();
        updateUserDisplay();
        closeModal('welcome-modal');
        loadFixturesData();
        loadLeagueData();
        showToast('Welcome to WSL2 Predictor, ' + username + '!');
    } else {
        showToast('Please enter a valid username (at least 2 characters)', 'error');
    }
}

function updateUserDisplay() {
    document.getElementById('username-display').textContent = currentUser.username;
    document.getElementById('user-total-score').textContent = currentUser.totalScore + ' pts';
}

// Screen Navigation
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenName + '-screen').classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load screen-specific data
    switch(screenName) {
        case 'predictions':
            loadPredictionsScreen();
            break;
        case 'league':
            loadLeagueScreen();
            break;
        case 'scores':
            loadScoresScreen();
            break;
        case 'fixtures':
            loadFixturesScreen();
            break;
        case 'results':
            loadResultsScreen();
            break;
    }
}

// Modal Management
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Data Loading Functions
function loadFixturesData() {
    fetch('./data/fixtures-results.json')
        .then(response => response.json())
        .then(data => {
            allFixturesData = data;
            fixturesData = data.gameweeks;
            // Determine current gameweek based on today's date
            currentGameweek = getCurrentGameweek();
            loadPredictionsScreen();
            loadFixturesScreen();
        })
        .catch(error => {
            console.error('Error loading fixtures:', error);
            showToast('Error loading fixtures data', 'error');
        });
}

function loadLeagueData() {
    // Load the single league data with Kerry and Libby
    fetch('./data/leagues/GOAL24.json')
        .then(response => response.json())
        .then(data => {
            leagueData = data;
            // Set current user's league code
            currentUser.leagueCode = data.leagueCode;
            // Update user scores from league data if exists
            const userInLeague = data.participants.find(p => p.username === currentUser.username);
            if (userInLeague) {
                currentUser.totalScore = userInLeague.totalScore;
                currentUser.gameweekScores = userInLeague.gameweekScores;
                updateUserDisplay();
            }
            loadLeagueScreen();
        })
        .catch(error => {
            console.error('Error loading league data:', error);
            // Create default league structure if file doesn't exist
            leagueData = {
                leagueCode: "GOAL24",
                leagueName: "Kerry & Libby's League",
                participants: []
            };
        });
}

// Screen Loading Functions
function loadPredictionsScreen() {
    // Update the current gameweek display
    document.getElementById('current-gameweek-info').innerHTML = 
        `<p><strong>Gameweek ${currentGameweek}</strong> - Make your predictions before the deadline!</p>`;
    
    const container = document.getElementById('predictions-container');
    
    if (fixturesData.length === 0) {
        container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading fixtures...</p></div>';
        return;
    }
    
    const currentGameweekData = fixturesData.find(gw => gw.gameweek === currentGameweek);
    if (!currentGameweekData) {
        container.innerHTML = '<div class="empty-state"><p>No fixtures available for this gameweek.</p></div>';
        return;
    }
    
    let html = '';
    currentGameweekData.matches.forEach(match => {
        const isLocked = isMatchLocked(match.kickoffTime);
        const prediction = currentUser.predictions[`gameweek_${currentGameweek}`]?.find(p => p.matchId === match.id);
        
        html += `
            <div class="match-card ${isLocked ? 'locked' : ''}">
                <div class="match-info">
                    <div class="teams">${match.homeTeam} vs ${match.awayTeam}</div>
                    <div class="match-time">
                        ${formatMatchTime(match.kickoffTime)}
                        ${isLocked ? '<span class="deadline-warning">LOCKED</span>' : getTimeToDeadline(match.kickoffTime)}
                    </div>
                </div>
                <div class="prediction-inputs">
                    ${isLocked ? 
                        '<span class="locked-label">LOCKED</span>' : 
                        `<input type="number" class="score-input" id="home-${match.id}" 
                            min="0" max="9" value="${prediction?.homeScore || ''}" 
                            onchange="updatePrediction('${match.id}')">
                        <span class="vs">-</span>
                        <input type="number" class="score-input" id="away-${match.id}" 
                            min="0" max="9" value="${prediction?.awayScore || ''}" 
                            onchange="updatePrediction('${match.id}')">`
                    }
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateSaveButton();
}

function loadLeagueScreen() {
    const infoContainer = document.getElementById('league-info');
    const tableContainer = document.getElementById('league-table-body');
    
    if (!currentUser.leagueCode || !leagueData) {
        infoContainer.innerHTML = `
            <div class="empty-state">
                <p>You're not in a league yet!</p>
                <p>Create a new league or join an existing one to compete with friends.</p>
            </div>
        `;
        tableContainer.innerHTML = '';
        return;
    }
    
    // Show league info
    infoContainer.innerHTML = `
        <div class="league-code-display">
            <div class="league-code">${leagueData.leagueCode}</div>
            <div>Share this code with friends to join!</div>
        </div>
        <p><strong>${leagueData.leagueName}</strong></p>
        <p>${leagueData.participants.length} participants</p>
    `;
    
    // Sort participants by score
    const sortedParticipants = [...leagueData.participants].sort((a, b) => b.totalScore - a.totalScore);
    
    let tableHTML = '';
    sortedParticipants.forEach((participant, index) => {
        const isCurrentUser = participant.username === currentUser.username;
        const lastGWScore = Object.values(participant.gameweekScores).pop() || 0;
        
        tableHTML += `
            <tr class="${isCurrentUser ? 'user-row' : ''}">
                <td class="position">${index + 1}</td>
                <td>${participant.username}${isCurrentUser ? ' (You)' : ''}</td>
                <td><strong>${participant.totalScore}</strong></td>
                <td>${lastGWScore}</td>
            </tr>
        `;
    });
    
    tableContainer.innerHTML = tableHTML;
}

function loadScoresScreen() {
    document.getElementById('total-score-display').textContent = currentUser.totalScore;
    document.getElementById('gameweek-score').textContent = 
        Object.values(currentUser.gameweekScores).pop() || 0;
    
    // Update position if in league
    if (leagueData) {
        const sortedParticipants = [...leagueData.participants].sort((a, b) => b.totalScore - a.totalScore);
        const position = sortedParticipants.findIndex(p => p.username === currentUser.username) + 1;
        document.getElementById('current-position').textContent = position > 0 ? position : '-';
    } else {
        document.getElementById('current-position').textContent = '-';
    }
    
    // Show weekly breakdown
    const weeklyContainer = document.getElementById('weekly-scores');
    if (Object.keys(currentUser.gameweekScores).length === 0) {
        weeklyContainer.innerHTML = '<div class="empty-state"><p>No scores yet. Make some predictions!</p></div>';
        return;
    }
    
    let weeklyHTML = '';
    Object.entries(currentUser.gameweekScores).forEach(([gw, score]) => {
        weeklyHTML += `
            <div class="match-card">
                <div class="match-info">
                    <div class="teams">Gameweek ${gw}</div>
                    <div class="match-time">Points scored</div>
                </div>
                <div class="prediction-inputs">
                    <strong>${score} points</strong>
                </div>
            </div>
        `;
    });
    
    weeklyContainer.innerHTML = weeklyHTML;
}

function loadFixturesScreen() {
    const container = document.getElementById('fixtures-container');
    
    if (fixturesData.length === 0) {
        container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading fixtures...</p></div>';
        return;
    }
    
    let html = '';
    fixturesData.forEach(gameweek => {
        html += `<h4>Gameweek ${gameweek.gameweek}</h4>`;
        gameweek.matches.forEach(match => {
            const resultDisplay = match.status === 'finished' ? 
                `${match.homeScore} - ${match.awayScore}` : 
                formatMatchTime(match.kickoffTime);
            
            html += `
                <div class="match-card">
                    <div class="match-info">
                        <div class="teams">${match.homeTeam} vs ${match.awayTeam}</div>
                        <div class="match-time">${resultDisplay}</div>
                    </div>
                    ${match.status === 'finished' ? 
                        '<div class="prediction-inputs"><span class="locked-label">FINISHED</span></div>' :
                        '<div class="prediction-inputs"><span class="locked-label">UPCOMING</span></div>'
                    }
                </div>
            `;
        });
    });
    
    container.innerHTML = html;
}

function loadResultsScreen() {
    // Update current gameweek display
    document.getElementById('current-gw-number').textContent = currentGameweek;
    
    const container = document.getElementById('results-container');
    
    if (fixturesData.length === 0) {
        container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading results...</p></div>';
        return;
    }
    
    let html = '';
    
    // Show current gameweek matches
    const currentGW = fixturesData.find(gw => gw.gameweek === currentGameweek);
    if (currentGW) {
        html += `<div class="card"><h4>Gameweek ${currentGameweek} - Current</h4>`;
        currentGW.matches.forEach(match => {
            const statusClass = match.status === 'finished' ? 'finished' : 
                               match.status === 'upcoming' ? 'upcoming' : 'live';
            
            html += `
                <div class="match-card ${statusClass}">
                    <div class="match-info">
                        <div class="teams">${match.homeTeam} vs ${match.awayTeam}</div>
                        <div class="match-time">
                            ${match.status === 'finished' ? 
                                `Final: ${match.homeScore} - ${match.awayScore}` :
                                formatMatchTime(match.kickoffTime)
                            }
                        </div>
                    </div>
                    <div class="match-status">
                        <span class="status-badge ${statusClass}">${match.status.toUpperCase()}</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    // Show previous gameweeks (completed matches only)
    const previousGameweeks = fixturesData
        .filter(gw => gw.gameweek < currentGameweek)
        .sort((a, b) => b.gameweek - a.gameweek); // Most recent first
    
    previousGameweeks.forEach(gameweek => {
        const finishedMatches = gameweek.matches.filter(m => m.status === 'finished');
        if (finishedMatches.length > 0) {
            html += `<div class="card"><h4>Gameweek ${gameweek.gameweek} - Results</h4>`;
            finishedMatches.forEach(match => {
                html += `
                    <div class="match-card finished">
                        <div class="match-info">
                            <div class="teams">${match.homeTeam} vs ${match.awayTeam}</div>
                            <div class="match-time">Final: ${match.homeScore} - ${match.awayScore}</div>
                        </div>
                        <div class="match-status">
                            <span class="status-badge finished">FINISHED</span>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }
    });
    
    if (previousGameweeks.length === 0) {
        html += '<div class="card"><div class="empty-state"><p>No previous results available.</p></div></div>';
    }
    
    container.innerHTML = html;
}

// Prediction Functions
function updatePrediction(matchId) {
    const homeScore = parseInt(document.getElementById(`home-${matchId}`).value);
    const awayScore = parseInt(document.getElementById(`away-${matchId}`).value);
    
    if (isNaN(homeScore) || isNaN(awayScore)) return;
    
    if (!currentUser.predictions[`gameweek_${currentGameweek}`]) {
        currentUser.predictions[`gameweek_${currentGameweek}`] = [];
    }
    
    const existingIndex = currentUser.predictions[`gameweek_${currentGameweek}`]
        .findIndex(p => p.matchId === matchId);
    
    const prediction = {
        matchId,
        homeScore,
        awayScore,
        timestamp: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
        currentUser.predictions[`gameweek_${currentGameweek}`][existingIndex] = prediction;
    } else {
        currentUser.predictions[`gameweek_${currentGameweek}`].push(prediction);
    }
    
    updateSaveButton();
}

function updateSaveButton() {
    const button = document.getElementById('save-predictions-btn');
    const gameweekPredictions = currentUser.predictions[`gameweek_${currentGameweek}`] || [];
    button.disabled = gameweekPredictions.length === 0;
}

function savePredictions() {
    saveUserData();
    showToast('Predictions saved successfully!');
    // In production, this would also sync with league data
}

// League Functions - Single league support only
function showLeagueModal() {
    // No modal needed for single league
    showToast('You are already in Kerry & Libby\'s League!');
}

// Utility Functions
function getCurrentGameweek() {
    const today = new Date();
    const currentDate = new Date('2025-09-28'); // Today's date
    
    // Based on the fixture dates, determine current gameweek
    if (currentDate < new Date('2025-09-05')) return 1;
    if (currentDate < new Date('2025-09-12')) return 1;
    if (currentDate < new Date('2025-09-19')) return 2;
    if (currentDate < new Date('2025-09-27')) return 3;
    if (currentDate < new Date('2025-10-05')) return 4;
    if (currentDate < new Date('2025-10-12')) return 5;
    return 6; // Default to latest gameweek
}

function isMatchLocked(kickoffTime) {
    const now = new Date();
    const kickoff = new Date(kickoffTime);
    const hourBeforeKickoff = new Date(kickoff.getTime() - (60 * 60 * 1000));
    return now > hourBeforeKickoff;
}

function formatMatchTime(kickoffTime) {
    const date = new Date(kickoffTime);
    return date.toLocaleDateString('en-GB', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getTimeToDeadline(kickoffTime) {
    const now = new Date();
    const kickoff = new Date(kickoffTime);
    const deadline = new Date(kickoff.getTime() - (60 * 60 * 1000));
    const timeLeft = deadline - now;
    
    if (timeLeft <= 0) return '<span class="deadline-warning">DEADLINE PASSED</span>';
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `<span>Deadline in ${hours}h ${minutes}m</span>`;
    } else {
        return `<span class="deadline-warning">Deadline in ${minutes}m</span>`;
    }
}

// Auto-refresh functionality
setInterval(() => {
    if (currentUser.username) {
        loadLeagueData();
        loadPredictionsScreen();
    }
}, 30000); // Refresh every 30 seconds