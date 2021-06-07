import React, { FunctionComponent } from "react";
import BackBtn from "../components/back-btn";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="center">
      <h1>Hey, cette page n'existe pas !</h1>
      <BackBtn />
    </div>
  );
};

export default PageNotFound;
