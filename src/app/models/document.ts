export interface Document {
  documentId: number;
  documentType: string;
  documentName: string;
  documentUrl: string;
  expiry: Date;
  uploaded: Date;
}
