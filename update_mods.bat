@echo off
setlocal EnableDelayedExpansion
TITLE Minecraft Modpack Syncer
COLOR 0A

:: ==========================================
:: CONFIGURATION SECTION (EDIT THIS!)
:: ==========================================

SET "REPO_URL=https://github.com/Fxvoid/modpack-client"

SET "BRANCH=main"

:: ==========================================
:: SCRIPT START
:: ==========================================

echo.
echo  ========================================
echo   MINECRAFT REPO SYNC
echo  ========================================
echo.

:: 1. Check if Git is installed on their computer
git --version >nul 2>&1
if %errorlevel% neq 0 (
    COLOR 0C
    echo  [ERROR] Git is not installed or not in the PATH!
    echo.
    echo  Please download and install Git for Windows:
    echo  https://git-scm.com/download/win
    echo.
    echo  During installation, just click Next, Next, Next...
    pause
    exit /b
)

:: 2. Check if this folder is already initialized
if not exist ".git" (
    echo  [INFO] First run detected. Initializing...
    echo.
    
    :: Initialize git
    git init
    
    :: Add the remote URL
    git remote add origin %REPO_URL%
    
    :: Configure git to not handle line ending conversions automatically (prevents corruption)
    git config core.autocrlf false
) 

echo  [INFO] Fetching latest updates from GitHub...
git fetch origin

if %errorlevel% neq 0 (
    COLOR 0C
    echo.
    echo  [ERROR] Could not connect to GitHub. 
    echo  - Check your internet connection.
    echo  - Check if the REPO_URL in this script is correct.
    pause
    exit /b
)

echo.
echo  [INFO] Syncing files (This will overwrite mods/configs to match the server)...

:: 3. The Nuclear Option: Reset Hard
:: This makes the local folder EXACTLY match the remote repo for tracked files.
:: Because of your .gitignore, it won't touch saves, screenshots, or options.txt.
git reset --hard origin/%BRANCH%

echo.
echo  [INFO] Cleaning up obsolete files...
:: 4. Remove tracked files that were deleted in the repo
:: Note: This does NOT delete user-added un-tracked files (like screenshots)
:: to prevent accidents. If you want to force-delete user added mods
:: that you didn't approve, you would need "git clean -fd", but that is dangerous.
git clean -fX

:: ==========================================
:: LARGE FILE DOWNLOADER
:: ==========================================
echo.
echo  [INFO] Checking for large mods not in Git...

:: Set the specific filename and the download URL (FIXME: URL MAY NOT WORK NEEDS TESTING)
SET "BIG_MOD_NAME=L_Enders_Cataclysm-3.16.jar"
SET "BIG_MOD_URL=https://www.curseforge.com/minecraft/mc-mods/lendercataclysm/download/6906993"

if not exist "mods\%BIG_MOD_NAME%" (
    echo   - Downloading %BIG_MOD_NAME%...
    
    :: Uses PowerShell to download the file because it's reliable on all Windows
    powershell -Command "Invoke-WebRequest -Uri '%BIG_MOD_URL%' -OutFile 'mods\%BIG_MOD_NAME%'"
    
    if exist "mods\%BIG_MOD_NAME%" (
        echo   - Download Complete.
    ) else (
        COLOR 0C
        echo   [ERROR] Failed to download large mod.
    )
) else (
    echo   - Large mod already exists. Skipping.
)

echo.
echo  ========================================
echo   SUCCESS! Your pack is up to date.
echo  ========================================
echo.
pause