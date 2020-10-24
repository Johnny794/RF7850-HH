import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const ImplementacionEolica = () => {
    return (
        <div style={styles.contain} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ">
                    <Link to = "/solar">
                        <li className="nav-item active">
                            <button className="btn btn-primary btn-sm">
                                <BsArrowLeft/>
                            </button>
                        </li> 
                    </Link> 
                </ul> 
                <a className="navbar-brand  ">Energia Solar</a>   
            </nav>

<div style={styles.card} className="card m-1 text-white bg-dark" >
                <div className="card-body" >
                    <div className="row">
                    <div className="col">
                        <h4 className="mt-1 text-info " > Implementacion </h4>
                            <p className="font-weight-bold text-info text-justify" > Cuando se va a instalar un sistema fotoelectrico se debe tener en cuenta  </p>                
                            <div id="carouselExampleCaptions" className="carousel slide"  data-interval="false" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <h4> POTENCIA ELECTRICA </h4>
                                        <p className="text-justify" > 
                                             Según la norma NTC 2050, la demanda máxima en una vivienda estrato uno, en Colombia, 
                                            se calcula en 3 kW. Las cargas típicas instaladas en estos estratos corresponden al 
                                            alumbrado y a electrodomésticos de primera necesidad (lámparas, televisor, licuadora, 
                                            nevera, lavadora, plancha, estufa, ventilador, ducha y computador en muchos casos). 
                                        </p>
                                        <div className="d-flex justify-content-center"  >
                                                <img  style={styles.image} className="d-flex align-self-center rounded-lg "  src="./assets/solar/carga.PNG" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <h4>CONSUMO ELECTRICO</h4>
                                        <p>
                                        El consumo eléctrico es la cantidad de energía demandada por un determinado punto de 
                                        suministro durante un plazo de tiempo denominado período de facturación. Este aspecto es 
                                        facturado por las comercializadoras al aplicarse un precio del kWh que es el que determina 
                                        la cantidad de dinero que tendrá que pagar el cliente. 
                                        <br/><br/>
                                        
                                        La energía consumida por un conjunto de equipos es la suma del consumo de cada 
                                        uno de ellos durante un tiempo determinado, generalmente, día o mes. <br/><br/>
                                        
                                    </p>   
                                    </div>
                                    <div className="carousel-item">
                                        <h4>CONDICIONES AMBIENTALES </h4>
                                             <p>Al momento de realizar la implementacion de un sistema fotovoltaico se debe
                                                tener en cuenta las condiciones ambianteles del sitio donde se llevara a cabo la
                                                instalacion, para de esta manera seleccionar los equipos adecuados para la determinada locacion.
                                                    <br/>
                                            </p>
                                             Algunos aspectos a tener en cuenta son:
                                            <ul className="m-3" >
                                                <li>  Localizacion (Latitud, longitud) </li>
                                                <li>  Temperatura </li>
                                                <li>  Altura sobre el nivel de mar </li>
                                                <li>  Humeadad relativa </li>
                                                <li>  Precipitaciones </li>
                                                <li>  Radiación solar </li>
                                                <li>  Radiación solar año </li>
                                                <li>  Incidencia rayos solares ano </li>
                                                <li>  Velocidad máxima del viento </li>
                                            </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <h4>NORMAS Y CERTIFICACIONES </h4>
                                        <p>El diseño debe seguir las normas nacionales (ICONTEC), pero además de las características 
                                    técnicas, se debe solicitar que los equipos que se suministren para la instalación solar 
                                    fotovoltaica estén certificados por organismos nacionales o internacionales reconocidos. La 
                                    guía GTC 114, señala y sugiere, algunas normas que debe cumplir la fabricación de los 
                                    equipos de una instalación solar fotovoltaica: </p>
                                    <ul>
                                        <li> Módulos: <span>Su fabricación debe cumplir con lo indicado en las normas 
                                                    NTC 2883 y NTC 4405, o en la norma UL 1703, o en cualquier otra norma equivalente. </span></li>

                                        <li> Baterias: <span> Su fabricación debe cumplir con lo indicado en la norma NTC 5287 o en 
                                                    cualquier otra norma equivalente.</span></li> 

                                        <li> Controlador (regulador): <span> Su fabricación debe cumplir con lo indicado en la norma 
                                                    UL 1741 o en cualquier otra norma equivalente.</span></li> 

                                        <li> Inversor: <span>  Su fabricación debe cumplir con lo indicado en la norma UL 1741 o en 
                                                    cualquier otra norma equivalente.</span></li>                           
                                    </ul>
                                    </div>
                                </div>
                              
                            </div>
                    </div> 
                        <ol className="carousel-indicators mt-5">
                                <li data-target="#carouselExampleCaptions"  data-slide-to="0" ></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            </ol>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ImplementacionEolica


const styles={
    contain:{
        margin:5
    },
    card:{
        marginBottom:5,
        height:600
    },
    image:{
        width:400,
        height:300
    }
}