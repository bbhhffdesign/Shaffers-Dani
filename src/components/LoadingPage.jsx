import Button from "./Button";
function LoadingPage({ message }) {
    return (
      <section className="section loading-page  final">
        <div className="error-msj">

        {message ? (<Button>{message}</Button>) : ( "")}
        </div>
        
        <div className="loading-page-logo">
        </div>
      </section>
    );
  }
  
  export default LoadingPage;