import React, { FunctionComponent } from "react";

type Props = {
  perPage: number;
  nbProperties: number;
  currentPage: number;
  paginate: Function;
};

const Pagination: FunctionComponent<Props> = ({ perPage, nbProperties, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(nbProperties / perPage); i++)
    pageNumbers.push(i);

  return (
    <nav>
      <ul className="pg-blue">
        <li className="page-link" onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)}>Previous</li>
        {pageNumbers.map((index) => (
          <li className={index === currentPage ? "page-link active" : "page-link"} key={index} onClick={() => paginate(index)}>{index}</li>
        ))}
        <li className="page-link" onClick={() => paginate(currentPage === pageNumbers.length ? currentPage : currentPage + 1)}>Next</li>
      </ul>
    </nav>
  )
}
export default Pagination