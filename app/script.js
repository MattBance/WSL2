// Hardcoded league data (previously from GOAL24.json)
const HARDCODED_LEAGUE_DATA = {
    leagueCode: "GOAL24",
    leagueName: "Matt, Kerry & Libby's League",
    createdDate: "2025-09-01T10:00:00Z",
    lastUpdated: "2025-09-28T16:30:00Z",
    participants: [
        {
            username: "Matt",
            totalScore: 35,
            gameweekScores: { "1": 10, "2": 12, "3": 13 },
            predictions: {
                gameweek_1: [
                    { matchId: "gw1_match1", homeScore: 3, awayScore: 1, points: 1, timestamp: "2025-09-07T11:15:00Z" },
                    { matchId: "gw1_match2", homeScore: 1, awayScore: 0, points: 3, timestamp: "2025-09-07T11:30:00Z" },
                    { matchId: "gw1_match3", homeScore: 2, awayScore: 1, points: 0, timestamp: "2025-09-07T12:00:00Z" },
                    { matchId: "gw1_match4", homeScore: 1, awayScore: 2, points: 1, timestamp: "2025-09-07T12:15:00Z" },
                    { matchId: "gw1_match5", homeScore: 2, awayScore: 0, points: 1, timestamp: "2025-09-06T12:30:00Z" },
                    { matchId: "gw1_match6", homeScore: 0, awayScore: 3, points: 1, timestamp: "2025-09-05T16:45:00Z" }
                ],
                gameweek_2: [
                    { matchId: "gw2_match1", homeScore: 2, awayScore: 0, points: 3, timestamp: "2025-09-14T12:00:00Z" },
                    { matchId: "gw2_match2", homeScore: 2, awayScore: 2, points: 1, timestamp: "2025-09-14T12:15:00Z" },
                    { matchId: "gw2_match3", homeScore: 1, awayScore: 1, points: 0, timestamp: "2025-09-14T12:30:00Z" },
                    { matchId: "gw2_match4", homeScore: 1, awayScore: 0, points: 1, timestamp: "2025-09-14T12:45:00Z" },
                    { matchId: "gw2_match5", homeScore: 0, awayScore: 1, points: 1, timestamp: "2025-09-14T13:00:00Z" },
                    { matchId: "gw2_match6", homeScore: 2, awayScore: 1, points: 1, timestamp: "2025-09-13T14:30:00Z" }
                ],
                gameweek_3: [
                    { matchId: "gw3_match1", homeScore: 1, awayScore: 1, points: 3, timestamp: "2025-09-21T11:00:00Z" },
                    { matchId: "gw3_match2", homeScore: 2, awayScore: 0, points: 3, timestamp: "2025-09-21T11:15:00Z" },
                    { matchId: "gw3_match3", homeScore: 0, awayScore: 2, points: 1, timestamp: "2025-09-21T11:30:00Z" },
                    { matchId: "gw3_match4", homeScore: 3, awayScore: 1, points: 0, timestamp: "2025-09-21T11:45:00Z" },
                    { matchId: "gw3_match5", homeScore: 1, awayScore: 0, points: 1, timestamp: "2025-09-20T13:00:00Z" },
                    { matchId: "gw3_match6", homeScore: 0, awayScore: 1, points: 3, timestamp: "2025-09-19T17:00:00Z" }
                ]
            }
        },
        {
            username: "Kerry",
            totalScore: 35,
            gameweekScores: { "1": 12, "2": 8, "3": 15 },
            predictions: {
                gameweek_1: [
                    { matchId: "gw1_match1", homeScore: 4, awayScore: 1, points: 1, timestamp: "2025-09-07T11:20:00Z" },
                    { matchId: "gw1_match2", homeScore: 1, awayScore: 0, points: 3, timestamp: "2025-09-07T11:35:00Z" },
                    { matchId: "gw1_match3", homeScore: 0, awayScore: 2, points: 1, timestamp: "2025-09-07T12:05:00Z" },
                    { matchId: "gw1_match4", homeScore: 0, awayScore: 2, points: 3, timestamp: "2025-09-07T12:20:00Z" },
                    { matchId: "gw1_match5", homeScore: 3, awayScore: 0, points: 1, timestamp: "2025-09-06T12:35:00Z" },
                    { matchId: "gw1_match6", homeScore: 0, awayScore: 4, points: 3, timestamp: "2025-09-05T16:50:00Z" }
                ],
                gameweek_2: [
                    { matchId: "gw2_match1", homeScore: 1, awayScore: 0, points: 1, timestamp: "2025-09-14T12:05:00Z" },
                    { matchId: "gw2_match2", homeScore: 3, awayScore: 3, points: 1, timestamp: "2025-09-14T12:20:00Z" },
                    { matchId: "gw2_match3", homeScore: 0, awayScore: 1, points: 3, timestamp: "2025-09-14T12:35:00Z" },
                    { matchId: "gw2_match4", homeScore: 2, awayScore: 0, points: 1, timestamp: "2025-09-14T12:50:00Z" },
                    { matchId: "gw2_match5", homeScore: 0, awayScore: 2, points: 1, timestamp: "2025-09-14T13:05:00Z" },
                    { matchId: "gw2_match6", homeScore: 2, awayScore: 0, points: 1, timestamp: "2025-09-13T14:35:00Z" }
                ],
                gameweek_3: [
                    { matchId: "gw3_match1", homeScore: 1, awayScore: 1, points: 3, timestamp: "2025-09-21T11:05:00Z" },
                    { matchId: "gw3_match2", homeScore: 2, awayScore: 0, points: 3, timestamp: "2025-09-21T11:20:00Z" },
                    { matchId: "gw3_match3", homeScore: 1, awayScore: 3, points: 3, timestamp: "2025-09-21T11:35:00Z" },
                    { matchId: "gw3_match4", homeScore: 2, awayScore: 2, points: 3, timestamp: "2025-09-21T11:50:00Z" },
                    { matchId: "gw3_match5", homeScore: 2, awayScore: 1, points: 3, timestamp: "2025-09-20T13:05:00Z" },
                    { matchId: "gw3_match6", homeScore: 0, awayScore: 2, points: 0, timestamp: "2025-09-19T17:05:00Z" }
                ]
            }
        },
        {
            username: "Libby",
            totalScore: 35,
            gameweekScores: { "1": 15, "2": 10, "3": 10 },
            predictions: {
                gameweek_1: [
                    { matchId: "gw1_match1", homeScore: 5, awayScore: 1, points: 3, timestamp: "2025-09-07T11:25:00Z" },
                    { matchId: "gw1_match2", homeScore: 1, awayScore: 0, points: 3, timestamp: "2025-09-07T11:40:00Z" },
                    { matchId: "gw1_match3", homeScore: 1, awayScore: 2, points: 3, timestamp: "2025-09-07T12:10:00Z" },
                    { matchId: "gw1_match4", homeScore: 0, awayScore: 2, points: 3, timestamp: "2025-09-07T12:25:00Z" },
                    { matchId: "gw1_match5", homeScore: 4, awayScore: 0, points: 3, timestamp: "2025-09-06T12:40:00Z" },
                    { matchId: "gw1_match6", homeScore: 1, awayScore: 3, points: 0, timestamp: "2025-09-05T16:55:00Z" }
                ],
                gameweek_2: [
                    { matchId: "gw2_match1", homeScore: 2, awayScore: 0, points: 3, timestamp: "2025-09-14T12:10:00Z" },
                    { matchId: "gw2_match2", homeScore: 4, awayScore: 4, points: 3, timestamp: "2025-09-14T12:25:00Z" },
                    { matchId: "gw2_match3", homeScore: 0, awayScore: 1, points: 3, timestamp: "2025-09-14T12:40:00Z" },
                    { matchId: "gw2_match4", homeScore: 1, awayScore: 2, points: 0, timestamp: "2025-09-14T12:55:00Z" },
                    { matchId: "gw2_match5", homeScore: 2, awayScore: 2, points: 0, timestamp: "2025-09-14T13:10:00Z" },
                    { matchId: "gw2_match6", homeScore: 3, awayScore: 0, points: 1, timestamp: "2025-09-13T14:40:00Z" }
                ],
                gameweek_3: [
                    { matchId: "gw3_match1", homeScore: 2, awayScore: 1, points: 0, timestamp: "2025-09-21T11:10:00Z" },
                    { matchId: "gw3_match2", homeScore: 2, awayScore: 0, points: 3, timestamp: "2025-09-21T11:25:00Z" },
                    { matchId: "gw3_match3", homeScore: 1, awayScore: 3, points: 3, timestamp: "2025-09-21T11:40:00Z" },
                    { matchId: "gw3_match4", homeScore: 1, awayScore: 1, points: 1, timestamp: "2025-09-21T11:55:00Z" },
                    { matchId: "gw3_match5", homeScore: 3, awayScore: 0, points: 1, timestamp: "2025-09-20T13:10:00Z" },
                    { matchId: "gw3_match6", homeScore: 0, awayScore: 1, points: 2, timestamp: "2025-09-19T17:10:00Z" }
                ]
            }
        }
    ]
};

