import React from "react";
import Animacion from "./Animacion"
import {useSpring, animated} from 'react-spring'

const EolicaUno = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
function fade(e) {
    e.preventDefault();
    set({opacity: 1})
  }

  return (
    <div style={styles.card} className="card text-white bg-dark "> 
        <h4 className="mt-2 align-self-center " > Energia Eolica </h4> 
        <div className="card-body">   
            <div className="row"> 
                <div className="col">                  
                    <div className="row d-flex align-self-center" >
                            <div className="col" >
                                <button className="btn btn-primary btn-sm mb-5 " onClick={fade}>¿Ques es?</button> 
                            </div>
             
                            <div className="col" >
                                <animated.div style={props} className='mt-2' >
                                    <div className="card text-white bg-primary mb-1 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                        La energía eólica es una fuente de energía renovable que se obtiene 
                                        de la energía cinética del viento que mueve las palas de un aerogenerador
                                        el cual a su vez pone en funcionamiento una turbina que la convierte en 
                                        energía eléctrica.
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div>
                        
                </div>
                <div className="col"> 
                    <Animacion/>
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