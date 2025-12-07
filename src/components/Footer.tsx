export const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '40px',
      fontStyle: 'italic',
      color: '#777'
    }}>
      <p>Créé avec ❤️ pour aider les développeurs à démarrer.</p>
      <p>&copy; 2025 MultiBrasServices</p>
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        fontSize: '0.8em',
        color: '#777'
      }}>
        v07.12.25
      </div>
    </footer>
  );
};

