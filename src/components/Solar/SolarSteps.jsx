import React from 'react'
import { Link } from "react-router-dom"
import Click from './click'
import { BsFillForwardFill } from "react-icons/bs";
import {useSpring, animated} from 'react-spring'

const SolarSteps = () => {
    const [props,  set]  = useSpring(() => ({opacity: 0}))
    const [props2, set2] = useSpring(() => ({opacity: 0}))
    const [props3, set3] = useSpring(() => ({opacity: 0}))
    const [props4, set4] = useSpring(() => ({opacity: 0}))
    const [props5, set5] = useSpring(() => ({opacity: 0}))


function fade(e) {
    e.preventDefault();
    set({opacity: 1})
  }

function fade2(e) {
    e.preventDefault();
    set2({opacity: 1})
  }

function fade3(e) {
    e.preventDefault();
    set3({opacity: 1})
  }

function fade4(e) {
    e.preventDefault();
    set4({opacity: 1})
  }

function fade5(e) {
    e.preventDefault();
    set5({opacity: 1})
  }

function fadeOut(e) {
    e.preventDefault();
    set({opacity: 0})
    set2({opacity: 0})
    set3({opacity: 0})
    set4({opacity: 0})
    set5({opacity: 0})
  }  

    return (
        <div style={styles.div} >                   
            <div className="row" >
                <Click/>
                <div style={styles.divbutton} >
                    <button className="btn btn-success btn-sm m-5 " onClick={fade}>¿Cómo llega a tu casa?</button>      
                </div> 
                <div style={styles.div2}  >
                    <animated.div style={props} className="row" >
                            <img style={{width:200}} src="./assets/eolica/fs1.jpg" alt="Energia Eolica" />
                            
                            <button className="btn btn-success btn-sm m-5 " onClick={fade2}><BsFillForwardFill/></button>
                           
                    </animated.div>     
                </div>    
            </div> 
            <div className="row" >
                <div style={styles.div1} > 
                    <animated.div style={props2}  >
                            <img style={{width:100}} src="./assets/eolica/f2e.jpg" alt="Energia Eolica" />
                            <button className="btn btn-success btn-sm m-3 " onClick={fade3}><BsFillForwardFill/></button>
                            <p>Regulador de Carga</p>
                    </animated.div>   
                </div> 
                <div style={styles.div2} >
                    
                    <animated.div style={props3}  >
                            <img style={{width:100}} src="./assets/eolica/f3e.jpg" alt="Energia Eolica" />
                            
                            <button className="btn btn-success btn-sm m-3 " onClick={fade4}><BsFillForwardFill/></button> 
                        <p>Bateria</p>
                    </animated.div>   
                </div>
                <div style={styles.div3} className="mt-5" > 
                    <animated.div style={props4}  >
                            <img style={{width:100}} src="./assets/eolica/f4e.jpg" alt="Energia Eolica" />
                            
                            <button className="btn btn-success btn-sm m-3 " onClick={fade5}><BsFillForwardFill/></button>
                            <p>Inversor</p>
                    </animated.div>   
                </div> 
                <div style={styles.div4} > 
                    <animated.div style={props5}  >
                            <img style={{width:100}} src="./assets/eolica/f5e.png" alt="Energia Eolica" />
                            <img style={{width:100}} src="./assets/eolica/tele.jpg" alt="Energia Eolica" />
                            <button className="btn btn-success btn-sm m-3 " onClick={fadeOut}>REPETIR</button>
                    </animated.div>   
                </div>     
            </div>     
        </div>
    )
}

export default SolarSteps;

const styles={
    div:{
        marginLeft:10
    },
    divbutton:{
        height:80,
        width:150,
    },
    div1:{
        marginTop:20,
        marginLeft:10,
        //backgroundColor:'red'
    },
    div2:{
        marginLeft:50,
        marginTop:40,
      //  backgroundColor:'blue'
    },
    div3:{
        marginTop:25,
        marginLeft:40
       // backgroundColor:'green'
    },
    div4:{
        margin:10,
       // backgroundColor:'green'
    }
}