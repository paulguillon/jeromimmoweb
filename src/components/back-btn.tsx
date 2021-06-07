import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

const BackBtn: FunctionComponent = () => {
  const history = useHistory();
  return (
    <button className="btn btn-secondary" onClick={() => history.goBack()}>
      Retour
    </button>
  );
};

export default BackBtn;
