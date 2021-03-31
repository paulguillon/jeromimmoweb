import AgencyData from './agencyData';

export default class Agency {
    idAgency: number;
    nameAgency: string;
    zipCodeAgency: string;
    cityAgency: string;
    created_by: number;
    updated_by: number;
    data: Array<AgencyData>;

    constructor(
    idAgency: number,
    nameAgency: string = 'type',
    zipCodeAgency: string = '.....',
    cityAgency: string = 'Le Havre',
    created_by: number = 0,
    updated_by: number = 0,
    data: Array<AgencyData>
    ) {
    this.idAgency = idAgency;
    this.nameAgency = nameAgency;
    this.zipCodeAgency = zipCodeAgency;
    this.cityAgency = cityAgency;
    this.created_by = created_by;
    this.updated_by = updated_by;
    this.data = data;
  }
   }