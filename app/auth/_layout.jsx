import { Redirect, router, Stack, useSegments } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function AuthLayout() {
  const segments = useSegments();

  const [isKeyboardVisible, setKeyboardVisibility] = useState(false);

  if (false) {
    return <Redirect href="/" />;
  }

  return (
    <KeyboardAvoidingView setKeyboardVisibility={setKeyboardVisibility}>
      <SafeAreaView style={{ gap: 20, justifyContent: "center" }}>
        <Text>Welcome To Sondazhi</Text>

        <Text>Use an account to collaborate in a sondazh question!</Text>

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Login"
            options={{ animation: "slide_from_left" }}
          />
          <Stack.Screen
            name="Register"
            options={{ animation: "slide_from_right" }}
          />
        </Stack>

        <Button
          variant="link"
          onPress={() =>
            router.push(
              segments.includes("Register") ? "/auth/Login" : "/auth/Register"
            )
          }
        >
          {segments.includes("Register")
            ? "Have an account?"
            : "Don't have an account?"}
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    maxHeight: "30%",
    width: "50%",
  },
});
