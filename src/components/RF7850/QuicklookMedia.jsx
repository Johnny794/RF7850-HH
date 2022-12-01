import React, { Component } from 'react'
import QuickQuiz from './Quiz/QuickQuiz'
import {Link} from 'react-router-dom';

export default class Media extends Component {

    constructor(props) {
		super(props);  
		this.state = {
            contador:0		        
		};
	}	

    render() {
        
        return (
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/quicklook">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm">Atras</button>
                            </li>
                        </Link>                 
                    </ul> 
                    <h4 className="navbar-brand  ">Test</h4>
                </nav> 
          <div style={{height:500}} >
            <QuickQuiz/>
          </div>  
          </div>
        )
    }
}


const styles = {
    contain:{
        margin:5        
    },
    imagen:{
        width:300,
        height:400,
        opacity:0.3
    },
    card:{
        marginBottom:5,
        height:520
    },
    pieza:{
        width:100,
        height:133.3,
        margin:5,
    }
}