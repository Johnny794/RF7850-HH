import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft} from "react-icons/bs";

import OperCarac from './OperCarac'
import EolicSteps from './EolicSteps'



const Eolica = () => {

    return (       
        <div>
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/home">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm">Atras</button>
                            </li> 
                        </Link>                  
                    </ul> 
                    <h4 className="navbar-brand  ">OPERACIÓN RADIO HARRIS RF-7850M</h4>   
                </nav>  
                <OperCarac/>         
            </div>
        </div>             
    )
}

export default Eolica

const styles={
    contain:{
        margin:5,
    },
    card:{
        margin:5,
    },
    image:{
        width:400
    },
    image2:{
        width:300
    },
    image3:{
        width:200,
        height:300,
    },
    image4:{
        width:300
    },
    cardtwo:{
        backgroundColor:'#fff',
        fontSize: 16,
        heigth:500,
        width:400
    }
}