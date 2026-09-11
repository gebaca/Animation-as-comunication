import Section from './Section';
import styles from './Section.module.css';
import AccessRecordDemo from '../../../components/paper/AccessRecordDemo';

export default function Example() {
  return (
    <Section
      number_Section={'02'}
      title_Section={
        <p className={styles.title_Text}>
          State Changes <span className={styles.text_Accent}>Vanish</span>
          <br /> In The Space Between Renders
        </p>
      }
      content_Section={
        <>
          <p>
            Every interface that relies on polling creates the exact conditions
            for change blindness...
          </p>
          <AccessRecordDemo />
          <p>
            If you'd looked away for a few seconds, would you have caught it?
          </p>
        </>
      }
    />
  );
}
