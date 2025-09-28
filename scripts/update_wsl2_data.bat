@echo off
echo Installing Python dependencies...
pip install -r requirements.txt

echo.
echo Running WSL2 data scraper...
python scrape_wsl2_data.py

echo.
pause