import React from "react";
import CarcAnim from "./carcAnim"
import FreqAnim from "./freqAnim"
import {Link} from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";

const EolicaUno = () => {


  return (
    <div className="card text-white bg-dark mt-1 " style={{height:900}} >                 
        <h4 className="mt-2 align-self-center " style={{margin:'50px'}} >RADIO HARRIS RF-7850M</h4>                                                     
        <div className="row d-flex"  style={{justifyContent:'space-evenly'}} >                                                                                       
            <div className="card text-white bg-primary mb-1 d-inline-block" style={styles.cardtwo} > 
                <div className="card-body ">
                  <div className="alert alert-primary">
                                        La RF7850M-HH es una radio transceptor multibanda que trabajan en una gama de frecuencia de 30,000MHZ a 512,000MHZ, 
                                        ocupa las bandas VHF baja-Alta -UHF en VULOS, y formas de Ondas ANW2C – QUICKLOOK, las cuales de acuerdo a sus características 
                                        mejoradas permiten una operabilidad en la radio de muy fácil manejo, brindando un sistema de comunicación de gran confiabilidad 
                                        basado en normas de Encriptación denominadas AES y CITADEL de 128 – 256 bitios en expresión de 32-64 caracteres hexadecimal. 
                  </div>                                      
                </div>
                <div className=" row  align-items-center justify-content-center card-body">
                    <FreqAnim/>
                    <img className="m-4 align-self-center " alt="imagen" src="./assets/uno2.png" style={{margin:'0% 50% 0 35%'}} />                          
                </div> 
              </div>

            {/* Caracteristicas */}
            <div className="card text-white bg-primary mb-1 d-inline-block" style={styles.cardtwo} >                                                                  
                <div className="card text-white bg-primary mb-1 d-inline-block">    
                    <div className="card-body ">
                    <div className="row justify-content-center" >
                      <h4 className="m-4 align-self-center " align='center' >CARACTERISTICAS</h4> 
                      <CarcAnim />
                    </div>
                    <div className="alert alert-primary" role="alert">
                      Dentro de sus características la radio nos brinda la capacidad de transmitir información a través de voz y datos. Para ello es necesario configurar una serie de pasos de manera manual o a través de la plataforma CPA (Aplicación de Planificación de Comunicaciones).                                                                                                                                                                   
                    </div> 
                    <div className="alert alert-secondary" role="alert">
                      Una vez realizada la programación en la radio se hace posible enviar esta información mediante RF a otra radio que no tenga estos parámetros de programación mediante configuración de código de seguridad y frecuencia a través de línea de vista.                                                                                                                                                                   
                    </div>  
                    <div className="alert alert-info" role="alert">
                      La radio RF7850M-HH cuenta con un canal de trabajo especial MACA2 en una frecuencia fija como prioridad de voz y datos en un ancho de banda de 75Khz mediante un circuito de tipo simultaneo, esto le permite a la radio poder establecer comunicación sobre una red que este siendo utilidad al instante.
                      La RF7850M-HH brinda la capacidad de realizar pruebas de autodiagnósticos como método de revisión interna para verificar que parte física o interna presenta una falla de operación.                                                                                                                                                                   
                    </div>                                                                  
                    </div>                     
                </div>                                                                                                                             
            </div>                                                                                                                                   
        </div>          
      <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', justifyContent:'end', padding:'15px', fontSize:'15px'}} >
      <Link to = "/oper-quiz" >        
              <button style={{margin:'2px', color:'white'}} className="btn btn-primary btn-sm" > < AiFillEdit style={{margin:'2px', fontSize:'15px'}}/> Test</button>          
      </Link> 
      </div>                                                                                               
    </div>            
  );
}

export default EolicaUno;

const styles={
    contain:{
        margin:5,
    },
    card:{
        margin:5,
        height:200,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:400
    },
    image2:{
        width:300
    },
    image3:{
        width:200,
        height:300,
    },
    image4:{
        width:300
    },
    cardtwo:{
        backgroundColor:'#fff',
        fontSize: 16,
        heigth:600,
        width:500
    }
}