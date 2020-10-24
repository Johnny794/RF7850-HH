import React from 'react';
import Lottie from 'react-lottie';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../Lotties/click2.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div style={styles.view} >
      <Lottie 

	    options={defaultOptions}
      marginLeft={50}
      marginTop={100}
      width={100}
      height={100}
      
      />
    </div>
  );
}

const styles={
    view:{ 
      height:10,
      width:10,
      alignItems: 'flex-start',
      justifyContent: 'center',
      zIndex:2,
      marginBottom:20
      
    }
}