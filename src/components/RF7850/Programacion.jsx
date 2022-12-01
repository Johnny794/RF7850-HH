import React from 'react'
import {Link} from 'react-router-dom';
import { FiCornerRightUp } from "react-icons/fi";
import HandConf from './handconf'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
                <div className='row justify-content-center ' >
                    <h4 className="m-4 align-self-center " > PROGRAMACIÓN MANUAL DE LA RF7850M-HH </h4>
                    <HandConf/>
                </div>
                <div style={{margin:'0px 5px 0 5px', height:520}}  >
                <Carousel labels='none' showStatus={false} >                                                    
                    <div className="alert col bg-primary " role="alert" style={{height:500}} >
                    <div className="alert alert-info " role="alert" align='left' >                        
                        Para la programación manual de la radio es necesario llevar la secuencia de una serie de pasos que son muy sencillo, a continuación, vamos a encontrar las formas de como crear un PRESET (CANAL) de manera manual para cada una de las formas de ondas con que cuenta la radio para trabajar.             
                    </div >
                            <div className="row alert alert-info "  align='left' >
                            Frecuencia Fija en VULOS
                            <br/>
                            <ul>
                                Al momento de realizar un PRESET de manera Manual es necesario llevar la secuencia de los siguientes pasos para que los parámetros seleccionados en la radio permitan al momento de guardar la información no muestre errores en la pantalla.
                            <br/>
                            <br/>
                            <li >
                                Se inicia presionando la tecla 9 PGM para que la radio muestre la siguiente pantalla.
                            </li>
                            </ul>
                            </div>
                            <div align='center' >
                                <img src="./assets/k1.png" alt='imagen' className='m-4' style={{width:600, borderRadius:15}} />                          
                            </div>
                    </div>
                    <div className="alert col bg-primary" role="alert"  style={{height:500}} >
                            <div className="row alert alert-info " align='left' >
                            KEY MANAGER (CREACION DE LLAVES)
                                <br/>
                                <br/>
                                <ul>
                                <li>La radio presenta esta pantalla principal una vez se ingresa a la programación.</li> 
                                <li>Lo primero que se debe realizar es la creación de la llave o llaves dependiendo cuantos PRESET se van a programar, es de aclarar que se puede emplear una sola llave de ser necesario.</li>	
                                <li>Se seleccionan las opciones de KEY MANAGER + KEY hasta que nos muestre la pantalla donde le agregaremos una llave de seguridad, ya sea AES-CITADELL como lo muestra la pantalla de abajo.</li> 
                                <li>La pantalla indicara el nombre de las llaves que se puedan generar, en caso de no mostrar quiere decir que no hay llaves, es necesario crear una nueva llave.</li>	
                                <li>Para crear la llave le doy agregar más en la opción de la pantalla donde está el + para de esta manera editar el nombre de la llave como muestra la imagen</li>	
                                </ul>
                            </div>
                            <div >
                                <img src="./assets/k2.png" alt='imagen' className='m-4' style={{width:700, borderRadius:15}}/>                          
                            </div>
                    </div>
                    <div className="alert col bg-primary" role="alert" style={{height:500}} >
                            <div className="row alert alert-info " align='left' >
                            <ul className='m-3' >
                                <li>Cada ves que se realiza una configuración en pantalla se debe confirmar con el <span style={styles.rar} ><FiCornerRightUp></FiCornerRightUp></span>, asi estar seguro del cambio realizado.</li> 
                                <br />                                
                                <li>Una ves generado el nombre de la llave nos muestra la siguiente ventana donde le daremos enter sobre el asterisco, para que nos permita crear la configuración hexadecimal de la llave como lo sigue mostrando la ayuda, es necesario establecer un digito como lo muestra la ayuda en este caso es el número 8, el cual es necesario para poder generar mi llave.</li>	                                 
                                </ul>
                            </div>
                                <div >
                                    <img src="./assets/k3.png" alt='imagen' className='m-5' style={{width:700, borderRadius:15}} />                          
                                </div>
                    </div>
                    <div className="alert col bg-primary" role="alert" style={{height:500}} >
                            <div className="row alert alert-info " align='left' >
                            <ul className='m-3' >
                                <li>A continuación, podemos ver en pantalla como quedo creada nuestra llave, se puede ver que es muy diferente a la expresión Hexadecimal anterior, ver en la primera línea subrayada.</li> 
                                <br />
                                <li>Aquí termina el proceso de generar o crear mi llave.</li>	
                                </ul>
                                </div>
                                <div >
                                    <img src="./assets/k4.png" alt='imagen'  className='m-4' style={{width:400, borderRadius:15}} />                          
                                </div>                                 
                    </div>                                                   
                </Carousel>
                </div>                                                  
                    <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'15px', fontSize:'15px', margin:'0px 15px 40px 15px'}} >
                                <Link to = "/programacion">                                   
                                                                        
                                </Link> 
                                <Link                         
                        to = "/net-manager"    >  
                        <button className="btn btn-primary btn-sm">                            
                        Net Manager
                        </button>  
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
        height:800
    },
    image:{
        width:400,
        height:300
    },
    rar:{        
    }
}