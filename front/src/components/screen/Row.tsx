// src/components/screen/Row.tsx
import type { Member } from '../../mocks/workers';
import { getPrimaryRole } from '../../mocks/workers';

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

  return (
    <button
      onClick={() => onSelect(member)}
      className={`flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg border ${
        severity === 'high'
          ? 'border-(--high-main)'
          : severity === 'medium'
            ? 'border-(--mid-main)'
            : 'border-(--border-row)'
      }`}
    >
      <div className='bg-[#E6F1FB] border border-[#D1E0F0] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[12px] tracking-wide shrink-0'>
        {member.initials}
      </div>
      <div className='flex flex-col'>
        <span className='text-[13px] font-bold leading-4 text-gray-900'>
          {member.name}
        </span>
        <span className='text-[11px] text-gray-500'>{member.position}</span>
      </div>
      {primaryRole && (
        <span className='ml-auto text-[11px] text-gray-500'>
          {TIER_LABELS[primaryRole]}
        </span>
      )}
    </button>
  );
}
