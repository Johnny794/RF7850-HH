import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/solar.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={300}
        width={400}
        backgroundColor='white'
      />
    </div>
  );
}