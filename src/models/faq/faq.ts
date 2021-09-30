export default class Faq {
  idFaq: number;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  faqTypeName: string
  constructor(
    idFaq: number = 0,
    created_at: Date = new Date(),
    created_by: number = 1,
    updated_at: Date = new Date(),
    updated_by: number = 1,
    faqTypeName: string = "test"
  ) {
    this.idFaq = idFaq;
    this.created_at = created_at;
    this.created_by = created_by;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
    this.faqTypeName = faqTypeName;
  }
}