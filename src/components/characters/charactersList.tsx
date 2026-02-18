import useCharacters from "@/src/hooks/useCharacters";
import { useCharacterStore } from "@/src/store/useCharacterStore";
import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CharacterImage from "./characterImage";

export default function CharactersList() {
	const AllIDs = useCharacterStore((state) => state.AllIDs);
	useCharacters();

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<FlatList
					data={AllIDs}
					keyExtractor={(id) => id}
					renderItem={({ item }) => <CharacterImage id={item} />}
					numColumns={3}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
