import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Example = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to('.box', { x: 700 });
  }, { scope: container });

  return (
    <div ref={container} className="wrapper-layout w-screen h-screen">
      <div className="box w-20 h-20 bg-red-400">
        <h1>Example GSAP animation</h1>
      </div>
    </div>
  );
};

export default Example;
