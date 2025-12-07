import { Section } from '../types';

export const vimSections: Section[] = [
  {
    id: 'vim-basics',
    title: 'Commandes Vim de base',
    description: 'Vim est l\'éditeur par défaut de Git. Il a deux modes principaux : le mode "normal" (pour naviguer et exécuter des commandes) et le mode "insertion" (pour écrire du texte).',
    commands: [
      {
        id: 'vim-insert',
        title: 'i (insert)',
        description: 'Passe en mode insertion pour écrire du texte. C\'est la première touche à presser pour modifier un fichier.',
        command: 'i',
        references: []
      },
      {
        id: 'vim-escape',
        title: 'Esc (échapper)',
        description: 'Quitte le mode insertion et revient au mode normal. Indispensable avant de pouvoir sauvegarder ou quitter.',
        command: 'Esc',
        references: []
      },
      {
        id: 'vim-mode-commande',
        title: ': (Mode commande)',
        description: 'En mode normal, le deux-points ouvre la ligne de commande en bas de l\'écran.',
        command: ':',
        references: []
      },
      {
        id: 'vim-wq',
        title: ':wq (sauvegarder et quitter)',
        description: 'Sauvegarde le fichier et quitte Vim. C\'est LA commande à retenir pour finaliser un message de commit.',
        command: ':wq',
        references: []
      },
      {
        id: 'vim-quit-force',
        title: ':q! (quitter sans sauvegarder)',
        description: 'Quitte Vim en abandonnant toutes les modifications. Utile si vous avez fait une erreur et voulez tout annuler.',
        command: ':q!',
        references: []
      },
      {
        id: 'vim-write',
        title: ':w (sauvegarder)',
        description: 'Sauvegarde le fichier sans quitter Vim.',
        command: ':w',
        references: []
      }
    ]
  }
];

