import { useEffect } from "react";
import instagram from "../assets/instagram.png";
import { Background } from "./Background";

function SecondPage({currentSection}) {
  useEffect(() => {
    if (currentSection === 1) {  // 1 porque es la segunda página
      console.log("Animar elementos de SecondPage!");
    }
  }, [currentSection]);

  return (
    <section className="section second-page">
      <div className="second-page-content">

        <div className="second-page-copy">
          
        </div>
        <div className="intagram-button-container">

            {/* al button añadirle la clase activo, y a la imagen activo-img */}
        <button
          className="instagram-button"
        
        >
          <img src={instagram} className="icon" />
          INSTAGRAM
        </button>

        </div>
      </div>
      <Background  isDouble={false}/>
    </section>
  );
}

export default SecondPage;
