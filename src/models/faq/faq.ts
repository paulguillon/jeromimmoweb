import FaqData from "./faqData";

export default class Faq {
    idFaq: number;
    dateFaq: string;
    created_by: number;
    updated_by: number;
    data: Array<FaqData>;

    constructor(
    idFaq: number,
    dateFaq: string = '1970-01-01 00:00',
    created_by: number = 0,
    updated_by: number = 0,
    data: Array<FaqData>
    ) {
    this.idFaq = idFaq;
    this.dateFaq = dateFaq;
    this.created_by = created_by;
    this.updated_by = updated_by;
    this.data = data;
  }
   }