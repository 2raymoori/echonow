import { Stack } from "expo-router"
import { AuthProvider } from "../../../context/AuthContext"

const AuthLayout = () => {
    return (

        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    )
}
export default AuthLayout