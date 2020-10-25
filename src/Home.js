import React from 'react';
import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import Animation from './EnergiasAnimation';
import Down from './ArrowDownAnimation'
import "./styles/Energias.css"

function Home() {
  return (
    <div>
      <header className="App-header">   
            <ul className="navbar-nav mr-auto" >
            <Link to = "/">
                <li className="nav-item active m-1 ">
                    <button className="btn btn-primary btn-sm">
                        <BsArrowLeft/>Atras
                    </button>
                </li> 
            </Link>
            </ul>
            <div className="alert alert-primary" role="alert">
                    <h2>Energias Renovables: La mejor manera de salvar el planeta </h2>
            </div>  
            <Animation/>   
            <div className="alert alert-primary mt-1 row">
                <h2>Da click en la imagen y aprende sobre ellas</h2>
                <Down/>
            </div>
             
            <div className="container">
                <div  className="row ">
                    <div  className="col-sm mt-5 ">
                        <Link to = "/eolica" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Energia Eolica" >
                            <img src="./assets/eolica.jpg" 
                            alt="Energia Eolica" 
                            className="eolica rounded-circle float-left btn btn-outline-dark"/>                          
                        </Link>
                    </div>
                    
                    <div className="col-sm mt-5  ">
                        <Link to = "/solar" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Energia Solar">  
                            <img src="./assets/solar.jpg" 
                            alt="Energia Fotovoltaica" 
                            className="solar rounded-circle float-right btn btn-outline-dark" />
                        </Link>
                    </div>  
                </div>    
            </div>
      </header>
      
    </div>
  );
}

export default Home;
