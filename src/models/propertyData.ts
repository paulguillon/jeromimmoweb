export default class PropertyData {
  idPropertyData: number;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  keyPropertyData: string;
  valuePropertyData: string;
  idProperty: number;

  constructor(
    idPropertyData: number,
    created_at: Date = new Date(),
    created_by: number = 1,
    updated_at: Date = new Date(),
    updated_by: number = 1,
    keyPropertyData: string = 'key',
    valuePropertyData: string = 'value',
    idProperty: number = 0
  ) {
    this.idPropertyData = idPropertyData;
    this.created_at = created_at;
    this.created_by = created_by;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
    this.keyPropertyData = keyPropertyData;
    this.valuePropertyData = valuePropertyData;
    this.idProperty = idProperty;
  }
}