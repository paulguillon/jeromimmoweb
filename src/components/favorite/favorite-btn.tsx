import React, { FunctionComponent } from "react";
import favorisTrue from '../../assets/img/favorisTrue.svg'
import favorisFalse from '../../assets/img/favorisFalse.svg'
import "../../assets/css/favoris.css"
type Props = {
  toggleFavorite: Function,
  favorite: string
}

const FavBtn: FunctionComponent<Props> = ({ toggleFavorite, favorite }) => {

  return (
    <div className="positionFavoris">
      <div className="containerFavoris" onClick={() => toggleFavorite()}>
        {favorite === "true" ? (
          <img className="imgFavoris" src={favorisTrue} alt="Favoris_true" />
        ) : (
          <img className="imgFavoris" src={favorisFalse} alt="Favoris_true" />
        )}
      </div>
    </div>
  );
};

export default FavBtn;
