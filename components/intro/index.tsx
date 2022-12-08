import React, { useRef, useEffect } from "react";
import { IntroBox } from "./style";

const Intro = ({ stepNext }: any) => {
  const introRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    introRef.current?.classList.add("motion-on");
    let introTimeout = setTimeout(() => {
      stepNext();
      clearInterval(introTimeout);
    }, 5000);
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
