import React from 'react';
import Lottie from 'react-lottie';
//import animationData from "./eolic"

export default function App() {
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/wind.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div style={styles.view} >
        <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
          backgroundColor='white'
        /> 
    </div>
  );
}

const styles={
    view:{ 
      zIndex:2,   
    }
}