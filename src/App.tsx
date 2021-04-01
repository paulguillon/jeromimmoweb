import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropertyList from './pages/property-list';
import PropertyDetail from './pages/property-detail';
import AgencyList from './pages/agency-list';
import AgencyDetail from './pages/agency-detail';

import './assets/css/general.css';
import PageNotFound from './pages/page-not-found';
import Login from './components/auth/login';
import logo from './assets/img/logo.jpg';


const App: FunctionComponent = () => {

    return (
        <Router>
            <nav className="navbar navbar-expand-lg perso-black sticky-top">
                <div className="container-fluid">
                    <img src={logo} alt="logo" width="50px" height="50px" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/pages/property-list">Liste propriétés</Link></li>
                            <li><Link to="/pages/login">Connexion</Link></li>
                            <li><Link to="/pages/agency-list">Liste des agences</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/pages/login" component={Login} />
                <Route exact path="/pages/property-list" component={PropertyList} />
                <Route exact path="/properties" component={PropertyList} />
                <Route path="/property/:idProperty" component={PropertyDetail} />
                <Route exact path="/pages/agency-list" component={AgencyList} />
                <Route path="/agency/:idAgency" component={AgencyDetail} />
                <Route path="/" />
            </Switch>
        </Router>
        //
        //     <nav aria-label="breadcrumb" classNameName="navbar p-0 justify-content-start perso-green" >
        //         <div classNameName="me-4 ms-4">
        //             <a classNameName="navbar-brand me-0" href="/">
        //                 <img
        //                     src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
        //                     height="40"
        //                     alt="Logo"
        //                     loading="lazy"
        //                     classNameName="me-0"
        //                 />
        //             </a>
        //         </div>
        //         <ul classNameName="colorPerso-white">
        //             <li><Link classNameName="hoverNav" to="/">Accueil</Link></li>
        //             <li><Link classNameName="hoverNav" to="/pages/property-list">Propriétés</Link></li>
        //             <li aria-current="page"><Link classNameName="hoverNav" to="/property/1">Propriétés</Link></li>
        //         </ul>
        //     </nav >

        //  
        // </Router >
    );
}



export default App;