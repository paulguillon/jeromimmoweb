import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {

  return (
    <div className="center">
<<<<<<< HEAD

      <h1>Hey, cette page n'existe pas !</h1>
=======
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
>>>>>>> 65fdafdb9bda1b35fc7dd129e2909e29b7bbcc65
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default PageNotFound;