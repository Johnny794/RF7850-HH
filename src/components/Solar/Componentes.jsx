import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {useSpring, animated} from 'react-spring';
import SolarUno from './SolarUno';
import Click from './click'
import Panel from './PanelAnimation'
const Solar = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
const [props2, set2, stop2] = useSpring(() => ({opacity: 0}))
const [props3, set3, stop3] = useSpring(() => ({opacity: 0}))
const [props4, set4, stop4] = useSpring(() => ({opacity: 0}))



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
function fadeIn(e) {
    e.preventDefault();
    set4({opacity: 1})
  }  


    return (
    <div>
        <div>
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/home">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm"><BsArrowLeft/>Atras</button>
                            </li> 
                        </Link>                  
                    </ul> 
                    <h4 className="navbar-brand  ">COMPONENTES RADIO HARRIS RF-7850M</h4>   
                </nav>  
                <SolarUno/>   
                {/*<EolicaDos/>*/}
            </div>
        </div>  
         
    </div>


        
    )
}

export default Solar

const styles={
    contain:{
        margin:5,
    },
    card:{
        margin:5,
    },
    image:{
        width:500
    },
    cardtwo:{
        backgroundColor:'#fff',
        fontSize: 16,
        heigth:500,
        width:400
    }
}