import React, { useState, useRef, useEffect } from "react";
import { MainBox } from "./style";

const Main = ({ stepNext }: any) => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);
  const bubbleGroup = useRef<HTMLDivElement>(null);
  const itemStarRef = useRef<HTMLSpanElement>(null);
  const itemStarRef2 = useRef<HTMLSpanElement>(null);
  const [bubbleitems, setBubbleitems] = useState<any>([]);
  const bubbleItemImg = [
    `./images/default_profile_image01.png`,
    `./images/default_profile_image02.png`,
    `./images/default_profile_image03.png`,
    `./images/default_profile_image04.png`,
    `./images/default_profile_image05.png`,
    `./images/default_profile_image06.png`,
  ];

  const randomDropStar = (dropItem: any) => {
    const starItem: HTMLSpanElement | null = dropItem;
    let dropInterval: any = setInterval;
    if (starItem !== null) {
      clearInterval(dropInterval);
      dropInterval = setInterval(() => {
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

  const bubbleItemSet = () => {
    setBubbleitems(
      bubbleItemImg.sort(() => {
        return Math.random() - Math.random();
      })
    );
  };

  const bubbleItemEffect = (e: any) => {
    let bubbleSetTime: any = setTimeout;
    e.target.classList.add("active");
    bubbleSetTime = setTimeout(() => {
      e.target.classList.remove("active");
    }, 1000);
  };

  useEffect(() => {
    mainBoxRef.current?.classList.add("active");
    randomDropStar(itemStarRef.current);
    setTimeout(() => {
      randomDropStar(itemStarRef2.current);
    }, 750);
    bubbleItemSet();
  }, []);
  return (
    <>
      <MainBox ref={mainBoxRef}>
        <h1>야 너두 할수있어</h1>
        <div className="yanadoo-box">
          <div className="yanadoo-list" ref={userListRef}></div>
          <span className="drop-star" ref={itemStarRef}></span>
          <span className="drop-star2" ref={itemStarRef2}></span>
          <div className="bubble-group" ref={bubbleGroup}>
            {bubbleitems &&
              bubbleitems.map((item: string, idx: number) => {
                return (
                  <button
                    type="button"
                    className={`bubble-item-0` + (idx + 1)}
                    style={{ backgroundImage: `url(${item})` }}
                    onClick={(e) => bubbleItemEffect(e)}
                  >
                    item{idx + 1}
                  </button>
                );
              })}
          </div>
        </div>
      </MainBox>
    </>
  );
};
export default Main;
