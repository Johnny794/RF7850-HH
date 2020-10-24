import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

import '../styles/Inicio'

const Home = () => {
    return (
        <div >
        <ul className="navbar-nav mr-auto" >
            <Link to = "/">
                <li className="nav-item active m-1 ">
                    <button className="btn btn-primary btn-sm">
                        <BsArrowLeft/>
                    </button>
                </li> 
            </Link>
            </ul>
            <div className="text mt-5">
                <h2>¿Energias Renovables: cúal te gustaria conocer? </h2>
            </div>
         
            <div className="container mt-5 ">
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
         
            
        </div>
    )
}

export default Home
