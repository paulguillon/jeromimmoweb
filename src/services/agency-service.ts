import Agency from "../models/agency/agency";
import axios from "axios";
import AgencyData from "../models/agency/agencyData";

export default class AgencyService {
  static async getAgencies(): Promise<Agency[]> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/agency`);
    const result = await promise.data;
    return result;
  }
  static async getAgency(idAgency: number): Promise<Agency> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/agency/${idAgency}`);
    const result = await promise.data;
    return result;
  }

  static async getAllData(idAgency: number): Promise<Array<AgencyData>> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/agency/${idAgency}/data`);
    const result = await promise.data;
    return result.data;
  }

  static async getData(idAgency: number, key: string): Promise<AgencyData> {
    const promise = await axios(`https://jeromimmo.fr/api/v1/agency/${idAgency}/data/${key}`);
    const result = await promise.data;
    return result.data;
  }

  static searchAgency(term: string): Promise<Agency[]> {
    return fetch(`https://jeromimmo.fr/api/v1/agency?q=${term}`)
      .then(response => response.json())
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}