import Section from './Section';
import styles from './Section.module.css';

export default function Conclusion() {
  return (
    <Section
      number_Section={'07'}
      title_Section={
        <p className={styles.title_Text}>
          What This Project Argues,
          <br /> and What It Doesn't
        </p>
      }
      content_Section={
        <p>
          Noticing a change and understanding a change are two different
          perceptual tasks. Most interfaces only attempt the first, and some
          don't even manage that. Animation alone draws the eye, but it doesn't
          name what moved. Text alone names it, but only for someone already
          looking. The hybrid condition did both. Motion drew attention, and a
          label survived once the motion settled. It was the only condition
          where noticing and correct identification converged.
          <br />
          <br />
          That distinction matters most in the interfaces least often designed
          for it. In an entitlement or access-governance system, a missed state
          change isn't a cosmetic failure. It's an unreviewed privilege
          escalation sitting in plain sight. A like-counter can afford to go
          unnoticed. A permissions table can't. Nobody ever finds out the gap
          was there.
          <br />
          <br />
          This project doesn't claim more than what it tested. Eight
          participants, one interface pattern, one domain, one afternoon. That's
          enough to show a real pattern. It isn't enough to call this a
          validated design system. The right way to read it is as an argument
          for running this test properly, inside the governance tools people
          actually use.
          <br />
          <br />
          One constraint shaped every decision in this table, and it generalizes
          past it. A visual signal should mean exactly one thing at a time.
          Severity color never appears without a change behind it. The essay
          you're reading and the product it describes don't share a palette. The
          tutorial layer dims everything except what it's explaining. None of
          that is decoration. It's the same rule, applied three times over.
        </p>
      }
    />
  );
}
