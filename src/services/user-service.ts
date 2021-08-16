import User from "../models/user/user";
import axios from "axios";
import UserData from "../models/user/userData";

export default class UserService {

  static async getUser(token: string, idUser: number): Promise<User> {
    const resp = await axios
      .get(`https://jeromimmo.fr/api/v1/users/${idUser}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
    return await resp.data;
  }

  static async updateUser(token: string, user: User): Promise<User> {
    const resp = await axios({
      method: 'PATCH',
      url: `https://jeromimmo.fr/api/v1/users/${user.idUser}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        firstnameUser: user.firstnameUser,
        lastnameUser: user.lastnameUser,
        emailUser: user.emailUser,
      }
    });
    return await resp.data;
  }

  static async getAllData(idUser: number, token: string): Promise<Array<UserData>> {
    const promise = await axios({
      method: 'GET',
      url: `https://jeromimmo.fr/api/v1/users/${idUser}/data`,
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
    const result = await promise.data;
    return result.data;
  }

  static async getData(idUser: number, key: string, token: string): Promise<UserData> {
      const promise = await axios({
        method: 'GET',
        url: `https://jeromimmo.fr/api/v1/users/${idUser}/data/${key}`,
        headers: {
          Authorization: 'Bearer ' + token,
        }
      });
      const result = await promise.data;
      return result.data;
  }
}
