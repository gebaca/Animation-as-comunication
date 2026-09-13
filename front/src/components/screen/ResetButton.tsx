export default function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label='Reset demo to initial state'
      className='group flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-medium text-(--text-secondary-screen) bg-(--accent-card) hover:bg-(--hover-row) hover:text-(--text-screen) transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-screen)'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-45 motion-reduce:transform-none'
        aria-hidden='true'
      >
        <path d='M4 10a6 6 0 0 1 10.5-4M16 10a6 6 0 0 1-10.5 4' />
        <path d='M14 3v3h-3M6 17v-3h3' />
      </svg>
      <span>Reset</span>
    </button>
  );
}
