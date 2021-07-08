import DocumentData from "./documentData";

export default class Document {
    idDocument: number;
    nameDocument: string;
    created_by: number;
    updated_by: number;
    data: Array<DocumentData>;

    constructor(
    idDocument: number,
    nameDocument: string = 'Title document',
    created_by: number = 0,
    updated_by: number = 0,
    data: Array<DocumentData>
    ) {
    this.idDocument = idDocument;
    this.nameDocument = nameDocument;
    this.created_by = created_by;
    this.updated_by = updated_by;
    this.data = data;
  }
   }