import React, { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
