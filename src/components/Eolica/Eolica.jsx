import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

import EolicaDos from './EolicaDos'
import EolicaUno from './EolicaUno'



const Solar = () => {

    return (       
        <div>
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm"><BsArrowLeft/>Atras</button>
                            </li> 
                        </Link>                  
                    </ul> 
                    <a className="navbar-brand  ">Energia Eolica</a>   
                </nav>  
                <EolicaUno/>   
                <EolicaDos/>
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