// types/index.ts

export type Resume = {
  id: string;
  version: number;
  name: string;
  date: string;
  pdfUrl: string;
  isLatest: boolean;
  changelog: string[];
  easterEgg: string | null;
};