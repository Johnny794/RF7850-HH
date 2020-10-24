import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import Home from "./App"
import About from "./pages/about"
import Eolica from './components//Eolica/Eolica.jsx';
import Solar from './components/Solar/Solar.jsx';
import ImplementacionEolica from './components/Eolica/ImplementacionEolica.jsx';
import MantenimientoEolica from './components/Eolica/MantenimientoEolica.jsx';
import ImplementacionSolar from './components/Solar/ImplementacionSolar.jsx';
import MantenimientoSolar from './components/Solar/MantenimientoSolar.jsx';
import MediaEolica from './components/Eolica/MediaEolica'
import MediaSolar from './components/Solar/MediaSolar'

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path = '/eolica' component={Eolica}/> 
                <Route exact path = '/solar' component={Solar}/> 
                <Route exact path = '/implementacion-eolica' component={ImplementacionEolica}/>
                <Route exact path = '/mantenimiento-eolica' component={MantenimientoEolica}/>
                <Route exact path = '/implementacion-solar' component={ImplementacionSolar}/>
                <Route exact path = '/mantenimiento-solar' component={MantenimientoSolar}/>
                <Route exact path = '/media-eolica' component={MediaEolica}/>
                <Route exact path = '/media-solar' component={MediaSolar}/>
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
