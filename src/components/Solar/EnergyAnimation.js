import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/energy.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div style={styles.view} >
      <Lottie 
	    options={defaultOptions}
        height={450}
        width={450}
        backgroundColor='white'
      />
    </div>
  );
}
const styles={
    view:{
        backgroundColor:'white'
    }
}