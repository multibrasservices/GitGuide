import { Section } from '../types';

export const githubActionsSection: Section = {
  id: 'github-actions',
  title: 'GitHub Actions : Automatisation et CI/CD',
  description: 'GitHub Actions permet d\'automatiser vos workflows directement depuis votre dépôt GitHub. Idéal pour le déploiement automatique, les tests, et bien plus encore.',
  commands: [
    {
      id: 'gh-actions-intro',
      title: 'Qu\'est-ce que GitHub Actions ?',
      description: 'GitHub Actions est une plateforme d\'intégration et de déploiement continu (CI/CD) intégrée à GitHub. Elle permet d\'automatiser vos workflows à chaque événement (push, pull request, etc.).',
      command: '',
      references: []
    },
    {
      id: 'gh-actions-workflow-file',
      title: 'Créer un fichier de workflow',
      description: 'Les workflows GitHub Actions sont définis dans des fichiers YAML placés dans `.github/workflows/`. Chaque fichier définit un workflow qui peut être déclenché par différents événements.',
      command: '.github/workflows/nom-du-workflow.yml',
      references: []
    },
    {
      id: 'gh-actions-basic-structure',
      title: 'Structure de base d\'un workflow',
      description: 'Voici la structure minimale d\'un workflow GitHub Actions pour déployer sur GitHub Pages.',
      command: `name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: npm run build
      - name: Deploy
        uses: actions/deploy-pages@v4`,
      references: []
    },
    {
      id: 'gh-actions-triggers',
      title: 'Déclencheurs courants (on:)',
      description: 'Les workflows peuvent être déclenchés par différents événements. Voici les plus courants.',
      command: `on:
  push:              # À chaque push
    branches: [main]
  pull_request:      # À chaque pull request
    branches: [main]
  workflow_dispatch: # Déclenchement manuel
  schedule:          # Planifié (cron)
    - cron: '0 0 * * *'`,
      references: []
    },
    {
      id: 'gh-actions-env-vars',
      title: 'Variables d\'environnement et secrets',
      description: 'Utilisez des secrets pour stocker des informations sensibles (tokens, clés API, etc.). Les secrets sont accessibles via `${{ secrets.NOM_DU_SECRET }}`.',
      command: `env:
  NODE_VERSION: '18'
  API_KEY: \${{ secrets.API_KEY }}

steps:
  - name: Use secret
    run: echo "Key is \${{ secrets.API_KEY }}"`,
      references: []
    },
    {
      id: 'gh-actions-matrix',
      title: 'Matrice de builds (tests multiples)',
      description: 'Exécutez votre workflow sur plusieurs versions de Node.js, systèmes d\'exploitation, etc. en une seule fois.',
      command: `jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}`,
      references: []
    },
    {
      id: 'gh-actions-artifacts',
      title: 'Partager des artefacts entre jobs',
      description: 'Les artefacts permettent de partager des fichiers entre différents jobs d\'un workflow.',
      command: `# Uploader un artefact
- name: Upload artifact
  uses: actions/upload-artifact@v4
  with:
    name: dist
    path: ./dist

# Télécharger un artefact
- name: Download artifact
  uses: actions/download-artifact@v4
  with:
    name: dist`,
      references: []
    },
    {
      id: 'gh-actions-conditions',
      title: 'Exécution conditionnelle',
      description: 'Exécutez des étapes seulement si certaines conditions sont remplies.',
      command: `steps:
  - name: Build
    if: github.ref == 'refs/heads/main'
    run: npm run build
    
  - name: Deploy
    if: success() && github.ref == 'refs/heads/main'
    run: npm run deploy`,
      references: []
    },
    {
      id: 'gh-actions-cache',
      title: 'Mise en cache pour accélérer les builds',
      description: 'Mettez en cache les dépendances (node_modules, etc.) pour accélérer vos workflows.',
      command: `- name: Cache dependencies
  uses: actions/cache@v4
  with:
    path: ~/.pnpm-store
    key: \${{ runner.os }}-pnpm-\${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      \${{ runner.os }}-pnpm-`,
      references: []
    }
  ]
};

