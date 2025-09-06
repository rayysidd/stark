// types/index.ts

export type Resume = {
  id: string;
  version: number;
  name: string;
  date: string;
  pdfUrl: string;
  isLatest: boolean;
  context:string;
  status:"selected" | "rejected" | "n.a";
};