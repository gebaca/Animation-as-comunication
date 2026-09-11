// src/pages/Paper/components/BeforeAfterToggle.tsx
import { useState } from 'react';
import styles from './BeforeAfterToggle.module.css';

interface BeforeAfterToggleProps {
  onChange: (state: 'before' | 'after') => void;
}

export default function BeforeAfterToggle({
  onChange,
}: BeforeAfterToggleProps) {
  const [active, setActive] = useState<'before' | 'after'>('before');

  const handleClick = (state: 'before' | 'after') => {
    setActive(state);
    onChange(state);
  };

  return (
    <div className={styles.toggle}>
      <button
        className={`${styles.button} ${active === 'before' ? styles.active : ''}`}
        onClick={() => handleClick('before')}
      >
        Before
      </button>
      <button
        className={`${styles.button} ${active === 'after' ? styles.active : ''}`}
        onClick={() => handleClick('after')}
      >
        After
      </button>
    </div>
  );
}
