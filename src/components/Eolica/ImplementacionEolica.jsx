import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import Turbina from './turbina'
import { BsArrowRight } from "react-icons/bs";


const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/eolica">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>Atras
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <h4 className="navbar-brand  ">Energia Eolica</h4>   
            </nav>
            <div style={styles.card} className="card m-1 text-white bg-dark" >
                <h4 className="mt-2 align-self-center " > ¿Qué debo tener en cuenta a la hora de implementar un aerogenerador? </h4>
                <div className="card-body" >
                    <div class="alert alert-danger" role="alert">
                        <h5 className="mt-1 text-danger " > ATENCIÓN </h5>
                            La seguridad debe ser su principal preocupación al elegir su ubicación. Pueden existir peligros inherentes eléctricos  y / o mecánicos              
                    </div> 
                    <div className="row">
                        <div className="col" > 
                            <div class="alert alert-primary" role="alert">
                                PRECAUCIONES
                                <br/>
                                <ul>
                                    <li>Las palas del rotor están fabricadas de un material muy resistente. En la punta, las palas pueden estar moviéndose a velocidades de más de 275 millas por hora (440 km/h).</li>
                                    <br/>
                                    <li>conectar a tierra todas las partes metálicasSi se produce un cortocircuito se puede producir un incendio.
                                            Para evitar este peligro, es necesario montar un fusible o disyuntor de tamaño adecuado 
                                            en las líneas que conectan a la batería.</li>
                                </ul>
                            </div>  
                            <div class="alert alert-info" role="alert">
                                 TENGA EN CUENTA
                                <br/>
                                <ul>
                                    <li>Los aerogeneradores, como todos los equipos eléctricos, producen radiación electromagnética, 
                                                que puede interferir en las comunicaciones por radio. Esta interferencia se puede solucionar 
                                            a través de la instalación de deflectores o repetidores.</li>
                                    <br/>
                                    <li>Hay dos fuentes de ruido asociadas al funcionamiento de los aerogeneradores: ruido aerodinámico, 
                                            causado por las palas pasando a través del aire, y ruidos mecánicos, debidos al funcionamiento 
                                            de elementos mecánicos en la góndola (el generador, la caja de cambios, etc.).</li>
                                </ul>
                            </div>  
                                          
                                        
                                            
                                        
                        </div>                
                        <div className="col">
                            <Turbina/>                                
                        </div>                           
                    </div> 
                </div> 
                <div className="m-2" >
                
                                    <a
                                    className="App-link"
                                    href="https://www.youtube.com/watch?v=09fkGr-A8Og"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Mira la implementacion de un aerogenerador                              
                                    </a>
                          
                            <Link to="mantenimiento-eolica" >
                                        <button type="button" className="btn btn-primary btn-sm" >Ver Mantenimiento <BsArrowRight/> </button>
                            </Link>
                     </div>       
            </div> 
        </div>
    )
}

export default ImplementacionEolica


const styles={
    contain:{
        margin:5
    },
    card:{
        marginBottom:5,
        height:900
    },
    image:{
        width:400,
        height:300
    }
}