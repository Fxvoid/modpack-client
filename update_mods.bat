@echo off
setlocal EnableDelayedExpansion
TITLE Minecraft Modpack Syncer
COLOR 0A

:: ==========================================
:: CONFIGURATION SECTION (EDIT THIS!)
:: ==========================================

SET "REPO_URL=https://github.com/Fxvoid/modpack-client"
SET "BRANCH=main"
SET "BLOCKLIST_FILE=Client_Side_Only_Mods.txt"

:: Set this to SERVER manually here, OR set it via environment variable,
:: OR pass --server when running the script.
:: Default is CLIENT
if "%PACK_MODE%"=="" SET "PACK_MODE=CLIENT"
if /I "%1"=="--server" SET "PACK_MODE=SERVER"

:: ==========================================
:: SCRIPT START
:: ==========================================

echo.
echo  ========================================
echo   MINECRAFT REPO SYNC
echo   Mode: %PACK_MODE%
echo  ========================================
echo.

:: 1. Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    COLOR 0C
    echo  [ERROR] Git is not installed or not in the PATH!
    echo.
    echo  Please download and install Git for Windows:
    echo  https://git-scm.com/download/win
    pause
    exit /b
)

:: 2. Check/Init Repo
if not exist ".git" (
    echo  [INFO] First run detected. Initializing...
    git init
    git remote add origin %REPO_URL%
    git config core.autocrlf false
) 

echo  [INFO] Fetching latest updates from GitHub...
git fetch origin

if %errorlevel% neq 0 (
    COLOR 0C
    echo.
    echo  [ERROR] Could not connect to GitHub.
    pause
    exit /b
)

echo.
echo  [INFO] Syncing files...

:: 3. The Reset (Restores ALL tracked files, including client mods)
git reset --hard origin/%BRANCH%

:: ==========================================
:: LARGE FILE DOWNLOADER
:: ==========================================
echo.
echo  [INFO] Checking for large mods not in Git...

SET "BIG_MOD_NAME=L_Enders_Cataclysm-3.16.jar"
:: Note: Direct download links from CF usually require the Edge/CDN URL, simple web links might return HTML.
SET "BIG_MOD_URL=https://www.curseforge.com/minecraft/mc-mods/lendercataclysm/download/6906993"

if not exist "mods\%BIG_MOD_NAME%" (
    echo   - Downloading %BIG_MOD_NAME%...
    powershell -Command "Invoke-WebRequest -Uri '%BIG_MOD_URL%' -OutFile 'mods\%BIG_MOD_NAME%'"
) else (
    echo   - Large mod already exists. Skipping.
)

:: ==========================================
:: SERVER-SIDE CLEANUP LOGIC (Fixed)
:: ==========================================
:CheckServerMode
if /I NOT "%PACK_MODE%"=="SERVER" goto :Success

echo.
echo  [INFO] Server Environment Detected.
echo         Scanning for Client-Side mods to remove...

if not exist "%BLOCKLIST_FILE%" (
    COLOR 0E
    echo   [WARN] %BLOCKLIST_FILE% not found! 
    echo          Cannot clean client mods. Skipping...
    goto :Success
)

:: We use PowerShell to read the list and delete files because Batch fails with text encodings.
echo.
powershell -Command "$list = Get-Content '%BLOCKLIST_FILE%'; $count = 0; foreach ($file in $list) { if (-not [string]::IsNullOrWhiteSpace($file)) { $path = Join-Path 'mods' $file; if (Test-Path $path) { Remove-Item -Path $path -Force; Write-Host \"   - Deleting: $file\"; $count++ } } }; Write-Host \"`n   [INFO] Cleanup Complete. Removed $count files.\""

:Success
echo.
echo  ========================================
echo   SUCCESS! Your pack is up to date.
echo  ========================================
echo.
pause