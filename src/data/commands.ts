import { Section } from '../types';

export const gitSections: Section[] = [
  {
    id: 'demarrage',
    title: 'Démarrer un Projet',
    commands: [
      {
        id: 'git-init',
        title: 'git init',
        description: 'Initialise un nouveau dépôt Git dans le dossier actuel. C\'est la toute première commande à lancer pour un nouveau projet.',
        command: 'git init',
        references: []
      },
      {
        id: 'git-clone',
        title: 'git clone <url>',
        description: 'Télécharge un projet existant depuis GitHub (ou autre) sur votre machine. Crée automatiquement un dossier avec tout l\'historique.',
        command: 'git clone https://github.com/utilisateur/projet.git',
        references: []
      },
      {
        id: 'gitignore',
        title: '.gitignore',
        description: 'Fichier spécial à créer à la racine du projet. Liste les fichiers/dossiers que Git doit ignorer (node_modules, .env, fichiers secrets, etc.).',
        command: `# Exemple de .gitignore
node_modules/
.env
.DS_Store
*.log
dist/`,
        references: []
      }
    ]
  },
  {
    id: 'cycle-de-vie',
    title: 'Le Cycle de Vie Local : Coder, Visualiser, Commiter',
    commands: [
      {
        id: 'git-status',
        title: 'git status',
        description: 'Votre tableau de bord ! Cette commande vous montre à tout moment quels fichiers ont été modifiés, ajoutés ou supprimés. Un réflexe à avoir.',
        command: 'git status',
        references: [],
        exampleOutput: `On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        nouveau-fichier.js

no changes added to commit (use "git add" to track)`
      },
      {
        id: 'git-diff',
        title: 'git diff',
        description: 'Affiche les modifications ligne par ligne avant de les commiter. Indispensable pour vérifier ce que vous allez sauvegarder. Utilisez `git diff --staged` pour voir les changements déjà ajoutés.',
        command: 'git diff',
        references: [],
        exampleOutput: `diff --git a/src/App.tsx b/src/App.tsx
@@ -10,6 +10,7 @@ function App() {
   return (
     <div>
+      <h1>Nouveau titre</h1>
       <Header />
     </div>
   );`
      },
      {
        id: 'git-add',
        title: 'git add <fichier>',
        description: 'Prépare un fichier ("stage") pour le prochain point de sauvegarde. Utilisez `git add .` pour ajouter tous les fichiers modifiés.',
        command: 'git add .',
        references: []
      },
      {
        id: 'git-commit',
        title: 'git commit -m "Votre message"',
        description: 'Crée un point de sauvegarde (un "commit") avec les fichiers que vous avez préparés. Le message doit être descriptif de ce que vous avez changé.',
        command: 'git commit -m "Ajout du fichier initial"',
        references: []
      },
      {
        id: 'git-log',
        title: 'git log',
        description: 'Affiche l\'historique des commits de votre projet. Très utile pour voir ce qui a été fait et quand. Utilisez `git log --oneline` pour une version compacte.',
        command: 'git log',
        references: [],
        exampleOutput: `commit abc123def456 (HEAD -> main)
Author: Votre Nom <votre@email.com>
Date:   Mon Nov 13 10:30:00 2025 +0100

    Ajout de la fonctionnalité de recherche

commit 789ghi012jkl
Author: Votre Nom <votre@email.com>
Date:   Sun Nov 12 15:20:00 2025 +0100

    Correction du bug d'affichage

commit 345mno678pqr
Author: Votre Nom <votre@email.com>
Date:   Sat Nov 11 09:15:00 2025 +0100

    Initial commit`
      }
    ]
  },
  {
    id: 'securite',
    title: 'Le Bouton "Oups" : Revenir en Arrière',
    commands: [
      {
        id: 'git-restore-file',
        title: 'git restore <fichier>',
        description: 'Vous avez fait une modification dans un fichier mais vous voulez l\'annuler ? Cette commande restaure le fichier à son état du dernier commit, annulant vos changements locaux. C\'est l\'équivalent d\'un "ctrl+z" pour vos modifications non "stagées".',
        command: 'git restore src/App.tsx',
        references: []
      },
      {
        id: 'git-restore-staged',
        title: 'git restore --staged <fichier>',
        description: 'Vous avez utilisé `git add` sur un fichier par erreur ? Cette commande le retire de la zone de "staging" sans pour autant annuler les modifications que vous avez faites dans le fichier. Le fichier retourne à l\'état "modifié" mais non "stagé".',
        command: 'git restore --staged src/App.tsx',
        references: []
      },
      {
        id: 'git-reset-hard',
        title: 'git reset --hard',
        description: 'L\'IA a généré un code catastrophique ? Pas de panique. Cette commande vous ramène exactement à votre dernier commit, effaçant toutes les modifications non sauvegardées. C\'est votre retour à un état stable en un clin d\'œil.',
        command: 'git reset --hard',
        references: []
      },
      {
        id: 'git-stash',
        title: 'git stash',
        description: 'Met de côté vos modifications en cours sans les commiter. Pratique pour changer de branche rapidement. Utilisez `git stash pop` pour récupérer vos modifications.',
        command: 'git stash',
        references: []
      }
    ]
  },
  {
    id: 'branches',
    title: 'Isoler le Risque : Le Workflow de Branches',
    description: 'Quand votre projet grandit, votre branche main devient sacrée. Pour toute nouvelle fonctionnalité, on isole le risque dans une branche. C\'est une copie de votre projet sur laquelle vous pouvez tout casser sans affecter la version principale.',
    commands: [
      {
        id: 'git-branch',
        title: 'git branch',
        description: 'Liste toutes les branches locales. La branche actuelle est marquée d\'une étoile (*). Ajoutez `-a` pour voir aussi les branches distantes.',
        command: 'git branch',
        references: []
      },
      {
        id: 'git-checkout-b',
        title: 'git checkout -b <nom-branche>',
        description: 'Crée une nouvelle branche et bascule dessus immédiatement. C\'est l\'action la plus rapide pour commencer une nouvelle fonctionnalité.',
        command: 'git checkout -b nouvelle-fonctionnalite',
        references: []
      },
      {
        id: 'git-checkout',
        title: 'git checkout <nom-branche>',
        description: 'Permet de se déplacer vers une autre branche. Très utile pour retourner sur la branche principale (`main`).',
        command: 'git checkout main',
        references: []
      },
      {
        id: 'git-merge',
        title: 'git merge <nom-branche>',
        description: 'Fusionne la branche spécifiée dans la branche actuelle. Cela intègre les changements de la branche dans votre branche de travail principale.',
        command: 'git merge nouvelle-fonctionnalite',
        references: []
      },
      {
        id: 'git-branch-d',
        title: 'git branch -d <nom-branche>',
        description: 'La branche de fonctionnalité a fait son travail, on la supprime pour garder un projet propre.',
        command: 'git branch -d nouvelle-fonctionnalite',
        references: []
      }
    ]
  },
  {
    id: 'collaboration',
    title: 'Collaboration : Travailler à plusieurs',
    description: 'Lorsque vous travaillez en équipe ou avec des dépôts distants (comme sur GitHub), ces commandes sont essentielles pour synchroniser votre travail.',
    commands: [
      {
        id: 'git-remote',
        title: 'git remote -v',
        description: 'Affiche les dépôts distants configurés (origin, etc.) avec leurs URLs. Utile pour vérifier où votre code sera envoyé.',
        command: 'git remote -v',
        references: []
      },
      {
        id: 'git-push',
        title: 'git push',
        description: 'Envoie vos commits locaux vers le dépôt distant. Utilisez `git push -u origin ma-branche` la première fois pour lier votre branche locale à la branche distante.',
        command: 'git push',
        references: []
      },
      {
        id: 'git-fetch',
        title: 'git fetch',
        description: 'Récupère les dernières modifications depuis le dépôt distant sans les fusionner. Permet d\'inspecter les changements avant de les intégrer.',
        command: 'git fetch',
        references: []
      },
      {
        id: 'git-pull',
        title: 'git pull',
        description: 'Récupère ET fusionne les modifications distantes en une seule commande. C\'est le moyen le plus direct de se mettre à jour.',
        command: 'git pull',
        references: []
      },
      {
        id: 'pull-request',
        title: 'Pull Request (PR) : Le workflow complet',
        description: 'Une PR permet de proposer vos changements pour revue avant de les fusionner dans main. C\'est le cœur du travail collaboratif.',
        command: `# 1. Créer une branche pour votre fonctionnalité
git checkout -b ma-feature

# 2. Faire vos modifications, puis commit
git add .
git commit -m "Ajout de ma feature"

# 3. Pousser la branche sur GitHub
git push -u origin ma-feature

# 4. Aller sur GitHub → "Compare & Pull Request"
# 5. Remplir le titre et la description
# 6. Demander une review si nécessaire`,
        references: []
      }
    ]
  },
  {
    id: 'conflits',
    title: 'Résoudre les Conflits de Merge',
    description: 'Quand deux personnes modifient le même fichier, Git ne peut pas décider seul. Voici comment gérer ces situations.',
    commands: [
      {
        id: 'conflit-detection',
        title: 'Détecter un conflit',
        description: 'Après un merge ou pull, Git vous indique les fichiers en conflit. Ouvrez-les : vous verrez des marqueurs spéciaux.',
        command: `# Git affiche :
CONFLICT (content): Merge conflict in src/App.tsx
Automatic merge failed; fix conflicts and then commit.`,
        references: []
      },
      {
        id: 'conflit-marqueurs',
        title: 'Comprendre les marqueurs',
        description: 'Dans le fichier, Git encadre les zones de conflit. Vous devez choisir quelle version garder (ou combiner les deux).',
        command: `<<<<<<< HEAD
// Votre version locale
const title = "Mon titre";
=======
// Version distante (de l'autre personne)
const title = "Notre titre";
>>>>>>> origin/main`,
        references: []
      },
      {
        id: 'conflit-resolution',
        title: 'Résoudre et finaliser',
        description: 'Supprimez les marqueurs, gardez le code correct, puis ajoutez et commitez le fichier résolu.',
        command: `# 1. Éditez le fichier pour garder le bon code
# 2. Supprimez les lignes <<<<<<, ======, >>>>>>
# 3. Sauvegardez, puis :
git add src/App.tsx
git commit -m "Résolution du conflit dans App.tsx"`,
        references: []
      }
    ]
  }
];

