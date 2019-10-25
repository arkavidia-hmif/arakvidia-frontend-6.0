export interface File {
  id?: string;
  originalFilename?: string;
  fileSize: number;
  description?: string;
  uploadedBy?: string;
  uploadedAt: string;
  fileLink: string;
}

export enum FileStatus {
  ERROR
}
