export default class UserData {
    idUserData: number;
    created_at: Date;
    created_by: number;
    updated_at: Date;
    updated_by: number;
    keyUserData: string;
    valueUserData: string;
    idUser: number;
  
    constructor(
      idUserData: number,
      created_at: Date = new Date(),
      created_by: number = 1,
      updated_at: Date = new Date(),
      updated_by: number = 1,
      keyUserData: string = 'key',
      valueUserData: string = 'value',
      idUser: number = 0
    ) {
      this.idUserData = idUserData;
      this.created_at = created_at;
      this.created_by = created_by;
      this.updated_at = updated_at;
      this.updated_by = updated_by;
      this.keyUserData = keyUserData;
      this.valueUserData = valueUserData;
      this.idUser = idUser;
    }
  }