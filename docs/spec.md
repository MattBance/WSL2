Score Predictor - WSL2 Football League
=====================================

A secure, mobile-friendly web application that allows three hardcoded players (Matt, Kerry, and Libby) to predict scores for the WSL2 football league in England. Features real data from Flashscore with automated updates.

## Overview
The app tracks predictions for three players across the WSL2 season. Each player makes score predictions and earns points based on accuracy. The system includes comprehensive security measures and automated data scraping capabilities.

**Live Application**: https://mattbance.github.io/WSL2/

## Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6)
- **Backend**: Python scraper with BeautifulSoup
- **Data Source**: Flashscore WSL2 fixtures and results
- **Security**: XSS protection with HTML sanitization
- **Hosting**: GitHub Pages
- **Structure**: Modular app/ and scripts/ organization

## Current Implementation

### Player System
- **Three Hardcoded Players**: Matt, Kerry, and Libby
- **Starting Points**: All players begin with 35 points
- **Prediction Data**: Realistic patterns for gameweeks 1-3
- **Player Selection**: Modal interface for switching between players

### Security Features
- **XSS Protection**: sanitizeHtml() function prevents injection attacks
- **Safe DOM**: All user data sanitized before display
- **Input Validation**: Secure handling of all form inputs
- **localStorage Safety**: Validated data storage and retrieval

### Data Integration
- **Real WSL2 Data**: 12 teams from 2025-26 season
- **Flashscore Source**: Automated scraping for fixtures/results
- **JSON Structure**: Organized by gameweeks with match details
- **Python Automation**: scripts/scrape_wsl2_data.py for updates

## 1. Scoring System Details

### Point Calculation Rules:
- **Exact Score Match**: 10 points (e.g., predicted 2-1, actual 2-1)
- **Correct Result**: 5 points (e.g., predicted 2-1, actual 3-0 - both home wins)
- **Correct Goal Difference**: 3 points (e.g., predicted 2-1, actual 3-2 - both +1 difference)
- **One Team Score Correct**: 2 points (e.g., predicted 2-1, actual 2-0)
- **Wrong Prediction**: 0 points

### Weekly Scoring:
- Total points = sum of all match predictions for that gameweek
- Running total maintained across all gameweeks
- Bonus points for perfect gameweek (all exact scores): +20 points

## 2. User Management

### User Identification:
- No registration required
- User identified by unique username (stored in localStorage)
- First-time visitors prompted to enter username
- Username stored persistently in browser
- League code system for joining competitions

### Data Storage:
- User data stored in browser localStorage
- League data shared via GitHub Pages JSON files
- Data structure:
  ```javascript
  // Local user data
  {
    username: "string",
    leagueCode: "string", // 6-character code to join leagues
    predictions: {
      gameweek_1: [{matchId, homeScore, awayScore, timestamp}],
      gameweek_2: [...]
    },
    totalScore: number,
    gameweekScores: {gameweek_1: points, gameweek_2: points}
  }
  
  // Shared league data (JSON file)
  {
    leagueCode: "ABC123",
    leagueName: "Friends League",
    participants: [
      {username: "user1", totalScore: 45, lastUpdated: "timestamp"},
      {username: "user2", totalScore: 38, lastUpdated: "timestamp"}
    ]
  }
  ```

## 3. Data Handling

### Data Sources:
- **Fixtures**: https://www.flashscore.in/football/england/wsl-2/fixtures/
- **Results**: https://www.flashscore.in/football/england/wsl-2/results/

### Data Structure:
```javascript
// Match Object
{
  id: "unique_match_id",
  gameweek: number,
  homeTeam: "string",
  awayTeam: "string",
  kickoffTime: "ISO_datetime",
  homeScore: number || null,
  awayScore: number || null,
  status: "upcoming|live|finished"
}
```

### Data Fetching Strategy:
- Manual data entry for MVP (due to potential CORS issues)
- JSON file updated weekly with fixtures and results
- Future enhancement: Web scraping service or official API

## 4. League Management

### Personal Scoring:
- Track individual user's total points
- Weekly breakdown of scores
- Historical performance chart

### Multi-User Competition (MVP Feature):
- League creation with 6-character codes (e.g., "GOAL24")
- Users join leagues by entering league code
- Real-time league table showing all participants
- Share league code via URL/text
- Automatic score synchronization
- League rankings with position changes

## 5. Prediction Timing & Validation

### Deadline Rules:
- Predictions locked 1 hour before kickoff
- Use browser's local time for validation
- Visual countdown timer for upcoming deadline
- Past deadlines show "LOCKED" status

### Time Zone Handling:
- All match times stored in UTC
- Display times in user's local timezone
- Automatic daylight saving time adjustment

## 6. UI/UX Specifications

### Mobile-First Design:
- Responsive breakpoints: 320px, 768px, 1024px
- Touch-friendly buttons (minimum 44px)
- Swipe gestures for navigation

### Key Screens:
1. **Home/Predictions Screen**
   - Current gameweek fixtures
   - Score input fields (0-9 dropdown)
   - Submit predictions button
   - Countdown to next deadline

2. **League Table Screen**
   - Current league standings
   - User's position highlighted
   - Points and position changes
   - League code display/sharing

3. **My Scores Screen**
   - Total points display
   - Weekly breakdown
   - Performance chart

4. **Fixtures & Results Screen**
   - Upcoming fixtures
   - Recent results
   - Historical gameweeks

### Visual Design:
- WSL2 color scheme (purple/white theme)
- Card-based layout for matches
- Progress indicators for prediction accuracy
- Toast notifications for actions

## 7. Technical Implementation

### Architecture:
```
index.html (single file containing)
├── HTML structure
├── CSS styles (embedded)
├── JavaScript modules:
    ├── Data management
    ├── UI rendering
    ├── Score calculation
    ├── Local storage handling
    ├── League data synchronization
    ├── Multi-user score aggregation
    └── Timer/validation logic
```

### Data Synchronization:
- User scores automatically uploaded to league JSON file
- Periodic polling for league updates (every 30 seconds)
- Optimistic UI updates with error handling
- GitHub Pages hosting for shared league data

### Browser Compatibility:
- Modern browsers (ES6+ support)
- Chrome 60+, Firefox 60+, Safari 12+
- iOS Safari, Chrome Mobile

### Performance Requirements:
- Page load < 2 seconds
- Offline functionality for viewing past predictions
- Local data backup/export feature

### Error Handling:
- Graceful degradation for network issues
- Input validation and sanitization
- Data corruption recovery

## 8. Development Phases

### Phase 1 (MVP):
- Basic prediction interface
- Manual data updates
- Local scoring system
- Multi-user league functionality
- League creation and joining
- Real-time league table
- Score synchronization

### Phase 2 (Enhancements):
- Automated data fetching
- Better UI/animations
- Export/backup functionality
- Performance optimizations
- Push notifications for deadlines

### Phase 3 (Advanced Features):
- Multiple league participation
- Private/public league options
- Advanced statistics and analytics
- Historical head-to-head comparisons


This comprehensive specification provides all the necessary details to build a fully functional WSL2 score predictor web app.