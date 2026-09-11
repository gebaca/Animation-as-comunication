import { useRef, useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
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

  const [displayedContent, setDisplayedContent] = useState<{
    type: 'user' | 'team';
    member: Member | null;
  }>({ type, member });

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const targetRadius = type === 'user' ? '12px' : '24px';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl
        // 1. Fade Out del contenido antiguo
        .to(content, {
          opacity: 0,
          y: -4,
          duration: 0.12,
          ease: 'power2.in',
          onComplete: () => {
            // Forzamos el render síncrono del nuevo DOM para medir la altura exacta
            flushSync(() => {
              setDisplayedContent({ type, member });
            });
          },
        })
        // 2. Animación de Altura + Border Radius (el contenido ya es el nuevo pero sigue transparente)
        .add(() => {
          const startHeight = container.offsetHeight;

          // Medimos el alto real del nuevo JSX
          gsap.set(container, { height: 'auto' });
          const targetHeight = container.scrollHeight;

          // Devolvemos el tween a la Timeline para que bloquee el paso al Fade In
          return gsap.fromTo(
            container,
            { height: startHeight },
            {
              height: targetHeight,
              borderRadius: targetRadius,
              duration: 0.32,
              ease: 'back.out(0.6)', // Curva elástica suave para dar sensación orgánica
              onComplete: () => {
                gsap.set(container, { height: 'auto' });
              },
            }
          );
        })
        // 3. Fade In + entrada suave del nuevo contenido
        .fromTo(
          content,
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power2.out',
          }
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [type, member]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col w-89.75 bg-(--bg-card) border border-(--border-card) px-2.5 py-2.5 gap-4 overflow-hidden self-start shrink-0'
    >
      <div ref={contentRef} className='flex flex-col gap-4 w-full'>
        {displayedContent.type === 'user' && displayedContent.member ? (
          <UserSummary member={displayedContent.member} />
        ) : (
          <TeamSummary />
        )}
      </div>
    </div>
  );
}
