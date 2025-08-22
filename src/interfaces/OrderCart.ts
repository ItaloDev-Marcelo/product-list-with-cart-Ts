import type { CountData } from "./Data.Interface";


export interface OrderFormate {
  orderData:CountData[];
  handleRemove: (name:string) => void;
  openModal: () => void
}
