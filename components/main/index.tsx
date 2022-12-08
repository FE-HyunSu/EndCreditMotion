import React, { useRef, useEffect } from "react";
import { MainBox } from "./style";

const Main = ({ stepNext }: any) => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);
  const bubbleGroup = useRef<HTMLDivElement>(null);
  const itemStarRef = useRef<HTMLSpanElement>(null);

  const randomDropStar = (className: string) => {
    const starItem = document.querySelector(className);
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let timing = 0;

    // starItem.style.transition = "0s";
    // starItem.style.top = Math.ceil(winHeight * Math.random()) + "px";
    // starItem.style.left = Math.ceil(winWidth * Math.random()) + "px";

    // let dropInterval = setInterval(function () {
    //   timing++;
    //   if (timing >= 100) {
    //     clearInterval(dropInterval);
    //     randomDropStar(className);
    //   } else if (timing == 1) {
    //     starItem.style.margin = "-3rem 0 0 -6rem";
    //     starItem.style.opacity = "0";
    //   } else if (timing == 30) {
    //     starItem.style.transition = "1s";
    //     starItem.style.margin = "0 0 0 0";
    //     starItem.style.opacity = "100%";
    //   } else if (timing == 40) {
    //     starItem.style.margin = "3rem 0 0 6rem";
    //     starItem.style.opacity = "0";
    //   }
    // }, 40);
  };

  useEffect(() => {
    mainBoxRef.current?.classList.add("active");
  }, []);
  return (
    <>
      <MainBox ref={mainBoxRef}>
        <h1>야 너두 할수있어</h1>
        <div className="yanadoo-box">
          <div className="yanadoo-list" ref={userListRef}></div>
          <span className="random-drop-star" ref={itemStarRef}></span>
          <span className="random-drop-star2"></span>
          <div className="bubble-group" ref={bubbleGroup}></div>
        </div>
      </MainBox>
    </>
  );
};
export default Main;
