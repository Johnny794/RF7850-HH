import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { FiCornerRightUp } from "react-icons/fi";
import Turbina from './turbina'
import { BsArrowRight } from "react-icons/bs";
import Click from './click'


const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/home">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                Atras
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <h4 className="navbar-brand  ">PROGRAMACIÓN RADIO HARRIS RF-7850M</h4>   
            </nav>
            <div style={styles.card} className="card m-1 text-white bg-dark" >
                <h4 className="mt-2 align-self-center " > PROGRAMACION MANUAL DE LA RF7850M-HH </h4>
                <div className="card-body" >
                    <div className="alert alert-primary" role="alert">                        
                        Para la programación manual de la radio es necesario llevar la secuencia de una serie de pasos que son muy sencillo, a continuación, vamos a encontrar las formas de como crear un PRESET (CANAL) de manera manual para cada una de las formas de ondas con que cuenta la radio para trabajar.             
                    </div> 
                    <div className="row">
                        <div className="col" > 
                            <div className="alert alert-primary" role="alert">
                                Frecuencia Fija en VULOS
                                <br/>
                                <ul>
                                    Al momento de realizar un PRESET de manera Manual es necesario llevar la secuencia de los siguientes pasos para que los parámetros seleccionados en la radio permitan al momento de guardar la información no muestre errores en la pantalla.
                                    <br/>
                                    <br/>
                                    <li>
                                    Se inicia presionando la tecla 9 PGM para que la radio muestre la siguiente pantalla.
                                    </li>
                                </ul>
                                <div >
                                    <img src="./assets/k1.png" style={{margin:'0% 0% 0 30%'}} />                          
                                </div>
                            </div>  
                            <div className="alert alert-info" role="alert">
                                KEY MANAGER (CREACION DE LLAVES)
                                <br/>
                                <ul>
                                <li>La radio presenta esta pantalla principal una vez se ingresa a la programación.</li> 
                                <li>Lo primero que se debe realizar es la creación de la llave o llaves dependiendo cuantos PRESET se van a programar, es de aclarar que se puede emplear una sola llave de ser necesario.</li>	
                                <li>Se seleccionan las opciones de KEY MANAGER + KEY hasta que nos muestre la pantalla donde le agregaremos una llave de seguridad, ya sea AES-CITADELL como lo muestra la pantalla de abajo.</li> 
                                <li>La pantalla indicara el nombre de las llaves que se puedan generar, en caso de no mostrar quiere decir que no hay llaves, es necesario crear una nueva llave.</li>	
                                <li>Para crear la llave le doy agregar más en la opción de la pantalla donde está el + para de esta manera editar el nombre de la llave como muestra la imagen</li>	
                                </ul>
                                <div >
                                    <img src="./assets/k2.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Cada ves que se realiza una configuración en pantalla se debe confirmar con el <span style={styles.rar} ><FiCornerRightUp></FiCornerRightUp></span>, asi estar seguro del cambio realizado.</li> 
                                <li>Una ves generado el nombre de la llave nos muestra la siguiente ventana donde le daremos enter sobre el asterisco, para que nos permita crear la configuración hexadecimal de la llave como lo sigue mostrando la ayuda, es necesario establecer un digito como lo muestra la ayuda en este caso es el número 8, el cual es necesario para poder generar mi llave.</li>	                                 
                                </ul>
                                <div >
                                    <img src="./assets/k3.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>
                            </div>
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>A continuación, podemos ver en pantalla como quedo creada nuestra llave, se puede ver que es muy diferente a la expresión Hexadecimal anterior, ver en la primera línea subrayada.</li> 
                                <li>Aquí termina el proceso de generar o crear mi llave.</li>	
                                </ul>
                                <div >
                                    <img src="./assets/k4.png" style={{margin:'0% 0% 0% 43%'}} />                          
                                </div>  

                                <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'15px', fontSize:'15px'}} >
                                 <Link 
                                    className="btn btn-primary btn-sm mb-5 "
                                    to = "home"    >                                
                                    Atras
                                </Link> 
                                <Link 
                                    className="btn btn-primary btn-sm mb-5 "
                                    to = "net-manager"    >                                
                                Siguiente
                                </Link> 
                                </div>                                                             
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
        height:1500
    },
    image:{
        width:400,
        height:300
    },
    rar:{        
    }
}