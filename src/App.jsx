// import { useEffect, useState } from "react";
// import { useSectionScroll } from "./hooks/useSelectionScroll";
import { useRef } from "react";
import LoadingPage from "./components/LoadingPage";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import { useControlledScroll } from "./js/useControlledScroll";

function App() {
  const wrapperRef = useRef(null);
  const moves = [0, 80, 180, 300]; //vh
  const { currentSection } = useControlledScroll(wrapperRef, moves);

  return (
    <div className="app">
      <div className="sections" ref={wrapperRef} >
        <Hero />
        <SecondPage />
        <ThirdPage />
        <LoadingPage />
      </div>
    </div>
  );
}

export default App;


