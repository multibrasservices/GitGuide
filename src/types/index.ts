export interface Command {
  id: string;
  title: string;
  description: string;
  command: string;
  references?: string[];
  exampleOutput?: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  commands: Command[];
}

export interface Tab {
  id: string;
  label: string;
  sections: Section[];
}

export type Theme = 'dark-mode' | 'light-mode';

