import * as React from 'react';

interface SvgIconLineProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  strokeWidth?: number | string;
}

const SvgIconLine: React.FC<SvgIconLineProps> = ({
  width = '100%',
  strokeWidth = 2,
  style,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={strokeWidth}
    viewBox='0 0 771 2'
    preserveAspectRatio='none'
    style={{ display: 'block', width, height: `${strokeWidth}px`, ...style }}
    {...props}
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
      strokeWidth={strokeWidth}
      d='M0 1h771'
    ></path>
  </svg>
);

export default SvgIconLine;
