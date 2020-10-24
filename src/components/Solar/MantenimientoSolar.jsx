import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/solar">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <a className="navbar-brand  ">Energia Solar</a>   
            </nav>
            <div style={styles.card} className="card text-white bg-dark m-1" > 
                <p className="m-2 font-weight-bold text-info " >El mantenimiento se debe realizar de acuerdo con el Pliego de Condiciones 
                Técnicas, cubriendo tanto el mantenimiento el reglamentario o legal. 
                Se  debe disponer de un stock de repuestos, útiles y herramientas necesarias para cumplir 
                con las labores de mantenimiento, acordes al tamaño de la instalación. <br/>
                 </p>
                <div className="card-body" >
                    <div className="row" >
                        <div className="col">  
                            <h5 className="mt-1"> MANTENIMIENTO PREVENTIVO </h5>
                            <p>
                            Dos aspectos a tener en cuenta primordialmente son, por un lado, asegurar que 
                            ningún obstáculo haga sombra sobre los módulos, y por el otro, mantener limpia la parte 
                            expuesta a los rayos solares de los módulos fotovoltaicos. <br/>
                            <br/>
                            Las pérdidas producidas por la suciedad pueden llegar a ser de un 5%, y se 
                            pueden evitar con una limpieza periódica adecuada</p>
                            <h6>PANELES SOLARES:</h6>
                            <ul className="list-group ml-5 mb-4">
                                <li className="list-item"> Limpieza periódica del panel </li>
                                <li className="list-item"> Inspección visual de posibles degradaciones  (bimensualmente)  </li>
                                <li className="list-item"> Control de la temperatura del panel (trimestralmente)  </li>
                                <li className="list-item"> Control de la temperatura del panel (trimestralmente)  </li>
                                <li className="list-item"> Control de las características eléctricas del panel (anualmente)  </li>
                            </ul>
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
                        <div className="col">
                            <img className="mt-5" src="./assets/solar/muno.jpg" alt="Energia Eolica" />
                        </div>    
                    </div>
                     
                </div>      
            </div>
            <div style={styles.card} className="card m-1  " > 
                <div className="card-body" > 
                    <div className="row">
                        <div className="col">
                            <h5 className="mt-1"> MANTENIMIENTO CORRECTIVO  </h5>
                            <span className="text-danger"  > Este plan de mantenimiento se aplicará únicamente cuando por circunstancias 
                                sobrevenidas, debidas a averías en la instalación, sea necesario subsanar el defecto de la misma.
                                La entidad encargada del mantenimiento debera</span>
                                 <br/><br/>
                            <ul className="list-group ml-5 mb-2">
                                <li className="list-item m-1 ">Garantizar la visita a la instalación 
                                    en los plazos establecidos y cada vez que el usuario lo requiera
                                    debido a cualquier incidencia en la misma. Dicha visita a la instalación 
                                    tras llamada del usuario se atenderá en el plazo máximo de 24h. </li>
                                <li className="list-item m-1 ">Analizar y realizar un presupuesto adecuado de los 
                                    trabajos y reposiciones necesarias para el correcto y normal funcionamiento
                                    de la instalación solar fotovoltaica.</li>
                                <li className="list-item m-1 ">Subsanar correctamente cualquier incidencia en un tiempo 
                                    máximo de 48 horas, excepto cuando se trate de causas de fuerza mayor debidamente 
                                    justificadas (por ejemplo acopio de materiales). </li>
                            </ul>
                        </div>    
                        <div className="col m-5">
                            <img className="mt-5" src="./assets/solar/mdos.jpg" alt="Energia Eolica" />
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
