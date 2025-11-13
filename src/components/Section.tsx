import { Section as SectionType } from '../types';
import { CommandCard } from './CommandCard';

interface SectionProps {
  section: SectionType;
}

export const Section = ({ section }: SectionProps) => {
  return (
    <section id={section.id} style={{ marginBottom: '30px' }}>
      <h2 style={{
        fontFamily: 'var(--header-font)',
        color: 'var(--secondary-color)',
        borderBottom: '2px solid var(--secondary-color)',
        paddingBottom: '5px',
        marginBottom: '20px',
        fontSize: 'clamp(1.5em, 4vw, 2em)'
      }}>
        {section.title}
      </h2>
      {section.description && (
        <p style={{ marginBottom: '20px' }}>{section.description}</p>
      )}
      {section.commands.map((command) => (
        <CommandCard key={command.id} command={command} />
      ))}
    </section>
  );
};

