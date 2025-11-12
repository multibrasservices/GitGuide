@echo off
REM Script pour initialiser un depot Git et le lier a un distant.

REM Verifie si Git est installe et accessible.
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Erreur: Git n'est pas installe ou pas dans le PATH.
    pause
    exit /b
)

REM Verifie si ce n'est pas deja un depot Git.
if exist ".git" (
    echo Ce dossier est deja un depot Git.
    pause
    exit /b
)

echo --- Initialisation du depot Git ---

REM Initialise le depot en nommant directement la branche "main".
REM C'est la maniere la plus simple d'eviter le conflit master/main.
git init -b main

echo.
set /p REMOTE_URL="Collez l'URL de votre depot distant (ex: https://github.com/user/repo.git) : "

if not defined REMOTE_URL (
    echo URL non valide. Operation annulee.
    REM Nettoyage en cas d'annulation pour ne pas laisser un depot a moitie configure.
    rmdir /s /q .git
    exit /b
)

echo.
echo --- Liaison avec le depot distant ---
git remote add origin %REMOTE_URL%

echo.
echo --- Synchronisation initiale ---
REM Tente de recuperer le contenu du distant (ex: README, .gitignore).
REM --allow-unrelated-histories est une securite si un premier commit existe deja des deux cotes.
git pull origin main --allow-unrelated-histories

echo.
echo --- Configuration terminee ---
echo Le depot local est initialise sur la branche 'main' et connecte au distant.
echo.
echo Prochaines etapes :
echo   1. git add .
echo   2. git commit -m "Initial commit"
echo   3. git push -u origin main
echo.
pause