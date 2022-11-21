import React from "react";
import {useSpring} from 'react-spring'
import {Link} from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";
import CompAnim from './compAnim'

const EolicaUno = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
function fade(e) {
    e.preventDefault();
    set({opacity: 1})
  }

  return (
    <div style={styles.card} className="card text-white bg-dark "> 
        <div className="row justify-content-center" >
            <h4 className="m-4 align-self-center " >COMPONENTES</h4> 
            <CompAnim/>
        </div>
        <div className="card-body row d-flex align-items-center" style={{justifyContent:'space-evenly'}}  >  
            <div className="alert alert-primary" >
                <ul>
                    <li>Cuerpo del radio</li>
                    <li>Batería recargable</li> 
                    <li>Antena GPS</li>
                    <li>Antena multibanda</li>
                    <li>Protector de programación</li>
                    <li>Display</li>
                    <li>Perilla de canales</li>
                    <li>Toma de audio</li>
                    <li>Conector de antena (Multibanda - Antena SATCOM)</li>
                    <li>Parlante</li>
                    <li>Micrófono</li>
                    <li>CDS (Software de programación)</li>
                </ul>    
            </div>             
            <div >                        
                <img src="./assets/rf1.png" />                                                      
            </div>                                                                             
        </div> 
        <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', justifyContent:'end', padding:'15px', fontSize:'15px', margin:'40px 15px 40px 15px'}} >
        <Link to = "/comp-quiz" >        
              <button style={{margin:'2px', color:'white'}} className="btn btn-primary btn-sm" > < AiFillEdit style={{margin:'2px', fontSize:'15px'}}/> Test</button>          
        </Link> 
      </div>   
    </div>            
  );
}

export default EolicaUno;

const styles={
    contain:{
        margin:5,
    },
    card:{
        margin:5,
        height:'800px'      
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
        width:500
    }
}