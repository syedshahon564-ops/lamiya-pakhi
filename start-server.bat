@echo off
title Danger Shawon - Portfolio Server
cd /d "%~dp0"
echo ========================================================
echo   Starting Danger Shawon Portfolio Server
echo   Database: d:\rafi\data\portfolio.json
echo ========================================================
node server.js
pause
