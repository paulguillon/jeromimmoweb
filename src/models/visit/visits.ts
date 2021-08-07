import Visit from './visit';

export default class Visits {
  total: number;
  visits: Array<Visit>;

  constructor(
    total: number,
    visits: Array<Visit>,
  ) {
    this.total = total;
    this.visits = visits;
  }
}