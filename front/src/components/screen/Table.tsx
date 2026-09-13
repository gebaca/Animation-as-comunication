import type { Member } from '../../mocks/workers';
import Row from './Row';

interface TableProps {
  members: Member[];
  onSelectMember: (member: Member) => void;
  selectedMemberId?: string | null;
}

export default function Table({
  members,
  onSelectMember,
  selectedMemberId,
}: TableProps) {
  return (
    <div className='flex flex-col gap-2.5 w-150.25'>
      {members.map((member) => (
        <Row
          key={member.id}
          member={member}
          onSelect={onSelectMember}
          isSelected={selectedMemberId === member.id}
        />
      ))}
    </div>
  );
}
