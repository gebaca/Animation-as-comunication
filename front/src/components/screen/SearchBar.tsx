import { useRef } from 'react';
import gsap from 'gsap';

interface SearchBarProps {
  text: string;
  onTextChange: (text: string) => void;
  onlyAdmins: boolean;
  onToggleAdmins: () => void;
  onlyRecentChanges: boolean;
  onToggleRecentChanges: () => void;
  adminCount: number;
  recentChangesCount: number;
}

export default function SearchBar({
  text,
  onTextChange,
  onlyAdmins,
  onToggleAdmins,
  onlyRecentChanges,
  onToggleRecentChanges,
  adminCount,
  recentChangesCount,
}: SearchBarProps) {
  const pulseBgRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Inicializamos o recuperamos la línea de tiempo de la animación
  const getTimeline = () => {
    if (timelineRef.current) return timelineRef.current;

    const pulse = pulseBgRef.current;
    const icon = iconRef.current;
    if (!pulse || !icon) return null;

    const tl = gsap.timeline({ paused: true });

    // 1. Expansión circular del fondo desde la posición exacta del SVG (x: ~18px, y: 50%)
    tl.fromTo(
      pulse,
      {
        clipPath: 'circle(0% at 18px 50%)',
        opacity: 1,
      },
      {
        clipPath: 'circle(150% at 18px 50%)',
        duration: 0.45,
        ease: 'power2.out',
      },
      0
    );

    // 2. Micro-pulso elástico en el icono de la lupa
    tl.fromTo(
      icon,
      { scale: 1 },
      {
        scale: 1.15,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      },
      0
    );

    timelineRef.current = tl;
    return tl;
  };

  // Al enfocar (clic en la barra o input) -> Expandir desde la lupa
  const handleFocus = () => {
    const tl = getTimeline();
    tl?.play();
  };

  // Al perder el foco (clic fuera de la barra) -> Revertir suavemente
  const handleBlur = () => {
    const tl = getTimeline();
    tl?.reverse();
  };

  return (
    <div className='flex flex-col gap-2 w-258'>
      {/* Contenedor principal que reacciona al clic/focus */}
      <div
        className='relative flex flex-row items-center bg-gray-200 px-3 py-2 rounded-full overflow-hidden cursor-text'
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {/* Fondo animado que se expande desde la lupa */}
        <div
          ref={pulseBgRef}
          className='absolute inset-0 bg-[#d4d4d4]/53 pointer-events-none'
          style={{ clipPath: 'circle(0% at 18px 50%)' }}
        />

        {/* Lupa (SVG) */}
        <svg
          ref={iconRef}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='relative z-10 h-5 w-5 text-gray-500 shrink-0 pointer-events-none'
        >
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>

        {/* Campo de texto */}
        <input
          type='search'
          className='relative z-10 ml-2 flex-auto bg-transparent text-base font-normal leading-[1.6] text-neutral-700 outline-none placeholder:text-neutral-500'
          placeholder='Search'
          aria-label='Search'
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
        />
      </div>

      <div className='flex gap-3 px-2 text-[12px] text-gray-500'>
        <button
          type='button'
          onClick={onToggleAdmins}
          className={onlyAdmins ? 'font-bold text-black' : ''}
        >
          {adminCount} admins
        </button>
        <span>·</span>
        <button
          type='button'
          onClick={onToggleRecentChanges}
          className={onlyRecentChanges ? 'font-bold text-black' : ''}
        >
          {recentChangesCount} recent changes
        </button>
      </div>
    </div>
  );
}
