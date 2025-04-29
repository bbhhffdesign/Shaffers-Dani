import { useEffect, useState } from "react";
import { Background } from "./Background";
import Button from "./Button";

function MainPage({currentSection, isLeaving}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isLeaving && currentSection === 0) {
      // El Hero está siendo dejado
      // document.querySelector(".elemento-que-quiero").classList.add("animar-salida");
      console.log("yendose");
      // console.log(animate);
      setAnimate(animate => !animate);
    }
  }, [isLeaving, currentSection]);

  return (
    <section className="section hero">
      <div className="hero-content">
        <div className="discount-code-container">
          <div className="discount-text-container">
            <div className="daniel-te-regala"></div>
            <h4 className="price-text">AHAHAA</h4>
          </div>
        </div>

        <div className={"dani-container"}>
          <div className="dani-container dani-globo"></div>
        </div>

        <div className="button-container"></div>
      </div>
      <Background animate={animate} isDouble={true}/>
    </section>
  );
}

export default MainPage;
