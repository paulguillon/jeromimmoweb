import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropertyList from './pages/property-list';
import PropertyDetail from './pages/property-detail';
import PageNotFound from './pages/page-not-found';
 
const App: FunctionComponent = () => {
   
 return (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Jeromimmo</a>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Louer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Acheter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Vendre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Connexion</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        <Switch>
            <Route exact path="/" component={PropertyList} />
            <Route path="/property/:idProperty" component={PropertyDetail} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
    </Router>
 )
}
 
export default App;