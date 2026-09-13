import { useEffect, useState } from 'react';
import SearchBar from '../../components/screen/SearchBar';
import Table from '../../components/screen/Table';
import SummaryPanel from '../../components/screen/SummaryPanel';
import {
  members as initialMembers,
  getTeamStats,
  searchMembers,
  applyRandomChange,
  type Member,
} from '../../mocks/workers';

const RANDOM_CHANGE_INTERVAL_MS = 10000;

export default function Screen() {
  const [membersState, setMembersState] = useState<Member[]>(initialMembers);
  const [text, setText] = useState('');
  const [onlyAdmins, setOnlyAdmins] = useState(false);
  const [onlyRecentChanges, setOnlyRecentChanges] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  /*const handleReset = () => {
    setMembersState(initialMembersSnapshot);
    setSelectedMember(null);
  };*/

  useEffect(() => {
    const interval = setInterval(() => {
      setMembersState((prev) => applyRandomChange(prev));
    }, RANDOM_CHANGE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const stats = getTeamStats(membersState);
  const filteredMembers = searchMembers(
    membersState,
    text,
    onlyAdmins,
    onlyRecentChanges
  );

  const handleSelectMember = (member: Member) => {
    setSelectedMember((prev) => (prev?.id === member.id ? null : member));
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedMember(null);
    }
  };

  // Si el seleccionado recibió un cambio nuevo, mantenemos la referencia actualizada.
  const currentSelectedMember = selectedMember
    ? (membersState.find((m) => m.id === selectedMember.id) ?? null)
    : null;

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
            selectedMemberId={currentSelectedMember?.id ?? null}
          />
          <SummaryPanel
            type={currentSelectedMember ? 'user' : 'team'}
            member={currentSelectedMember}
            members={membersState}
            onSelectMember={handleSelectMember}
          />
        </div>
      </div>
    </div>
  );
}
