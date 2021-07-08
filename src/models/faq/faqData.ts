export default class FaqData {
    idFaqData: number;
    created_at: Date;
    created_by: number;
    updated_at: Date;
    updated_by: number;
    keyFaqData: string;
    valueFaqData: string;
    idFaq: number;
  
    constructor(
      idFaqData: number,
      created_at: Date = new Date(),
      created_by: number = 1,
      updated_at: Date = new Date(),
      updated_by: number = 1,
      keyFaqData: string = 'key',
      valueFaqData: string = 'value',
      idFaq: number = 0
    ) {
      this.idFaqData = idFaqData;
      this.created_at = created_at;
      this.created_by = created_by;
      this.updated_at = updated_at;
      this.updated_by = updated_by;
      this.keyFaqData = keyFaqData;
      this.valueFaqData = valueFaqData;
      this.idFaq = idFaq;
    }
  }