import { Loading } from "@/components/commonComponants";
import { Stack } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  if (false) {
    return <Loading />;
  }

  return (
    <Stack screenOptions={{ animation: "fade_from_bottom" }}>
      <Stack.Screen name="(privateScreens)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
