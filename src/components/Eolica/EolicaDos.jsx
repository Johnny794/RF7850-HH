import React from 'react'
import { Link } from "react-router-dom"
import Click from './click'
import { BsArrowRight } from "react-icons/bs";


const EolicaDos = () => {
    return (
        <div>
            <div style={styles.card} className="card text-white bg-dark ">  
                <div className="card-body">   
                    <div className="row"> 
                        <div className="col"> 
                            <div className="d-flex justify-content-left" >    
                                <img className="d-flex align-self-center rounded-lg "  src="./assets/eolica/eol.jpg" alt="" />                        
                            </div>
                            <div className="m-5 " >
                                    <a
                                    className="App-link"
                                    href="https://centraleolica.wordpress.com/partes-de-un-aerogenerador/"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Mira aqui todas las partes de un aerogenerador                              
                                    </a>
                            </div> 
                            <Link to="implementacion-eolica" className='m-5' >
                                        <button type="button" className="btn btn-primary btn-sm" >Ver implementacion <BsArrowRight/> </button>
                            </Link>  
                        </div>    
                        <div className="col">
                            <h5 className="font-weight-bold" > Ten en cuenta estas partes importantes: </h5>
                                <ul>
                                    <div className="alert alert-primary" role="alert">
                                        <li className="m-3 text-justify " > <span className="font-weight-bold"> Bateria:</span> <br/> 
                                        Cualquier sistema autónomo que genere electricidad requiere algún aparato donde almacenar
                                        o acumular la carga.. Las baterías en base ácido-plomo se caracterizan por: capacidad en 
                                        Amperios/horas, eficienciade carga, profundidad de descarga y auto descargar.
                                        </li>                                       
                                    </div>
                                    <div className="alert alert-primary" role="alert">
                                        <li className="m-3 text-justify " > <span className="font-weight-bold"> Regulador de carga:</span> <br/> 
                                        Es un componente que se utiliza para regular la carga y dar aviso en caso de que la batería está
                                        próxima a la descarga o incluso a la sobrecarga. Es decir, regula y controla 
                                        el proceso de carga y descarga de las baterías
                                        </li>
                                    </div>
                                    <div className="alert alert-primary" role="alert">
                                        <li className="m-3 text-justify " > <span className="font-weight-bold"> inversor:</span> <br/> Es el dispositivo 
                                        electrónico que convierte el voltaje que recibe como corriente continua y lo
                                        pasa a corriente alterna con distinto voltaje. Se recomienda obtener un inversor que cumpla con
                                        una capacidad de un 50% extra a lo que se requiera, debido a que existen topes donde de repente
                                        se utiliza mayormente.
                                        </li>
                                    </div>
                                </ul> 
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default EolicaDos

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