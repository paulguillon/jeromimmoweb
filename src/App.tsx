import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropertyList from './pages/property-list';
import PropertyDetail from './pages/property-detail';
import AgencyList from './pages/agency-list';
import AgencyDetail from './pages/agency-detail';
import Login from './components/auth/login';
import HeaderNavigation from './components/template/navigation';
import FooterNavigation from './components/template/footer';
import './assets/css/general.css';

const App: FunctionComponent = () => {
    return (
        <Router>
            <HeaderNavigation />
            <Switch>
                <Route exact path="/pages/login" component={Login} />
                <Route exact path="/pages/property-list" component={PropertyList} />
                <Route exact path="/properties" component={PropertyList} />
                <Route path="/property/:idProperty" component={PropertyDetail} />
                <Route exact path="/pages/agency-list" component={AgencyList} />
                <Route path="/agency/:idAgency" component={AgencyDetail} />
                <Route path="/" />
            </Switch>
            <FooterNavigation />
        </Router>
    );
}

export default App;