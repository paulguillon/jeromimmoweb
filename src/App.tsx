import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Properties from './pages/property/properties';
import PropertyDetail from './pages/property/property-detail';

import AgencyList from './pages/agency/agency-list';
import AgencyDetail from './pages/agency/agency-detail';

import Login from './components/auth/login';
import HeaderNavigation from './components/template/navigation';
import FooterNavigation from './components/template/footer';
import './assets/css/general.css';

const App: FunctionComponent = () => {
    return (
        <Router>
            <HeaderNavigation />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/properties" component={Properties} />
                <Route path="/property/:idProperty" component={PropertyDetail} />
                <Route exact path="/agencies" component={AgencyList} />
                <Route path="/agency/:idAgency" component={AgencyDetail} />
                <Route path="/" component={Home}/>
            </Switch>
            <FooterNavigation />
        </Router>
    );
}

export default App;