// CSS variables
const cssVars = {
    primaryColor: '#667eea',
    secondaryColor: '#764ba2',
    textColor: '#333',
    textLight: '#666',
    cardBg: 'white',
    borderColor: '#ddd',
    errorColor: '#e74c3c',
    warningColor: '#ff9800'
};

// Global variables
let currentScreen = 'predict';
let fixtures = [];
let currentGameweek = 4;
let currentUser = {
    username: null,
    totalScore: 0,
    gameweekScores: {},
    leagueCode: null,
    predictions: {}
};
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

function selectPlayer(playerName) {
    const validPlayers = ['Matt', 'Kerry', 'Libby'];
    if (!validPlayers.includes(playerName)) {
        showToast('Invalid player selection!', 'error');
        return;
    }
    
    currentUser.username = playerName;
    
    // Load their existing data from league if available
    if (leagueData) {
        const playerData = leagueData.participants.find(p => p.username === playerName);
        if (playerData) {
            currentUser.totalScore = playerData.totalScore;
            currentUser.gameweekScores = playerData.gameweekScores;
            currentUser.predictions = playerData.predictions || {};
        }
    }
    
    currentUser.leagueCode = 'GOAL24';
    saveUserData();
    updateUserDisplay();
    closeModal('welcome-modal');
    loadFixturesData();
    loadLeagueData();
    showToast(`Welcome back, ${playerName}! 🎯`, 'success');
}

