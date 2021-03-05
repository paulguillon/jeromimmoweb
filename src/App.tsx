import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropertyList from './pages/property-list';
import PropertyDetail from './pages/property-detail';
import PageNotFound from './pages/page-not-found';
 
const App: FunctionComponent = () => {
   
 return (
    <Router>
        <div>
        <nav> 
            <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Biens immobilier</Link>
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