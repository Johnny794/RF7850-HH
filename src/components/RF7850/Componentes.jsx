import React from 'react'
import {Link} from 'react-router-dom';
import Comp from './Comp';

const Solar = () => {

    return (
    <div>
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
                    <h4 className="navbar-brand  ">COMPONENTES RADIO HARRIS RF-7850M</h4>   
                </nav>  
                <Comp/>                   
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