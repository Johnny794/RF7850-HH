import React from 'react';
import Lottie from 'react-lottie';
//import animationData from "./eolic"

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('./Lotties/arrowdown.json'),
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