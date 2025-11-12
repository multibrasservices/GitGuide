import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <div id="theme-toggle" onClick={onToggle} style={{ cursor: 'pointer', position: 'fixed', top: '20px', right: '20px', fontSize: '1.5rem', zIndex: 1000 }}>
      <span className="sun-icon" style={{ display: theme === 'light-mode' ? 'inline' : 'none' }}>☀️</span>
      <span className="moon-icon" style={{ display: theme === 'dark-mode' ? 'inline' : 'none' }}>🌙</span>
    </div>
  );
};

