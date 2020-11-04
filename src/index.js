import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import Inicio from "./App"
import Home from "./Home"
import Eolica from './components//Eolica/Eolica.jsx';
import Solar from './components/Solar/Solar.jsx';
import ImplementacionEolica from './components/Eolica/ImplementacionEolica.jsx';
import MantenimientoEolica from './components/Eolica/MantenimientoEolica.jsx';
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
                <Route exact path = '/eolica' component={Eolica}/> 
                <Route exact path = '/solar' component={Solar}/> 
                <Route exact path = '/implementacion-eolica' component={ImplementacionEolica}/>
                <Route exact path = '/mantenimiento-eolica' component={MantenimientoEolica}/>
                <Route exact path = '/eolica-generador' component={EolicaDos}/>
                <Route exact path = '/implementacion-solar' component={ImplementacionSolar}/>
                <Route exact path = '/mantenimiento-solar' component={MantenimientoSolar}/>
                <Route exact path = '/media-eolica' component={MediaEolica}/>
                <Route exact path = '/media-solar' component={MediaSolar}/>
                <Route exact path = '/funcionamiento-solar' component={FuncSolar}/>
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
