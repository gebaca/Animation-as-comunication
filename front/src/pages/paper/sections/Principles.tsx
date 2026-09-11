import Section from './Section';
import styles from './Section.module.css';
import SvgIconLine from '../../../assets/SvgIconLine';

export default function Principles() {
  return (
    <Section
      number_Section={'03'}
      title_Section={
        <p className={styles.title_Text}>
          The <span className={styles.text_Accent}>Three</span> Principles{' '}
          <br /> for Change Resistant Design
        </p>
      }
      content_Section={
        <div className='gap-6 flex flex-col'>
          <p className='font-bold'>
            {' '}
            <span className={styles.text_Accent}>1.</span> Fewer Changes Are
            Easier To Catch — Change Economy
          </p>
          <p>
            Every simultaneous update dilutes the odds that any single one gets
            noticed. In an access-governance table, a permission change should
            trigger the alarm. A name edit or a timestamp update shouldn't get
            the same treatment.
          </p>
          <SvgIconLine />
          <p className='font-bold'>
            {' '}
            <span className={styles.text_Accent}>2.</span> Attention Follows
            Position, Not Intention — Change Locality
          </p>
          <p>
            A change outside the user's current focal point fails because it
            assumed attention that was never there. Subtlety isn't the problem.
            The eye is already on the status column. A toast notification buried
            in the corner starts from nothing.
          </p>
          <SvgIconLine />
          <p className='font-bold'>
            {' '}
            <span className={styles.text_Accent}>3.</span> A Silent Update Is An
            Invisible One — Change Salience
          </p>
          <p>
            A badge that's always colored competes for attention constantly, and
            gets tuned out. One that stays quiet until it changes only has to
            ask once. That's the one moment it actually matters.
          </p>
        </div>
      }
    />
  );
}
