import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import Inicio from "./App"
import Home from "./Home"
import Operacion from './components/Eolica/Operacion.jsx';
import Componentes from './components/Eolica/Componentes.jsx';
import Programacion from './components/Eolica/Programacion.jsx';
import ProgramacionDos from './components/Eolica/ProgramacionDos.jsx';
import Quicklook from './components/Eolica/Quicklook.jsx';
import Rompecabezas from './components/Eolica/Rompecabezas'
import OperMedia from './components/Eolica/OperMedia'
import ComponentesMedia from './components/Eolica/ComponentesMedia'
import ProgramacionMedia from './components/Eolica/ProgramacionMedia'
import QuicklookMedia from './components/Eolica/QuicklookMedia'

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
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
