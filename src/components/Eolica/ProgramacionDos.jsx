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
                    <Link to = "/programacion">
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
                <h4 className="mt-2 align-self-center " > PROGRAMACION MANUAL DE LA RF7850M-HH </h4>
                <div className="card-body" >                    
                    <div className="row">
                        <div className="col" >                              
                            <div className="alert alert-info" role="alert">
                                NET MANAGER (CONFIGURACION GENERAL DEL PRESET)
                                <br/>
                                <br/>
                                <ul>
                                <li>Ahora se realiza la configuración general del PRESET. </li> 
                                <li>Inicia desde la pantalla principal en la opción de NET MANAGER + NET</li>	
                                <li>En pantalla va mostrar una serie de nombre en caso de haber mas canales programados como lo indica la imagen.</li> 
                                <li>Selecciono la opción del + para crear un nuevo nombre con el cual se va bautizar o reconocer ese PRESET.</li>	
                                </ul>
                                <div >
                                    <img src="./assets/n1.png" style={{margin:'0% 0% 0% 30%', width:'42%'}} />                          
                                </div>
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>De esta manera aparecerá la pantalla para editar su nombre,
                                     al terminar la edición le doy confirmar con la primera 
                                     opción que aparece en la ultima pantalla que se muestra a 
                                     continuación </li>	                                 
                                </ul>
                                <div >
                                    <img src="./assets/n2.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>
                            </div>
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>De esta manera el radio abrirá una ventana con diferentes opciones de configuración donde se podrá hacer cambios de acuerdo a la forma como quiero trabajar mi PRESET.</li> 
                                <li>Dentro de estas opciones voy a realizar el cambio de modo PT a modo CT para poder trabajar mi radio con seguridad de voz. Elijo la llave que he creado en este caso AES5.</li>	
                                </ul>
                                <div >
                                    <img src="./assets/n3.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>Luego bajo a la opción de RX FRECUENCY como lo muestra la imagen, aquí se establece la frecuencia que me den para trabajar, de igual forma se establece en TX FRECUENCY.</li> 
                                <li>Se configura la opción del SQUELCH de modo TONE a NOISE. (Silenciamiento de ruido)</li>	
                                <li>Luego se configura la opción de nivel de transmisión en potencia. La radio tiene 4 niveles de potencia, LOW,MEDIUM, HAIGH, HAIGH +-.</li>	
                                </ul>
                                <div >
                                    <img src="./assets/n4.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>La radio brinda una opción de selección de otro canal complementario para que aparezca en la pantalla principal.</li> 
                                <li>Al final aparecerá la opción de APPS donde se debe seleccionar NAVEGATION – AUTOREPORT (PTT) esto con el fin de realizar envió de posicionamiento en caso de ser requerido.</li>
                                <li>Luego con la tecla CLR se devuelve hasta llegar a la pantalla principal como muestra la imagen.</li>                                	
                                </ul>
                                <div >
                                    <img src="./assets/n5.png" style={{margin:'0% 0% 0% 30%'}} />                          
                                </div>                               
                            </div> 
                            <div className="alert alert-info" role="alert">                                                               
                                <ul>
                                <li>NET ASSIGNMENTS en esta opción se va asignar el canal donde se va grabar el PRESET para que lo muestre en la pantalla de inicio.</li>
                                <li>Una vez se entra a NET ASSIGNMENTS se baja hasta la última opción MODE SWITCH para seleccionar el número donde será guardado o grabado el PRESET.</li> 
                                <li>Se selecciona el nombre con que fue creado o configurado el PRESET para que sea asignado en el canal que ha sido asignado.</li>	
                                </ul>
                                <div >
                                    <img src="./assets/n6.png" style={{margin:'0% 0% 0% 30%'}} />
                                    <img src="./assets/n7.png" style={{margin:'1% 0% 0% 44%'}} />                          
                                </div>  

                                <Link to = "/programacion">                                   
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