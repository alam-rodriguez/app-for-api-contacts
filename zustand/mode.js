import { create } from "zustand";

export const useMode = create((set) => ({
  mode: "light",
  changeMode: (mode) => set(() => ({ mode: mode })),
}));
