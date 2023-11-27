import { create } from "zustand";

interface FiltersState {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const useStore = create<FiltersState>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm: string) =>
    set((state) => ({ ...state, searchTerm })),
}));
