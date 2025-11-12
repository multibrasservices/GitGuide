interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarToggle = ({ isOpen, onToggle }: SidebarToggleProps) => {
  return (
    <button
      className="sidebar-toggle"
      onClick={onToggle}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1001,
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 15px',
        cursor: 'pointer',
        fontSize: '1.2em',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--primary-color)';
      }}
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );
};

