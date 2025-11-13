export const Header = () => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '10px' }}>
      <h1 style={{ 
        fontFamily: 'var(--header-font)', 
        color: 'var(--primary-color)', 
        fontSize: 'clamp(1.8em, 5vw, 2.5em)', 
        margin: 0,
        lineHeight: 1.2
      }}>
        🚀 Guide Git pour le Vibe Coding
      </h1>
      <p style={{ 
        marginTop: '10px', 
        fontSize: 'clamp(0.95em, 3vw, 1.1em)',
        padding: '0 10px'
      }}>
        Votre filet de sécurité pour coder avec l'IA sans crainte.
      </p>
    </header>
  );
};

