import {
  type Member,
  getPermissionRows,
  getPrimaryRole,
} from '../../mocks/workers';
import { formatRelativeHours } from '../../utils/formatTime';

const RESOURCE_LABELS: Record<string, string> = {
  reporting: 'Reporting',
  financeOps: 'Finance Ops',
  userManagement: 'User Management',
};

const TIER_LABELS: Record<string, string> = {
  viewer: 'Viewer',
  editor: 'Editor',
  admin: 'Admin',
};
const SEVERITY_STYLES: Record<
  'medium' | 'high',
  { bg: string; border: string }
> = {
  medium: { bg: 'bg-(--mid-accent)', border: 'bg-(--mid-accent)' },
  high: { bg: 'bg-(--high-accent)', border: 'bg-(--high-accent)' },
};

export default function UserSummary({ member }: { member: Member }) {
  const primaryRole = getPrimaryRole(member);

  return (
    <>
      <div className='flex items-center gap-2.5'>
        <div className='bg-[#E6F1FB] border border-[#D1E0F0] rounded-full w-10 h-10 flex items-center justify-center font-bold text-(--text-body) tracking-wide shrink-0'>
          {member.initials}
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-(--text-title) font-bold leading-4 tracking-wide text-(--text-screen)'>
            {member.name}
          </span>
          <span className='text-(--text-caption) font-normal leading-3 tracking-wide text-gray-500'>
            {member.position}
          </span>
          {primaryRole && (
            <span className='text-(--text-caption) font-normal leading-3 tracking-wide text-gray-500'>
              Access: {TIER_LABELS[primaryRole]}
            </span>
          )}
        </div>
      </div>

      <div className='border-t border-(--border-card) my-2.5' />

      <div className='flex flex-col gap-2.5'>
        {getPermissionRows(member).map((row) => (
          <div
            key={row.resource}
            className='flex justify-between text-(--text-body)'
          >
            <span>{RESOURCE_LABELS[row.resource]}</span>
            <span>{row.tier ? TIER_LABELS[row.tier] : '—'}</span>
          </div>
        ))}
      </div>

      {member.recentChange && (
        <>
          <div className='border-t border-(--border-card) my-2.5' />
          <div
            className={`flex flex-col gap-1 px-2.5 py-2 border ${
              SEVERITY_STYLES[member.recentChange.severity].bg
            } ${SEVERITY_STYLES[member.recentChange.severity].border}`}
          >
            <span className='text-(--text-body) font-bold'>
              {RESOURCE_LABELS[member.recentChange.resource]}
            </span>
            <span className='text-(--text-body) text-gray-700'>
              {member.recentChange.previousTier
                ? TIER_LABELS[member.recentChange.previousTier]
                : '—'}{' '}
              →{' '}
              {member.recentChange.currentTier
                ? TIER_LABELS[member.recentChange.currentTier]
                : '—'}
            </span>
            <span className='text-(--text-caption) text-gray-500'>
              {formatRelativeHours(member.recentChange.timestamp)}
            </span>
          </div>
        </>
      )}
    </>
  );
}
