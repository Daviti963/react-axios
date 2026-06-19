import { atom } from "jotai";
import { Product } from "@/types/types";
import { atomWithStorage } from "jotai/utils";

export const selectState = atom<string>('all');
export const filterState = atom<string>('');
export const productState = atomWithStorage<Product[]>('cart-storage', []);
export const cartCountState = atom<number>(0);