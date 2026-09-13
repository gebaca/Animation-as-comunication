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

  // Maneja el toggle (si ya está seleccionado, lo desselecciona)
  const handleSelectMember = (member: Member) => {
    setSelectedMember((prev) => (prev?.id === member.id ? null : member));
  };

  // Vuelve a 'team' si se clica en la zona exterior
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedMember(null);
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className='flex min-h-screen min-w-screen px-50 py-30'
    >
      <div className='flex flex-col gap-15'>
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
        <div className='flex gap-12'>
          <Table
            members={filteredMembers}
            onSelectMember={handleSelectMember}
            selectedMemberId={selectedMember?.id ?? null}
          />
          <SummaryPanel
            type={selectedMember ? 'user' : 'team'}
            member={selectedMember}
          />
        </div>
      </div>
    </div>
  );
}
