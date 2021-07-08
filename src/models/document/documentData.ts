export default class DocumentData {
    idDocumentData: number;
    created_at: Date;
    created_by: number;
    updated_at: Date;
    updated_by: number;
    keyDocumentData: string;
    valueDocumentData: string;
    idDocument: number;
  
    constructor(
      idDocumentData: number,
      created_at: Date = new Date(),
      created_by: number = 1,
      updated_at: Date = new Date(),
      updated_by: number = 1,
      keyDocumentData: string = 'key',
      valueDocumentData: string = 'value',
      idDocument: number = 0
    ) {
      this.idDocumentData = idDocumentData;
      this.created_at = created_at;
      this.created_by = created_by;
      this.updated_at = updated_at;
      this.updated_by = updated_by;
      this.keyDocumentData = keyDocumentData;
      this.valueDocumentData = valueDocumentData;
      this.idDocument = idDocument;
    }
  }