import { useEffect } from "react";
import getCharactersIDs from "../services/characters/apiCharacters";
import { useCharacterStore } from "../store/useCharacterStore";

export default function useCharacters() {
	const setAllIDs = useCharacterStore((state) => state.setAllIDs);
	const setError = useCharacterStore((state) => state.setError);

	useEffect(() => {
		const fetchCharactersIDs = async () => {
			try {
				const allIDs = await getCharactersIDs();
				setAllIDs(allIDs);
			} catch (error: any) {
				setError(error.message || "something went wrong");
			}
		};
		fetchCharactersIDs();
	}, [setAllIDs, setError]);
}
