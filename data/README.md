# WSL2 Score Predictor - Data Files

This directory contains the JSON fixture and league data files for the WSL2 Score Predictor application, sourced from real WSL2 (Women's Super League 2) data.

## File Structure

```
data/
├── fixtures-results.json    # Main fixtures and results data
├── teams.json              # Team information and metadata  
├── leagues/                # League-specific data files
│   ├── GOAL24.json        # Sample league: Friends Prediction League
│   └── WSL123.json        # Sample league: WSL2 Enthusiasts
└── README.md              # This file
```

## Data Formats

### fixtures-results.json
Contains all match fixtures, results, and gameweek information for the 2025-26 WSL2 season:
- Season information (2025-26)
- Gameweeks with real match details
- Match status (upcoming/finished)
- Actual scores from completed matches
- Real WSL2 team list

### leagues/[LEAGUECODE].json  
Individual league files containing:
- League metadata (code, name, created date)
- Participant information with real predictions
- Scores calculated based on actual WSL2 results
- Gameweek breakdowns

### teams.json
Real WSL2 team reference data including:
- Team IDs and names (Birmingham W, Bristol City W, etc.)
- Short names for display
- Badge/logo references
- Team colors

## Real Data Sources

The fixture data is scraped from official WSL2 sources:
- **Fixtures**: https://www.flashscore.in/football/england/wsl-2/fixtures/
- **Results**: https://www.flashscore.in/football/england/wsl-2/results/

### Current WSL2 Teams (2025-26 Season):
- Birmingham W
- Bristol City W  
- Charlton W
- Crystal Palace W
- Durham W
- Ipswich W
- Newcastle Utd W
- Nottingham W
- Portsmouth W
- Sheffield Utd W
- Southampton W
- Sunderland W

## Usage Notes

1. **Match Status**: 
   - `"upcoming"` - Match not yet played
   - `"finished"` - Match completed with actual scores
   - `"live"` - Match in progress (future implementation)

2. **League Codes**: 
   - 6-character alphanumeric codes (e.g., "GOAL24", "WSL123")
   - Used for users to join specific leagues

3. **Scoring System**:
   - Exact score match: 10 points
   - Correct result: 5 points  
   - Correct goal difference: 3 points
   - One team score correct: 2 points
   - Wrong prediction: 0 points

4. **Time Format**: All timestamps use ISO 8601 format in UTC

## Completed Results (as of September 28, 2025)

**Round 1:**
- Birmingham W 5-1 Bristol City W
- Charlton W 1-0 Crystal Palace W
- Nottingham W 1-2 Newcastle Utd W
- Portsmouth W 0-2 Durham W
- Southampton W 4-0 Ipswich W
- Sheffield Utd W 0-4 Sunderland W

**Round 2:**
- Bristol City W 2-0 Portsmouth W
- Crystal Palace W 4-4 Southampton W
- Ipswich W 0-1 Nottingham W
- Newcastle Utd W 1-1 Sheffield Utd W
- Sunderland W 1-1 Birmingham W
- Durham W 1-2 Charlton W

**Round 3:**
- Birmingham W 4-2 Newcastle Utd W
- Charlton W 0-0 Ipswich W
- Nottingham W 1-2 Crystal Palace W
- Portsmouth W 1-0 Sheffield Utd W
- Southampton W 0-1 Bristol City W
- Sunderland W 2-1 Durham W

**Round 4 (Partial):**
- Bristol City W 1-2 Nottingham W
- Sheffield Utd W 1-2 Birmingham W

## Updating Data

Data is regularly updated by scraping the official Flashscore WSL2 pages. To manually update:
1. Modify `fixtures-results.json` with new gameweeks or results
2. Update the `lastUpdated` timestamp
3. Ensure match IDs follow the format `gw{N}_match{N}`

League data is automatically updated by the application when users submit predictions and scores are calculated based on real WSL2 results.