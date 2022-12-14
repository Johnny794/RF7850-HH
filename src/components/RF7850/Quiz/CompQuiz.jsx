import React, { Component } from 'react'
import {CompQuizData} from './CompQuizData'
import { BsArrowCounterclockwise } from "react-icons/bs";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CongratsAnim from "./congratsAnim"

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
            question: CompQuizData[currentIndex].question,
            options : CompQuizData[currentIndex].options,
            answer: CompQuizData[currentIndex].answer          
        }
    }
    )
}

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state                

    //Check for correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1,   
                currentIndex: this.state.currentIndex + 1,   
                selectedAnswer:false                       
            })            
        }else{
            this.setState({
                openDialog: true,
                currentIndex: this.state.currentIndex            
            })
        }
    }

    componentDidMount(){
    this.loadQuiz();
}

componentDidUpdate(prevProps, prevState){
    const{currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex){
        this.setState(() => {
            return {
                disabled: true,
                question: CompQuizData[currentIndex].question,
                options : CompQuizData[currentIndex].options,
                answer: CompQuizData[currentIndex].answer          
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
    const { userAnswer, answer, score } = this.state
    if(userAnswer === answer){
        this.setState({
            score: score + 1,   
            selectedAnswer:false                       
        })  
        if(this.state.currentIndex === CompQuizData.length -1){
            this.setState({
                quizEnd:true
            })       
        }          
    }else{
        this.setState({
            openDialog: true,
            currentIndex: this.state.currentIndex            
        })
    }
    
}

repeat =() => { 
    const {currentIndex} = this.state //get the current index
    this.setState({
            quizEnd:false,
            currentIndex:0,
            question: CompQuizData[currentIndex].question,
            options : CompQuizData[currentIndex].options,
            answer: CompQuizData[currentIndex].answer,
            score:0,
            selectedAnswer:false
        })                
}
    render() {
        const {question, options, currentIndex, userAnswer} = this.state //get the current state              
        return (
            <div style={styles.contain} > 
                <div className="card text-white bg-dark " style={{height:'700px'}}  >
                <h4 className="mt-2 align-self-center "  >Resuelve este sencillo test</h4>
                    <div className="card-body d-flex justify-content-center  ">
                        <div className="row" >
                            <div className="col" >
                                { this.state.quizEnd ?
                                 <div className="card text-dark bg-white" style={styles.cardq} >      
                                    <h1 className="m-2 text-center text-success" >Felicitaciones terminaste el test. </h1>
                                        {/*<h2 className="text-center text-info" >Obtuviste {this.state.score} punto(s)</h2>
                                        <p className="m-1" >Las respuestas correctas son: </p>
                                        <ul>
                                            {CompQuizData.map((item, index) => (
                                                <li className='options'
                                                    key={index}>
                                                    {item.answer}
                                                </li>
                                            ))}
                                            </ul>*/}
                                            <CongratsAnim/>
                                    <button  
                                        className="btn btn-primary"
                                        onClick= {() => this.repeat()}>Repetir
                                        < BsArrowCounterclockwise style={{marginLeft:'4px'}} />
                                    </button>                                  
                                </div> :<div className="card text-dark bg-white" style={styles.cardq} >
                                    <h2 className="m-2 text-center">{question}</h2>
                                    <span className="text-center" >{`Pregunta ${currentIndex+1} de ${CompQuizData.length} - F o V`}</span>
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
                                    {currentIndex < CompQuizData.length -1 &&  
                                    // Next button only displays if the above is true
                                    <button 
                                        className="ui inverted button btn btn-success text-ligth " 
                                        disabled = {this.state.disabled}
                                        onClick = {this.nextQuestionHander}
                                        >Siguiente pregunta</button>
                                    }
                                    {currentIndex === CompQuizData.length -1 &&
                                    <button
                                        className=" ui inverted button btn btn-success  "
                                        disabled = {this.state.disabled}
                                        onClick = {this.finishHandler}
                                        >Finalizar</button>
                                    }
                                </div>}                                
                                <Dialog open={this.state.openDialog} onClose={this.handleToClose} >      
                                    <DialogContent>
                                    <DialogContentText>
                                        <div className="alert alert-warning"  role="alert" > 
                                            Parece que tu respuesta no es correcta, verificala! :)
                                        </div> 
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={this.handleToClose} 
                                        color="primary" autoFocus>
                                        Cerrar
                                    </Button>
                                    </DialogActions>
                                </Dialog> 
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
        margin:5              
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
        width:500,
        height:400,
        display:'flex',       
        alignItems:'center',
        justifyContent:'space-evenly'
    }
}