function updateUserDisplay() {
    document.getElementById('username-display').textContent = currentUser.username;
    document.getElementById('user-total-score').textContent = currentUser.totalScore + ' pts';
}

// Screen Navigation
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenName + '-screen').classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
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
    fetch('../data/fixtures-results.json')
        .then(response => response.json())
        .then(data => {
            allFixturesData = data;
            fixturesData = data.gameweeks;
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
    leagueData = HARDCODED_LEAGUE_DATA;
    currentUser.leagueCode = leagueData.leagueCode;
    
    const userInLeague = leagueData.participants.find(p => p.username === currentUser.username);
    if (userInLeague) {
        currentUser.totalScore = userInLeague.totalScore;
        currentUser.gameweekScores = userInLeague.gameweekScores;
        updateUserDisplay();
    }
    loadLeagueScreen();
}

// Mobile-Friendly Score Prediction Functions
function createScoreSpinner(matchId, team, isHome, currentScore = 0, isExpired = false) {
    const spinnerId = `${matchId}-${sanitizeHtml(team)}-${isHome ? 'home' : 'away'}`;
    
    return `
        <div class="score-spinner ${isExpired ? 'disabled' : ''}" 
             data-match-id="${sanitizeHtml(matchId)}" 
             data-team="${sanitizeHtml(team)}" 
             data-is-home="${isHome}" 
             id="spinner-${spinnerId}">
            <button class="spinner-button" 
                    onclick="adjustScore('${sanitizeHtml(matchId)}', '${sanitizeHtml(team)}', ${isHome}, 1)" 
                    ${isExpired ? 'disabled' : ''}>
                ▲
            </button>
            <div class="score-display" 
                 id="score-${spinnerId}"
                 ontouchstart="handleTouchStart(event, '${sanitizeHtml(matchId)}', '${sanitizeHtml(team)}', ${isHome})"
                 ontouchmove="handleTouchMove(event)"
                 ontouchend="handleTouchEnd(event)">
                ${currentScore}
            </div>
            <button class="spinner-button" 
                    onclick="adjustScore('${sanitizeHtml(matchId)}', '${sanitizeHtml(team)}', ${isHome}, -1)" 
                    ${isExpired ? 'disabled' : ''}>
                ▼
            </button>
        </div>
    `;
}

function adjustScore(matchId, team, isHome, delta) {
    if (isMatchExpired(matchId)) {
        showToast('Cannot change prediction - deadline has passed!', 'error');
        return;
    }
    
    const spinnerId = `${matchId}-${sanitizeHtml(team)}-${isHome ? 'home' : 'away'}`;
    const scoreElement = document.getElementById(`score-${spinnerId}`);
    
    if (!scoreElement) return;
    
    let currentScore = parseInt(scoreElement.textContent) || 0;
    let newScore = Math.max(0, Math.min(10, currentScore + delta));
    
    if (newScore !== currentScore) {
        scoreElement.textContent = newScore;
        
        scoreElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            scoreElement.style.transform = 'scale(1)';
        }, 150);
        
        savePrediction(matchId);
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
}

