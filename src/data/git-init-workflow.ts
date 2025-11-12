import { Section } from '../types';

export const gitInitWorkflow: Section = {
  id: 'git-init-workflow',
  title: 'Workflow d\'initialisation avec dépôt GitHub existant',
  description: 'Voici la séquence complète et robuste pour initialiser un projet et le pousser sur un dépôt GitHub déjà existant (avec un README, par exemple). C\'est la seule méthode dont vous aurez besoin pour ce cas de figure.',
  commands: [
    {
      id: 'workflow-step1',
      title: 'Étape 1 : Initialiser le dépôt local',
      description: 'Initialise un dépôt Git vide et renomme la branche en \'main\'',
      command: 'git init\ngit branch -M main',
      references: []
    },
    {
      id: 'workflow-step2',
      title: 'Étape 2 : Lier au dépôt distant',
      description: 'Définit l\'adresse du dépôt distant',
      command: 'git remote add origin https://github.com/multibrasservices/package.git',
      references: []
    },
    {
      id: 'workflow-step3',
      title: 'Étape 3 : Récupérer l\'historique distant',
      description: 'C\'est l\'étape clé : on récupère l\'historique distant (avec le README) et on fusionne les deux historiques qui n\'ont pas d\'ancêtre commun. C\'est ce qui évite le conflit de plus tard.',
      command: 'git pull origin main --allow-unrelated-histories',
      references: []
    },
    {
      id: 'workflow-step4',
      title: 'Étape 4 : Ajouter vos propres fichiers',
      description: 'Ajoute tous vos fichiers (y compris le README fusionné)',
      command: 'git add .',
      references: []
    },
    {
      id: 'workflow-step5',
      title: 'Étape 5 : Valider vos changements',
      description: 'Crée votre premier "commit" avec vos fichiers',
      command: 'git commit -m "Initial commit du projet"',
      references: []
    },
    {
      id: 'workflow-step6',
      title: 'Étape 6 : Pousser le tout',
      description: 'Envoie votre historique fusionné sur GitHub. Le \'-u\' configure la branche locale pour suivre la branche distante.',
      command: 'git push -u origin main',
      references: []
    }
  ]
};

