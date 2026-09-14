import type { ReactNode } from 'react';
import styles from './Section.module.css';
import { useSectionFadeIn } from '../../../hooks/useSectionFadeIn';

interface SectionProps {
  number_Section: string;
  title_Section: ReactNode;
  content_Section: ReactNode;
}

export default function Section({
  title_Section,
  content_Section,
  number_Section,
}: SectionProps) {
  const sectionRef = useSectionFadeIn<HTMLElement>({
    xOffset: -50,
    duration: 0.8,
  });

  return (
    <section ref={sectionRef} className={styles.section_Layout}>
      <div className={styles.title_Section}>
        <div className={styles.number_Section}>{number_Section}</div>
        <h2 className={styles.title_Text}>{title_Section}</h2>
      </div>
      <div className={styles.content_Section}>{content_Section}</div>
    </section>
  );
}
