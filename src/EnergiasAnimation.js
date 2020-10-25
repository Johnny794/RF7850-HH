import React from 'react';
import Lottie from 'react-lottie';
//import animationData from "./eolic"

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('./Lotties/energias.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={950}
        backgroundColor='white'
      />
    </div>
  );
}