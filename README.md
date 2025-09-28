# WSL2 Score Predictor

A web application for predicting Women's Super League (WSL2) match scores with three hardcoded players: Matt, Kerry, and Libby. The app includes automated data scraping from Flashscore and secure player prediction tracking.

🌐 **Live App**: https://mattbance.github.io/WSL2/

## Features

- **Real WSL2 Data**: Fixtures and results scraped from Flashscore
- **Three Players**: Matt, Kerry, and Libby compete with score predictions
- **Secure**: XSS protection with HTML sanitization throughout
- **Responsive**: Mobile-friendly interface with gradient styling
- **Automated Updates**: Python scraper for latest match data

## Project Structure

```
WSL2/
├── app/                    # Web application files
│   ├── index.html          # Main application interface
│   ├── script.js           # Application logic with XSS protection
│   └── styles.css          # Responsive CSS styling
├── data/                   # JSON data files
│   ├── fixtures-results.json   # Match fixtures and results
│   └── teams.json             # WSL2 team information
├── scripts/                # Data scraping utilities
│   ├── scrape_wsl2_data.py    # Flashscore scraper
│   ├── requirements.txt       # Python dependencies
│   ├── update_wsl2_data.bat   # Windows batch runner
│   └── SCRAPER_README.md      # Scraper documentation
└── docs/
    └── spec.md               # Project specification
```

## Quick Start

### Running the Web App
1. Open `app/index.html` in a web browser
2. Select a player (Matt, Kerry, or Libby)
3. Navigate between Predict, League, My Scores, and Fixtures screens

### Updating Data (Optional)
1. Install Python dependencies:
   ```bash
   cd scripts
   pip install -r requirements.txt
   ```
2. Run the scraper:
   ```bash
   python scrape_wsl2_data.py
   ```
   Or on Windows, double-click `update_wsl2_data.bat`

## Player System

The app features three hardcoded players:
- **Matt**: Consistently strong predictions
- **Kerry**: Variable performance with some high scores  
- **Libby**: Steady performer with good accuracy

All players start with 35 points and have realistic prediction patterns for the first three gameweeks. Player data is embedded directly in the application code for simplicity and performance.

## Security Features

- HTML sanitization prevents XSS attacks
- Safe DOM manipulation throughout
- Input validation on all user data
- Secure data storage in localStorage

## Data Sources

- **Primary**: Flashscore WSL2 fixtures and results
- **Teams**: 12 WSL2 teams for 2025-26 season
- **Format**: JSON with gameweek organization
- **Updates**: Automated via Python scraper

## Development

Built with vanilla HTML, CSS, and JavaScript for simplicity and performance. No external frameworks required for the web application.

For data scraping, Python with BeautifulSoup handles automated updates from Flashscore.