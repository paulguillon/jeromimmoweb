import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {

  return (
    <div className="center">

      <h1>Hey, cette page n'existe pas !</h1>
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default PageNotFound;