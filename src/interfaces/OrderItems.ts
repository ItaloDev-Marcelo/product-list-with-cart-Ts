import type { CountData } from "./Data.Interface";

export interface OrderFormate {
    CartData: CountData;
    handleRemove: (name: string) => void
}