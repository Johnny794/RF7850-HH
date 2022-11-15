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
import Componentes from './components/Solar/Componentes.jsx';
import Programacion from './components/Eolica/Programacion.jsx';
import ProgramacionDos from './components/Eolica/ProgramacionDos.jsx';
import Quicklook from './components/Eolica/Quicklook.jsx';
import ImplementacionSolar from './components/Solar/ImplementacionSolar.jsx';
import MantenimientoSolar from './components/Solar/MantenimientoSolar.jsx';
import MediaEolica from './components/Eolica/MediaEolica'
import MediaSolar from './components/Solar/MediaSolar'
import EolicaDos from './components/Eolica/EolicaDos.jsx'
import FuncSolar from './components/Solar/FuncionamientoSolar.jsx'

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
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
