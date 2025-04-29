import { useEffect } from "react";

function ThirdPage({currentSection}) {
    useEffect(() => {
      if (currentSection === 2) {  // 2 porque es la tercer página
        console.log("Animar elementos de ThirdPage!");
      }
    }, [currentSection]);
    return (
      <section className="section third-page">

      </section>
    );
  };
  
  export default ThirdPage;