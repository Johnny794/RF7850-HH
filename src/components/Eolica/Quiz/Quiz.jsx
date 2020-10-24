import React, { Component } from 'react'
import {QuizData} from './QuizData'

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
    }
  }

  loadQuiz = () => {
    const {currentIndex} = this.state //get the current index
    this.setState(() => {
        return {
            question: QuizData[currentIndex].question,
            options : QuizData[currentIndex].options,
            answer: QuizData[currentIndex].answer          
        }
    }
    )
}

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

    //Check for correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1              
            })
            console.log(score);
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
                question: QuizData[currentIndex].question,
                options : QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer          
            }
        });

    }
}

checkAnswer = answer => {
    this.setState({
        userAnswer: answer,
        disabled:false
    })
}

//Responds to the click of the finish button
finishHandler =() => {
     const { userAnswer, answer, score } = this.state
      if (userAnswer === answer) {
      this.setState({
        score: score + 1
      })
    }
    if(this.state.currentIndex === QuizData.length -1){
        this.setState({
            quizEnd:true
        })       
    }

}
    render() {
        const {question, options, currentIndex, userAnswer, quizEnd} = this.state //get the current state       
        if(quizEnd) {
            return (
                <div className="card text-white bg-dark " >
                    <h4 className="mt-2 align-self-center " >Resuelve este sencillo test</h4> 
                    <div className="card-body d-flex justify-content-center  ">
                        <div className="row">
                            <div className="col">
                                <div className="card text-dark bg-white" style={styles.cardq} >      
                                    <h1 className="m-2 text-center text-success" >Prueba finalizada. </h1>
                                        <h2 className="text-center text-info" >Obtuviste {this.state.score} punto(s)</h2>
                                        <p className="m-1" >Las respuestas correctas son: </p>
                                        <ul>
                                            {QuizData.map((item, index) => (
                                                <li className='options'
                                                    key={index}>
                                                    {item.answer}
                                                </li>
                                            ))}
                                    </ul>                              
                                </div>
                        </div>                  
                    </div>        
                </div>    
            </div>

               
            )
        }
        return (
            <div style={styles.contain} > 
                <div className="card text-white bg-dark " >
                    <div className="card-body d-flex justify-content-center  ">
                        <div className="row">
                            <div className="col">
                                <div className="card text-dark bg-white" style={styles.cardq} >
                                    <h2 className="m-2 text-center">{question}</h2>
                                    <span className="text-center" >{`Pregunta ${currentIndex+1} de ${QuizData.length}`}</span>
                                        {options.map((option) => (  //for each option, new paragraph
                                        <ul className="mt-1" key={option}  >
                                            <button  
                                                className={`options ${userAnswer === option ? "selected" : null} 
                                                        btn btn-primary` }
                                                onClick= {() => this.checkAnswer(option)}>
                                                {option}
                                            </button>
                                            
                                        </ul>
                                        
                                    ))}
                                    {currentIndex < QuizData.length -1 &&  
                                    // Next button only displays if the above is true
                                    <button 
                                        className="ui inverted button btn btn-secondary text-ligth " 
                                        disabled = {this.state.disabled}
                                        onClick = {this.nextQuestionHander}
                                        >Siguiente pregunta</button>
                                    }
                                    {currentIndex === QuizData.length -1 &&
                                    <button
                                        className=" ui inverted button btn btn-success  "
                                        disabled = {this.state.disabled}
                                        onClick = {this.finishHandler}
                                        >Finish</button>
                                    }
                                </div>
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
        height:200
    },
    cardq:{
        width:500,
    }
}