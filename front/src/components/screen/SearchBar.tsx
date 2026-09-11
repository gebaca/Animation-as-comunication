interface SearchBarProps {
  text: string;
  onTextChange: (text: string) => void;
  onlyAdmins: boolean;
  onToggleAdmins: () => void;
  onlyRecentChanges: boolean;
  onToggleRecentChanges: () => void;
  adminCount: number;
  recentChangesCount: number;
}

export default function SearchBar({
  text,
  onTextChange,
  onlyAdmins,
  onToggleAdmins,
  onlyRecentChanges,
  onToggleRecentChanges,
  adminCount,
  recentChangesCount,
}: SearchBarProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center bg-gray-200 p-2 rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='grey'
          className='h-5 w-5'
        >
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>
        <input
          type='search'
          className='ml-2 flex-auto bg-transparent text-base font-normal leading-[1.6] text-neutral-700 outline-none placeholder:text-neutral-500'
          placeholder='Search'
          aria-label='Search'
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
        />
      </div>

      <div className='flex gap-3 px-2 text-[12px] text-gray-500'>
        <button
          type='button'
          onClick={onToggleAdmins}
          className={onlyAdmins ? 'font-bold text-black' : ''}
        >
          {adminCount} admins
        </button>
        <span>·</span>
        <button
          type='button'
          onClick={onToggleRecentChanges}
          className={onlyRecentChanges ? 'font-bold text-black' : ''}
        >
          {recentChangesCount} recent changes
        </button>
      </div>
    </div>
  );
}
