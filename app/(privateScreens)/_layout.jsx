import { Stack } from "expo-router";

export default function PrivateScreenLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="modals" options={{ presentation: "modal" }} />
    </Stack>
  );
}
