import * as React from 'react';

const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1343'
    height='111'
    fill='none'
    viewBox='0 0 1343 111'
    {...props}
  >
    <style>{`
      .line {
        stroke-dasharray: 1343;
        stroke-dashoffset: 1343;
        animation: expand 0.6s ease-out forwards;
      }

      @keyframes expand {
        to {
          stroke-dashoffset: 0;
        }
      }

      ${Array.from({ length: 15 })
        .map((_, i) => `.line-${i + 1} { animation-delay: ${i * 0.1}s; }`)
        .join('\n')}
    `}</style>

    <path className='line line-1' stroke='#5DACED' d='M0 .5h694'></path>
    <path
      className='line line-2'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 11h771'
    ></path>
    <path
      className='line line-3'
      stroke='#5DACED'
      strokeWidth='3'
      d='M0 21.5h852'
    ></path>
    <path className='line line-4' stroke='#5DACED' d='M0 22.5h776'></path>
    <path
      className='line line-5'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 33h863'
    ></path>
    <path
      className='line line-6'
      stroke='#5DACED'
      strokeWidth='3'
      d='M0 43.5h953'
    ></path>
    <path className='line line-7' stroke='#5DACED' d='M0 44.5h875'></path>
    <path
      className='line line-8'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 55h972'
    ></path>
    <path
      className='line line-9'
      stroke='#5DACED'
      strokeWidth='3'
      d='M0 65.5h1074'
    ></path>
    <path className='line line-10' stroke='#5DACED' d='M0 66.5h974'></path>
    <path
      className='line line-11'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 77h1083'
    ></path>
    <path
      className='line line-12'
      stroke='#5DACED'
      strokeWidth='3'
      d='M0 87.5h1196'
    ></path>
    <path className='line line-13' stroke='#5DACED' d='M0 88.5h1094'></path>
    <path
      className='line line-14'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 99h1216'
    ></path>
    <path
      className='line line-15'
      stroke='#5DACED'
      strokeWidth='3'
      d='M0 109.5h1343'
    ></path>
  </svg>
);

export default SvgIcon;
