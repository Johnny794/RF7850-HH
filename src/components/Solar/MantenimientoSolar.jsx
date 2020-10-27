import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Car from './CarAnimation'

const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/implementacion-solar">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>Atras
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <h4 className="navbar-brand  ">Energia Solar</h4>   
            </nav>
            <div style={styles.card} className="card text-white bg-dark m-1" > 
                <div className="alert alert-info m-2 " role="alert">
                    El mantenimiento se debe realizar de acuerdo con el pliego de Condiciones 
                    Técnicas. Se  debe disponer de un stock de repuestos, útiles y herramientas necesarias para cumplir 
                    con las labores de mantenimiento, acordes al tamaño de la instalación.    
                </div> 
                <div className="card-body" >
                    <div className="row" >
                        <div className="col">  
                            <div className="alert alert-info m-2 " role="alert">
                                <h5 className="mt-1"> MANTENIMIENTO PREVENTIVO </h5>
                                <p>
                                    Se debe asegurar que ningún obstáculo haga sombra sobre los módulos, y mantener limpia la parte 
                                    expuesta a los rayos solares de los módulos fotovoltaicos. <br/>
                                <br/>
                                    Las pérdidas producidas por la suciedad pueden llegar a ser de un 5%, y se 
                                    pueden evitar con una limpieza periódica adecuada
                                </p>
                            </div> 
                            <div className="alert alert-info m-2 " role="alert">          
                                <h6>PANELES SOLARES:</h6>
                                    <ul className="list-group ml-5 mb-4">
                                        <li className="list-item"> Limpieza periódica del panel </li>
                                        <li className="list-item"> Inspección visual de posibles degradaciones  (bimensualmente)  </li>
                                        <li className="list-item"> Control de la temperatura del panel (trimestralmente)  </li>
                                        <li className="list-item"> Control de la temperatura del panel (trimestralmente)  </li>
                                        <li className="list-item"> Control de las características eléctricas del panel (anualmente)  </li>
                                    </ul>
                            </div>
                            <div className="alert alert-info m-2 " role="alert">        
                                <h6>ESTRUCTURA SOPORTE DE LOS PANELES:</h6> 
                                <h6>Anualmente:</h6><span> En caso se alguna imperfección se debe reparar o en se defecto sustituir la pieza por una nueva </span>
                                <ul className="list-group ml-5">
                                    <li className="list-item">Comprobación de posibles degradaciones (deformaciones, grietas, etc).   </li>
                                    <li className="list-item">Comprobación del estado de fijación de la estructura a cubierta </li>
                                    <li className="list-item">Comprobación de la estanqueidad de la cubierta</li>
                                    <li className="list-item">Comprobación del estado de fijación de módulos a la estructura </li>
                                    <li className="list-item">Comprobar la toma a tierra y la resistencia de paso al potencial de tierra </li>
                                </ul>
                            </div>    
                        </div>    
                        <div className="col mt-5">
                            <Car/>
                        </div>    
                    </div>
                     
                </div>      
            </div>
            <div style={styles.card} className="card m-1 text-dark bg-light m-1 " > 
                <div className="card-body" > 
                    <div className="row">
                        <div className="col">
                            <div className="alert alert-primary m-2 " role="alert">
                                <h5 className="mt-1"> MANTENIMIENTO CORRECTIVO  </h5>
                                <span className="text-danger"> Se aplicará cuando debido a averías en la instalación, sea necesario subsanar el defecto de la misma.
                                    La entidad encargada del mantenimiento debera:</span>
                                    <br/><br/>
                                    <ul className="list-group ml-5 mb-2">
                                        <li className="list-item m-1 ">Garantizar la visita a la instalación 
                                            en los plazos establecidos y cada vez que el usuario lo requiera. </li>
                                        <li className="list-item m-1 ">Analizar y realizar un presupuesto adecuado de los 
                                            trabajos y reposiciones necesarias para el correcto funcionamiento
                                            de la instalación.</li>
                                        <li className="list-item m-1 ">Subsanar correctamente cualquier incidencia en un tiempo 
                                            máximo de 48 horas, excepto cuando se trate de causas de fuerza mayor debidamente 
                                            justificadas. </li>
                                    </ul>
                            </div>        
                        </div>    
                        <div className="col m-5">
                            <img style={{width:400, height:300}} className="mt-5" src="./mdos.jpg"/>
                            <div className="m-2" >
                                    <a
                                    className="App-link"
                                    href="https://www.greenenergy-latinamerica.com/mantenimiento-los-sistemas-fotovoltaicos/"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    ¿Quieres conocer mas acerca del mantenimiento de un sistema fotovoltaico?
                                    Conectate a internet y da click aqui 
                                    </a>
                          
                            <Link to="media-solar" >
                                <button type="button" className="btn btn-success btn-sm" >Ponte a prueba</button>
                            </Link>
                     </div>
                        </div>  
                    </div>  
                </div>    
            </div>
        </div>
    )
}

export default ImplementacionEolica



const styles={
    contain:{
        margin:5,
    },
    card:{
        marginBottom:5,
    },
    image:{
        heigth:500,
        width:400
    }
}
