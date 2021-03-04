import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropertiesList from './pages/property/properties-list';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
 
const App: FunctionComponent = () => {
 
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Jeromimmo</Link>
        </div> 
      </nav>
      <Switch>
        <PrivateRoute exact path="/" component={PropertiesList} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/properties" component={PropertiesList} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    </Router>
  );
}
 
export default App;