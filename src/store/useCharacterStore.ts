import { create } from "zustand";

interface CharactersState {
	AllIDs: string[] | null | undefined;
	setAllIDs: (id: string[]) => void;
	error: string | null;
	setError: (error: string) => void;
}

export const useCharacterStore = create<CharactersState>((set) => ({
	AllIDs: null,
	setAllIDs: (id) => set({ AllIDs: id }),
	error: null,
	setError: (error) => set({ error: error }),
}));
