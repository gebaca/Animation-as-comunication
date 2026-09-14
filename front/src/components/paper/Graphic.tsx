interface GraphicProps {
  title?: string;
  totalParticipants: number;
  standardNoticed: number;
  traceNoticed: number;
}

export default function Graphic({
  title,
  totalParticipants,
  standardNoticed,
  traceNoticed,
}: GraphicProps) {
  const chartTop = 100;
  const baselineY = 280;
  const unitHeight = (baselineY - chartTop) / totalParticipants;

  const barWidth = 80;
  const bar1X = 210;
  const bar2X = 390;

  const bar1Height = standardNoticed * unitHeight;
  const bar2Height = traceNoticed * unitHeight;

  return (
    <svg
      width='100%'
      viewBox='0 0 680 360'
      role='img'
      style={{ display: 'block' }}
    >
      <desc>
        Standard design: {standardNoticed} of {totalParticipants} participants
        noticed the change. Trace: {traceNoticed} of {totalParticipants}{' '}
        participants noticed the change.
      </desc>
      <text
        x={40}
        y={66}
        fontSize={20}
        fontWeight={700}
        fill='var(--text-paper, #000)'
      >
        {title}
      </text>

      <line
        x1={100}
        y1={baselineY}
        x2={580}
        y2={baselineY}
        stroke='var(--line-paper, #B9CBE0)'
        strokeWidth={1.5}
      />

      <rect
        x={bar1X}
        y={baselineY - bar1Height}
        width={barWidth}
        height={bar1Height}
        rx={3}
        fill='var(--accent-paper, #5daced)'
      />
      <text
        x={bar1X + barWidth / 2}
        y={baselineY - bar1Height - 12}
        textAnchor='middle'
        fontSize={13}
        fontWeight={700}
        fill='var(--text-paper, #000)'
      >
        {standardNoticed} of {totalParticipants}
      </text>
      <text
        x={bar1X + barWidth / 2}
        y={baselineY + 24}
        textAnchor='middle'
        fontSize={13}
        fill='var(--text-paper, #000)'
      >
        Standard design
      </text>

      <rect
        x={bar2X}
        y={baselineY - bar2Height}
        width={barWidth}
        height={bar2Height}
        rx={3}
        fill='var(--accent-paper, #5daced)'
      />
      <text
        x={bar2X + barWidth / 2}
        y={baselineY - bar2Height - 12}
        textAnchor='middle'
        fontSize={13}
        fontWeight={700}
        fill='var(--text-paper, #000)'
      >
        {traceNoticed} of {totalParticipants}
      </text>
      <text
        x={bar2X + barWidth / 2}
        y={baselineY + 24}
        textAnchor='middle'
        fontSize={13}
        fill='var(--text-paper, #000)'
      >
        Trace
      </text>
    </svg>
  );
}
