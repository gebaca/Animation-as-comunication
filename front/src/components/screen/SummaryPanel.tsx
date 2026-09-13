import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const [displayed, setDisplayed] = useState<{
    type: 'user' | 'team';
    member: Member | null;
  }>({ type, member });

  // Ref espejo de `displayed`, para leer siempre el valor actual sin
  // que el useEffect necesite volver a dispararse cuando displayed cambia.
  const displayedRef = useRef(displayed);
  useEffect(() => {
    displayedRef.current = displayed;
  }, [displayed]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const current = displayedRef.current;
    if (current.type === type && current.member?.id === member?.id) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    gsap.killTweensOf(container);
    gsap.killTweensOf(content);

    const currentHeight = container.offsetHeight;
    const exitRadius = type === 'user' ? '4px' : '16px';

    const tl = gsap.timeline();
    tl.set(container, { height: currentHeight });
    tl.to(content, { opacity: 0, duration: 0.15, ease: 'power1.out' });
    tl.to(
      container,
      { borderRadius: exitRadius, duration: 0.25, ease: 'power2.inOut' },
      '<'
    );
    tl.call(() => setDisplayed({ type, member }));

    return () => {
      tl.kill();
    };
  }, [type, member]);

  useLayoutEffect(() => {
    if (isFirstRender.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    gsap.killTweensOf(container);
    gsap.killTweensOf(content);

    const startHeight = container.offsetHeight;

    gsap.set(content, { opacity: 0 });
    gsap.set(container, { height: 'auto' });
    const targetHeight = container.scrollHeight;

    const enterRadius = displayed.type === 'user' ? '16px' : '4px';

    const tl = gsap.timeline();
    tl.fromTo(
      container,
      { height: startHeight },
      {
        height: targetHeight,
        borderRadius: enterRadius,
        duration: 0.35,
        ease: 'power2.out',
      }
    )
      .to(content, { opacity: 1, duration: 0.2, ease: 'power1.in' }, '-=0.05')
      .set(container, { height: 'auto' });

    return () => {
      tl.kill();
    };
  }, [displayed]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col w-100 bg-(--bg-card) border border-(--border-card) px-3 py-5 overflow-hidden self-start shrink-0'
    >
      <div ref={contentRef}>
        {displayed.type === 'user' && displayed.member && (
          <UserSummary member={displayed.member} />
        )}
        {displayed.type === 'team' && <TeamSummary />}
      </div>
    </div>
  );
}
