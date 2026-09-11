// src/pages/Paper/components/AccessRecordDemo.tsx
import { useState } from 'react';
import BeforeAfterToggle from './BeforeAfterToggle';
import styles from './AccessRecordDemo.module.css';

interface RecordState {
  permissions: string[];
}

const beforeState: RecordState = {
  permissions: ['Read', 'Write', 'Admin'],
};

const afterState: RecordState = {
  permissions: ['Read', 'Write'],
};

const BLANK_DURATION_MS = 200;

export default function AccessRecordDemo() {
  const [current, setCurrent] = useState<RecordState>(beforeState);
  const [isBlank, setIsBlank] = useState(false);

  const handleToggle = (target: 'before' | 'after') => {
    setIsBlank(true);
    setTimeout(() => {
      setCurrent(target === 'before' ? beforeState : afterState);
      setIsBlank(false);
    }, BLANK_DURATION_MS);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {isBlank ? (
          <div className={styles.blankFrame} />
        ) : (
          <>
            <div className={styles.header}>
              <span className={styles.name}>Marco Rossi</span>
              <span className={styles.role}>Access Admin</span>
            </div>
            <ul className={styles.permissions}>
              {current.permissions.map((permission) => (
                <li key={permission} className={styles.permission}>
                  {permission}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <BeforeAfterToggle onChange={handleToggle} />
    </div>
  );
}
