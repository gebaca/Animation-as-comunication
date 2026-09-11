import {
  getRecentTeamChanges,
  getTeamStats,
  members,
  DEPARTMENT_NAME,
} from '../../mocks/workers';
import { formatRelativeHours } from '../../utils/formatTime';

const SEVERITY_STYLES: Record<
  'medium' | 'high',
  { bg: string; accent: string }
> = {
  medium: { bg: 'bg-(--mid-accent)', accent: 'bg-(--mid-main)' },
  high: { bg: 'bg-(--high-accent)', accent: 'bg-(--high-main)' },
};

export default function TeamSummary() {
  const teamStats = getTeamStats(members);
  const recentChanges = getRecentTeamChanges(members);

  return (
    <>
      <h2 className='font-bold text-[15px] pl-2.5'>{DEPARTMENT_NAME}</h2>
      <div className='flex flex-col gap-2.5 px-2.5 py-2.5'>
        <div className='flex gap-2.5 text-(--text-accent)'>
          <div className=' bg-[#E7E7E7] flex flex-col w-full px-2.5'>
            <p className='font-light'>Members</p>
            <p className='font-bold text-[24px]'>{teamStats.totalMembers}</p>
          </div>
          <div className='bg-[#E7E7E7] flex flex-col w-full px-2.5'>
            <p className='font-light'>Admins</p>

            <p className='font-bold text-[24px] '>{teamStats.adminCount}</p>
          </div>
        </div>
      </div>
      <div className='border-t border-(--border-card)' />
      <div className='flex flex-col gap-2.5 px-2.5 py-2.5'>
        {recentChanges.map((member) => {
          const severity = member.recentChange!.severity;
          const styles = SEVERITY_STYLES[severity];

          return (
            <div
              key={member.id}
              className={`flex gap-2.5 items-center ${styles.bg}`}
            >
              <div className={`h-full w-1 ${styles.accent}`} />
              <p>
                {member.name} - permiso editado{' '}
                {formatRelativeHours(member.recentChange!.timestamp)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
