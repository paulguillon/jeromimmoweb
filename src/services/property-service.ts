import App from "../App";
import Property from "../models/property/property";
import axios from "axios";

export default class PropertyService {
  static getProperties(
    type?: string,
    min?: string,
    max?: string,
    zipCode?: string,
    limit?: string,
    offset?: string
  ) {
    let filtersArray = [];

    if (type) filtersArray.push(`typeProperty=${type}`);
    if (min) filtersArray.push(`minPriceProperty=${min}`);
    if (max) filtersArray.push(`maxPriceProperty=${max}`);
    if (zipCode) filtersArray.push(`zipCodeProperty=${zipCode}`);
    if (limit) filtersArray.push(`limit=${limit}`);
    if (offset) filtersArray.push(`offset=${offset}`);

    let filters = "?" + filtersArray.join("&");

    return axios
      .get(`http://jeromimmo.fr/public/index.php/api/v1/properties${filters}`)
      .then((res) => res.data);
  }

  static getProperty(idProperty: number): Promise<Property | null> {
    return axios
      .get(
        `http://jeromimmo.fr/public/index.php/api/v1/properties/${idProperty}`
      )
      .then((response) => response.data)
      .then((data) => (this.isEmpty(data) ? null : data));
  }

  static searchProperty(term: string): Promise<Property[]> {
    return axios
      .get(`http://jeromimmo.fr/public/index.php/api/v1/properties?q=${term}`)
      .then((response) => response.data);
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}
