import React from "react";
import Animacion from "./Animacion"
import Click from './click'
import {useSpring, animated} from 'react-spring'
import {Link} from 'react-router-dom';
import SolarSteps from './SolarSteps'

const EolicaUno = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
function fade(e) {
    e.preventDefault();
    set({opacity: 1})
  }

  return (
    <div style={styles.card} className="card text-white bg-dark "> 
        <h4 className="mt-2 align-self-center " >Componentes</h4> 
        <div className="card-bod row d-flex " >  
            <ul style={{margin:'5% 12% 0 13%'}} >
                <li>Cuerpo del radio</li>
                <li>Bateía recargable</li> 
                <li>Antena GPS</li>
                <li>Antena multibanda</li>
                <li>Protector de programación</li>
                <li>Display</li>
                <li>Perilla de canales</li>
                <li>Toma de audio</li>
                <li>Conector de antena (Multibanda - Antena SATCOM)</li>
                <li>Parlante</li>
                <li>Micrófono</li>
                <li>CDS (Software de programación)</li>
            </ul>             
            <div className="col">                        
                <img src="./assets/rf1.png" style={{margin:'10% 40% 0 20%'}} />                                                      
            </div>                                                                
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
        height:'800px'      
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
        heigth:500,
        width:500
    }
}