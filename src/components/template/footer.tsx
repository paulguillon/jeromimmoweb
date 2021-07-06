import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/footer.css';
import logoBlanc from '../../assets/img/logoblanc.svg';
function FooterNavigation() {
    return (
        <footer>
            <div id="container-footer">
                <div id="nav-footer">
                    <ul id="navList-footer" className="d-flex  justify-content-between">
                        <li><Link to="/" className="text-white">Accueil</Link></li>
                        <li><Link to="/mentions-legales" className="text-white">Mentions Légales</Link></li>
                        <li><Link to="/condition-general" className="text-white">CGU/CGV</Link> </li>
                        <li><Link to="/contact" className="text-white">Contact</Link> </li>
                        <li><Link to="/faq" className="text-white">Faq</Link> </li>

                    </ul>
                </div>
                <div id="logo-footer">
                    <img src={logoBlanc} alt="LogoBlancFooter" width="200px" />
                </div>
            </div >
            <div id="copyright-footer" className="w-auto d-flex justify-content-center align-items-center">
                <span>© 2020 - 2021 / Jeromimmo</span>
            </div>
        </footer >
    );
}

export default FooterNavigation;