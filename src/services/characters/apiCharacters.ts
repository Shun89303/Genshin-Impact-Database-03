import apiClient from "../apiClient";

export default async function getCharactersIDs() {
	return await apiClient("/characters");
}
