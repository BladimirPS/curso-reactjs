import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

function DivBestialAhorro() {
  return <div>
    <h1>Bestial Ahorro</h1>
    <p>¡Ahorra en grande!</p>
  </div>;
}

function TarjetaDeCredito() {
  return <div>
    <h1>Tarjeta de crédito</h1>
    <p>¡Paga en grande!</p>
  </div>;
}


ReactDOM.createRoot(rootElement).render(
  <div>
    <DivBestialAhorro />
    <DivBestialAhorro />
    <TarjetaDeCredito />
    <TarjetaDeCredito />
  </div>
);

