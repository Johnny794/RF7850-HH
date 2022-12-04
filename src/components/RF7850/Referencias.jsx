import React, { Component } from 'react'
import {EncuestaData} from './EncuestaData'
import { BsArrowCounterclockwise } from "react-icons/bs";
import CongratsAnim from "./Quiz/congratsAnim"
import {Link} from 'react-router-dom';


export default class Quiz extends Component {

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
                    <h4 className="navbar-brand  ">Referencias</h4>
                </nav> 

                <div style={{minHeight:'100vh'}}  className='card text-white bg-dark m-1 ' >
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'left', width:'100%'}} >
                        <h4 className='ml-5 mt-5' >Referencias</h4>
                        <ul style={{width:'90%'}} className='ml-5 mt-2' >
                            <li >
                                <span style={{fontStyle:'italic'}} >Army Tecnology.</span> (2022). Recuperado el 30 de Junio de 2022, de https://www-army--
                                technology-com.translate.goog/news/newsharris-to-supply-rf-7850m-radios-to-
                                undisclosed-middle-eastern-country-
                                4326004/?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es-419&amp;_x_tr_pto=sc
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> Elearningmasters. </span> (2 de febrero de 2019). Recuperado el 20 de octubre de 2022, de
                                http://elearningmasters.galileo.edu/2019/02/01/objetos-virtuales-de-aprendizaje/
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> Electron JS. (s.f.).</span> Recuperado el 06 de 07 de 2022, de
                                https://www.electronjs.org/es/docs/latest/
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> Onrubia, J.</span>(2005). Aprender a enseñar en entornos. RED. Revista de Educación a
                                Distancia(Monográfico).
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> React. (s.f.). </span>Recuperado el 05 de 07 de 2022, de https://es.reactjs.org/
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> Team VOX. </span> (23 de noviembre de 2020). Recuperado el 9 de septiembre de 2022, de
                                https://teamvox.com/que-es-la-radiocomunicacion/
                            </li>
                            <li className='mt-2' >
                                <span style={{fontStyle:'italic'}}> Thales Group. </span> (7 de julo de 2020). Recuperado el 4 de julio de 2022, de
                                https://www.thalesgroup.com/es/espana/magazine/las-radios-tacticas-vanguardia-
                                transformacion-digital-las-fuerzas-armadas
                            </li>
                            <li className='mt-2' >
                                Zurita Cruz, C. E., Zaldívar Colado, A., Sifuentes Oceduega, M. T., &amp; Valle Escobedo, R.
                                (2020). Análisis crítico de ambientes virtuales. <span style={{fontStyle:'italic'}}> Utopía y Praxis Latinoamericana, </span>
                                25(11), 1-15.
                            </li>
                        </ul>
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