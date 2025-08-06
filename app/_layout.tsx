import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="details/[id]" />
      <Stack.Screen name="screens/SplashScreen" />
      <Stack.Screen name="screens/PopupModal" />
      <Stack.Screen name="screens/MainAppScreen" />
    </Stack>
  );
}
