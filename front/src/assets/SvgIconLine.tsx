import * as React from 'react';

const SvgIconLine: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    viewBox='0 0 771 2'
  >
    <style>{`
      .line-single {
        stroke-dasharray: 771;
        stroke-dashoffset: 771;
        animation: expand 0.6s ease-out forwards;
      }
      @keyframes expand {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
    <path
      className='line-single'
      stroke='#5DACED'
      strokeWidth='2'
      d='M0 1h771'
    ></path>
  </svg>
);

export default SvgIconLine;
