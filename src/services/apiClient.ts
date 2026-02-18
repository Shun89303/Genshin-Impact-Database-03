import { BASE_URL } from "../config/env";

export default async function apiClient(path: string) {
	const res = await fetch(`${BASE_URL}${path}`);
	if (!res.ok) return new Error("api fetch request failed");
}
