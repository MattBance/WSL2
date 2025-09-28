#!/usr/bin/env python3
"""
WSL2 Flashscore Data Scraper
Scrapes fixture and results data from Flashscore and updates fixtures-results.json
"""

import requests
import json
import re
from datetime import datetime, timezone
from bs4 import BeautifulSoup
import time

# Configuration
FIXTURES_URL = "https://www.flashscore.in/football/england/wsl-2/fixtures/"
RESULTS_URL = "https://www.flashscore.in/football/england/wsl-2/results/"
JSON_FILE_PATH = "../data/fixtures-results.json"

# Headers to mimic a browser request
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
}

def safe_request(url, max_retries=3):
    """Make a safe HTTP request with retries"""
    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=HEADERS, timeout=10)
            response.raise_for_status()
            return response
        except requests.RequestException as e:
            print(f"Attempt {attempt + 1} failed for {url}: {e}")
            if attempt < max_retries - 1:
                time.sleep(2)
            else:
                raise
    return None

def normalize_team_name(team_name):
    """Normalize team names to match our existing data format"""
    # Remove extra whitespace and common suffixes
    team_name = team_name.strip()
    
    # Map Flashscore team names to our format
    name_mappings = {
        'Birmingham City W': 'Birmingham W',
        'Bristol City W': 'Bristol City W',
        'Charlton Athletic W': 'Charlton W',
        'Crystal Palace W': 'Crystal Palace W',
        'Forest Green Rovers W': 'Nottingham W',  # Assuming this is the mapping
        'Newcastle United W': 'Newcastle Utd W',
        'Portsmouth W': 'Portsmouth W',
        'Durham WFC': 'Durham W',
        'Southampton W': 'Southampton W',
        'Ipswich Town W': 'Ipswich W',
        'Sheffield United W': 'Sheffield Utd W',
        'Sunderland W': 'Sunderland W'
    }
    
    return name_mappings.get(team_name, team_name)

def parse_flashscore_date(date_str):
    """Parse Flashscore date format to ISO format"""
    try:
        # Flashscore typically uses formats like "28.09." or "28.09.2025"
        if '.' in date_str:
            parts = date_str.split('.')
            day = parts[0].zfill(2)
            month = parts[1].zfill(2)
            year = parts[2] if len(parts) > 2 and parts[2] else "2025"
            return f"2025-{month}-{day}"
    except:
        pass
    
    # Fallback to current date format
    return datetime.now().strftime("%Y-%m-%d")

def scrape_fixtures():
    """Scrape upcoming fixtures from Flashscore"""
    print("Scraping fixtures from Flashscore...")
    
    try:
        response = safe_request(FIXTURES_URL)
        if not response:
            return []
            
        soup = BeautifulSoup(response.content, 'html.parser')
        fixtures = []
        
        # Flashscore uses dynamic loading, so we'll look for the basic structure
        # This may need adjustment based on actual Flashscore HTML structure
        matches = soup.find_all('div', class_=['event__match', 'match'])
        
        for i, match in enumerate(matches[:20]):  # Limit to first 20 matches
            try:
                # Extract team names
                teams = match.find_all(['span', 'div'], class_=['team', 'participant'])
                if len(teams) >= 2:
                    home_team = normalize_team_name(teams[0].get_text(strip=True))
                    away_team = normalize_team_name(teams[1].get_text(strip=True))
                    
                    # Extract date/time (this will need adjustment based on actual HTML)
                    date_elem = match.find(['span', 'div'], class_=['time', 'date'])
                    kickoff_time = "2025-10-01T13:00:00Z"  # Default fallback
                    
                    if date_elem:
                        date_text = date_elem.get_text(strip=True)
                        # Parse and convert to ISO format
                        try:
                            kickoff_time = parse_flashscore_date(date_text) + "T13:00:00Z"
                        except:
                            pass
                    
                    fixture = {
                        "id": f"gw{(i//6)+4}_match{(i%6)+1}",  # Generate ID starting from gameweek 4
                        "homeTeam": home_team,
                        "awayTeam": away_team,
                        "kickoffTime": kickoff_time,
                        "homeScore": None,
                        "awayScore": None,
                        "status": "upcoming"
                    }
                    fixtures.append(fixture)
                    
            except Exception as e:
                print(f"Error parsing fixture {i}: {e}")
                continue
        
        print(f"Found {len(fixtures)} fixtures")
        return fixtures
        
    except Exception as e:
        print(f"Error scraping fixtures: {e}")
        return []

