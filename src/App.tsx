import { FunctionComponent, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/home";
import Properties from "./pages/property/properties";
import PropertyDetail from "./pages/property/property-detail";
import AgencyList from "./pages/agency/agency";
import AgencyDetail from "./pages/agency/agency-detail";

import HeaderNavigation from "./components/template/navigation";
import FooterNavigation from "./components/template/footer";
import "./assets/css/general.css";

import Login from "./components/auth/login";
import Logout from './components/auth/logout';
import Register from "./components/auth/register";
import Profile from "./components/auth/profile";
import NotFound from "./pages/page-not-found";
import Contact from "./pages/contact/contact";

import jwt_decode from "jwt-decode";
import favorites from "./pages/favorite/favorite";
import Faq from "./pages/faq/faq";
import Mention from "./pages/mention";


const App: FunctionComponent = () => {
  const history = useHistory();

  if (!localStorage.token)
    history.push('/login');

  const [token, setToken] = useState<string>(localStorage.token)

  const updateToken = (token: string) => {
    setToken(token);
  }

  if (token) {
    const UserInfo: any = jwt_decode(token);

    //deconnexion automatique après 24 heures
    let currentTime = new Date().getTime();
    let timeSinceLoggedIn = (currentTime - new Date(UserInfo.iat * 1000).getTime()) / 1000 / 3600;
    if (timeSinceLoggedIn > 24) {
      setToken("");
      history.push("/logout");
    }
  }

  return (
    <Router>
      <HeaderNavigation token={token} />
      <Switch>
        <Route exact path="/register" component={Register} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login">
          <Login updateToken={updateToken} />
        </Route>
        <Route exact path="/logout">
          <Logout updateToken={updateToken} />
        </Route>
        <Route exact path="/mentions-legales" component={Mention} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/favoris" component={favorites} />

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
