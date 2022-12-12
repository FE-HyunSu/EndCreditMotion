import React, { useRef, useEffect } from "react";
import { MainBox } from "./style";

const Main = ({ stepNext }: any) => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);
  const bubbleGroup = useRef<HTMLDivElement>(null);
  const itemStarRef = useRef<HTMLSpanElement>(null);
  const itemStarRef2 = useRef<HTMLSpanElement>(null);

  const randomDropStar = (dropItem: any) => {
    const starItem: HTMLSpanElement | null = dropItem;
    if (starItem !== null) {
      let dropInterval = setInterval(() => {
        try {
          starItem.style.top = Math.floor(Math.random() * 100) + `%`;
          starItem.style.left = Math.floor(Math.random() * 100) + `%`;
          starItem.classList.add("active");
          setTimeout(() => {
            starItem.classList.remove("active");
          }, 1500);
        } catch {
          clearInterval(dropInterval);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    mainBoxRef.current?.classList.add("active");
    randomDropStar(itemStarRef.current);
    setTimeout(() => {
      randomDropStar(itemStarRef2.current);
    }, 750);
  }, []);
  return (
    <>
      <MainBox ref={mainBoxRef}>
        <h1>야 너두 할수있어</h1>
        <div className="yanadoo-box">
          <div className="yanadoo-list" ref={userListRef}></div>
          <span className="drop-star" ref={itemStarRef}></span>
          <span className="drop-star2" ref={itemStarRef2}></span>
          <div className="bubble-group" ref={bubbleGroup}></div>
        </div>
      </MainBox>
    </>
  );
};
export default Main;
