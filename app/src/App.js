import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faEye,
    faPencilAlt,
    faRecycle,
    faPlus,
    faEnvelope,
    faPaperPlane,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Components/Product";

library.add(faEye, faPencilAlt, faRecycle, faPlus, faEnvelope, faPaperPlane, faTimesCircle);

const App = () => {

    return (
        <div className="container">
            <Router>
                <Link to="/" className="btn btn-link">Inicio</Link>
                <Link to="/productos" className="btn btn-link">Productos</Link>

                <Route exact path="/productos" component={Products}/>
            </Router>
        </div>
    )
}

export default App;
