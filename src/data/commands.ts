import { Section } from '../types';

export const gitSections: Section[] = [
  {
    id: 'demarrage',
    title: 'Démarrer un Projet',
    commands: [
      {
        id: 'git-init',
        title: 'git init',
        description: 'Initialise un nouveau dépôt Git dans le dossier actuel. C\'est la toute première commande à lancer pour un nouveau projet. [2]',
        command: 'git init',
        references: ['2']
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
        description: 'Votre tableau de bord ! Cette commande vous montre à tout moment quels fichiers ont été modifiés, ajoutés ou supprimés. Un réflexe à avoir. [2]',
        command: 'git status',
        references: ['2'],
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
        id: 'git-add',
        title: 'git add <fichier>',
        description: 'Prépare un fichier ("stage") pour le prochain point de sauvegarde. Utilisez `git add .` pour ajouter tous les fichiers modifiés. [3]',
        command: 'git add .',
        references: ['3']
      },
      {
        id: 'git-commit',
        title: 'git commit -m "Votre message"',
        description: 'Crée un point de sauvegarde (un "commit") avec les fichiers que vous avez préparés. Le message doit être descriptif de ce que vous avez changé. [20]',
        command: 'git commit -m "Ajout du fichier initial"',
        references: ['20']
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
      }
    ]
  },
  {
    id: 'branches',
    title: 'Isoler le Risque : Le Workflow de Branches',
    description: 'Quand votre projet grandit, votre branche main devient sacrée. Pour toute nouvelle fonctionnalité, on isole le risque dans une branche. C\'est une copie de votre projet sur laquelle vous pouvez tout casser sans affecter la version principale. [16]',
    commands: [
      {
        id: 'git-checkout-b',
        title: 'git checkout -b <nom-branche>',
        description: 'Crée une nouvelle branche et bascule dessus immédiatement. C\'est l\'action la plus rapide en ligne de commande pour commencer une nouvelle fonctionnalité. [16]',
        command: 'git checkout -b nouvelle-fonctionnalite',
        references: ['16']
      },
      {
        id: 'git-checkout',
        title: 'git checkout <nom-branche>',
        description: 'Permet de se déplacer vers une autre branche. Très utile pour retourner sur la branche principale (`main`). [24]',
        command: 'git checkout main',
        references: ['24']
      },
      {
        id: 'git-merge',
        title: 'git merge <nom-branche>',
        description: 'Fusionne la branche spécifiée dans la branche actuelle. Cela intègre les changements de la branche dans votre branche de travail principale. [24]',
        command: 'git merge nouvelle-fonctionnalite',
        references: ['24']
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
        id: 'git-fetch',
        title: 'git fetch',
        description: 'Récupère les dernières modifications depuis le dépôt distant sans les fusionner dans votre branche de travail. Cela vous permet de voir ce que les autres ont fait avant d\'intégrer les changements. C\'est une pratique sûre pour inspecter les changements entrants.',
        command: 'git fetch',
        references: []
      },
      {
        id: 'git-pull',
        title: 'git pull',
        description: 'Combine `git fetch` et `git merge` en une seule commande. Elle récupère les modifications du dépôt distant et les fusionne immédiatement dans votre branche actuelle. C\'est le moyen le plus direct de se mettre à jour avec le travail de l\'équipe.',
        command: 'git pull',
        references: []
      },
      {
        id: 'pull-request',
        title: 'Pull Request (ou "PR")',
        description: 'Ce n\'est pas une commande, mais un mécanisme central sur les plateformes comme GitHub ou GitLab. Après avoir poussé vos modifications sur une branche distante, vous ouvrez une Pull Request pour proposer que vos changements soient intégrés (fusionnés) à une autre branche (souvent `main`). C\'est un moment clé pour la revue de code par les pairs avant l\'intégration finale.',
        command: '',
        references: []
      }
    ]
  }
];

