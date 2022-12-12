import styled, { keyframes } from "styled-components";

const motionStar = keyframes`
  0% {background-position-x: 0;}
  100% {background-position-x: 100vw;}
`;

export const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #111;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: 1s;
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
  }
  .drop-star2 {
    position: absolute;
    top: -999rem;
    left: -999rem;
    width: 14rem;
    height: 10rem;
    background: url(/images/img_drop_star.png) no-repeat 50% 50% / 100% auto;
    opacity: 0;
  }
`;
