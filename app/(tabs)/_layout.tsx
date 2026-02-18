import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="(characters)" options={{ title: "Characters" }} />
			<Tabs.Screen name="(weapons)" options={{ title: "Weapons" }} />
		</Tabs>
	);
}
