import React from 'react';
import { Link } from "react-router-dom"
import "./styles/Home.css"

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="contain text">
            <h2>FUERZAS MILITARES DE COLOMBIA</h2>
            <h2>EJERCITO NACIONAL</h2>
            <img src="assets/logoejercito.png" alt="" className="logo"/>
            <h2>ESCUELA DE COMUNICACIONES</h2>
            <Link to = "/home" className="btn btn-success" >INGRESAR</Link>
        </div>     
      </header>
      
    </div>
  );
}

export default App;
