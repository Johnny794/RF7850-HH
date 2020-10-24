import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/turbina.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div  >
    <p className="text-justify" > 
                                        La configuración más ideal para un aerogenerador es montado sobre un mástil sin necesidad 
                                        de cables de anclaje y en un lugar expuesto al viento. Sin embargo, 
                                        si el único sitio disponible es el tejado de un edificio, instalar un pequeño sistema 
                                        eólico puede ser, factible si se monta lo suficientemente alto como para
                                        minimizar la turbulencia, o si el régimen del viento en ese emplazamiento en particular es favorable.
                            
                            </p> 
      <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      /> 
    </div>
  );
}

const styles={
    view:{ 
        height:100,
        width:200,
        backgroundColor:'red',
    }
}