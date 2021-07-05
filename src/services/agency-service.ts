import Agency from "../models/agency/agency";

export default class AgencyService {
  static getAgencies(): Promise<Agency[]> {
    return fetch(`https://jeromimmo.fr/public/index.php/api/v1/agency`,)
      .then(response => response.json());
  }

  static getAgency(idAgency: number): Promise<Agency | null> {
    return fetch(`https://jeromimmo.fr/public/index.php/api/v1/agency/${idAgency}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data);
  }

  static searchAgency(term: string): Promise<Agency[]> {
    return fetch(`https://jeromimmo.fr/public/index.php/api/v1/agency?q=${term}`)
      .then(response => response.json())
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}