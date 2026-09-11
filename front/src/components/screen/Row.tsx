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

export default function Row({ member, onSelect }: RowProps) {
  const primaryRole = getPrimaryRole(member);
  const severity = member.recentChange?.severity;
  const borderClass = severity
    ? SEVERITY_STYLES[severity].bg
    : 'border-(--border-row)';

  return (
    <button
      onClick={() => onSelect(member)}
      className={`flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg border bg-(--bg-row) ${borderClass}`}
    >
      <div className='bg-[#E6F1FB] border border-[#D1E0F0] rounded-full w-8 h-8 flex items-center justify-center font-bold text-(--text-caption) tracking-wide shrink-0'>
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