def scrape_results():
    """Scrape completed results from Flashscore"""
    print("Scraping results from Flashscore...")
    
    try:
        response = safe_request(RESULTS_URL)
        if not response:
            return []
            
        soup = BeautifulSoup(response.content, 'html.parser')
        results = []
        
        # Look for completed matches
        matches = soup.find_all('div', class_=['event__match', 'match'])
        
        for i, match in enumerate(matches[:30]):  # Get more results
            try:
                # Extract team names
                teams = match.find_all(['span', 'div'], class_=['team', 'participant'])
                if len(teams) >= 2:
                    home_team = normalize_team_name(teams[0].get_text(strip=True))
                    away_team = normalize_team_name(teams[1].get_text(strip=True))
                    
                    # Extract scores
                    score_elem = match.find(['span', 'div'], class_=['score', 'result'])
                    home_score = 0
                    away_score = 0
                    
                    if score_elem:
                        score_text = score_elem.get_text(strip=True)
                        if ':' in score_text or '-' in score_text:
                            scores = re.findall(r'\d+', score_text)
                            if len(scores) >= 2:
                                home_score = int(scores[0])
                                away_score = int(scores[1])
                    
                    # Extract date
                    date_elem = match.find(['span', 'div'], class_=['time', 'date'])
                    kickoff_time = "2025-09-21T13:00:00Z"  # Default fallback
                    
                    if date_elem:
                        date_text = date_elem.get_text(strip=True)
                        try:
                            kickoff_time = parse_flashscore_date(date_text) + "T13:00:00Z"
                        except:
                            pass
                    
                    result = {
                        "id": f"gw{(i//6)+1}_match{(i%6)+1}",
                        "homeTeam": home_team,
                        "awayTeam": away_team,
                        "kickoffTime": kickoff_time,
                        "homeScore": home_score,
                        "awayScore": away_score,
                        "status": "finished"
                    }
                    results.append(result)
                    
            except Exception as e:
                print(f"Error parsing result {i}: {e}")
                continue
        
        print(f"Found {len(results)} completed matches")
        return results
        
    except Exception as e:
        print(f"Error scraping results: {e}")
        return []

def load_existing_data():
    """Load existing fixtures-results.json data"""
    try:
        with open(JSON_FILE_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print("No existing fixtures-results.json found, creating new structure")
        return {
            "season": "2025-26",
            "lastUpdated": datetime.now(timezone.utc).isoformat(),
            "gameweeks": []
        }
    except json.JSONDecodeError as e:
        print(f"Error parsing existing JSON: {e}")
        return None

def organize_by_gameweek(matches):
    """Organize matches into gameweeks"""
    gameweeks = {}
    
    for match in matches:
        # Extract gameweek from match ID
        gw_match = re.match(r'gw(\d+)_match\d+', match['id'])
        if gw_match:
            gw_num = int(gw_match.group(1))
            
            if gw_num not in gameweeks:
                gameweeks[gw_num] = {
                    "gameweek": gw_num,
                    "weekStart": match['kickoffTime'][:10],  # Extract date
                    "weekEnd": match['kickoffTime'][:10],
                    "matches": []
                }
            
            gameweeks[gw_num]["matches"].append(match)
    
    return list(gameweeks.values())

def update_fixtures_data():
    """Main function to update fixtures-results.json"""
    print("Starting WSL2 data update...")
    
    # Load existing data
    existing_data = load_existing_data()
    if existing_data is None:
        print("Failed to load existing data")
        return False
    
    # Scrape new data
    fixtures = scrape_fixtures()
    results = scrape_results()
    
    if not fixtures and not results:
        print("No new data scraped")
        return False
    
    # Combine all matches
    all_matches = results + fixtures
    
    # Organize by gameweek
    new_gameweeks = organize_by_gameweek(all_matches)
    
    # Update existing data structure
    existing_data["lastUpdated"] = datetime.now(timezone.utc).isoformat()
    
    # Merge with existing gameweeks (prefer newer data)
    existing_gw_map = {gw["gameweek"]: gw for gw in existing_data.get("gameweeks", [])}
    
    for new_gw in new_gameweeks:
        gw_num = new_gw["gameweek"]
        if gw_num in existing_gw_map:
            # Update existing gameweek
            existing_gw_map[gw_num].update(new_gw)
        else:
            # Add new gameweek
            existing_gw_map[gw_num] = new_gw
    
    # Sort gameweeks by number
    existing_data["gameweeks"] = sorted(existing_gw_map.values(), key=lambda x: x["gameweek"])
    
    # Save updated data
    try:
        with open(JSON_FILE_PATH, 'w', encoding='utf-8') as f:
            json.dump(existing_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Successfully updated {JSON_FILE_PATH}")
        print(f"📊 Total gameweeks: {len(existing_data['gameweeks'])}")
        print(f"📅 Last updated: {existing_data['lastUpdated']}")
        return True
        
    except Exception as e:
        print(f"❌ Error saving data: {e}")
        return False

def main():
    """Main function"""
    print("🏈 WSL2 Flashscore Data Scraper")
    print("=" * 40)
    
    try:
        success = update_fixtures_data()
        if success:
            print("\n✅ Data update completed successfully!")
        else:
            print("\n❌ Data update failed!")
            
    except KeyboardInterrupt:
        print("\n⏹️ Script interrupted by user")
    except Exception as e:
        print(f"\n💥 Unexpected error: {e}")

if __name__ == "__main__":
    main()