import Property from "../models/property";

export default class PropertyService {


  static getProperties(): Promise<Property[]> {
    return fetch('http://jeromimmoapi/api/v1/properties',)
      .then(response => response.json());
  }

  static getProperty(idProperty: number): Promise<Property | null> {
    return fetch(`http://jeromimmoapi/api/v1/properties/${idProperty}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data);
  }

  static searchProperty(term: string): Promise<Property[]> {
    return fetch(`http://jeromimmoapi/api/v1/properties?q=${term}`)
      .then(response => response.json())
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}