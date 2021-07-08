export default class VisitData {
  idVisitData: number;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  keyVisitData: string;
  valueVisitData: string;
  idVisit: number;

  constructor(
    idVisitData: number,
    created_at: Date = new Date(),
    created_by: number = 1,
    updated_at: Date = new Date(),
    updated_by: number = 1,
    keyVisitData: string = 'key',
    valueVisitData: string = 'value',
    idVisit: number = 0
  ) {
    this.idVisitData = idVisitData;
    this.created_at = created_at;
    this.created_by = created_by;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
    this.keyVisitData = keyVisitData;
    this.valueVisitData = valueVisitData;
    this.idVisit = idVisit;
  }
}