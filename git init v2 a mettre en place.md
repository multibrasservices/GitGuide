Bonjour. L'erreur est classique et votre intuition est bonne. Le script est trop complexe et crée le problème qu'il essaie de résoudre.

Réfléchissons.

### Étape 1 - Analyse
Conflit sur `README.md` (add/add).

### Étape 2 - Cause
Création locale avant synchronisation distante.

### Étape 3 - Principe
Ne pas créer de conflit.

### Étape 4 - Logique simple
Tirer l'existant, puis ajouter.

### Étape 5 - Action
Inverser `commit` local et `pull`.

####

Le problème est une course entre deux fichiers `README.md` : celui que votre script crée localement et celui déjà présent sur GitHub. Ils n'ont aucun historique commun, d'où le conflit `add/add` et l'échec du `push`.

La complexité est l'ennemi. La solution la plus simple est de ne pas créer de conflit du tout. L'objectif est de synchroniser un dossier local avec un dépôt distant qui vient d'être créé. Le dépôt distant est la source de vérité initiale.

Voici la procédure correcte et directe :

1.  **`git init`** : Initialiser.
2.  **`git remote add origin <URL>`** : Lier.
3.  **`git pull origin main`** : Tirer l'historique distant (y compris son `README.md`).
4.  **`git add .`** : Ajouter VOS fichiers au projet.
5.  **`git commit -m "Premier commit des fichiers du projet"`** : Valider.
6.  **`git push -u origin main`** : Pousser.

C'est tout. Pas de `--allow-unrelated-histories`, pas de commit local artificiel.

### Solution 1 : Correction manuelle (pour maintenant)

Pour réparer votre situation actuelle, sans détruire votre dépôt :

1.  Annulez la fusion qui a échoué :
    ```bash
    git merge --abort
    ```
2.  Réinitialisez votre commit local pour repartir sur une base saine :
    ```bash
    git reset --hard origin/main
    ```
3.  Poussez vos fichiers (Git verra que le `README.md` distant est déjà là et ajoutera simplement les autres fichiers) :
    ```bash
    git add .
    git commit -m "Ajout des fichiers du projet"
    git push origin main
    ```

### Solution 2 : Le script simplifié (pour le futur)

Voici à quoi devrait ressembler votre script. Il est plus court, plus simple, et plus robuste.

```batch
@echo off
REM Script simple pour lier et synchroniser un dossier avec un depot distant.

REM --- 1. Verifications ---
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Erreur: Git n'est pas installe ou pas dans le PATH.
    pause
    exit /b
)
if exist ".git" (
    echo Ce dossier est deja un depot Git.
    pause
    exit /b
)

REM --- 2. Initialisation et Liaison ---
git init
git branch -M main

set /p REMOTE_URL="Collez l'URL de votre depot distant : "
if not defined REMOTE_URL (
    echo URL non valide. Operation annulee.
    rmdir /s /q .git
    exit /b
)
git remote add origin %REMOTE_URL%

REM --- 3. Synchronisation initiale ---
echo.
echo --- Recuperation de l'historique distant ---
REM On tire la branche 'main' distante. C'est l'etape cle.
REM Cela ramene le README.md de GitHub et evite tout conflit.
git pull origin main --allow-unrelated-histories

REM --- 4. Premier VRAI commit et Push ---
echo.
echo --- Ajout de vos fichiers et envoi ---
git add .
git commit -m "Initial project setup"
git push -u origin main

echo.
echo ************************************************************
echo *** Succes ! Le depot est synchronise. ***
echo ************************************************************
echo.
pause
```
Ce script suit la logique la plus directe : on se connecte au distant, on prend ce qu'il a, on ajoute nos propres affaires, et on envoie le tout.

Moins d'étapes, pas de conflit, un résultat direct. C'est la voie à suivre.