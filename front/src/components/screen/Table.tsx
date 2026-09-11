import type { Member } from '../../mocks/workers';
import Row from './Row';

interface TableProps {
  members: Member[];
  onSelectMember: (member: Member) => void;
}

export default function Table({ members, onSelectMember }: TableProps) {
  return (
    <div className='flex flex-col gap-2.5'>
      {members.map((member) => (
        <Row key={member.id} member={member} onSelect={onSelectMember} />
      ))}
    </div>
  );
}
