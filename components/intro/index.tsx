import React, { useRef, useEffect } from 'react';
import { IntroBox } from './style';

interface stepNextType {
  stepNext: () => void;
}

const Intro = ({ stepNext }: stepNextType) => {
  const introRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    introRef.current?.classList.add('motion-on');
    let introTimeout = setTimeout(() => {
      stepNext();
      clearTimeout(introTimeout);
    }, 5000);
    return () => {
      clearTimeout(introTimeout);
    };
  }, []);
  return (
    <>
      <IntroBox>
        <div className="slogan-box" ref={introRef}>
          <strong>
            <span className="slogan-01">야</span>
            <span className="slogan-02">너두</span>
            <span className="slogan-03">할수있어</span>
          </strong>
          <span className="logo-ynd"></span>
        </div>
      </IntroBox>
    </>
  );
};
export default Intro;
