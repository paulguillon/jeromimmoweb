import { Link } from 'react-router-dom';
import '../../assets/css/footer.css';

function FooterNavigation() {
    return (
        <footer>
            <div id="container-footer">
                <div id="nav-footer">
                    
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>

                    <ul>
                        <li><Link to="/" className="text-white">Accueil</Link></li>
                        -
                        <li><Link to="/faq" className="text-white">Immobilier</Link> </li>
                        -
                        <li><Link to="/agencies" className="text-white">Nos Agences</Link> </li>
                        -
                        <li><Link to="/contact" className="text-white">Contact</Link> </li>
                        -
                        <li><Link to="/faq" className="text-white">Faq</Link> </li>
                    </ul>
                    
                    <ul>
                        <li><Link to="/mentions-legales" className="text-white">Mentions Légales</Link></li>
                    </ul>
                </div>
            </div >
            <div id="copyright-footer" className="w-auto d-flex justify-content-center align-items-center">
                <span>Tous droits réservés © 2020 - 2021</span>
            </div>
        </footer >
    );
}

export default FooterNavigation;