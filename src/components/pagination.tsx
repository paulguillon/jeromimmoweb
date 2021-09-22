import { FunctionComponent } from "react";
import Properties from "../models/property/properties";
import "../assets/css/pagination.css"

type Props = {
  perPage: number;
  data: Properties | null;
  currentPage: number;
  paginate: Function;
};

const Pagination: FunctionComponent<Props> = ({ perPage, data, currentPage, paginate }) => {
  const nbPages = Math.ceil((data ? (data.total ? data.total : 1) : 1) / perPage);
  return (
    <nav className="d-flex justify-content-center align-items-center p-4">
      <button type="button" className="btn btn-primary btn-rounded mx-2" disabled={currentPage === 1 ? true : false} onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)}>Précédent</button>
      {currentPage > 1 ? (
        <button type="button" className="btn notActivePage btn-rounded mx-2" onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>
      ) : null}
      <button type="button" className="btn activePage btn-rounded mx-2" onClick={() => paginate(currentPage)}>{currentPage}</button>
      {currentPage < nbPages ? (
        <button type="button" className="btn notActivePage btn-rounded mx-2" onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>
      ) : null}
      <button type="button" className="btn btn-primary btn-rounded mx-2" disabled={currentPage === nbPages ? true : false} onClick={() => paginate(currentPage === nbPages ? currentPage : currentPage + 1)}>Suivant</button>
    </nav>
  )
}
export default Pagination