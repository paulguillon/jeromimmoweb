import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Properties from "./pages/property/properties";
import PropertyDetail from "./pages/property/property-detail";
import AgencyList from "./pages/agency/agency-list";
import AgencyDetail from "./pages/agency/agency-detail";

import HeaderNavigation from "./components/template/navigation";
import FooterNavigation from "./components/template/footer";
import "./assets/css/general.css";

import Login from "./components/auth/login";
import Logout from './components/auth/logout';
import Register from "./components/auth/register";
import NotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
  return (
    <Router>
      <HeaderNavigation />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" />
        <Route exact path="/logout" />
        <Route exact path="/properties" component={Properties} />
        <Route path="/property/:idProperty" component={PropertyDetail} />
        <Route exact path="/agencies" component={AgencyList} />
        <Route path="/agency/:idAgency" component={AgencyDetail} />
        <Route exact path="/" component={Home} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <FooterNavigation />
    </Router>
  );
};

export default App;
