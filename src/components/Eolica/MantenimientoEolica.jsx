import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {useSpring, animated} from 'react-spring'
import Click from './click'

const MantenimientoEolica = () => {

const [props, set, stop] = useSpring(() => ({opacity: 0}))
const [props2, set2, stop2] = useSpring(() => ({opacity: 0}))
const [props3, set3, stop3] = useSpring(() => ({opacity: 0}))
const [props4, set4, stop4] = useSpring(() => ({opacity: 0}))
const [props5, set5, stop5] = useSpring(() => ({opacity: 0}))
const [props6, set6, stop6] = useSpring(() => ({opacity: 0}))


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
  function fade4(e) {
    e.preventDefault();
    set4({opacity: 1})
  }
  function fade5(e) {
    e.preventDefault();
    set5({opacity: 1})
  }
  function fade6(e) {
    e.preventDefault();
    set6({opacity: 1})
  }

    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/implementacion-eolica">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>Atras
                            </button>
                        </li> 
                    </Link>
                </ul> 
                <h4 className="navbar-brand  ">Energia Eolica</h4>   
            </nav>
            <div style={styles.card} className="card text-white bg-dark m-1" > 
                <div className="card-body row" >
                    <div className="col">  
                        <h5>Mantenimiento Correctivo</h5>                       
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade}>PEQUEÑO CORRECTIVO</button> 
                            </div>
                            
                            <div className="col" >
                                <animated.div style={props} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                            Hace referencia a equeñas averías y cambios de componentes pequeños. No es programado
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div> 
                        
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade2}>GRANDES CORRECTIVOS:</button> 
                            </div>
                            
                            <div className="col" >
                                <animated.div style={props2} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                            <ul className="list-group ml-5">
                                                <li className="list-item">Cambio de Rotor  </li>
                                                <li className="list-item">Cambio Generador </li>
                                                <li className="list-item">Cambio Multiplicadora </li>
                                                <li className="list-item">Cambio Corona </li>
                                                <li className="list-item">Cambio Nacelle </li>
                                                <li className="list-item">Cambio Tramo </li>
                                            </ul> 
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div>                               
                    </div> 
                    <div className="col">
                        <img style={{marginLeft:200}} src="./assets/eolica/cuno.jpg" alt="Energia Eolica" />
                    </div> 
                </div>      
            </div>
            <div style={styles.card} className="card text-dark bg-light m-1" > 
                <div className="card-body row" >
                    <div className="col">  
                        <h5>Mantenimiento Preventivo</h5>                       
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade3}>PUESTA EN SERVICIO</button> 
                            </div>
                            <div className="col" >
                                <animated.div style={props3} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                                <p className="list-item"> Comprobaciones previas, revisión componentes, energización, pem.</p>
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div> 
                        
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade4}>MANTENIMIENTO PREVENTIVO (programado):</button> 
                            </div>
                            
                            <div className="col" >
                                <animated.div style={props4} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                            <ul className="list-group ml-5">
                                                <li className="list-item">A LOS 3 MESES: Reapriete y comprobación de pernos</li>
                                                <li className="list-item">MENOR: Comprobaciones de pares de pariete, engrases</li>
                                                <li className="list-item">MAYOR: Revisión exhaustiva del aerogenerador</li>
                                                <li className="list-item">GENERADOR: Megadodel generador cada año</li>
                                                <li className="list-item">CAMBIO ACEITE MULTIPLICADORA:Cada 18 meses</li>
                                                <li className="list-item">CAMBIO ACEITE GRUPO HIDRÁULICO: Cada 5 años</li>
                                            </ul> 
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div>                               
                    </div> 
                    <div className="col">
                        <img className="mt-5" src="./assets/eolica/puno.jpg" alt="Energia Eolica" />
                    </div> 
                </div>      
            </div>
            <div style={styles.card} className="card text-white bg-dark m-1" > 
                <div className="card-body row" >
                    <div className="col">  
                        <h5>Mantenimiento Predictivo</h5>                       
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade5}>PEQUEÑO CORRECTIVO</button> 
                            </div>
                            
                            <div className="col" >
                                <animated.div style={props5} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                            Hace referencia a las mejoras o cambios de diseño
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>
                        </div> 
                        
                        <div className="row d-flex align-self-center mb-4" >
                        <Click/>
                            <div className="col" >
                                <button className="btn btn-primary btn-sm" onClick={fade6}>MANTENIMIENTO</button> 
                            </div>
                            
                            <div className="col" >
                                <animated.div style={props6} >
                                    <div className="card text-white bg-primary mb-3 d-inline-block" style={styles.cardtwo} > 
                                        <div className="card-body border border-primary">
                                                <p className="list-item">Análisis de aceites, vibraciones</p>
                                        </div>
                                    </div>
                                </animated.div> 
                            </div>

                            
                        </div>   
                        <div className="col" >
                                <button className="btn btn-primary btn-sm">Servicio de guarda y reten</button> 
                            </div>                   
                    </div> 
                    <div className="col">
                        <img className="mt-5" src="./assets/eolica/pruno.jpg" alt="Energia Eolica" />
                    </div> 
                </div>
                <div className="m-2" >
                
                                    <a
                                    className="App-link"
                                    href="https://www.youtube.com/watch?v=ejKkA-tYaq0"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Aprende mas acerca de un aerogenerador                              
                                    </a>
                                    <br/>
                                    
                                    <a
                                    className="App-link"
                                    href="http://renovetec.com/irim/267-EL-MANTENIMIENTO-DE-AEROGENERADORES"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Mas...                            
                                    </a>
                          <br/>
                            <Link to="media-eolica" >
                                        <button type="button" className="btn btn-success btn-sm" >Ponte a prueba</button>
                            </Link>
                     </div>      
            </div>
        </div>
    )
}

export default MantenimientoEolica



const styles={
    contain:{
        margin:5,
    },
    card:{
        marginBottom:5,
    },
    image:{
        heigth:500,
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