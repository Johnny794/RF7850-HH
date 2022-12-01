import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/carc.json'),
      rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
      }
    };
    
  
  return (
    <div>
        <Lottie 
	        options={defaultOptions}
          height={100}
          width={100}
          backgroundColor='white'
        />  
    </div>
  );
}