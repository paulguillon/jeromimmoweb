import { Link } from 'react-router-dom';

function HeaderNavigation() {
    return (
        <nav className="navbar navbar-expand-lg perso-black sticky-top">
            <div className="container-fluid">
                <img src="../../assets/img/logo.jpg" alt="logo" width="50px" height="50px" />
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
                    </ul>
                    <ul className="navbar-nav d-flex justify-content-lg-end align-content-end">
                        <li><Link to="/login">Connexion</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNavigation;