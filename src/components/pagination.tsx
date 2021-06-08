import React, { FunctionComponent } from "react";

type Props = {
  perPage: number;
  nbProperties: number;
  currentPage: number;
  paginate: Function;
};

const Pagination: FunctionComponent<Props> = ({ perPage, nbProperties, currentPage, paginate }) => {
  const pageNumbers = [];
  const nbPages = Math.ceil(nbProperties / perPage);

  for (let i = 1; i <= nbPages; i++)
    pageNumbers.push(i);

  return (
    <nav className="d-flex justify-content-center align-items-center p-3">
      {/* {pageNumbers.map((index) => (
        <button type="button" className={"btn btn-rounded" + (index === currentPage ? " btn-primary" : " btn-outline-primary")} key={index} onClick={() => paginate(index)}>{index}</button>
      ))} */}
      <button type="button" className="btn btn-primary btn-rounded" disabled={currentPage === 1 ? true : false} onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)}>Previous</button>
      {currentPage > 1 ? (
        <button type="button" className="btn btn-outline-primary btn-rounded" onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>
      ) : (
        <span></span>
      )}
      <button type="button" className="btn btn-primary btn-rounded" onClick={() => paginate(currentPage)}>{currentPage}</button>
      {currentPage < nbPages ? (
        <button type="button" className="btn btn-outline-primary btn-rounded" onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>
      ) : (
        <span></span>
      )}
      <button type="button" className="btn btn-primary btn-rounded" disabled={currentPage === pageNumbers.length ? true : false} onClick={() => paginate(currentPage === pageNumbers.length ? currentPage : currentPage + 1)}>Next</button>
    </nav>
  )
}
export default Pagination