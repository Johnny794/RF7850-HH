import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import Block from './Block';

export default class Media extends Component {

    constructor(props) {
		super(props);  
		this.state = {
            contador:0,
		  'movs': {
        'b_0': {
          'color': 'empty',
          'near': ['b_1', 'b_3']
        },
        'b_1': {
          'color': 'img_1',
          'near': ['b_0', 'b_2', 'b_4']
        },
        'b_2': {
          'color': 'img_2',
          'near': ['b_1', 'b_5',]
        },
        'b_3': {
          'color': 'img_3',
          'near': ['b_0', 'b_4', 'b_6'],
        },
        'b_4': {
          'color': 'img_4',
          'near': ['b_1', 'b_3', 'b_5', 'b_7'],
        },
        'b_5': {
          'color': 'img_5',
          'near': ['b_2', 'b_4', 'b_8'],
        },
        'b_6': {
          'color': 'img_6',
          'near': ['b_3', 'b_7',],
        },
        'b_7': {
          'color': 'img_7',
          'near': ['b_6', 'b_4', 'b_8'],
        },
        'b_8': {
          'color': 'img_8',
          'near': ['b_7', 'b_5'],
        },
      }
		};
    this.handleChange = this.handleChange.bind(this);
	}
	changesDone() {
	 // console.log("done!", this.state);
	}
	
	componentDidMount() {
	  this.handleChange(1);
	  this.handleChange(4);
	  this.handleChange(7);
	  this.handleChange(6);
	  this.handleChange(3);
	  this.handleChange(0);
	  this.handleChange(1);
	  this.handleChange(4);
	  this.handleChange(7);	  
  }
	
  handleChange(nClicked) {

    if ( nClicked >= 0 && nClicked <= 8  ) {
        
      for(var i = 0; this.state.movs['b_' + nClicked].near.length > i; i++) {
        var _b = this.state.movs['b_' + nClicked].near[i];
        // console.log(">", _b);
        if (this.state.movs[_b].color === 'empty') {
          var no = {
            'movs': {}
          };
          no['movs'][_b] = {};
          // this.state
          // console.log("n",  this.state.movs['b_' + nClicked].color);
          no['movs'][_b].color = this.state.movs['b_' + nClicked].color;
          no['movs'][_b].near = this.state.movs[_b].near;
          
          no['movs']['b_' + nClicked] = {};
          no['movs']['b_' + nClicked].color = 'empty';
          no['movs']['b_' + nClicked].near = this.state.movs['b_' + nClicked].near;

          var _new = Object.assign(this.state.movs, no['movs']);
          this.setState({
            'movs': _new,
          }, function() {
            this.changesDone();
          });
        }
      }
    }
    
  };

    render() {
        
        return (
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/home">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm">Atras</button>
                            </li>
                        </Link>                 
                    </ul> 
                <h4 className="navbar-brand  ">Juega</h4>  
                </nav> 
{/*PUUUZZZZLLLEEEEE*/}
                <div style={styles.card} className="card m-1 text-white bg-dark" >
                  <div className="cardbody" >
                    <div className="App">
                      <h4 className="mt-2 align-self-center " > Arma la radio </h4>
                      <div className="row mt-5" > 
                        <div className= "col mt-5">
                          <div className="wrapper">
                              <img src="./assets/RF1.png" className="App-logo" alt="radio" />
                          </div>
                        </div>
                        <div className="col mt-5">
                          <div className="wrapper">
                            <div className="multibox">
                                <Block number={0} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_0.color} />
                                <Block number={1} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_1.color} />
                                <Block number={2} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_2.color} />
                                <Block number={3} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_3.color} />
                                <Block number={4} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_4.color} />
                                <Block number={5} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_5.color} />
                                <Block number={6} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_6.color} />
                                <Block number={7} 
            	                    handleChange={this.handleChange} 
                                    color={this.state.movs.b_7.color} />
                                <Block number={8} 
            	                    handleChange={this.handleChange} 
                                  color={this.state.movs.b_8.color} />
                            </div>
                          </div>
                        </div>  
                      </div>  
                    </div>
                  </div>
                </div>
 {/* FIIINNN PUUUZZZZLLLEEEEE*/}
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
        height:800
    },
    pieza:{
        width:200,
        height:140.3,
        margin:5,
    }
}