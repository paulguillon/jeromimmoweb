import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/nav.css';

function HeaderNavigation() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <img src={logo} alt="logo" className="ms-5 me-5" width="200px" />
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
                        <li><Link to="/properties">Liste propriétés</Link></li>
                        <li><Link to="/agencies">Liste des agences</Link></li>
                        <li><Link to="">Contact</Link></li>

                    </ul>
                    <ul className="navbar-nav d-flex justify-content-lg-end align-content-end">
                        <li><Link to="">S'inscrire</Link></li>
                        <li><Link to="/login">Connexion</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNavigation;