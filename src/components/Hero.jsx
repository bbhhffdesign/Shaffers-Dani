import { useEffect, useState } from "react";
import { Background } from "./Background";
import daniHero from "../assets/svg/dani-2.webp";
import daniHeroGlobo from "../assets/svg/dani-globo.webp";

function MainPage({ currentSection, isLeaving, scrollDirection }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Salida hacia abajo desde Hero
    if (isLeaving && scrollDirection === "down" && currentSection === 0) {
      setAnimate(true);
    }

    // Regreso hacia arriba a Hero
    if (!isLeaving && scrollDirection === "up" && currentSection === 1) {
      setAnimate(false);
    }
  }, [isLeaving, scrollDirection, currentSection]);

  return (
    <section className="section hero">
      <div className="hero-content">
        <div className="discount-code-container">
          <div className="discount-text-container">
            <div className="daniel-te-regala"></div>
            <h4 className="price-text">AHAHAA</h4>
          </div>
        </div>

        {/* <div className="dani-container "> */}
        <div className={`dani-container ${animate ? "animate" : ""}`}>
          <img
            src={daniHero}
            className="dani-hero"
            alt="Imagen Dani"
            width="360"
            height="380"
            fetchpriority="high"
          />
          <div className="dani-container dani-globo">
            <img src={daniHeroGlobo} alt="" loading="eager" />
          </div>
        </div>

        <div className="button-container"></div>
      </div>

      <Background animate={animate} isDouble={true} />
    </section>
  );
}

export default MainPage;
