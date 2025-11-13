import { Tab } from '../types';
import { Section } from './Section';

interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

export const Tabs = ({ tabs, activeTabId, onTabChange }: TabsProps) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="tabs-container" style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        borderBottom: '2px solid var(--border-color)',
        paddingBottom: '10px',
        flexWrap: 'wrap'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTabId === tab.id ? 'var(--primary-color)' : 'transparent',
              color: activeTabId === tab.id ? 'white' : 'var(--text-color)',
              border: 'none',
              borderRadius: '5px 5px 0 0',
              cursor: 'pointer',
              fontSize: '1em',
              fontFamily: 'var(--body-font)',
              transition: 'all 0.2s',
              borderBottom: activeTabId === tab.id ? '2px solid var(--primary-color)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (activeTabId !== tab.id) {
                e.currentTarget.style.backgroundColor = 'var(--card-background)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTabId !== tab.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

