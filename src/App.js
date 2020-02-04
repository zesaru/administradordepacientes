import React from "react";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <h1>Administracion de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">90</div>
        </div>
      </div>
    </>
  );
}

export default App;
