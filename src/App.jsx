import { useRef, useEffect, useState } from "react";
import { useControlledScroll } from "./hooks/useControlledScroll";
import LoadingPage from "./components/LoadingPage";
import ProgressBar from "./components/ProgressBar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

function App() {
  const wrapperRef = useRef(null);
  const [leavingSectionIndex, setLeavingSectionIndex] = useState(null);
  const [progressSection, setProgressSection] = useState(0); // 👈 nuevo estado para la barra

  const moves = [0, 80, 180, 300]; // vh

  const { currentSection } = useControlledScroll(wrapperRef, moves, {
    onSectionLeave: (fromIndex, toIndex) => {
      console.log(`Saliendo de la sección ${fromIndex} hacia la sección ${toIndex}`);
      
      setLeavingSectionIndex(fromIndex);

      setProgressSection(toIndex); // 👈 actualizar progreso inmediatamente

      setTimeout(() => setLeavingSectionIndex(null), 100);
    },
  });

  return (
    <div className="app">
      <ProgressBar currentSection={progressSection} totalSections={moves.length} />
      <div className="sections" ref={wrapperRef}>
        <Hero currentSection={currentSection} isLeaving={leavingSectionIndex === 0} />
        <SecondPage currentSection={currentSection} />
        <ThirdPage currentSection={currentSection} />
        <LoadingPage currentSection={currentSection} />
      </div>
    </div>
  );
}

export default App;
