import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import {useSpring, animated} from 'react-spring'

const Solar = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
const [props2, set2, stop2] = useSpring(() => ({opacity: 0}))
const [props3, set3, stop3] = useSpring(() => ({opacity: 0}))
const [props4, set4, stop4] = useSpring(() => ({opacity: 0}))



function fade(e) {
    e.preventDefault();
    set({opacity: 1})
  }
  function fade2(e) {
    e.preventDefault();
    set2({opacity: 1})
  }
  function fade3(e) {
    e.preventDefault();
    set3({opacity: 1})
  }
function fadeIn(e) {
    e.preventDefault();
    set4({opacity: 1})
  }  


    return (
       
        <div>
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>
                            </button>
                        </li> 
                    </Link>  
                    <Link to = "implementacion-solar">
                        <li className="nav-item active ml-5 ">
                            <button type="button" className="btn btn-primary btn-sm m-1" >
                                Implementación
                            </button>
                        </li>                       
                    </Link>    
                    <Link to="mantenimiento-solar" >
                        <li className="nav-item active">
                            <button type="button" className="btn btn-primary btn-sm m-1" >
                                Mantenimiento
                            </button>
                        </li>
                    </Link>  
                    <Link to="media-solar" >
                        <li className="nav-item active">
                            <button type="button" className="btn btn-primary btn-sm m-1" >
                                Ponte a prueba
                            </button>
                        </li>
                    </Link>                
                </ul> 
                <a className="navbar-brand  ">Energia Solar</a>   
            </nav>
            <div>  

            <div style={styles.card} className="card text-white bg-dark ">
                <h4 className="mt-2 align-self-center " > Sistema Fotoelectrico </h4>
                    <div className="row d-flex align-self-center mb-4" >
                                    <div className="col" >
                                        <button className="btn btn-primary btn-sm" onClick={fadeIn}>
                                            ¿Ques es?
                                        </button> 
                                    </div>
                                    <div className="col" >
                                        <animated.div style={props4} >
                                            <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                                <div className="card-body border border-primary">
                                                    Es un sistema que consiste en la integración de varios componentes, 
                                                    cada uno de ellos cumpliendo con una o más funciones específicas, a fin de 
                                                    que éste pueda suplir la demanda de energía eléctrica requerida por el tipo de carga, 
                                                    usando la energía de la radiación solar para convertirla en energía eléctrica.
                                                </div>
                                            </div>
                                        </animated.div> 
                                    </div>
                                </div>
                <h4 className="mt-2 align-self-center " > ¿Cómo Funciona? </h4>
                    <div className="card-body" >                      
                        <div className="row">
                            <div className="col">    
                                <div className="d-flex justify-content-left media " >                        
                                    <img className="d-flex align-self-center rounded-lg "  src="./assets/solar/psolar.jpg" alt="" />
                                </div> 
                            </div>
                            <div className="col">
                                <div className="row" >
                                    <div className="col" >
                                        <button className="btn btn-success btn-sm" onClick={fade}>
                                            Modulo fotovoltaico
                                        </button> 
                                    </div>
                                    <div className="col" >
                                        <animated.div style={props} >
                                            <div className="card text-white bg-success mb-3 d-inline-block" style={styles.cardtwo} > 
                                                <div className="card-body border border-success">
                                                    Es un panel formado por un conjunto de células solares, que 
                                                    se encargan de convertir directamente en electricidad 
                                                    los fotones que provienen de la luz del sol.
                                                </div>
                                            </div>
                                        </animated.div> 
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col" >
                                        <button className="btn btn-info btn-sm" onClick={fade2}>
                                            Batería o acumulador
                                        </button> 
                                    </div>
                                    <div className="col" >
                                        <animated.div style={props2} >
                                            <div className="card text-white bg-info mb-3 d-inline-block" style={styles.cardtwo} > 
                                                <div className="card-body border border-info">
                                                     La principal función de las baterias solares en un sistema de generación 
                                                     fotovoltaico es acumular la energía que se produce durante las horas 
                                                     de mayor luz para poder utilizarse por la noche o durante prolongados 
                                                     periodos con poca iluminación 
                                                </div>
                                            </div>
                                        </animated.div> 
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col" >
                                        <button className="btn btn-secondary btn-sm" onClick={fade3}>
                                            Inversor de voltaje
                                        </button> 
                                    </div>
                                    <div className="col" >
                                        <animated.div style={props3} >
                                            <div className="card text-white bg-secondary mb-3 d-inline-block" style={styles.cardtwo} > 
                                                <div className="card-body border border-secondary">
                                                    Un inversor de corriente se utiliza para transformar el voltaje
                                                    de 12 o 24 voltios de las baterías (corriente continua) para emplear 
                                                    el voltaje de la vivienda de 230 voltios (corriente alterna). 
                                                </div>
                                            </div>
                                        </animated.div> 
                                    </div>
                                </div>            
                            </div>
                        </div>
                    </div> 
                </div>                   
                <div style={styles.card} className="card ">  
                    <div className="card-body">   
                        <div className="row"> 
                            <div className="col">  
                                <h4 className="mt-1"> </h4>
                                <div className="d-flex justify-content-left" >    
                                    <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img style={styles.image} src="#" src="./assets/solar/solar1.PNG" alt="First slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img style={styles.image} src="#" src="./assets/solar/solar4.PNG" alt="Second slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img style={styles.image} src="#" src="./assets/solar/solar3.PNG" alt="Second slide"/>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h5 className="font-weight-bold" > Tipos de paneles solares </h5>
                                <ul>
                                    <li className="m-3" > <span className="font-weight-bold"> Paneles solares monocristalinos:</span> <br/> En los paneles solares monocristalinos 
                                    las celdas solares de silicio monocristalino (mono-Si), son bastante fáciles 
                                    de reconocer por su coloración y aspecto uniforme, que indica una alta pureza en silicio. </li>
                                    <li className="m-3" > <span className="font-weight-bold"> Paneles solares policristalinos:</span> <br/> Los paneles solares policristalinos están compuestos, 
                                    en este caso, por células policristalinas. Podemos diferencia por su color “azulado” y no
                                     poseen el chaflán en las esquinas como los monocristalinos. </li>
                                </ul>
                            </div>
                        </div>  
                    </div>        
                </div>
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