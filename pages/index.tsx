import React, { useRef, useState, useEffect } from "react";
import Intro from "../components/intro";

const Index = () => {
  const maxStep: number = 2;
  const [isStep, setStep] = useState<number>(0);
  const stepNext: () => void = () => {
    console.log(maxStep);
    isStep === maxStep ? setStep(0) : setStep(isStep + 1);
  };
  // step1 -> 2 -> 3
  return <>{isStep === 0 ? <Intro stepNext={stepNext} /> : `넥스트 레벨`}</>;
};

export default Index;