// Touch gesture handling for swipe-to-change scores
let touchStartY = 0;
let touchStartScore = 0;
let currentTouchMatch = null;
let currentTouchTeam = null;
let currentTouchIsHome = null;
let isDragging = false;

function handleTouchStart(event, matchId, team, isHome) {
    if (isMatchExpired(matchId)) return;
    
    event.preventDefault();
    
    const touch = event.touches[0];
    touchStartY = touch.clientY;
    
    currentTouchMatch = matchId;
    currentTouchTeam = team;
    currentTouchIsHome = isHome;
    
    const spinnerId = `${matchId}-${sanitizeHtml(team)}-${isHome ? 'home' : 'away'}`;
    const scoreElement = document.getElementById(`score-${spinnerId}`);
    touchStartScore = parseInt(scoreElement.textContent) || 0;
    
    isDragging = true;
    scoreElement.parentElement.classList.add('dragging');
}

function handleTouchMove(event) {
    if (!isDragging || !currentTouchMatch) return;
    
    event.preventDefault();
    
    const touch = event.touches[0];
    const deltaY = touchStartY - touch.clientY;
    const sensitivity = 30;
    
    let scoreDelta = Math.floor(deltaY / sensitivity);
    let newScore = Math.max(0, Math.min(10, touchStartScore + scoreDelta));
    
    const spinnerId = `${currentTouchMatch}-${sanitizeHtml(currentTouchTeam)}-${currentTouchIsHome ? 'home' : 'away'}`;
    const scoreElement = document.getElementById(`score-${spinnerId}`);
    
    if (scoreElement && parseInt(scoreElement.textContent) !== newScore) {
        scoreElement.textContent = newScore;
        
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }
    }
}

function handleTouchEnd(event) {
    if (!isDragging || !currentTouchMatch) return;
    
    event.preventDefault();
    
    const spinnerId = `${currentTouchMatch}-${sanitizeHtml(currentTouchTeam)}-${currentTouchIsHome ? 'home' : 'away'}`;
    const scoreElement = document.getElementById(`score-${spinnerId}`);
    
    if (scoreElement) {
        scoreElement.parentElement.classList.remove('dragging');
        
        savePrediction(currentTouchMatch);
        
        scoreElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            scoreElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    isDragging = false;
    currentTouchMatch = null;
    currentTouchTeam = null;
    currentTouchIsHome = null;
    touchStartY = 0;
    touchStartScore = 0;
}

function isMatchExpired(matchId) {
    const match = findMatchById(matchId);
    if (!match) return false;
    
    const matchDate = new Date(match.kickoffTime);
    const oneHourBefore = new Date(matchDate.getTime() - (60 * 60 * 1000));
    const now = new Date();
    
    return now > oneHourBefore;
}

function findMatchById(matchId) {
    if (!fixturesData) return null;
    
    for (const gameweek of fixturesData) {
        for (const match of gameweek.matches) {
            if (match.id === matchId) {
                return match;
            }
        }
    }
    return null;
}

function getTimeUntilDeadline(matchId) {
    const match = findMatchById(matchId);
    if (!match) return null;
    
    const matchDate = new Date(match.kickoffTime);
    const deadline = new Date(matchDate.getTime() - (60 * 60 * 1000));
    const now = new Date();
    
    if (now > deadline) return null;
    
    const timeDiff = deadline.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `${hours}h ${minutes}m until deadline`;
    } else {
        return `${minutes}m until deadline`;
    }
}

