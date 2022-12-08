import styled, { keyframes } from "styled-components";

const motionAppear = keyframes`
  0% {transform: scale(1.5, 1.5); filter: blur(1rem); -webkit-filter: blur(1rem); opacity: 0;}
  40% { transform: scale(1.2, 1.2); filter: blur(1rem); -webkit-filter: blur(1rem); opacity: 1;}
  100% {transform: scale(1, 1); filter: blur(0); -webkit-filter: blur(0); opacity: 1;}
`;

const motionMove1 = keyframes`
  0% {margin: 5rem 0 0 5rem;}
  10% {margin: 5rem 0 0 3.5rem;}
  50% {margin: 5rem 0 0 0;}
  60% {margin: 5rem 0 0 0;}
  70% {margin: 3.5rem 0 0 0;}
  100% {margin: 0;}
`;

const motionMove2 = keyframes`
  0% {margin: 5rem 0 0 0;}
  50% {margin: 5rem 0 0 0;}
  60% {margin: 5rem 0 0 0;}
  70% {margin: 3.5rem 0 0 0;}
  100% {margin: 0;}
`;

const motionAppearEnd = keyframes`
  0% {transform: scale(1, 1); filter: blur(0); -webkit-filter: blur(0); opacity: 1;}
  40% {transform: scale(1.2, 1.2); filter: blur(1rem); -webkit-filter: blur(1rem); opacity: 1;}
  100% {transform: scale(1.5, 1.5); filter: blur(1rem); -webkit-filter: blur(1rem); opacity: 0;}
`;

export const IntroBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffeeee;
  transform: scale(0.6);

  .slogan-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 1;
    z-index: 2;
    strong {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 26rem;
      height: 26rem;
      margin: auto;
      .slogan-01 {
        position: absolute;
        top: 0;
        left: 0;
        width: 26rem;
        height: 26rem;
        background: url(/images/img_title_01.png) no-repeat 50% 50%;
        background-size: 100%;
        text-indent: -9999rem;
        opacity: 0;
      }
      .slogan-02 {
        position: absolute;
        top: 0;
        left: 0;
        width: 26rem;
        height: 26rem;
        background: url(/images/img_title_02.png) no-repeat 50% 50%;
        background-size: 100%;
        text-indent: -9999rem;
        opacity: 0;
      }
      .slogan-03 {
        position: absolute;
        top: 0;
        left: 0;
        width: 26rem;
        height: 26rem;
        background: url(/images/img_title_03.png) no-repeat 50% 50%;
        background-size: 100%;
        text-indent: -9999rem;
        opacity: 0;
      }
    }
    &.motion-on {
      strong {
        animation: ${motionAppearEnd} 0.5s 3s 1 linear forwards;
      }
      .logo-ynd {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
        margin: auto;
        background: url(/images/img_logo_154x42.png) no-repeat 50% 50% / 15.4rem
          auto;
        animation: ${motionAppear} 0.5s 3s 1 linear forwards,
          ${motionAppearEnd} 0.5s 5s 1 linear forwards;
        opacity: 0;
      }
      .slogan-01 {
        animation: ${motionAppear} 0.5s 1 linear forwards,
          ${motionMove1} 1s 1s 1 linear backwards;
      }
      .slogan-02 {
        animation: ${motionAppear} 0.5s 1s 1 linear forwards,
          ${motionMove2} 1s 1s 1 linear backwards;
      }
      .slogan-03 {
        animation: ${motionAppear} 0.5s 1.5s 1 linear forwards;
      }
    }
  }
`;
