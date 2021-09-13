export default class Favorite {
  idFavorite: number;
  idProperty: number;
  idUser: number;
  created_at: string;
  updated_at: string;

  constructor(
    idFavorite: number = 0,
    idProperty: number = 0,
    idUser: number = 0,
    created_at: string = "1970/01/01 00:00:00",
    updated_at: string = "1970/01/01 00:00:00",
  ) {
    this.idFavorite = idFavorite;
    this.idProperty = idProperty;
    this.idUser = idUser;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}