import { BASE_URL } from "@/src/config/env";
import { useCharacterStore } from "@/src/store/useCharacterStore";
import { useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default function CharacterImage({ id }: any) {
	const IMAGE_URL = `${BASE_URL}/characters/${id}/card`;
	const error = useCharacterStore((state) => state.error);
	const [imageLoading, setImageLoading] = useState(true);

	return (
		<View style={{ flex: 1, alignItems: "center", margin: 8 }}>
			{imageLoading && <ActivityIndicator />}
			{error ? (
				<Text>{error}</Text>
			) : (
				<Image
					source={{ uri: IMAGE_URL }}
					style={{ width: 200, height: 200 }}
					resizeMode="contain"
					onLoad={() => setImageLoading(false)}
				/>
			)}
		</View>
	);
}
