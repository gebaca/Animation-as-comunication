import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { Member } from '../../mocks/workers';
import { getPrimaryRole } from '../../mocks/workers';
import { SEVERITY_STYLES } from '../../utils/severityStyles';

interface RowProps {
  member: Member;
  onSelect: (member: Member) => void;
}

const TIER_LABELS: Record<string, string> = {
  viewer: 'Viewer',
  editor: 'Editor',
  admin: 'Admin',
};

const SEVERITY_SCALE: Record<'medium' | 'high', { max: number; min: number }> =
  {
    high: { max: 1.05, min: 1.04 },
    medium: { max: 1.04, min: 1.03 },
  };

function extractCssVar(tailwindClass: string): string {
  const match = tailwindClass.match(/\(([^)]+)\)/);
  return match ? `var(${match[1]})` : '';
}

export default function Row({ member, onSelect }: RowProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const stoppedRef = useRef(false);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  const primaryRole = getPrimaryRole(member);
  const severity = member.recentChange?.severity;

  const avatarBgClass = severity
    ? SEVERITY_STYLES[severity].bg
    : 'bg-[#E6F1FB]';
  const borderColor = severity
    ? extractCssVar(SEVERITY_STYLES[severity].accent)
    : 'var(--border-row)';

  useGSAP(
    (_context, contextSafe) => {
      const el = containerRef.current;
      const pulseEl = pulseRef.current;
      if (!el || !pulseEl || !contextSafe) return;

      stoppedRef.current = false;

      const fireClickPulse = () => {
        gsap.set(pulseEl, {
          opacity: 0.5,
          scaleX: 1.02,
          scaleY: 1.2,
          backgroundColor: 'var(--border-row)',
        });
        gsap.to(pulseEl, {
          //scaleX: 0.9,
          //scaleY: 0.9,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      };

      const scheduleFlagPulse = (
        color: string,
        iteration: number,
        baseOpacity: number
      ) => {
        if (stoppedRef.current || baseOpacity <= 0) return;

        const range = SEVERITY_SCALE[severity as 'medium' | 'high'];
        const step = (range.max - range.min) / 2;
        const positionInCycle = iteration % 3;
        const targetScale = range.max - step * positionInCycle;

        gsap.set(pulseEl, {
          opacity: baseOpacity,
          scaleX: 1,
          scaleY: 1,
          backgroundColor: color,
        });

        activeTweenRef.current = gsap.to(pulseEl, {
          scaleX: targetScale,
          scaleY: targetScale + 0.3,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: iteration === 0 ? 0 : 0.2,
          onComplete: () => {
            const nextIteration = iteration + 1;
            const nextOpacity =
              nextIteration % 3 === 0
                ? Math.round((baseOpacity - 0.1) * 10) / 10
                : baseOpacity;
            scheduleFlagPulse(color, nextIteration, nextOpacity);
          },
        });
      };

      const onClick = contextSafe(() => {
        stoppedRef.current = true;
        activeTweenRef.current?.kill();
        fireClickPulse();
      });

      el.addEventListener('click', onClick);

      if (severity === 'high' || severity === 'medium') {
        const colorVar = extractCssVar(SEVERITY_STYLES[severity].accent);
        scheduleFlagPulse(colorVar, 0, 0.6);
      }

      return () => {
        stoppedRef.current = true;
        el.removeEventListener('click', onClick);
      };
    },
    { scope: containerRef, dependencies: [severity] }
  );

  return (
    <button
      ref={containerRef}
      onClick={() => onSelect(member)}
      style={{ borderColor }}
      className='relative flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg overflow-visible border bg-(--bg-row) transition-colors duration-200 ease-out hover:bg-[#ebebee]'
    >
      <div
        ref={pulseRef}
        className='z-[-1] absolute inset-0 rounded-lg pointer-events-none opacity-0'
      />
      <div
        className={`border border-[#D1E0F0] rounded-full w-8 h-8 flex items-center justify-center font-bold text-(--text-caption) tracking-wide shrink-0 ${avatarBgClass}`}
      >
        {member.initials}
      </div>
      <div className='flex flex-col'>
        <span className='text-(--text-label) font-bold leading-4 text-(--text-screen)'>
          {member.name}
        </span>
        <span className='text-(--text-caption) text-(--text-secondary-screen)'>
          {member.position}
        </span>
      </div>
      {primaryRole && (
        <span className='ml-auto text-(--text-caption) text-(--text-secondary-screen)'>
          {TIER_LABELS[primaryRole]}
        </span>
      )}
    </button>
  );
}
