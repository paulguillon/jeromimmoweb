import React, { FunctionComponent } from "react";

type Props = {
  toggleFavorite: Function,
  favorite: string
}

const FavBtn: FunctionComponent<Props> = ({ toggleFavorite, favorite }) => {
  
  return (
    <button onClick={() => toggleFavorite()}>{favorite}</button>
  );
};

export default FavBtn;
