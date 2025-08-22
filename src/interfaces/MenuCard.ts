import type { CountData } from "./Data.Interface";

export   interface CardFormate {
   CardData:CountData; 
   Add: (name: string) => void;
   Remove: (name:string) => void;
   ButtonActive:(name: string) => void
  }
