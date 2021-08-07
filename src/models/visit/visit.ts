
export default class Visit {
  idVisit: number;
  dateVisit: string;
  created_by: number;
  updated_by: number;

  constructor(
    idVisit: number,
    dateVisit: string = '1970-01-01 00:00',
    created_by: number = 0,
    updated_by: number = 0,
  ) {
    this.idVisit = idVisit;
    this.dateVisit = dateVisit;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }
}