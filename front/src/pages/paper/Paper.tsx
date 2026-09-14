import Intro from './sections/Intro.tsx';
import Abstract from './sections/Abstract.tsx';
import Example from './sections/Example.tsx';
import SvgIconLine from '../../assets/SvgIconLine.tsx';
import Principles from './sections/Principles.tsx';
import Demo from './sections/Demo.tsx';
import Results from './sections/Results.tsx';
import Comparations from './sections/Comparations.tsx';
import Conclusion from './sections/Conclusion.tsx';

function Paper() {
  return (
    <div className='flex flex-col gap-30'>
      <Intro />
      <Abstract />
      <SvgIconLine width='30%' strokeWidth={3} />
      <Example />
      <SvgIconLine width='40%' strokeWidth={3} />
      <Principles />
      <SvgIconLine width='50%' strokeWidth={3} />
      <Demo />
      <SvgIconLine width='60%' strokeWidth={3} />
      <Results />
      <SvgIconLine width='70%' strokeWidth={3} />
      <Comparations />
      <SvgIconLine width='80%' strokeWidth={3} />
      <Conclusion />
      <div className='flex flex-col gap-1'>
        <SvgIconLine width='90%' strokeWidth={1} />
        <SvgIconLine width='100%' strokeWidth={2} />
      </div>

      <div className='flex flex-wrap items-center gap-3 px-26.5 mb-10'>
        <a
          href='https://www.linkedin.com/in/gerard-bataller-canet-963394372/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium bg-[#5DACED] text-white hover:bg-opacity-90 transition-all duration-200 shadow-sm'
        >
          LinkedIn
        </a>

        <a
          href='https://gerard-bataller.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium border border-[#5DACED] text-[#5DACED] hover:bg-[#5DACED]/10 transition-all duration-200 shadow-sm'
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Paper;
