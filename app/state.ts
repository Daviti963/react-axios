import { atom } from "jotai";
import { Product } from "@/types/types";

export const selectState = atom<string>('all');
export const filterState = atom<string>('');
export const productState = atom<Product[]>([]);