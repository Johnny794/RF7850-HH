import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft, BsArrowRight} from "react-icons/bs";
import Energy from './EnergyAnimation'
import Casa from './EnergiaSolarCasa'

const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/solar">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>Atras
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <h4 className="navbar-brand  ">Energia Solar</h4>
            </nav>
            <div style={styles.card2} className="card m-1 text-white bg-dark" >
                <h4 className="mt-2 align-self-center " > Cuando se va a instalar un sistema fotoelectrico se deben tener en cuenta algunas consideraciones </h4>
                <div className="card-body" > 
                    <div className="row">
                        <div className="col" > 
                            <div className="alert alert-primary" role="alert">
                                POTENCIA ELECTRICA 
                                <br/>
                                    La demanda máxima en una vivienda estrato uno, en Colombia, 
                                    se calcula en 3 kW que corresponden al 
                                    alumbrado y a electrodomésticos de primera necesidad     
                            </div>  
                            <div className="alert alert-info" role="alert">
                                 CONSUMO ELECTRICO
                                <br/>
                                <ul>
                                    <li>El consumo eléctrico es la cantidad de energía demandada por un determinado punto de 
                                        suministro durante un plazo de tiempo denominado período de facturación. </li>
                                    <br/>
                                    <li>La energía consumida por un conjunto de equipos es la suma del consumo de cada 
                                        uno de ellos durante un tiempo determinado, generalmente, día o mes.</li>
                                </ul>
                            </div>                                                         
                        </div>                
                    <div className="col">
                        <Casa/>                             
                    </div>                           
                    </div> 
                </div>    
            </div> 
            <div style={styles.card} className="card m-1 text-dark bg-dark" >
                    <div className="card-body" > 
                        <div className="row">
                            <div className="col" >  
                                <div className="alert alert-primary" role="alert">
                                    CONDICIONES AMBIENTALES
                                    <br/>
                                    <p>Se deben tener en cuenta las condiciones ambianteles del sitio donde se llevara a cabo la
                                        instalacion y asi seleccionar los equipos adecuados para la determinada locacion.
                                        <br/>
                                    </p>
                                    Algunos aspectos a tener en cuenta son:
                                    <ul className="m-3" >
                                        <li>  Localizacion (Latitud, longitud) </li>
                                        <li>  Temperatura </li>
                                        <li>  Altura sobre el nivel de mar </li>
                                        <li>  Humeadad relativa </li>
                                        <li>  Precipitaciones </li>
                                        <li>  Radiación solar </li>
                                        <li>  Radiación solar año </li>
                                        <li>  Incidencia rayos solares ano </li>
                                        <li>  Velocidad máxima del viento </li>
                                    </ul>
                            </div>  
                            <div className="alert alert-primary" role="alert">
                                 NORMAS Y CERTIFICACIONES
                                <br/>
                                <p>El diseño debe seguir las normas nacionales (ICONTEC), pero además de las características 
                                    técnicas, se debe solicitar que los equipos que se suministren para la instalación solar 
                                    fotovoltaica estén certificados por organismos nacionales o internacionales reconocidos.</p>
                                    <ul>
                                        <li> Módulos: <span>Su fabricación debe cumplir con lo indicado en las normas 
                                                    NTC 2883 y NTC 4405, o en la norma UL 1703, o en cualquier otra norma equivalente. </span></li>

                                        <li> Baterias: <span> Su fabricación debe cumplir con lo indicado en la norma NTC 5287 o en 
                                                    cualquier otra norma equivalente.</span></li> 

                                        <li> Controlador (regulador): <span> Su fabricación debe cumplir con lo indicado en la norma 
                                                    UL 1741 o en cualquier otra norma equivalente.</span></li> 

                                        <li> Inversor: <span>  Su fabricación debe cumplir con lo indicado en la norma UL 1741 o en 
                                                    cualquier otra norma equivalente.</span></li>                           
                                    </ul>
                            </div>               
                        </div>                
                        <div className="col">
                            <Energy/>
                            <div className="m-5 row" > 
                            <a
                                    className="App-link"
                                    href="https://www.youtube.com/watch?v=dlRXvtz4-Dc"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Implementacion de un sistema solar                              
                                    </a> 
                                                    
                                <Link to="mantenimiento-solar" >
                                    <button type="button" className="btn btn-primary btn-sm" >Ver Mantenimiento <BsArrowRight/> </button>
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
        margin:5
    },
    card:{
        marginBottom:5,
        height:600
    },
    card:{
        marginBottom:5,
        height:850
    },
    image:{
        width:400,
        height:300
    }
}