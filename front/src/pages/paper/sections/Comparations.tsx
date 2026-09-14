import Section from './Section';
import styles from './Section.module.css';
import SvgIconLine from '../../../assets/SvgIconLine';

export default function Comparations() {
  return (
    <Section
      number_Section={'06'}
      title_Section={
        <p className={styles.title_Text}>
          How This Compares <br /> to the Existing Research
        </p>
      }
      content_Section={
        <div className='flex flex-col gap-10'>
          <p>
            Trace's informal test isn't the first evidence that animated
            transitions help viewers track change. It sits at the end of a
            longer, cross-domain line of research asking the same question.
            <br />
            <br />
            In 1999, Benjamin Bederson and Angela Boltman animated a viewpoint
            change in a spatial information system, a family tree explorer.
            Users who saw the animated version reconstructed the tree's
            structure from memory more accurately than users who saw a static
            jump. It cost them nothing in task time.
            <br />
            <br />
            Three years later, Barbara Tversky, Julie Morrison, and Mireille
            Betrancourt reviewed the broader literature and pushed back on that
            optimism. Animation isn't automatically better than a static image.
            What mattered, they argued, was congruence and apprehension. The
            motion had to visually match the change it represented, and the
            viewer had to actually be able to perceive it. That skepticism
            shaped the next decade of work on the question.
            <br />
            <br />
            Jeffrey Heer and George Robertson picked it up in 2007. They ran
            nearly 300 trials testing animated transitions across three kinds of
            statistical charts: bar, pie, and scatter. Well-designed transitions
            significantly improved how well people could track values through a
            change. Badly designed ones did the opposite. Transitions that were
            too complex, or that broke the visual logic of the data, produced
            misreadings instead of preventing them.
            <br />
            <br />
            Trace's own test lands in a domain none of these studies touched. It
            comes nearly two decades after the last of them. The animation-only
            condition drew attention reliably. It just didn't tell anyone what
            had changed. The hybrid condition did two things at once. It matched
            motion to the change itself, and it kept a label legible after the
            motion settled. The border grows more saturated as severity rises,
            and stays in place once the pulse ends.
            <br />
            <br />
            This pattern now spans a spatial tree, a statistical chart, and an
            access-governance table. In every case, motion earned its value by
            representing the change accurately. Moving alone was never enough.
          </p>
          <SvgIconLine />

          <div className='flex flex-col gap-5'>
            <p className='font-bold'>References</p>
            <p>
              <span className={styles.text_Accent}>→</span>Bederson, B. B., &
              Boltman, A. (1999). Does Animation Help Users Build Mental Maps of
              Spatial Information? Proceedings of IEEE InfoVis '99, 28–35.
            </p>
            <SvgIconLine />

            <p>
              <span className={styles.text_Accent}>→</span>Tversky, B.,
              Morrison, J. B., & Betrancourt, M. (2002). Animation: Can it
              facilitate? International Journal of Human-Computer Studies,
              57(4), 247–262.
            </p>
            <SvgIconLine />

            <p>
              <span className={styles.text_Accent}>→</span>Heer, J., &
              Robertson, G. (2007). Animated Transitions in Statistical Data
              Graphics. IEEE Transactions on Visualization and Computer
              Graphics, 13(6), 1240–1247.
            </p>
          </div>
        </div>
      }
    />
  );
}
