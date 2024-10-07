import React from "react";
import ReactDOM from "react-dom/client";
import {DivBestialAhorro, UserGreeting} from "./DivBestialAhorro";
import Product from "./Product";
import {NavBar} from "./Product";
//import {UserGreeting} from "./DivBestialAhorro";
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <>
    <DivBestialAhorro />
    <DivBestialAhorro />
    <UserGreeting />
    <Product />
    <NavBar />

  </>
);
