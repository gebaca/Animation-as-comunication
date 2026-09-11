import Section from './Section';
import styles from '../Paper.module.css';

export default function Abstract() {
  return (
    <Section
      number_Section={'01'}
      title_Section={<p className={styles.title_Section}>Abstract</p>}
      content_Section={
        <p>
          State changes in B2B interfaces routinely go unnoticed. This is change
          blindness, a documented failure of attention, and it remains largely
          unexplored for high-stakes interfaces like access governance. That gap
          persists even as evidence for animated transitions in data
          visualization keeps growing.
          <br />
          <br />
          This work proposes three principles for change resistant design:
          Change Economy, Change Locality, and Change Salience. They are tested
          through Trace, a prototype comparing text-only, animation-only, and
          hybrid conditions on a real access-governance scenario. The goal is
          not to show that animation is always better. It is to identify when
          animation functions as communication instead of decoration.
        </p>
      }
    />
  );
}
