import React, { useRef, useEffect } from "react";
import { MainBox } from "./style";
import userListData from "../../data/userList.json";
import randomComment from "../../data/randomComment.json";

interface stepNextType {
  stepNext: () => void;
}

const Main = ({ stepNext }: stepNextType) => {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);
  const bubbleGroup = useRef<HTMLDivElement>(null);
  const itemStarRef = useRef<HTMLSpanElement>(null);
  const itemStarRef2 = useRef<HTMLSpanElement>(null);
  const winHeight = window.innerHeight;
  const bubbleItemImg = [
    `./images/default_profile_image01.png`,
    `./images/default_profile_image02.png`,
    `./images/default_profile_image03.png`,
    `./images/default_profile_image04.png`,
    `./images/default_profile_image05.png`,
    `./images/default_profile_image06.png`,
  ];

  const randomDropStar = (dropItem: HTMLSpanElement | null) => {
    const starItem: HTMLSpanElement | null = dropItem;
    let timeCount = 0;
    const dropLoop = () => {
      timeCount++;
      if (!!starItem && timeCount > 120) {
        starItem.style.top = Math.floor(Math.random() * 100) + `%`;
        starItem.style.left = Math.floor(Math.random() * 100) + `%`;
        starItem.classList.add("active");
        timeCount = 0;
        setTimeout(() => {
          starItem.classList.remove("active");
        }, 1500);
      }
      requestAnimationFrame(dropLoop);
    };
    requestAnimationFrame(dropLoop);
  };

  const bubbleItemEffect = (e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as Element;
    let bubbleSetTime: any = setTimeout;
    target.classList.add("active");
    bubbleSetTime = setTimeout(() => {
      target.classList.remove("active");
    }, 1000);
  };

  const mainMotion = () => {
    let userListOffHeight = userListRef.current
      ? userListRef.current.offsetHeight
      : 0;
    if (userListRef.current) {
      userListRef.current.style.paddingTop = winHeight + `px`;
      let moving = 0;
      const userListLoop = () => {
        if (userListRef.current) {
          if (moving < userListOffHeight + winHeight) {
            if (bubbleGroup.current)
              bubbleGroup.current.style.top =
                100 - Math.ceil((moving * 100) / userListOffHeight) + "%";
            userListRef.current.style.transform =
              "translateY(-" + moving + "px)";
            moving += 1.5;
            if (
              Math.ceil((moving * 100) / (userListOffHeight + winHeight)) > 98
            ) {
              mainBoxRef.current?.classList.add("list-end");
            }
          } else {
            stepNext();
          }
        }
        requestAnimationFrame(userListLoop);
      };
      requestAnimationFrame(userListLoop);
    }
  };

  useEffect(() => {
    mainBoxRef.current?.classList.add("active");
    randomDropStar(itemStarRef.current);
    setTimeout(() => {
      randomDropStar(itemStarRef2.current);
    }, 750);
    mainMotion();
  }, []);
  return (
    <>
      <MainBox ref={mainBoxRef}>
        <h1>야 너두 할수있어</h1>
        <div className="ynd-box">
          <div className="ynd-list" ref={userListRef}>
            {userListData &&
              userListData
                .sort(() => {
                  return Math.random() - Math.random();
                })
                .map((item, idx) => (
                  <div key={idx} className="list-box">
                    <strong>{item.groupName}</strong>
                    <ul>
                      {item.captain &&
                        item.captain.map((detailItem, detailIdx) => (
                          <li key={detailIdx}>
                            <strong>
                              {detailItem.memberName}
                              <span> / {item.groupName}</span>
                            </strong>
                            <p>
                              {detailItem.comment !== undefined
                                ? detailItem.comment
                                : randomComment.sort(() => {
                                    return Math.random() - Math.random();
                                  })[0]}
                            </p>
                          </li>
                        ))}
                      {item.memberList &&
                        item.memberList
                          .sort(() => {
                            return Math.random() - Math.random();
                          })
                          .map((userItem, userIdx) => (
                            <li key={userIdx}>
                              <strong>
                                {userItem.memberName}
                                <span> / {item.groupName}</span>
                              </strong>
                              <p>
                                {userItem.comment !== undefined
                                  ? userItem.comment
                                  : randomComment.sort(() => {
                                      return Math.random() - Math.random();
                                    })[0]}
                              </p>
                            </li>
                          ))}
                    </ul>
                  </div>
                ))}
          </div>
          <span className="drop-star" ref={itemStarRef}></span>
          <span className="drop-star2" ref={itemStarRef2}></span>
          <div className="bubble-group" ref={bubbleGroup}>
            {bubbleItemImg &&
              bubbleItemImg
                .sort(() => {
                  return Math.random() - Math.random();
                })
                .map((item: string, idx: number) => (
                  <button
                    key={idx}
                    type="button"
                    className={`bubble-item-0` + (idx + 1)}
                    style={{ backgroundImage: `url(${item})` }}
                    onClick={(e) => bubbleItemEffect(e)}
                  >
                    item{idx + 1}
                  </button>
                ))}
          </div>
        </div>
      </MainBox>
    </>
  );
};
export default Main;
