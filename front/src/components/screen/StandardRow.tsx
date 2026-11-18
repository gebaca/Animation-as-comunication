import type { Member } from '../../mocks/workers';
import { getPrimaryRole } from '../../mocks/workers';

interface RowProps {
  member: Member;
  onSelect: (member: Member) => void;
  isSelected: boolean;
}

const TIER_LABELS: Record<string, string> = {
  viewer: 'Viewer',
  editor: 'Editor',
  admin: 'Admin',
};

/**
 * Fila "estándar": así se representa normalmente un miembro en un listado de
 * permisos. Mismo layout y tokens que Row, pero sin señal de cambio:
 * - sin pulso GSAP
 * - sin borde ni fondo de avatar por severidad
 * - member.recentChange se ignora a propósito
 * Si el rol cambia, solo cambia el texto de la etiqueta de la derecha.
 */
export default function StandardRow({
  member,
  onSelect,
  isSelected,
}: RowProps) {
  const primaryRole = getPrimaryRole(member);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSelect(member);
      }}
      className={`relative flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg border border-(--border-row) transition-colors duration-200 ease-out hover:bg-(--hover-row) ${
        isSelected ? 'bg-(--click-row)' : 'bg-(--bg-row)'
      }`}
    >
      <div className='border border-[#D1E0F0] bg-[#E6F1FB] rounded-full w-8 h-8 flex items-center justify-center font-bold text-(--text-caption) tracking-wide shrink-0'>
        {member.initials}
      </div>
      <div className='flex flex-col'>
        <span className='text-(--text-label) font-bold leading-4'>
          {member.name}
        </span>
        <span className='text-(--text-caption)'>{member.position}</span>
      </div>
      {primaryRole && (
        <span className='ml-auto text-(--text-caption)'>
          {TIER_LABELS[primaryRole]}
        </span>
      )}
    </button>
  );
}