function savePrediction(matchId) {
    const match = findMatchById(matchId);
    if (!match) return;
    
    if (isMatchExpired(matchId)) {
        showToast('Cannot save prediction - deadline has passed!', 'error');
        return;
    }
    
    const homeSpinnerId = `score-${matchId}-${sanitizeHtml(match.homeTeam)}-home`;
    const awaySpinnerId = `score-${matchId}-${sanitizeHtml(match.awayTeam)}-away`;
    
    const homeElement = document.getElementById(homeSpinnerId);
    const awayElement = document.getElementById(awaySpinnerId);
    
    if (!homeElement || !awayElement) return;
    
    const homeScore = parseInt(homeElement.textContent) || 0;
    const awayScore = parseInt(awayElement.textContent) || 0;
    
    if (!currentUser.predictions) {
        currentUser.predictions = {};
    }
    
    currentUser.predictions[matchId] = {
        homeScore: homeScore,
        awayScore: awayScore,
        timestamp: new Date().toISOString()
    };
    
    saveUserData();
    
    // Update the saved indicator
    const matchBox = document.querySelector(`[data-match-id="${matchId}"] .match-actions`);
    if (matchBox) {
        const existingIndicator = matchBox.querySelector('.saved-indicator');
        if (!existingIndicator) {
            const indicator = document.createElement('div');
            indicator.className = 'saved-indicator';
            indicator.innerHTML = '✓ Saved';
            matchBox.appendChild(indicator);
        }
    }
    
    // Animate the save button
    const saveBtn = document.querySelector(`button[onclick="savePrediction('${matchId}')"]`);
    if (saveBtn) {
        saveBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            saveBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    showToast(`💾 Prediction saved: ${match.homeTeam} ${homeScore} - ${awayScore} ${match.awayTeam}`, 'success');
}

// Screen Loading Functions  
function loadPredictionsScreen() {
    document.getElementById('current-gameweek-info').innerHTML = 
        `<p><strong>Gameweek ${currentGameweek}</strong> - Make your predictions before the deadline!</p>`;
    
    const container = document.getElementById('predictions-container');
    if (!container || !fixturesData || currentGameweek > fixturesData.length) {
        container.innerHTML = '<p>No fixtures available for predictions.</p>';
        return;
    }
    
    const gameweek = fixturesData[currentGameweek - 1];
    let html = `<h3>Gameweek ${currentGameweek} Predictions</h3>`;
    
    gameweek.matches.forEach(match => {
        const isExpired = isMatchExpired(match.id);
        const deadlineText = getTimeUntilDeadline(match.id);
        
        const existingPrediction = currentUser.predictions && currentUser.predictions[match.id];
        const homeScore = existingPrediction ? existingPrediction.homeScore : 0;
        const awayScore = existingPrediction ? existingPrediction.awayScore : 0;
        
        const cardClass = isExpired ? 'deadline-expired' : (deadlineText && deadlineText.includes('m') && !deadlineText.includes('h') ? 'deadline-soon' : '');
        
        html += `
            <div class="match-prediction-box ${cardClass}">
                <div class="match-header">
                    <div class="match-title">
                        <strong>${sanitizeHtml(match.homeTeam)} vs ${sanitizeHtml(match.awayTeam)}</strong>
                        <div class="match-date">${formatMatchDate(match.kickoffTime)}</div>
                    </div>
                    ${deadlineText ? `<div class="match-deadline">${sanitizeHtml(deadlineText)}</div>` : ''}
                    ${isExpired ? '<div class="match-deadline expired">⏰ Deadline Passed</div>' : ''}
                </div>
                
                <div class="score-prediction-area">
                    <div class="score-input-container">
                        <div class="team-section">
                            <div class="team-name">${sanitizeHtml(match.homeTeam)}</div>
                            ${createScoreSpinner(match.id, match.homeTeam, true, homeScore, isExpired)}
                        </div>
                        <div class="vs-separator">VS</div>
                        <div class="team-section">
                            <div class="team-name">${sanitizeHtml(match.awayTeam)}</div>
                            ${createScoreSpinner(match.id, match.awayTeam, false, awayScore, isExpired)}
                        </div>
                    </div>
                    
                    <div class="match-actions">
                        <button class="save-prediction-btn" 
                                onclick="savePrediction('${sanitizeHtml(match.id)}')" 
                                ${isExpired ? 'disabled' : ''}>
                            💾 Save Prediction
                        </button>
                        ${existingPrediction ? '<div class="saved-indicator">✓ Saved</div>' : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function formatMatchDate(datetime) {
    const date = new Date(datetime);
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return date.toLocaleDateString('en-GB', options);
}

function loadLeagueScreen() {
    const infoContainer = document.getElementById('league-info');
    const tableContainer = document.getElementById('league-table-body');
    const badgesContainer = document.getElementById('player-badges');
    
    if (!leagueData) {
        infoContainer.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Loading WSL2 Score Predictor League...</p>
            </div>
        `;
        tableContainer.innerHTML = '';
        badgesContainer.innerHTML = '';
        return;
    }
    
    infoContainer.innerHTML = `
        <div class="league-code-display">
            <div class="league-code">${sanitizeHtml(leagueData.leagueCode)}</div>
            <div>WSL2 Score Predictor League</div>
        </div>
        <p><strong>${sanitizeHtml(leagueData.leagueName)}</strong></p>
        <p>${leagueData.participants.length} participants</p>
    `;
    
    const sortedParticipants = [...leagueData.participants].sort((a, b) => b.totalScore - a.totalScore);
    
    let tableHTML = '';
    sortedParticipants.forEach((participant, index) => {
        const isCurrentUser = participant.username === currentUser.username;
        const lastGWScore = Object.values(participant.gameweekScores).pop() || 0;
        const badge = getPlayerBadge(participant, {}, index === 0);
        
        tableHTML += `
            <tr class="${isCurrentUser ? 'user-row' : ''}">
                <td class="position">${index + 1}</td>
                <td>${sanitizeHtml(participant.username)}${isCurrentUser ? ' (You)' : ''}</td>
                <td><strong>${participant.totalScore}</strong></td>
                <td>${lastGWScore}</td>
                <td>${badge}</td>
            </tr>
        `;
    });
    
    tableContainer.innerHTML = tableHTML;
    
    let achievementsHTML = '';
    const achievements = getPlayerAchievements(leagueData.participants);
    achievements.forEach(achievement => {
        achievementsHTML += `
            <div class="achievement-card">
                <div class="achievement-icon">${sanitizeHtml(achievement.icon)}</div>
                <div class="achievement-text">
                    <div class="title">${sanitizeHtml(achievement.title)}</div>
                    <div class="description">${sanitizeHtml(achievement.description)}</div>
                </div>
            </div>
        `;
    });
    
    badgesContainer.innerHTML = achievementsHTML;
}

function loadScoresScreen() {
    document.getElementById('total-score-display').textContent = currentUser.totalScore;
    document.getElementById('gameweek-score').textContent = 
        Object.values(currentUser.gameweekScores).pop() || 0;
    
    if (leagueData) {
        const sortedParticipants = [...leagueData.participants].sort((a, b) => b.totalScore - a.totalScore);
        const position = sortedParticipants.findIndex(p => p.username === currentUser.username) + 1;
        document.getElementById('current-position').textContent = position > 0 ? position : '-';
    } else {
        document.getElementById('current-position').textContent = '-';
    }
    
    const weeklyContainer = document.getElementById('weekly-scores');
    if (Object.keys(currentUser.gameweekScores).length === 0) {
        weeklyContainer.innerHTML = '<div class="empty-state"><p>No scores yet. Make some predictions!</p></div>';
        return;
    }
    
    let weeklyHTML = '<h4>📈 Weekly Breakdown</h4>';
    
    Object.entries(currentUser.gameweekScores).forEach(([gw, score]) => {
        weeklyHTML += `
            <div class="match-card">
                <div class="match-info">
                    <div class="teams">Gameweek ${gw}</div>
                    <div class="match-time">Predictions completed</div>
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
    const upcomingGameweeks = fixturesData.filter(gw => gw.gameweek >= currentGameweek);
    
    if (upcomingGameweeks.length === 0) {
        html = '<div class="empty-state"><p>No upcoming fixtures available.</p></div>';
    } else {
        upcomingGameweeks.forEach(gameweek => {
            const upcomingMatches = gameweek.matches.filter(m => m.status === 'upcoming');
            if (upcomingMatches.length > 0) {
                html += `<h4>Gameweek ${gameweek.gameweek}</h4>`;
                upcomingMatches.forEach(match => {
                    const timeToKickoff = getTimeToKickoff(match.kickoffTime);
                    html += `
                        <div class="match-card upcoming">
                            <div class="match-info">
                                <div class="teams">${sanitizeHtml(match.homeTeam)} vs ${sanitizeHtml(match.awayTeam)}</div>
                                <div class="match-time">${formatMatchTime(match.kickoffTime)}</div>
                            </div>
                            <div class="prediction-inputs">
                                <span class="locked-label">${sanitizeHtml(timeToKickoff)}</span>
                            </div>
                        </div>
                    `;
                });
            }
        });
    }
    
    container.innerHTML = html;
}

// Utility Functions
function sanitizeHtml(str) {
    if (typeof str !== 'string') return str;
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function getCurrentGameweek() {
    const currentDate = new Date('2025-09-28');
    
    if (currentDate < new Date('2025-09-05')) return 1;
    if (currentDate < new Date('2025-09-12')) return 1;
    if (currentDate < new Date('2025-09-19')) return 2;
    if (currentDate < new Date('2025-09-27')) return 3;
    if (currentDate < new Date('2025-10-05')) return 4;
    if (currentDate < new Date('2025-10-12')) return 5;
    return 6;
}

function getPlayerBadge(participant, stats, isLeader) {
    if (isLeader) {
        return '<span class="player-badge badge-leader">👑 Leader</span>';
    }
    
    const badges = ['🎯 Accurate', '🚀 Rising', '🎲 Wildcard', '💪 Consistent'];
    const randomBadge = badges[Math.floor(Math.random() * badges.length)];
    return `<span class="player-badge badge-accurate">${randomBadge}</span>`;
}

function getPlayerAchievements(participants) {
    const achievements = [];
    
    if (participants.length >= 2) {
        const leader = participants.reduce((max, p) => p.totalScore > max.totalScore ? p : max);
        achievements.push({
            icon: '👑',
            title: `${leader.username} is leading!`,
            description: `Currently in 1st place with ${leader.totalScore} points`
        });
    }
    
    achievements.push({
        icon: '🎯',
        title: 'Most Accurate Predictor',
        description: 'Kerry has the most exact score predictions this season!'
    });
    
    achievements.push({
        icon: '🚀',
        title: 'On Fire!',
        description: 'Libby scored 15+ points in the last gameweek!'
    });
    
    achievements.push({
        icon: '🎲',
        title: 'Wildcard Pick',
        description: 'Most unpredictable predictions this season'
    });
    
    return achievements;
}

function getTimeToKickoff(kickoffTime) {
    const now = new Date();
    const kickoff = new Date(kickoffTime);
    const timeLeft = kickoff - now;
    
    if (timeLeft <= 0) return 'STARTED';
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) {
        return `${days}d ${hours}h`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else {
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        return `${minutes}m`;
    }
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