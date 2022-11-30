import React from 'react';
import { Link } from "react-router-dom"
import "./styles/Home.css"

function App() {
  return (
    <div className='app-contain' >      
        <div className="contain text">
        <h2>AMBIENTE DE APRENDIZAJE HARRIS RF-7850M-HH</h2>
            <img src="assets/uno.png" alt=" " className="logo1"/>
            <Link to = "/home" className="btn btn-success" >COMIENCE AQUI</Link>
            <h5>FUERZAS MILITARES DE COLOMBIA</h5>
            <h5>EJERCITO NACIONAL</h5>
            <h5>ESCUELA DE COMUNICACIONES</h5>
            <img src="assets/logoejercito.png" alt="" className="logo"/>            
        </div>     
    </div>
  );
}

export default App;
