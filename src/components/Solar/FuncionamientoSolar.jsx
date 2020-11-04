import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {useSpring, animated} from 'react-spring';
import SolarUno from './SolarUno';
import Click from './click'
import Panel from './PanelAnimation'
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
        <div>
            <div style={styles.contain} >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto ">
                        <Link to = "/solar">
                            <li className="nav-item active">
                                <button className="btn btn-primary btn-sm"><BsArrowLeft/>Atras</button>
                            </li> 
                        </Link>                  
                    </ul> 
                    <h4 className="navbar-brand  ">Energia Solar</h4>   
                </nav>   
                {/*<EolicaDos/>*/}
            </div>
        </div>  
        <div style={styles.contain} >
            {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </nav>*/}
            <div>  

            <div style={styles.card} className="card text-dark bg-light ">        
                <h4 className="mt-2 align-self-center " > ¿Cómo Funciona? </h4>
                    <div className="card-body" >                      
                        <div className="row">
                            <div className="col">    
                                <div className="d-flex justify-content-left media " >                        
                                    <img className="d-flex align-self-center rounded-lg "  src="./psolar.jpg" alt="" />
                                </div> 
                            </div>
                            <div className="col">
                                <div className="row" >
                                    <div className="col" >
                                    <Click/>
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
                                    <Click/>
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
                                    <Click/>
                                        <button className="btn btn-secondary btn-sm" onClick={fade3}>
                                            Inversor de voltaje
                                        </button> 
                                    </div>
                                    <div className="col" >
                                        <animated.div style={props3} >
                                            <div className="card text-white bg-secondary mb-3 d-inline-block" style={styles.cardtwo} > 
                                                <div className="card-body border border-secondary">
                                                    Un inversor se utiliza para transformar el voltaje
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
                <div style={styles.card} className="card text-white bg-dark">  
                    <div className="card-body">  
                        <div className="row"> 
                            <div className="col">  
                                <Panel/>
                            </div>
                            <div className="col">
                            <h5 className="font-weight-bold align-self-center " > Tipos de paneles solares </h5> 
                                <ul>
                                    <li className="mt-3" > <span className="font-weight-bold"> Paneles solares monocristalinos:</span> <br/> En los paneles solares monocristalinos 
                                    las celdas solares de silicio monocristalino (mono-Si), son bastante fáciles 
                                    de reconocer por su coloración y aspecto uniforme, que indica una alta pureza en silicio. </li>
                                    <li className="mt-3" > <span className="font-weight-bold"> Paneles solares policristalinos:</span> <br/> Los paneles solares policristalinos están compuestos, 
                                    en este caso, por células policristalinas. Podemos diferencia por su color “azulado” y no
                                     poseen el chaflán en las esquinas como los monocristalinos. </li>
                                </ul>
                            <div className="m-5 " >
                                    <a
                                    className="App-link"
                                    href="https://como-funciona.co/el-sistema-fotovoltaico/"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    ¿Quieres conocer mas acerca de los sistemas fotovoltaicos?
                                    Conectate a internet y da click aqui                                
                                    </a>
                            </div> 
                            <Link to="implementacion-solar" className='m-5' >
                                        <button type="button" className="btn btn-primary btn-sm" >Ver implementacion <BsArrowRight/> </button>
                            </Link>     
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