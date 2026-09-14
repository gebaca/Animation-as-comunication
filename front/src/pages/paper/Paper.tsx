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
      <Results />
      <SvgIconLine />
      <Comparations />
      <SvgIconLine />
      <Conclusion />
    </div>
  );
}

export default Paper;
