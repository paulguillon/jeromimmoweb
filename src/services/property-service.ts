import Property from "../models/property/property";
import axios from "axios";
import PropertyData from "../models/property/propertyData";
import Properties from "../models/property/properties";

export default class PropertyService {
  static async getProperties(
    type?: string,
    min?: string,
    max?: string,
    zipCode?: string,
    tags?: Array<string>,
    limit?: string,
    offset?: string
  ): Promise<Properties> {
    let filtersArray = [];

    if (type) filtersArray.push(`typeProperty=${type}`);
    if (min) filtersArray.push(`minPriceProperty=${min}`);
    if (max) filtersArray.push(`maxPriceProperty=${max}`);
    if (zipCode) filtersArray.push(`zipCodeProperty=${zipCode}`);
    if (tags) tags.forEach((tag) => filtersArray.push(`${tag}=true`));
    if (limit) filtersArray.push(`limit=${limit}`);
    if (offset) filtersArray.push(`offset=${offset}`);

    let filters = "?" + filtersArray.join("&");

    const promise = await axios(`https://jeromimmo.fr/api/v1/properties${filters}`);
    const result = await promise.data;
    return result;
  }

  static getProperty(idProperty: number): Promise<Property> {
    return axios
      .get(
        `https://jeromimmo.fr/api/v1/properties/${idProperty}`
      )
      .then((response) => response.data)
      .then((data) => data);
  }

  static async getAllData(idProperty: number): Promise<Array<PropertyData>> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/properties/${idProperty}/data`);
    const result = await promise.data;
    return result.data;
  }

  static async getData(idProperty: number, key: string): Promise<PropertyData> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/properties/${idProperty}/data/${key}`);
    const result = await promise.data;
    return result.data;
  }

  static searchProperty(term: string): Promise<Property[]> {
    return axios
      .get(`https://jeromimmo.fr/api/v1/properties?q=${term}`)
      .then((response) => response.data);
  }
  static getTags(): Array<string> {
    return ["Jardin", "Piscine", "Sous-sol", "Interphone", "Cheminée", "Gardien", "Belle vue", "Balcon", "Ascenseur", "Rez-de-chaussée", "Terrasse", "Cave", "Orientation Sud", "Climatisation", "Meublé", "Colocation", "Stationnement", "Plain-pied", "Accessibilité PMR", "Véranda", "Alarme", "Digicode"];
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}
