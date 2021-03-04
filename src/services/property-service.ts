import Property from "../models/property";

export default class PropertyService {

  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

  static getProperties(): Promise<Property[]> {
    return fetch('http://api.jeromimmo.cda4.lh.manusien-ecolelamanu.fr/api/v1/properties')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static getProperty(id: number): Promise<Property | null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  static updateProperty(property: Property): Promise<Property> {
    return fetch(`http://localhost:3001/pokemons/${property.idProperty}`, {
      method: 'PUT',
      body: JSON.stringify(property),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static deleteProperty(property: Property): Promise<{}> {
    return fetch(`http://localhost:3001/pokemons/${property.idProperty}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static addProperty(property: Property): Promise<Property> {

    return fetch(`http://localhost:3001/pokemons`, {
      method: 'POST',
      body: JSON.stringify(property),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static searchProperty(term: string): Promise<Property[]> {
    return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}