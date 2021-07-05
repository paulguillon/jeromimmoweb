import { FunctionComponent, useEffect, useState } from "react";
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
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [])

  const updateToken = (token: string) => {
    setToken(token);
  }

  return (
    <Router>
      <HeaderNavigation token={token} />
      <Switch>
        <Route exact path="/login">
          <Login updateToken={updateToken} />
        </Route>
        <Route exact path="/logout">
          <Logout updateToken={updateToken} />
        </Route>
        <Route exact path="/condition-general" />
        <Route exact path="/mentions-legales" />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" />
        <Route exact path="/contact" />
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
