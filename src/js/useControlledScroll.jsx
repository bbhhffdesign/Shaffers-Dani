// src/hooks/useControlledScroll.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function useControlledScroll(wrapperRef, moves) {
  const [currentSection, setCurrentSection] = useState(0);
  const currentSectionRef = useRef(0);

  const isAnimating = useRef(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    function onTouchStart(e) {
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      touchEndY.current = e.changedTouches[0].clientY;
      handleSwipe();
    }

    function handleSwipe() {
      if (isAnimating.current) return;

      const deltaY = touchStartY.current - touchEndY.current;

      if (Math.abs(deltaY) < 50) return; // ignorar gestos pequeños

      if (deltaY > 0) {
        // Swipe arriba
        goToSection(currentSectionRef.current + 1);
      } else {
        // Swipe abajo
        goToSection(currentSectionRef.current - 1);
      }
    }

    function goToSection(index) {
      if (isAnimating.current) return;
      if (index < 0 || index >= moves.length) return;

      isAnimating.current = true;

      const targetMove = -moves[index]; 
      
      wrapperRef.current.style.willChange = "transform";

      gsap.to(wrapperRef.current, {
        y: `${targetMove}vh`,
        ease: "power2.inOut",
        duration: 0.5,
        onComplete: () => {
          wrapperRef.current.style.willChange = "auto";
          setCurrentSection(index);
          currentSectionRef.current = index; 
          isAnimating.current = false;
        },
      });
    }

    const wrapper = wrapperRef.current;
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchend", onTouchEnd);
    };
  }, [moves, wrapperRef]);

  return { currentSection };
}
