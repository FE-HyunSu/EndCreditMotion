import styled, { keyframes } from "styled-components";

const motionStar = keyframes`
  0% {background-position-x: 0;}
  100% {background-position-x: 100vw;}
`;

const dropMotion = keyframes`
  0% {opacity:0; transform: translate(0rem, 0rem);}
  50% {opacity:1;}
  100% {opacity:0; transform: translate(22rem, 8rem);}
`;

const motionRotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const bubbleEffect01 = keyframes`
  0% {transform: scale(1, 1); opacity: 0;}
  20% {opacity: 1;}
  100% {transform: scale(1.5, 1.5); opacity: 0;}
`;

const bubbleEffect02 = keyframes`
  0% {transform: scale(1, 1); opacity: 0;}
  20% {opacity: 1;}
  100% {transform: scale(1.7, 1.7); opacity: 0;}
`;

const bgFadeOut = keyframes`
  0%{background-color:rgba(255,255,255,0);}
  100%{background-color:rgba(255,255,255,1);}
`;

export const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #111;
  overflow: hidden;
  &.list-end {
    .ynd-box {
      &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0);
        animation: ${bgFadeOut} 1.5s forwards;
        z-index: 10;
      }
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: 1.8s;
    opacity: 1;
    z-index: 2;
  }
  &.active:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0) url(/images/bg_main_star_m.png) repeat 0
      0 / 100% auto;
    animation: ${motionStar} 40s linear infinite;
    opacity: 0.5;
  }
  &.active:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(/images/bg_main_star_l.png) repeat 0 0 / 100% auto;
    animation: ${motionStar} 20s linear infinite;
    opacity: 0.5;
  }
  h1 {
    position: absolute;
    top: 3rem;
    left: calc(25% - 13rem);
    width: 26rem;
    height: 26rem;
    background: url(/images/img_ynd_calligraphy_w.png) no-repeat 50% 50%;
    background-size: 100% auto;
    text-indent: -9999rem;
    transform: rotate(-10deg);
    opacity: 0.3;
  }
  .drop-star {
    position: absolute;
    top: -999rem;
    left: -999rem;
    width: 10rem;
    height: 8rem;
    background: url(/images/img_drop_star.png) no-repeat 50% 50% / 100% auto;
    opacity: 0;
    &.active {
      animation: ${dropMotion} 1.5s forwards;
    }
  }
  .drop-star2 {
    position: absolute;
    top: -999rem;
    left: -999rem;
    width: 14rem;
    height: 10rem;
    background: url(/images/img_drop_star.png) no-repeat 50% 50% / 100% auto;
    opacity: 0;
    &.active {
      animation: ${dropMotion} 1.5s forwards;
    }
  }
  .bubble-group {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    transition: 0.5s;
    z-index: 3;
    button {
      position: absolute;
      // top: 100%;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% auto;
      text-indent: -999rem;
      opacity: 0.7;
      &.bubble-item-01 {
        right: 57%;
        width: 6rem;
        height: 6rem;
        margin-top: 5rem;
        animation: ${motionRotate} 2s linear infinite;
      }
      &.bubble-item-02 {
        right: 80%;
        width: 5rem;
        height: 5rem;
        margin-top: 13rem;
        animation: ${motionRotate} 4s linear infinite;
      }
      &.bubble-item-03 {
        right: 88%;
        width: 7rem;
        height: 7rem;
        margin-top: 21rem;
        animation: ${motionRotate} 3s linear infinite;
      }
      &.bubble-item-04 {
        right: 65%;
        width: 8rem;
        height: 8rem;
        margin-top: 14rem;
        animation: ${motionRotate} 6s linear infinite;
      }
      &.bubble-item-05 {
        right: 75%;
        width: 7rem;
        height: 7rem;
        margin-top: 0rem;
        animation: ${motionRotate} 3.5s linear infinite;
      }
      &.bubble-item-06 {
        right: 60%;
        width: 5rem;
        height: 5rem;
        margin-top: 26rem;
        animation: ${motionRotate} 7s linear infinite;
      }
      &.active {
        &:before {
          content: "";
          position: absolute;
          top: -1px;
          right: 0;
          bottom: 0;
          left: -1px;
          width: 100%;
          height: 100%;
          margin: auto;
          border: 1px solid #fff;
          border-radius: 100%;
          animation: ${bubbleEffect02} 1s forwards;
          z-index: -1;
        }
        &:after {
          content: "";
          position: absolute;
          top: -1px;
          right: 0;
          bottom: 0;
          left: -1px;
          width: 100%;
          height: 100%;
          margin: auto;
          border: 1px solid #fff;
          border-radius: 100%;
          animation: ${bubbleEffect01} 1s 0.2s forwards;
          z-index: -1;
        }
      }
    }
  }

  .ynd-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    .list-box {
      padding: 10rem 2rem;
      li {
        width: 100%;
        padding: 5rem 0 5rem calc(50% - 2rem);
        text-align: left;
        box-sizing: border-box;
        p {
          padding-top: 2rem;
          font-weight: 300;
          font-size: 3rem;
        }
        strong {
          position: relative;
          font-weight: 700;
          font-size: 3.6rem;
          letter-spacing: 0.5rem;
          &.leader {
            animation: textLight 7s linear infinite;
            &:before {
              content: "*";
              position: absolute;
              top: -0.25em;
              left: -1em;
              width: 1em;
              height: 1em;
              font-weight: 100;
              font-size: 2em;
              color: #fff;
              text-align: center;
              animation: motionRotate 2s reverse linear infinite;
              transform-origin: 50% 50%;
            }
            &:after {
              content: "*";
              position: absolute;
              top: -0.25em;
              right: -1em;
              width: 1em;
              height: 1em;
              font-weight: 100;
              font-size: 2em;
              color: #fff;
              text-align: center;
              animation: motionRotate 2s linear infinite;
              transform-origin: 50% 50%;
            }
          }
          span {
            display: inline-block;
            padding-left: 1rem;
            font-size: 300;
            font-size: 2.4rem;
            letter-spacing: 0;
            opacity: 0.5;
          }
        }
      }
      & > strong {
        display: block;
        padding: 5rem 0 1rem calc(50% - 2rem);
        font-weight: 700;
        font-size: 4.5rem;
        color: #fff001;
        text-align: left;
      }
    }
  }
`;
