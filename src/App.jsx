import { useRef } from "react";
import { useControlledScroll } from "./hooks/useControlledScroll";
import { useScrollEvents } from "./hooks/useScrollEvents";
import LoadingPage from "./components/LoadingPage";
import ProgressBar from "./components/ProgressBar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

function App() {
  const wrapperRef = useRef(null);

  const { leavingSectionIndex, progressSection, scrollDirection, handlers } = useScrollEvents();

  const moves = [0, 80, 180, 300]; // vh

  const { currentSection } = useControlledScroll(wrapperRef, moves, handlers);

  return (
    <div className="app">
      <ProgressBar currentSection={progressSection} totalSections={moves.length} />
      
      <div className="sections" ref={wrapperRef}>
        <Hero
          currentSection={currentSection}
          isLeaving={leavingSectionIndex === 0}
          scrollDirection={scrollDirection}
        />
        <SecondPage
          currentSection={currentSection}
          scrollDirection={scrollDirection}
        />
        <ThirdPage
          currentSection={currentSection}
          scrollDirection={scrollDirection}
        />
        <LoadingPage
          currentSection={currentSection}
          scrollDirection={scrollDirection}
        />
      </div>
    </div>
  );
}

export default App;