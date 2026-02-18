import { useEffect } from "react";
import getCharactersIDs from "../services/characters/apiCharacters";
import { useCharacterStore } from "../store/useCharacterStore";

export default function useCharacters() {
	const setAllIDs = useCharacterStore((state) => state.setAllIDs);
	const setError = useCharacterStore((state) => state.setError);
	const setLoading = useCharacterStore((state) => state.setLoading);

	useEffect(() => {
		const fetchCharactersIDs = async () => {
			try {
				setLoading(true);
				const allIDs = await getCharactersIDs();
				setAllIDs(allIDs);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchCharactersIDs();
	}, [setAllIDs, setError, setLoading]);
}
