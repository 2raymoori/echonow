import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const isAuth = false;
  const router = useRouter();

  useEffect(() => {
    !isAuth ? router.replace("/(auth)/login") : router.replace("/(tabs)")
  }, [])
  return (
    <Stack screenOptions={{
      headerShown: false, headerTitleAlign: "left",
      headerStyle: { backgroundColor: "skyblue" },
      headerTintColor: "white",
      headerTitleStyle: { color: "white" },
      animation: "fade_from_bottom"
    }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false, title: "Auth" }} />
      <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
    </Stack>
  )
}
