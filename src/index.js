import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import Inicio from "./App"
import Home from "./Home"
import Operacion from './components/RF7850/Operacion.jsx';
import Componentes from './components/RF7850/Componentes.jsx';
import Programacion from './components/RF7850/Programacion.jsx';
import ProgramacionDos from './components/RF7850/ProgramacionDos.jsx';
import Quicklook from './components/RF7850/Quicklook.jsx';
import Rompecabezas from './components/RF7850/Rompecabezas'
import OperMedia from './components/RF7850/OperMedia'
import ComponentesMedia from './components/RF7850/ComponentesMedia'
import ProgramacionMedia from './components/RF7850/ProgramacionMedia'
import QuicklookMedia from './components/RF7850/QuicklookMedia'
import Encuesta from './components/RF7850/Encuesta'

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Inicio} />
                <Route path="/home" component={Home} />
                <Route exact path = '/operacion' component={Operacion}/> 
                <Route exact path = '/componentes' component={Componentes}/> 
                <Route exact path = '/programacion' component={Programacion}/>
                <Route exact path = '/net-manager' component={ProgramacionDos}/>
                <Route exact path = '/quicklook' component={Quicklook}/> 
                <Route exact path = '/rompecabezas' component={Rompecabezas}/> 
                <Route exact path = '/oper-quiz' component={OperMedia}/>
                <Route exact path = '/comp-quiz' component={ComponentesMedia}/> 
                <Route exact path = '/prog-quiz' component={ProgramacionMedia}/> 
                <Route exact path = '/quick-quiz' component={QuicklookMedia}/> 
                <Route exact path = '/encuesta' component={Encuesta}/>                                               
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
