import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../assets/css/property-card.css";

type Params = { updateFilters: Function };

const PropertyFilter: FunctionComponent<Params> = ({ updateFilters }) => {
  const [state, setState] = useState({
    type: "",
    min: 0,
    max: 0,
    zipCode: "",
  });
  const history = useHistory();

  const setType = (e: any) => setState({ ...state, type: e.target.value });
  const setMin = (e: any) => setState({ ...state, min: e.target.value });
  const setMax = (e: any) => setState({ ...state, max: e.target.value });
  const setZipCode = (e: any) =>
    setState({ ...state, zipCode: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateFilters(state);
  };

  return (
    <div className="p-5 bg-light">
      <h1>Filtres</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-row align-items-center justify-content-around">
        <label>
          Type de bien
          <select className="browser-default custom-select" onChange={setType}>
            <option value="" selected hidden>
              Choisir un type
            </option>
            <option value="Maison">Maison</option>
            <option value="Appartement">Appartement</option>
            <option value="Garage">Garage</option>
          </select>
        </label>
        <fieldset>
          <legend>Prix</legend>
          <label>
            Min
            <input
              className="multi-range"
              type="range"
              min="0"
              max="999999"
              onChange={setMin}
            />
            <span style={{ width: "100%", display: "block" }}>{state.min}</span>
          </label>
          <label>
            Min
            <input
              className="multi-range"
              type="range"
              min="0"
              max="999999"
              onChange={setMax}
            />
            <span style={{ width: "100%", display: "block" }}>{state.max}</span>
          </label>
        </fieldset>
        <label>
          Code postal
          <input type="text" min="0" max="999999" onChange={setZipCode} />
        </label>
        <button type="submit" className="btn btn-info">Recherche</button>
      </form>
    </div>
  );
};

export default PropertyFilter;
