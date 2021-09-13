import { FunctionComponent, useState } from "react";
import "../../assets/css/property.css";
import PropertyService from "../../services/property-service";

type Params = { updateFilters: Function };
type Filters = {
  type: string,
  min: number,
  max: number,
  zipCode: string,
  tags: Array<string>,
}

const PropertyFilter: FunctionComponent<Params> = ({ updateFilters }, props) => {
  const [state, setState] = useState<Filters>({
    type: "",
    min: 0,
    max: 0,
    zipCode: "",
    tags: [],
  });

  const setType = (e: any) => setState({ ...state, type: e.target.value });
  const setMin = (e: any) => setState({ ...state, min: e.target.value });
  const setMax = (e: any) => setState({ ...state, max: e.target.value });
  const setZipCode = (e: any) =>
    setState({ ...state, zipCode: e.target.value });
  const setTags = (e: any) => {
    type option = {
      option: HTMLElement,
      value: string
    }
    setState({ ...state, tags: Array.from(e.target.selectedOptions, (option: option) => option.value) });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateFilters(state);
  };

  const getTags = () => {
    return (
      <select className="browser-default custom-select" multiple onChange={setTags}>
        {PropertyService.getTags().map((tag, index) => (<option key={index} value={tag}>{tag}</option>))}
      </select>




    );
  }

  return (
    <div className="globalContainerFilters p-5">

      <div className="m-auto text-center mb-4">
        <h2>Filtrez votre recherche selon vos envies</h2>
      </div>

      <form onSubmit={handleSubmit} >
        <div className="flex-wrap w-75 m-auto d-flex flex-row align-items-center justify-content-center mb-4">
          <div className="containerFilter">
            <span> Type de bien   </span>
            <select className=" bg-white browser-default custom-select" onChange={setType}>
              <option value="">
                Tous
              </option>
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="Terrain">Terrain</option>
              <option value="Garage">Garage</option>
            </select>
          </div>


          <fieldset className="d-flex">
            <div className="containerFilter">
              <span> Min  </span>
              <input
                className="multi-range bg-white"
                type="text"
                min="0"
                max="999999"
                onChange={setMin}
              />
            </div>
            <div className="containerFilter">
              <span> Max   </span>
              <input
                className="multi-range  bg-white"
                type="text"
                min="0"
                max="999999"
                onChange={setMax}
              />
            </div>
          </fieldset>

          <div className="containerFilter">
            <span>Code postal   </span>
            <input className="bg-white" type="text" min="0" max="999999" onChange={setZipCode} />
          </div>
          <div className="containerFilter   ">
            <span>Filtres</span>
            {getTags()}
          </div>

        </div>


        <div className="m-auto d-flex justify-content-center">
          <button type="submit" className="searchBtn">
            Rechercher
          </button>


        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
