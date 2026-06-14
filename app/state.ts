import { atom } from "jotai";

export const selectState = atom<string>('all');
export const filterState = atom<string>('');