import Intro from './sections/Intro.tsx';
import Abstract from './sections/Abstract.tsx';
import Example from './sections/Example.tsx';
import SvgIconLine from '../../assets/SvgIconLine.tsx';
import Principles from './sections/Principles.tsx';
import Demo from './sections/Demo.tsx';

function Paper() {
  return (
    <div className='flex flex-col gap-25'>
      <Intro />
      <Abstract />
      <SvgIconLine />
      <Example />
      <SvgIconLine />
      <Principles />
      <SvgIconLine />
      <Demo />
      <SvgIconLine />
    </div>
  );
}

export default Paper;
