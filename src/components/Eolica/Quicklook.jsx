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
                                <BsArrowLeft/>Atras
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <h4 className="navbar-brand  ">PROGRAMACIÓN RADIO HARRIS RF-7850M</h4>   
            </nav>
            <div style={styles.card} className="card m-1 text-white bg-dark" >
                <h4 className="mt-2 align-self-center " > CONFIGURACION DE UN PRESET EN QUICKLOOK (VISTA RAPIDA) </h4>
                <div className="card-body" >                    
                    <div className="row">
                        <div className="col" >    
                            <div className="alert alert-primary" role="alert">                        
                            QUICKLOOK es una forma de Onda que trabaja en grupos de saltos de frecuencia en diferentes modos que le permiten al operador establecer una comunicación mas segura y robusta en su Encripción.
                            Para la configuración de un PRESET es necesario llevar la secuencia de los siguientes pasos que permitirán lograr comunicación entre dos o más radios.                                             
                            </div>                          
                            <div className="alert alert-info" role="alert">                                
                                <br/>                                
                                <ul>
                                <li>Se inicia creando o generando una llave de seguridad de la siguiente manera. KEY MANAGER </li>                         
                                </ul>
                                <div >
                                    <img src="./assets/q1.png" style={{margin:'0% 0% 0% 30%', width:'42%'}} />                          
                                </div>
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>
                                EL Radio muestra una pantalla principal con una programación que hace por defecto de un canal
                                </li>	
                                <li>
                                A través de la tecla 9 PGM se ubica la opción de KEY MANAGER aquí presionamos enter hasta que muestre una próxima pantalla KEY.
                                </li>
                                <li>
                                A continuación, sigue la secuencia para efectuar la configuración de la llave
                                </li>                                 
                                </ul>
                                <div >
                                    <img src="./assets/q2.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>
                            </div>
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Se edita el nombre de la llave que he elegido para trabajar, teniendo en cuenta que son solo dos Normas de Encripción AES y CITADELL.</li> 
                                <li>Realizado este paso, se confirma a través del símbolo del visto bueno que presenta la pantalla inferior.</li>	
                                <li>Seguido a esto, sale la siguiente pantalla. </li>
                                </ul>
                                <div >
                                    <img src="./assets/q3.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Selecciono el * con la opción de ENT aquí pedirá un código en este caso el número 2, quien será el que me permitirá generar la encriptación en 64 o 32 caracteres hexadecimal de acuerdo a la cantidad expresada en bitios que valla trabajar, 128 – 256 bitios.</li> 
                                <li>En la pantalla del lado derecho se puede verificar en la parte de abajo que la codificación es diferente a la pantalla de la izquierda</li>	
                                <li>A continuación, voy a crear mi HOPSET (Grupos de salto)</li>	
                                </ul>
                                <div >
                                    <img src="./assets/q4.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Al presionar la tecla 9 la radio me enviara a la pantalla donde selecciono TRANSEC – ECCM MANAGER – HOPSET para crear mi grupo de saltos.</li> 
                                <li>Edito el nombre de ese grupo de saltos en este caso sería QL1</li>
                                <li>Aquí debo general un ID – elegir una frecuencia de inicio START, también una frecuencia de termino STOP</li>  
                                <li>La configuración quedara como lo muestra la pantalla a continuación</li>  
                                <li>Ya configurado el HOPSET, se realiza la configuración general en NET MANAGER, esto volviendo a la pantalla principal a través de la tecla 9.</li>                            	
                                </ul>
                                <div >
                                    <img src="./assets/q5.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>En esta pantalla de NET MANAGER se realiza la siguiente configuración de parámetros.</li>                               
                                </ul>
                                <div >
                                    <img src="./assets/q6.png" style={{margin:'0% 0% 0% 30%'}} />                                                              
                                </div>                                                            
                            </div> 

                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>En la opción de NET se presiona ENT para que muestre la siguiente pantalla donde al seleccionar la opción + permita editar el texto del nombre que se asignara en ese PRESET, en este caso será SALTOS 1 ya que se va trabajar en QUICKLOOK.</li>
                                <li>Se modifica el modo de CRIPTO MODE eligiendo CT, aquí se selecciona la llave creada CIT1</li>                               
                                </ul>
                                <div >
                                    <img src="./assets/q7.png" style={{margin:'0% 0% 0% 30%'}} /> 
                                    <img src="./assets/q8.png" style={{margin:'1% 0% 0% 44%'}} />                                                              
                                </div>  
                                                          
                            </div> 

                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Después de haber editado la llave,  voy a RX HOPSET – TX HOPSET para cambiar el que he creado QL1 </li>
                                <li>Seguido se busca la opción de TX POWER se establecerá el nivel de potencia en que quiero transmitir, MED.</li> 
                                <li>Al final en la opción de APPS, se debe seleccionar NAVEGACION donde se modifica AUTO REPORT de NEVER a PTT</li>                              
                                </ul>
                                <div >
                                    <img src="./assets/q9.png" style={{margin:'0% 0% 0% 30%'}} /> 
                                    <img src="./assets/q10.png" style={{margin:'1% 0% 0% 44%'}} />                                                              
                                </div> 
                                <ul>
                                <li>Presiona CLR seguidas veces hasta llegar a la pantalla principal donde se va asignar el numero a ese canal creado</li>                                                             
                                </ul>                                                                                           
                            </div> 

                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Asignar el canal es un procedimiento muy sencillo como se demuestra a continuación.  </li>
                                <li>se ubica la opción de MODE SWITCH para seleccionar el número donde será asignado el canal.</li> 
                                <li>Selecciona el nombre del PRESET creado en este caso SALTOS1, al final aparecerá en la pantalla principal.</li>                              
                                </ul>
                                <div >
                                    <img src="./assets/q11.png" style={{margin:'0% 0% 0% 30%'}} /> 
                                    <img src="./assets/q12.png" style={{margin:'1% 0% 0% 32%'}} />                                                              
                                </div> 
                                <Link to = "/home">                        
                                    <button className="btn btn-primary btn-sm">
                                        <BsArrowLeft/>Atras
                                    </button>                    
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
        height:900
    },
    image:{
        width:400,
        height:300
    },
    rar:{        
    }
}