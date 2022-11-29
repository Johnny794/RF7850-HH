import React from 'react';
import { Link } from "react-router-dom"
import "./styles/Energias.css"

function Home() {
  return (
    <div>
      <header className="App-header">   
            <ul className="navbar-nav mr-auto" >
            <Link to = "/">
                <li className="nav-item active m-1 ">
                    <button className="btn btn-primary btn-sm" >
                        Atras
                    </button>
                </li> 
            </Link>
            </ul>
        </header>

        {/* modules container */}

        <div className="home-contain" >
            <div className="alert alert-primary" role="alert" align='center'>
                    <h3>MODULOS DE APRENDIZAJE </h3>
            </div>              
            <div className="container">
                <div  className="row ">
                    <div  className="col-sm mt-2 ">
                        <Link to = "/operacion" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Operación" >
                            <img src="./assets/operacion21.png" 
                            alt="Energia Eolica" 
                            className="eolica rounded-circle float-left btn btn-outline-dark"/>                          
                        </Link>
                    </div>
                    
                    <div className="col-sm mt-2  ">
                        <Link to = "/componentes" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Componentes">  
                            <img src="./assets/componentes12.png" 
                            alt="Energia Fotovoltaica" 
                            className="solar rounded-circle float-right btn btn-outline-dark" />
                        </Link>
                    </div>  
                </div>    
            </div>

            <div className="container">
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} >                    
                    <Link to = "/rompecabezas" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación">
                            <button style={{color:'white'}} className="rounded-circle btn btn-outline-yellow" >
                                    juega
                            </button>                                                                             
                    </Link>                                                     
                </div>    
            </div>

            <div className="container">
                <div  className="row ">
                    <div  className="col-sm mt-2 ">
                        <Link to = "/programacion" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación" >
                            <img src="./assets/programacion12.png" 
                            alt="Energia Eolica" 
                            className="eolica rounded-circle float-left btn btn-outline-dark"/>                          
                        </Link>
                    </div>
                    
                    <div className="col-sm mt-2  ">
                        <Link to = "/quicklook" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Quicklock">  
                            <img src="./assets/quicklock12.png" 
                            alt="Energia Fotovoltaica" 
                            className="solar rounded-circle float-right btn btn-outline-dark" />
                        </Link>
                    </div>  
                </div>    
            </div>

            <div className="container"  >
                <div style={{display:'flex', justifyContent:'flex-end'}} >                    
                    <Link to = "/encuesta" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación">
                            <button className="btn btn-outline-white" style={{color:'white'}} >
                                    Encuesta
                            </button>                                                                             
                    </Link>                                                     
                </div>    
            </div>

      </div>
   
      
    </div>
  );
}

export default Home;
