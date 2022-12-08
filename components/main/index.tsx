import React, { useRef, useEffect } from "react";
import { MainBox } from "./style";

const Main = ({ stepNext }: any) => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);
  const bubbleGroup = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mainBoxRef.current?.classList.add("active");
  }, []);
  return (
    <>
      <MainBox ref={mainBoxRef}>
        <h1>야 너두 할수있어</h1>
        <div className="yanadoo-box">
          <div className="yanadoo-list" ref={userListRef}></div>
          <span className="random-drop-star"></span>
          <span className="random-drop-star2"></span>
          <div className="bubble-group" ref={bubbleGroup}></div>
        </div>
      </MainBox>
    </>
  );
};
export default Main;
