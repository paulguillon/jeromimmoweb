import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

const BackBtn: FunctionComponent = () => {
  const history = useHistory();
  return (
    <button className="btn btn-primary " onClick={() => history.goBack()}>
      Retour liste bien
    </button>
  );
};

export default BackBtn;
