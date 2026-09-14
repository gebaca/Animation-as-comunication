import Graphic from '../../../components/paper/Graphic';
import Section from './Section';
import styles from './Section.module.css';

export default function Results() {
  return (
    <Section
      number_Section={'05'}
      title_Section={<p className={styles.title_Text}>Results</p>}
      content_Section={
        <>
          <p>
            Nine participants viewed the same access-governance table twice:
            once under the standard design, once under Trace, in randomized
            order. Before each round, they were asked to name who was on the
            Finance team. That task kept their attention away from the row that
            was about to change.
          </p>
          <Graphic totalParticipants={9} standardNoticed={8} traceNoticed={9} />
          <p>
            Under the standard design, one out of nine participants missed the
            escalation entirely. Afterward, they described the table as
            unchanged.
            <br />
            <br /> Under Trace, all nine participants noticed the change. That
            includes the participant who missed it under the standard design.
            Trace closed the full gap. Nobody did worse under Trace than they
            did under the standard design.
          </p>
        </>
      }
    />
  );
}
