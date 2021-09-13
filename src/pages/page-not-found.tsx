import React, { FunctionComponent } from "react";
import Btn from "../components/btn";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="container">
      <h1>Hey, cette page n'existe pas !</h1>
      <Btn texte="Retour à l'accueil" push="/" />
    </div>
  );
};

export default PageNotFound;
