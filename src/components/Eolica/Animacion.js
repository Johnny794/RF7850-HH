import React from 'react';
import Lottie from 'react-lottie';
//import animationData from "./eolic"

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/eolic.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        backgroundColor='white'
      />
    </div>
  );
}