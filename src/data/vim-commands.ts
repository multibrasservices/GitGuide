import { Section } from '../types';

export const vimSections: Section[] = [
  {
    id: 'vim-basics',
    title: 'Commandes Vim de base',
    description: 'Vim est l\'éditeur par défaut de Git dans votre configuration. Il faut être explicite avec ces outils.',
    commands: [
      {
        id: 'vim-mode-commande',
        title: ': (Mode commande)',
        description: 'Le deux-points passe Vim en mode commande.',
        command: ':',
        references: []
      },
      {
        id: 'vim-write',
        title: 'w (write)',
        description: 'La commande pour write (écrire), c\'est-à-dire sauvegarder le fichier.',
        command: 'w',
        references: []
      },
      {
        id: 'vim-quit',
        title: 'q (quit)',
        description: 'La commande pour quit (quitter).',
        command: 'q',
        references: []
      },
      {
        id: 'vim-wq',
        title: ':wq (sauvegarder et quitter)',
        description: 'Combinaison directe et efficace pour dire "sauvegarde et quitte". C\'est la seule chose à faire pour finaliser le commit.',
        command: ':wq',
        references: []
      }
    ]
  }
];

