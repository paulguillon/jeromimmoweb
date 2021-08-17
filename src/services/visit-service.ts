import Visits from "../models/visit/visits";
import Visit from "../models/visit/visit";
import axios from "axios";
import VisitData from "../models/visit/visitData";
export default class VisitService {
  static async getVisits(token: string, idUser: number): Promise<Visits> {
    //visits
    const resp = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/users/${idUser}/visits`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const result = await resp.data;
    return result;
  }

  static async getVisit(idVisit: number, token: string): Promise<Visit | null> {
    const promise = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/visits/${idVisit}`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const result = await promise.data;
    return result;
  }

  static async getAllData(idVisit: number, token: string): Promise<Array<VisitData>> {
    const promise = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/visits/${idVisit}/data`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const result = await promise.data;
    return result.data;
  }

  static async getData(idVisit: number, key: string, token: string): Promise<VisitData> {
      const promise = await axios({
        method: 'GET',
        url: `https://jeromimmo.fr/api/v1/visits/${idVisit}/data/${key}`,
        headers: {
          Authorization: 'Bearer ' + token,
        }
      });
      const result = await promise.data;
      return result.data;
  }
}
