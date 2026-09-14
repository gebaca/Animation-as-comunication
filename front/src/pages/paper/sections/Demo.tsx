import { Link } from 'react-router-dom';
import Section from './Section';
import styles from './Section.module.css';

export default function Demo() {
  return (
    <Section
      number_Section={'04'}
      title_Section={<p className={styles.title_Text}>Demo</p>}
      content_Section={
        <>
          <p>
            Trace tests these principles directly. It simulates a realistic
            access-governance table, replaying the exact same permission change
            under three conditions: silent text-only updates, animation-only
            transitions, and a hybrid combination of motion and redundant text.
          </p>

          <div className={styles.demoWrapper}>
            <img
              src='/gifDemo.gif'
              alt='Trace interactive demo'
              className={styles.gifImage}
            />
            <Link to='/screen' className={styles.demoButton}>
              View interactive demo
            </Link>
          </div>
        </>
      }
    />
  );
}
