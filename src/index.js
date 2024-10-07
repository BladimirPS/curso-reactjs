import React from "react";
import ReactDOM from "react-dom/client";
import {DivBestialAhorro, UserGreeting} from "./DivBestialAhorro";
import Product from "./Product";
import {NavBar} from "./Product";
//import {UserGreeting} from "./DivBestialAhorro";
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <>
    <DivBestialAhorro nombre="Juan" banco="Banrural"/>
    <DivBestialAhorro nombre="Maria" banco="G&T"/>
    <DivBestialAhorro nombre="Sofia"banco="Bantrab"/>
    <DivBestialAhorro nombre="CArmela" banco="CHN"/>
    <DivBestialAhorro nombre="Klave" banco="Internacional"/>
    <UserGreeting titulo="Carlos" edad={78}/>
    
    

  </>
);
