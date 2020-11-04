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
        <h4 className="mt-2 align-self-center " >Sistema Fotoelectrico </h4> 
        <div className="card-body">   
            <div className="row"> 
                <div className="col">  
                <Click/>                
                    <div className="row d-flex align-self-center" >
                            
                            <div className="col" >
                                <button className="btn btn-primary btn-sm mb-5 " onClick={fade}>¿Ques es?</button> 
                            </div>
             
                            <div className="col" >
                                <animated.div style={props} className='mt-2' >
                                    <div className="card text-white bg-primary mb-1 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                        Es un sistema que consiste en la integración de varios componentes, 
                                                    cada uno de ellos cumpliendo con una o más funciones específicas, a fin de 
                                                    que éste pueda suplir la demanda de energía eléctrica requerida por el tipo de carga, 
                                                    usando la energía de la radiación solar para convertirla en energía eléctrica.
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div>
                    <SolarSteps/>     
                </div>
                <div className="col"> 
                    <Animacion/>
                    <div style={{marginTop:25, marginLeft:100}} >
                        <Link c to = "/funcionamiento-solar">
                            <a className="btn btn-primary btn-sm">AQUI PUEDES VER SU FUNCIONAMIENTO</a> 
                        </Link>
                    </div>
                </div>
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