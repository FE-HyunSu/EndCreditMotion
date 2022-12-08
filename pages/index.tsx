import React, { useRef, useState, useEffect } from "react";
import Intro from "../components/intro";
import Main from "../components/main";

const Index = () => {
  const maxStep: number = 2;
  const [isStep, setStep] = useState<number>(0);
  const stepNext: () => void = () => {
    console.log(maxStep);
    isStep === maxStep ? setStep(0) : setStep(isStep + 1);
  };
  // step1 -> 2 -> 3
  return (
    <>
      {isStep === 0 ? (
        <Intro stepNext={stepNext} />
      ) : (
        <Main stepNext={stepNext} />
      )}
    </>
  );
};

export default Index;
