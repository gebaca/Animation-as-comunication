import {
  type Member,
  getPermissionRows,
  getPrimaryRole,
} from '../../mocks/workers';
import { formatRelativeHours } from '../../utils/formatTime';
import { SEVERITY_STYLES } from '../../utils/severityStyles';

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

export default function UserSummary({ member }: { member: Member }) {
  const primaryRole = getPrimaryRole(member);

  return (
    <>
      <div className='flex items-center gap-2.5'>
        <div className='bg-[#E6F1FB] border border-[#D1E0F0] rounded-full w-10 h-10 flex items-center justify-center font-bold text-[length:var(--text-body)] tracking-wide shrink-0'>
          {member.initials}
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-bold leading-4 tracking-wide text-(--text-screen)'>
            {member.name}
          </span>
          <span className='text-[length:var(--text-caption)] font-normal leading-3 tracking-wide text-gray-500'>
            {member.position}
          </span>
          {primaryRole && (
            <span className='text-[length:var(--text-caption)] font-normal leading-3 tracking-wide text-gray-500'>
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
            className='flex justify-between text-[length:var(--text-body)]'
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
            className={`flex items-stretch rounded-[var(--radius-row)] ${
              SEVERITY_STYLES[member.recentChange.severity].bg
            }`}
          >
            <div
              className={`w-1 shrink-0 self-stretch ${SEVERITY_STYLES[member.recentChange.severity].accent}`}
            />
            <div className='flex flex-col gap-1 px-2.5 py-2'>
              <span className='text-[length:var(--text-body)] font-bold'>
                {RESOURCE_LABELS[member.recentChange.resource]}
              </span>
              <span className='text-[length:var(--text-body)] text-gray-700'>
                {member.recentChange.previousTier
                  ? TIER_LABELS[member.recentChange.previousTier]
                  : '—'}{' '}
                →{' '}
                {member.recentChange.currentTier
                  ? TIER_LABELS[member.recentChange.currentTier]
                  : '—'}
              </span>
              <span className='text-[length:var(--text-caption)] text-gray-500'>
                {formatRelativeHours(member.recentChange.timestamp)}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
