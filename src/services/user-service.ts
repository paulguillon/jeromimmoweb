import User from "../models/user/user";
import axios from "axios";

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
}
