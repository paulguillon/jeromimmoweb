

export default class Role {
    idRole: number;
    roleName: string;
    created_by: number;
    updated_by: number;
    constructor(
        idRole: number,
        roleName: string = 'Admin',
        created_by: number = 0,
        updated_by: number = 0,
    ) {
        this.idRole = idRole;
        this.roleName = roleName;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}