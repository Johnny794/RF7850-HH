import React, { Component } from 'react'
import {EncuestaData} from './EncuestaData'
import { BsArrowCounterclockwise } from "react-icons/bs";
import CongratsAnim from "./Quiz/congratsAnim"
import {Link} from 'react-router-dom';


export default class Quiz extends Component {

    constructor(props){
    super(props);  
    this.state = {
        userAnswer:null,    //current users answer
        currentIndex:0,  //current questions index
        options: [],       //the four options
        quizEnd: false, //True if it's the last question
        score: 0,      //the Score
        disabled: true,
        openDialog: false,
        selectedAnswer: false       
    }
  }  
  
  handleClickToOpen = () => {
    console.log("open")
    //const {openDialog} = this.state //get the current state
    this.setState(() => {
        return {
            openDialog: true   
        }
    }
    )    
  };
  
  handleToClose = () => {
    console.log("close")
    //const {openDialog} = this.state //get the current state
    this.setState(() => {
        return {
            openDialog: false   
        }
    }
    ) 
  };

    loadQuiz = () => {
        const {currentIndex} = this.state //get the current index
        this.setState(() => {
        return {
            question: EncuestaData[currentIndex].question,
            options : EncuestaData[currentIndex].options,
            answer: EncuestaData[currentIndex].answer          
        }
    }
    )
}

    //Handles Click event for the next button
    nextQuestionHander = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1,   
            selectedAnswer:false                       
        })            
    }

    componentDidMount(){
        window.open('https://forms.gle/iTicrxB5HVw6EucH9')
        this.loadQuiz();
}

componentDidUpdate(prevProps, prevState){
    const{currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex){
        this.setState(() => {
            return {
                disabled: true,
                question: EncuestaData[currentIndex].question,
                options : EncuestaData[currentIndex].options,
                answer: EncuestaData[currentIndex].answer          
            }
        });

    }
}

checkAnswer = answer => {
    this.setState({
        userAnswer: answer,
        disabled:false,
        selectedAnswer:true
    })
}

//Responds to the click of the finish button
finishHandler =() => {    
    if(this.state.currentIndex === EncuestaData.length -1){
            this.setState({
                quizEnd:true
            })       
        }              
}

repeat =() => { 
    const {currentIndex} = this.state //get the current index
    this.setState({
            quizEnd:false,
            currentIndex:0,
            question: EncuestaData[currentIndex].question,
            options : EncuestaData[currentIndex].options,
            answer: EncuestaData[currentIndex].answer,
            score:0,
            selectedAnswer:false
        })                
}
    render() {
        const {question, options, currentIndex, userAnswer} = this.state //get the current state              
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
                    <h4 className="navbar-brand  ">Encuesta</h4>
                </nav> 

                <div style={{minHeight:'100vh'}}  className='card text-white bg-dark m-1 ' >
                <h4 className="mt-2 align-self-center "  >Tu opinión es importante</h4>
                    <div className="card-body d-flex justify-content-center  ">
                        <div className="row" >
                            <div className="col" >
                                { this.state.quizEnd ?
                                 <div className="card text-dark bg-white" style={styles.cardq} >      
                                    <h1 className="m-2 text-center text-success" >Muchas gracias por tu opinión </h1>                                        
                                            <CongratsAnim/>
                                    <button  
                                        className="btn btn-primary"
                                        onClick= {() => this.repeat()}>Repetir
                                        < BsArrowCounterclockwise style={{marginLeft:'4px'}} />
                                    </button>                                  
                                </div> :<div className="card text-dark bg-white" style={styles.cardq} >
                                    <h2 className="m-2 text-center">{question}</h2>
                                
                                        {options.map((option, key) => (  //for each option, new paragraph
                                        <ul className="mt-1" key={key}  >
                                            <button  
                                                className={`btn btn-primary ${userAnswer === option && this.state.selectedAnswer  ? "btn btn-success" : null} 
                                                         text-justify mr-4 ` }
                                                disabled = {this.state.disabled2}      
                                                onClick= {() => this.checkAnswer(option, key) }>
                                                {option}
                                            </button>                                           
                                        </ul>
                                        
                                    ))}
                                    {currentIndex < EncuestaData.length -1 &&  
                                    // Next button only displays if the above is true
                                    <button 
                                        className="ui inverted button btn btn-success text-ligth " 
                                        disabled = {this.state.disabled}
                                        onClick = {this.nextQuestionHander}
                                        >Siguiente pregunta</button>
                                    }
                                    {currentIndex === EncuestaData.length -1 &&
                                    <button
                                        className=" ui inverted button btn btn-success  "
                                        disabled = {this.state.disabled}
                                        onClick = {this.finishHandler}
                                        >Finalizar</button>
                                    }
                                </div>}                                                                
                        </div>                  
                    </div>        
                </div>    
            </div>
        </div>
        )
    }
}

const styles = {
    contain:{
                   
    },
    imagen:{
        width:300,
        height:400,
        opacity:0.3
    },
    card:{
        marginBottom:5,
        height:500
    },
    cardq:{
        width:800        
    }
}