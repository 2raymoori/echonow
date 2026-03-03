import { Stack } from "expo-router"
import { AuthenticationProvider } from "../../../context/AuthenticationContext"

const AuthLayout = () => {
    return (

        <AuthenticationProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
            </Stack>
        </AuthenticationProvider>
    )
}
export default AuthLayout