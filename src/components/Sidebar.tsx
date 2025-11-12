import { Tab } from '../types';
import { scrollToSection } from '../utils/scrollToSection';

interface SidebarProps {
  tabs: Tab[];
  activeTabId: string;
  activeSectionId: string;
  onTabChange: (tabId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ 
  tabs, 
  activeTabId, 
  activeSectionId, 
  onTabChange,
  isOpen,
  onClose
}: SidebarProps) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    // Fermer la sidebar sur mobile après le clic
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`sidebar sidebar-collapsed ${isOpen ? 'sidebar-open' : ''}`}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '280px',
          backgroundColor: 'var(--card-background)',
          borderRight: '1px solid var(--border-color)',
          padding: '20px',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 999,
          transition: 'width 0.3s ease-in-out, padding 0.3s ease-in-out'
        }}
      >
        <div className="sidebar-content" style={{ 
          opacity: 0,
          transition: 'opacity 0.2s ease-in-out'
        }}>
          <h2 style={{
            fontFamily: 'var(--header-font)',
            color: 'var(--primary-color)',
            fontSize: '1.5em',
            marginTop: 0,
            marginBottom: '20px'
          }}>
            📚 Navigation
          </h2>
          
          {/* Onglets */}
          <div style={{ marginBottom: '30px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="sidebar-tab-button"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  marginBottom: '8px',
                  backgroundColor: activeTabId === tab.id ? 'var(--primary-color)' : 'transparent',
                  color: activeTabId === tab.id ? 'white' : 'var(--text-color)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1em',
                  fontFamily: 'var(--body-font)',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  fontWeight: activeTabId === tab.id ? 600 : 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseEnter={(e) => {
                  if (activeTabId !== tab.id) {
                    e.currentTarget.style.backgroundColor = 'var(--code-background)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTabId !== tab.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{tab.id === 'git' ? '🔷' : '📝'}</span>
                <span className="sidebar-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Sections de l'onglet actif */}
          <div>
            <h3 style={{
              fontFamily: 'var(--header-font)',
              color: 'var(--secondary-color)',
              fontSize: '0.85em',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Sections
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {activeTab.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    marginBottom: '0',
                    backgroundColor: activeSectionId === section.id ? 'var(--secondary-color)' : 'transparent',
                    color: activeSectionId === section.id ? 'var(--background-color)' : 'var(--text-color)',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9em',
                    fontFamily: 'var(--body-font)',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    fontWeight: activeSectionId === section.id ? 500 : 400,
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSectionId !== section.id) {
                      e.currentTarget.style.backgroundColor = 'var(--code-background)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSectionId !== section.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Version réduite (icônes uniquement) */}
        <div className="sidebar-collapsed-content" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          paddingTop: '20px'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              title={tab.label}
              style={{
                width: '40px',
                height: '40px',
                padding: '8px',
                backgroundColor: activeTabId === tab.id ? 'var(--primary-color)' : 'transparent',
                color: activeTabId === tab.id ? 'white' : 'var(--text-color)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.2em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activeTabId !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'var(--code-background)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTabId !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {tab.id === 'git' ? '🔷' : '📝'}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

