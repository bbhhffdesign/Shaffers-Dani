// import { useState } from "react";
import instagram from "../assets/instagram.png";
import { Background } from "./Background";

function SecondPage() {

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
