import Visit from "../models/visit/visit";
import axios from "axios";

type VisitPromise = {
  total: number,
  visits: Visit[],
  message: string,
  status: string
}

export default class VisitService {
  static async getVisits(token: string): Promise<VisitPromise> {
    const resp = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/public/index.php/api/v1/visits`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const data = await resp.data;

    for (let i = 0; i < data.visits.length; i++) {
      let element = data.visits[i];
      const respData = await axios({
        method: 'GET',
        url: `https://jeromimmo.fr/public/index.php/api/v1/visits/${element.idVisit}/data`,
        headers: {
          Authorization: 'Bearer ' + token,
        }
      });
      const dataData = await respData.data;
      element.data = dataData.data;
    }

    return data;
  }

  static getVisit(idVisit: number): Promise<Visit | null> {
    return axios
      .get(
        `https://jeromimmo.fr/public/index.php/api/v1/visit/${idVisit}`
      )
      .then((response) => response.data)
      .then((data) => data);
  }
}
