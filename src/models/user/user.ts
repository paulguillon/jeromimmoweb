import UserData from './userData';

export default class User {
  idUser: number;
  lastnameUser: string;
  firstnameUser: string;
  emailUser: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  idRoleUser: number;
  data: Array<UserData>;

  constructor(
    idUser: number,
    lastnameUser: string = 'type',
    firstnameUser: string = '10',
    emailUser: string = '.....',
    created_at: string = '2021-06-09 16:04:25',
    created_by: number = 0,
    updated_at: string = '2021-06-09 16:04:25',
    updated_by: number = 0,
    idRoleUser: number = 0,
    data: Array<UserData>
  ) {
    this.idUser = idUser;
    this.lastnameUser = lastnameUser;
    this.firstnameUser = firstnameUser;
    this.emailUser = emailUser;
    this.created_at = created_at;
    this.created_by = created_by;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
    this.idRoleUser = idRoleUser;
    this.data = data;
  }
}