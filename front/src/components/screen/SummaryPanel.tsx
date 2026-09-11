import TeamSummary from './TeamSummary';
import UserSummary from './UserSummary';
import { type Member } from '../../mocks/workers';

interface SummaryPanelProps {
  type: 'user' | 'team';
  member: Member | null;
}

export default function SummaryPanel({ type, member }: SummaryPanelProps) {
  return (
    <div className='flex flex-col w-89.75 bg-(--bg-card) border border-(--border-card) px-2.5 py-2.5 gap-4'>
      {type === 'user' && member && <UserSummary member={member} />}
      {type === 'team' && <TeamSummary />}
    </div>
  );
}
