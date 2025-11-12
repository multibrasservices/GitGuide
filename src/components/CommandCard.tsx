import { useState } from 'react';
import { Command } from '../types';
import { copyToClipboard } from '../utils/copyToClipboard';

interface CommandCardProps {
  command: Command;
}

export const CommandCard = ({ command }: CommandCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!command.command) return;
    
    const success = await copyToClipboard(command.command);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!command.command) {
    return (
      <div className="command-card" style={{
        backgroundColor: 'var(--card-background)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, background-color 0.3s'
      }}>
        <h3 style={{ marginTop: 0, color: 'var(--primary-color)' }}>{command.title}</h3>
        <p>{command.description}</p>
      </div>
    );
  }

  return (
    <div className="command-card" style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out, background-color 0.3s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <h3 style={{ marginTop: 0, color: 'var(--primary-color)' }}>{command.title}</h3>
      <p>{command.description}</p>
      <div style={{ marginBottom: command.exampleOutput ? '20px' : '0' }}>
        <pre style={{
          backgroundColor: 'var(--code-background)',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid var(--border-color)',
          position: 'relative',
          overflowX: 'auto',
          margin: 0
        }}>
          <code style={{
            fontFamily: '\'Fira Code\', \'Courier New\', monospace',
            color: 'var(--text-color)',
            whiteSpace: 'pre-wrap'
          }}>
            {command.command}
          </code>
          <button
            className="copy-btn"
            onClick={handleCopy}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color)';
            }}
          >
            {copied ? 'Copié !' : 'Copier'}
          </button>
        </pre>
      </div>
      {command.exampleOutput && (
        <div>
          <p style={{ 
            marginTop: '15px', 
            marginBottom: '10px', 
            fontSize: '0.9em', 
            color: 'var(--secondary-color)',
            fontWeight: 500
          }}>
            📋 Exemple de sortie :
          </p>
          <pre style={{
            backgroundColor: 'var(--code-background)',
            padding: '15px',
            borderRadius: '5px',
            border: '1px solid var(--border-color)',
            overflowX: 'auto',
            margin: 0,
            opacity: 0.9
          }}>
            <code style={{
              fontFamily: '\'Fira Code\', \'Courier New\', monospace',
              color: 'var(--text-color)',
              whiteSpace: 'pre-wrap',
              fontSize: '0.9em'
            }}>
              {command.exampleOutput}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

