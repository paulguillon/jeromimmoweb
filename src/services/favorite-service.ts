import Favorite from "../models/favorite/favorite";
import axios from "axios";

export default class FavoriteService {
  static async getFavorites(token: string, idUser: number): Promise<Favorite[]> {
    //favorites
    const resp = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/users/${idUser}/favorites`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const result = await resp.data;
    return result;
  }
  static async getFavorite(token: string, idUser: number, idProperty: number): Promise<Favorite> {
    //favorites
    const resp = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/favorites?idUser=${idUser}&idProperty=${idProperty}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        idUser: idUser,
        idProperty: idProperty,
      }
    });
    return await resp.data;
  }

  static toggleFavorite(token: string, idUser: number, idProperty: number) {
    axios({
      method: 'PATCH',
      url: `https://jeromimmo.fr/api/v1/favorites`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        idUser: idUser,
        idProperty: idProperty,
      }
    });
  }
}
