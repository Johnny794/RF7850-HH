import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/panel.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={450}
        width={450}
        backgroundColor='white'
      />
    </div>
  );
}