import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import TeamSummary from './TeamSummary';
import UserSummary from './UserSummary';
import { type Member } from '../../mocks/workers';

interface SummaryPanelProps {
  type: 'user' | 'team';
  member: Member | null;
}

export default function SummaryPanel({ type, member }: SummaryPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Calculamos el border-radius objetivo según el tipo
    const targetRadius = type === 'user' ? '12px' : '24px';

    // Animamos simultáneamente la altura al contenido actual y el border-radius
    gsap.to(el, {
      height: 'auto',
      borderRadius: targetRadius,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [type, member]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col w-89.75 bg-(--bg-card) border border-(--border-card) px-2.5 py-2.5 gap-4 overflow-hidden'
    >
      {type === 'user' && member ? (
        <UserSummary member={member} />
      ) : (
        <TeamSummary />
      )}
    </div>
  );
}
