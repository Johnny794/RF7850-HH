import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
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
                <h4 className="navbar-brand  ">CONFIGURACION EN QUICKLOOK RADIO HARRIS RF-7850M</h4>   
            </nav>            
            <div style={styles.card} className="card m-1 text-white bg-dark" >
                <h4 className="mt-2 align-self-center " > CONFIGURACION DE UN PRESET EN QUICKLOOK (VISTA RAPIDA) </h4>
                <div style={{margin:'0px 5px 0 5px', height:520}}  >      
                <Carousel labels='none' showStatus={false} >       
                    <div className="alert col bg-primary" role="alert" style={{height:500}} >
                        <div className="alert alert-info" role="alert" align='left'>                        
                            QUICKLOOK es una forma de Onda que trabaja en grupos de saltos de frecuencia en diferentes modos que le permiten al operador establecer una comunicación mas segura y robusta en su Encripción.
                            Para la configuración de un PRESET es necesario llevar la secuencia de los siguientes pasos que permitirán lograr comunicación entre dos o más radios.                                             
                        </div>                          
                        <div className="row alert alert-info " align='left'>                                
                            <br/>                                
                            <ul>
                                <li>Se inicia creando o generando una llave de seguridad de la siguiente manera. KEY MANAGER </li>                         
                            </ul>
                        </div>
                        <div  align='center' >
                            <img src="./assets/q1.png"  className='m-4' style={{width:700, borderRadius:15}}  />                          
                        </div>                        
                    </div>                                                        
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>    
                        <div className="row alert alert-info " align='left'>
                            <ul  className='m-3'  >
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
                        </div>                                                                                           
                        <div >
                            <img src="./assets/q2.png" className='m-4 mt-5' style={{width:800, borderRadius:15}} />                          
                        </div>
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>   
                        <div className="row alert alert-info " align='left' >
                            <ul  className='m-3'>
                                <li>Se edita el nombre de la llave que he elegido para trabajar, teniendo en cuenta que son solo dos Normas de Encripción AES y CITADELL.</li> 
                                <li>Realizado este paso, se confirma a través del símbolo del visto bueno que presenta la pantalla inferior.</li>	
                                <li>Seguido a esto, sale la siguiente pantalla. </li>
                            </ul>
                        </div>                                                                                          
                        <div >
                            <img src="./assets/q3.png" className='m-4 mt-5' style={{width:800, borderRadius:15}} />                          
                        </div>                               
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}} >  
                        <div className="row alert alert-info " align='left' >
                        <ul className='m-3' >
                                <li>Selecciono el * con la opción de ENT aquí pedirá un código en este caso el número 2, quien será el que me permitirá generar la encriptación en 64 o 32 caracteres hexadecimal de acuerdo a la cantidad expresada en bitios que valla trabajar, 128 – 256 bitios.</li> 
                                <li>En la pantalla del lado derecho se puede verificar en la parte de abajo que la codificación es diferente a la pantalla de la izquierda</li>	
                                <li>A continuación, voy a crear mi HOPSET (Grupos de salto)</li>	
                                </ul>
                        </div>                                                                                             
                        <div >
                            <img src="./assets/q4.png" className='m-4 mt-5' style={{width:800, borderRadius:15}}/>                          
                        </div>                               
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>  
                        <div className="row alert alert-info " align='left'>
                            <ul  className='m-3'>
                                <li>Al presionar la tecla 9 la radio me enviara a la pantalla donde selecciono TRANSEC – ECCM MANAGER – HOPSET para crear mi grupo de saltos.</li> 
                                <li>Edito el nombre de ese grupo de saltos en este caso sería QL1</li>
                                <li>Aquí debo general un ID – elegir una frecuencia de inicio START, también una frecuencia de termino STOP</li>  
                                <li>La configuración quedara como lo muestra la pantalla a continuación</li>  
                                <li>Ya configurado el HOPSET, se realiza la configuración general en NET MANAGER, esto volviendo a la pantalla principal a través de la tecla 9.</li>                            	
                            </ul>
                        </div>                                                                                             
                        <div >
                            <img src="./assets/q5.png" className='m-4 mt-5' style={{width:800, borderRadius:15}}/>                          
                        </div>                               
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>        
                        <div className="row alert alert-info " align='left'>
                            <ul className='m-5'>                            
                                <li>En esta pantalla de NET MANAGER se realiza la siguiente configuración de parámetros.</li>                               
                            </ul>
                        </div>                                                                                   
                        <div >
                            <img src="./assets/q6.png" className='m-4 mt-5' style={{width:900, borderRadius:15}} />                                                              
                        </div>                                                            
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>  
                        <div className="row alert alert-info " align='left'>
                            <ul  className='m-3'>
                                <li>En la opción de NET se presiona ENT para que muestre la siguiente pantalla donde al seleccionar la opción + permita editar el texto del nombre que se asignara en ese PRESET, en este caso será SALTOS 1 ya que se va trabajar en QUICKLOOK.</li>
                                <li>Se modifica el modo de CRIPTO MODE eligiendo CT, aquí se selecciona la llave creada CIT1</li>                               
                            </ul>
                        </div>                                                                                             
                        <div className='row align-items-center justify-content-center ' >
                            <img src="./assets/q7.png" className='m-4 mt-5' style={{width:800, borderRadius:15}} /> 
                            <img src="./assets/q8.png" className='m-4 mt-5' style={{width:200, borderRadius:15}} />                                                              
                        </div>                                                            
                    </div> 
                    <div className="alert col bg-primary" role="alert" style={{height:500}}>  
                        <div className="row alert alert-info " align='left'>
                            <ul className='m-3'>
                                <li>Después de haber editado la llave,  voy a RX HOPSET – TX HOPSET para cambiar el que he creado QL1 </li>
                                <li>Seguido se busca la opción de TX POWER se establecerá el nivel de potencia en que quiero transmitir, MED.</li> 
                                <li>Al final en la opción de APPS, se debe seleccionar NAVEGACION donde se modifica AUTO REPORT de NEVER a PTT</li>                              
                            </ul>
                        </div>                                                                                             
                        <div className='row align-items-center justify-content-center'>
                            <img src="./assets/q9.png" className='m-4 mt-5' style={{width:800, borderRadius:15}} /> 
                            <img src="./assets/q10.png" className='m-4 mt-5' style={{width:260, borderRadius:15}}/>                                                              
                        </div> 
                        <div className='mt-2' >
                            <ul align='left' >                        
                                <li>Presiona CLR seguidas veces hasta llegar a la pantalla principal donde se va asignar el numero a ese canal creado</li>                                                             
                            </ul>
                        </div>                                                                                                                                      
                    </div>                            
                    <div className="alert col bg-primary" role="alert" style={{height:500}}> 
                        <div className="row alert alert-info " align='left'>
                        <ul className='m-3'>
                                <li>Asignar el canal es un procedimiento muy sencillo como se demuestra a continuación.  </li>
                                <li>se ubica la opción de MODE SWITCH para seleccionar el número donde será asignado el canal.</li> 
                                <li>Selecciona el nombre del PRESET creado en este caso SALTOS1, al final aparecerá en la pantalla principal.</li>                              
                                </ul>
                        </div>                                                                                              
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <img src="./assets/q11.png"   className='m-4 mt-2' style={{width:600, height:200, borderRadius:15}} /> 
                                <img src="./assets/q12.png"   className='mt-2' style={{width:600, height:200, borderRadius:15}}/>                                                              
                        </div> 
                    </div>
                    </Carousel>                                                                                                                                                                    
            </div>                  
                    <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'15px', fontSize:'15px', margin:'0px 15px 40px 15px'}} >
                            <Link to = "/home">                        
                                <button className="btn btn-primary btn-sm">
                                    Atras
                                </button>                    
                            </Link> 
                            <Link to = "/quick-quiz" >        
                                <button style={{color:'white'}} className="btn btn-primary btn-sm" > < AiFillEdit style={{margin:'2px', fontSize:'10px'}}/>
                                    Test
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
        height:900
    },
    image:{
        width:400,
        height:300
    },
    rar:{        
    }
}