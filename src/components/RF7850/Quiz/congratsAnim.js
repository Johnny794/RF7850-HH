import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../../Lotties/congrats.json'),
      rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
      }
    };
    
  
  return (
    <div>
        <Lottie 
	        options={defaultOptions}
          height={200}
          width={200}
          backgroundColor='white'
        />  
    </div>
  );
}