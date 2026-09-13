import {
  getRecentTeamChanges,
  getTeamStats,
  DEPARTMENT_NAME,
  type Member,
} from '../../mocks/workers';
import { formatRelativeHours } from '../../utils/formatTime';
import { SEVERITY_STYLES } from '../../utils/severityStyles';

interface TeamSummaryProps {
  members: Member[];
  onSelectMember: (member: Member) => void;
}

export default function TeamSummary({
  onSelectMember,
  members,
}: TeamSummaryProps) {
  const teamStats = getTeamStats(members);
  const recentChanges = getRecentTeamChanges(members);

  return (
    <>
      <h2 className='font-bold text-[length:var(--text-title)] text-(--text-screen) pl-2.5'>
        {DEPARTMENT_NAME}
      </h2>
      <div className='flex flex-col gap-2.5 px-2.5 py-2.5'>
        <div className='flex gap-2.5 text-(--text-accent)'>
          <div className='bg-[#E7E7E7] flex flex-col w-full px-2.5 py-1 rounded-[var(--radius-row)]'>
            <p className='font-light text-[length:var(--text-caption)] text-(--text-secondary-screen)'>
              Members
            </p>
            <p className='font-bold text-[24px] leading-tight'>
              {teamStats.totalMembers}
            </p>
          </div>
          <div className='bg-[#E7E7E7] flex flex-col w-full px-2.5 py-1 rounded-[var(--radius-row)]'>
            <p className='font-light text-[length:var(--text-caption)] text-(--text-secondary-screen)'>
              Admins
            </p>
            <p className='font-bold text-[24px] leading-tight'>
              {teamStats.adminCount}
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-(--border-card)' />
      <div className='flex flex-col gap-2.5 px-2.5 py-2.5'>
        {recentChanges.map((member) => {
          const severity = member.recentChange!.severity;
          const styles = SEVERITY_STYLES[severity];

          return (
            <button
              key={member.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectMember(member);
              }}
              className={`flex gap-2.5 items-stretch rounded-[var(--radius-row)] overflow-hidden text-left transition-colors duration-200 hover:brightness-95 ${styles.bg}`}
            >
              <div className={`w-1 shrink-0 self-stretch ${styles.accent}`} />
              <p className='text-[length:var(--text-body)] text-(--text-screen) py-1.5 pr-2'>
                {member.name} - permiso editado{' '}
                {formatRelativeHours(member.recentChange!.timestamp)}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}
