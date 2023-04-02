import React, { useState } from "react";
import Intro from "../components/intro";
import Main from "../components/main";

const Index = () => {
  const maxStep: number = 1;
  const [isStep, setStep] = useState<number>(0);
  const stepNext = () => {
    isStep === maxStep ? setStep(0) : setStep(isStep + 1);
  };
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
