import React, { FunctionComponent } from "react";
import Properties from "../models/property/properties";

type Props = {
  perPage: number;
  data: Properties | null;
  currentPage: number;
  paginate: Function;
};

const Pagination: FunctionComponent<Props> = ({ perPage, data, currentPage, paginate }) => {
  const nbPages = Math.ceil((data ? data.total : 0) / perPage);

  return (
    <nav className="d-flex justify-content-center align-items-center p-3">
      <button type="button" className="btn btn-primary btn-rounded" disabled={currentPage === 1 ? true : false} onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)}>Previous</button>
      {currentPage > 1 ? (
        <button type="button" className="btn btn-outline-primary btn-rounded" onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>
      ) : null}
      <button type="button" className="btn btn-primary btn-rounded" onClick={() => paginate(currentPage)}>{currentPage}</button>
      {currentPage < nbPages ? (
        <button type="button" className="btn btn-outline-primary btn-rounded" onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>
      ) : null}
      <button type="button" className="btn btn-primary btn-rounded" disabled={currentPage === nbPages ? true : false} onClick={() => paginate(currentPage === nbPages ? currentPage : currentPage + 1)}>Next</button>
    </nav>
  )
}
export default Pagination