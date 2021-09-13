export default class Property {
  idProperty: number;
  typeProperty: string;
  priceProperty: string;
  zipCodeProperty: string;
  cityProperty: string;
  created_by: number;
  updated_by: number;


  constructor(
    idProperty: number,
    typeProperty: string = 'type',
    priceProperty: string = '10',
    zipCodeProperty: string = '.....',
    cityProperty: string = 'Le Havre',
    created_by: number = 0,
    updated_by: number = 0,
  ) {
    this.idProperty = idProperty;
    this.typeProperty = typeProperty;
    this.priceProperty = priceProperty;
    this.zipCodeProperty = zipCodeProperty;
    this.cityProperty = cityProperty;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }
}