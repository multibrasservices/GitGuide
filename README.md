# Guide Git pour le Vibe Coding

Ce projet est un guide interactif des commandes Git et Vim les plus utiles pour travailler avec des outils d'IA comme Gemini. L'objectif est de fournir un filet de sécurité pour les développeurs qui utilisent l'IA pour générer du code.

## Technologies utilisées

- **React** avec **TypeScript**
- **Vite** pour le build et le développement
- **pnpm** pour la gestion des dépendances

## Installation

1. Installez les dépendances avec pnpm :
```bash
pnpm install
```

2. Lancez le serveur de développement :
```bash
pnpm dev
```

3. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## Build pour la production

```bash
pnpm build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Prévisualisation de la production

```bash
pnpm preview
```

## Commandes incluses

### Git
- `git init` - Initialiser un dépôt
- `git status` - Voir l'état des fichiers
- `git add` - Ajouter des fichiers au staging
- `git commit` - Créer un commit
- `git reset --hard` - Revenir en arrière
- `git checkout -b` - Créer une nouvelle branche
- `git checkout` - Changer de branche
- `git merge` - Fusionner des branches
- `git branch -d` - Supprimer une branche
- `git fetch` - Récupérer les modifications distantes
- `git pull` - Récupérer et fusionner
- `git log` - Voir l'historique des commits
- Workflow d'initialisation avec dépôt GitHub existant

### GitHub Actions
- Création et structure de workflows
- Déclencheurs (push, pull_request, etc.)
- Variables d'environnement et secrets
- Matrice de builds pour tests multiples
- Partage d'artefacts entre jobs
- Exécution conditionnelle
- Mise en cache pour accélérer les builds

### Vim
- Mode commande (`:`)
- Sauvegarder (`w`)
- Quitter (`q`)
- Sauvegarder et quitter (`:wq`)

## Fonctionnalités

- 🌓 Mode sombre/clair avec sauvegarde des préférences
- 📋 Copie en un clic des commandes
- 📑 Navigation par onglets (Git, Vim)
- 📱 Interface responsive (mobile-first)
- 🎨 Design moderne et épuré
- 🚀 Sidebar repliable avec navigation par sections
- 📊 Exemples de sortie pour certaines commandes

## Structure du projet

```
src/
├── components/     # Composants React
├── data/          # Données des commandes
├── types/         # Types TypeScript
├── utils/         # Utilitaires
└── styles/        # Styles CSS
```

## Déploiement

Ce projet est déployé automatiquement sur GitHub Pages via GitHub Actions. Chaque push sur la branche `main` déclenche un nouveau déploiement.

- **URL du site** : https://multibrasservices.github.io/GitGuide/
- **Workflow** : `.github/workflows/deploy.yml`

## Version

v13.11.25

## Accédez à la page 

[GitGuide](https://multibrasservices.github.io/GitGuide/)
