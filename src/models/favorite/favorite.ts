export default class Favorite {
  idFavorite: number;
  idProperty: number;
  idUser: number;
  action: string;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;

  constructor(
    idFavorite: number,
    idProperty: number = 0,
    idUser: number = 0,
    action: string = '',
    created_by: number = 0,
    created_at: string = "1970/01/01 00:00:00",
    updated_by: number = 0,
    updated_at: string = "1970/01/01 00:00:00",
  ) {
    this.idFavorite = idFavorite;
    this.idProperty = idProperty;
    this.idUser = idUser;
    this.action = action;
    this.created_by = created_by;
    this.created_at = created_at;
    this.updated_by = updated_by;
    this.updated_at = updated_at;
  }
}