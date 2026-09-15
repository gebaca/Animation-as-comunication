import styles from '../Paper.module.css';
import SvgIcon from '../../../assets/decoLines';

export default function Intro() {
  return (
    <div className='flex flex-col gap-6'>
      <section className={styles.title_Section}>
        <h1 className={styles.title_Text}>
          Animation as <span className={styles.text_Accent}>Functional</span>{' '}
          <br className='hidden sm:block' />
          <span className={styles.text_Accent}>Substitute</span> for Text
        </h1>
        <div className={styles.text_Subtitle}>
          <span className={styles.text_Subtitle_Accent}>Focus </span>over style
        </div>
      </section>
      <SvgIcon />
    </div>
  );
}
