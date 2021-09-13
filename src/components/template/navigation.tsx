import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/nav.css';
import { FunctionComponent } from 'react';

import favorisTrue from '../../assets/img/favorisTrue.svg'

type Props = {
  token: string | null
}

const HeaderNavigation: FunctionComponent<Props> = ({ token }) => {

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid ">
        <Link to="/">
          <img src={logo} alt="logo" className="ms-5 me-5" width="200px" />
        </Link>
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
            <li><Link to="/properties">Immobilier</Link></li>
            <li><Link to="/agencies">Nos agences</Link></li>
            <li><Link to="/faq">Faq</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

          {token ? (
            < ul className="navbar-nav d-flex justify-content-lg-end align-content-end">
              <li className="d-flex align-items-center">
                <Link to="/favoris" className="d-inline-flex">
                  <img src={favorisTrue} alt="Favoris Icone" width="20px" className="me-2" />
                  <span className="d-block">Mes favoris</span>
                </Link></li>
              <li><Link to="/profile">Profil</Link></li>
              <li><Link to="/logout">Déconnexion </Link></li>
            </ ul>
          ) : (
            <ul className="navbar-nav d-flex justify-content-lg-end align-content-end">
              <li><Link to="/register">S'inscrire</Link></li>
              <li><Link to="/login" >Connexion</Link></li>
            </ul>
          )}
        </div>
      </div>
    </nav >
  )
}

export default HeaderNavigation;