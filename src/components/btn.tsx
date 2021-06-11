import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  texte: string,
  push?: string,
  go?: number,
}

const Btn: FunctionComponent<Props> = ({ texte, push, go }) => {
  const history = useHistory();
  return (
    <button className="btn btn-primary"
      onClick={() =>
        push ? history.push(push) : (go ? history.go(go) : null)}
    >
      {texte}
    </button>
  );
};

export default Btn;
