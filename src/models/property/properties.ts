import Property from './property';

export default class Properties {
  total: number;
  properties: Array<Property>;

  constructor(
    total: number,
    properties: Array<Property>,
  ) {
    this.total = total;
    this.properties = properties;
  }
}