@echo off
setlocal

rem --- Définir le dossier source (Téléchargements) ---
set "sourceDir=C:\Users\User\Downloads"

rem --- Définir le dossier de destination comme le dossier courant du script ---
set "destinationFolder=%~dp0"

rem --- Définir le nom final que le fichier aura dans le dossier de destination ---
rem Assurez-vous d'inclure l'extension si elle est constante (ex: .md)
set "newFileName=admin_instruction.md"

set "latestFoundFile="
set "fullSourcePath="

rem --- Trouver le fichier .md le plus récemment modifié dans le dossier source ---
for /f "delims=" %%i in ('dir "%sourceDir%\*.md" /A:-D /OD /B 2^>nul') do (
    set "latestFoundFile=%%i"
)

rem --- Vérifier si un fichier .md a été trouvé ---
if not defined latestFoundFile (
    echo Aucun fichier .md n'a ete trouve dans "%sourceDir%".
    goto :eof
)

set "fullSourcePath=%sourceDir%\%latestFoundFile%"
set "fullDestinationPath=%destinationFolder%\%newFileName%"

rem --- Couper-coller et renommer le fichier ---
echo Le fichier le plus recent a deplacer est : "%fullSourcePath%"
echo Deplacement et renommage en "%newFileName%" vers "%destinationFolder%"...
move "%fullSourcePath%" "%fullDestinationPath%"

rem --- Vérifier si le déplacement/renommage a réussi ---
if %errorlevel% equ 0 (
    echo Le fichier a ete deplace et renomme avec succes en "%newFileName%" !
) else (
    echo Erreur : Echec du deplacement et du renommage du fichier.
    echo Assurez-vous que le fichier "%newFileName%" n'est pas deja utilise dans le dossier de destination.
)

pause
endlocal