import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/general.css"

type Props = {
  texte: string,
  push?: string,
  go?: number,
}

const Btn: FunctionComponent<Props> = ({ texte, push, go }) => {
  const history = useHistory();
  return (
    <button className="generalBtn"
      onClick={() =>
        push ? history.push(push) : (go ? history.go(go) : null)}
    >
      {texte}
    </button>
  );
};

export default Btn;
