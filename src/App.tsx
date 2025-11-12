import { useState, useEffect, useMemo } from 'react';
import { Theme, Tab } from './types';
import { getStoredTheme, setStoredTheme, applyTheme } from './utils/theme';
import { gitSections } from './data/commands';
import { gitInitWorkflow } from './data/git-init-workflow';
import { vimSections } from './data/vim-commands';
import { ThemeToggle } from './components/ThemeToggle';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { SidebarToggle } from './components/SidebarToggle';
import { useActiveSection } from './hooks/useActiveSection';
import './styles/App.css';

const tabs: Tab[] = [
  {
    id: 'git',
    label: 'Git',
    sections: [...gitSections, gitInitWorkflow]
  },
  {
    id: 'vim',
    label: 'Vim',
    sections: vimSections
  }
];

function App() {
  const [theme, setTheme] = useState<Theme>('dark-mode');
  const [activeTabId, setActiveTabId] = useState<string>('git');
  // Sur mobile, la sidebar est fermée par défaut (gérée par toggle)
  // Sur desktop, elle est toujours "ouverte" mais repliée (gérée par CSS hover)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const sectionIds = useMemo(() => activeTab.sections.map(s => s.id), [activeTab]);
  const activeSectionId = useActiveSection(sectionIds);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const handleThemeToggle = () => {
    const newTheme: Theme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        tabs={tabs}
        activeTabId={activeTabId}
        activeSectionId={activeSectionId}
        onTabChange={setActiveTabId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
      <div className="main-content">
        <div className="container">
          <Header />
          <Tabs tabs={tabs} activeTabId={activeTabId} onTabChange={setActiveTabId} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

