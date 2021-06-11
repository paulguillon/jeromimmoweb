import React from 'react';
import '../../assets/css/footer.css';
import login from '../auth/login';

function FooterNavigation() {
    return (
        <footer>
            <div className="m-4 w-auto  d-flex justify-content-center align-items-center">
                <ul className="d-flex align-items-center justify-content-between">
                    <li><a href="" className="text-white">Mentions Légales</a></li>
                    <li><a href="" className="text-white">Politique de confidentialité</a></li>
                </ul>

            </div >
        </footer >
    );
}

export default FooterNavigation;