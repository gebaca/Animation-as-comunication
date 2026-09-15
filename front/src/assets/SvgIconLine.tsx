import * as React from 'react';

interface SvgIconLineProps extends Omit<
  React.SVGProps<SVGSVGElement>,
  'width' | 'height' | 'strokeWidth'
> {
  width?: number | string;
  strokeWidth?: number;
  color?: string;
}

const SvgIconLine: React.FC<SvgIconLineProps> = ({
  width = '100%',
  strokeWidth = 2,
  color = '#5DACED',
  ...rest
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={strokeWidth}
    viewBox={`0 0 771 ${strokeWidth}`}
    {...rest}
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
      stroke={color}
      strokeWidth={strokeWidth}
      d={`M0 ${strokeWidth / 2}h771`}
    ></path>
  </svg>
);

export default SvgIconLine;
