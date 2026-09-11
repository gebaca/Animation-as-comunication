import { useState } from 'react';
import SearchBar from '../../components/screen/SearchBar';
import Table from '../../components/screen/Table';
import SummaryPanel from '../../components/screen/SummaryPanel';
import {
  members,
  getTeamStats,
  searchMembers,
  type Member,
} from '../../mocks/workers';

export default function Screen() {
  const [text, setText] = useState('');
  const [onlyAdmins, setOnlyAdmins] = useState(false);
  const [onlyRecentChanges, setOnlyRecentChanges] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const stats = getTeamStats(members);
  const filteredMembers = searchMembers(
    members,
    text,
    onlyAdmins,
    onlyRecentChanges
  );

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-2.5'>
        <SearchBar
          text={text}
          onTextChange={setText}
          onlyAdmins={onlyAdmins}
          onToggleAdmins={() => setOnlyAdmins((prev) => !prev)}
          onlyRecentChanges={onlyRecentChanges}
          onToggleRecentChanges={() => setOnlyRecentChanges((prev) => !prev)}
          adminCount={stats.adminCount}
          recentChangesCount={stats.recentChangesCount}
        />
        <Table members={filteredMembers} onSelectMember={setSelectedMember} />
      </div>

      {selectedMember ? (
        <SummaryPanel type='user' member={selectedMember} />
      ) : (
        <SummaryPanel type='team' member={null} />
      )}
    </div>
  );
}
