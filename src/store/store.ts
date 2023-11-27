import { create } from "zustand";

interface FiltersState {
  // searchbox
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;

  // drag and drop
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
}

export const useStore = create<FiltersState>((set) => ({
  // searchbox
  searchTerm: "",
  setSearchTerm: (searchTerm: string) =>
    set((state) => ({ ...state, searchTerm })),

  // drag and drop
  isDragging: false,
  setIsDragging: (isDragging: boolean) =>
    set((state) => ({ ...state, isDragging })),
}));
