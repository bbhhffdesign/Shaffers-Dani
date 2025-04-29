// src/hooks/useSectionScroll.js
import { useRef, useState } from "react";
import { gsap } from "gsap";

export function useSectionScroll() {
  const sectionsRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const scrollTo = (vh, options = {}) => {
    const node = sectionsRef.current;
    if (!node) return;

    const { duration = 0.8, ease = "power2.out", onComplete } = options;

    // Set will-change for optimization
    node.style.willChange = "transform";

    gsap.to(node, {
      y: `-${vh}svh`,
      duration,
      ease,
      onUpdate: () => {
        const transform = gsap.getProperty(node, "y");
        const svh = window.innerHeight / 100;
        setCurrentPosition(-(transform / svh));
      },
      onComplete: () => {
        node.style.willChange = "auto";
        if (typeof onComplete === "function") {
          onComplete();
        }
      }
    });
  };

  return {
    sectionsRef,
    scrollTo,
    currentPosition
  };
}
