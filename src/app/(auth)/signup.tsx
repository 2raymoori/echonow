
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cntxt } from "../../../context/AuthenticationContext";

const Signup = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const authCntxt = useContext(Cntxt);
    //const authContext = useAuth();

    useEffect(() => {
        router.replace("/(auth)/onboarding")
    }, [])

    const onSignUpPressed = async () => {

        try {
            setLoading(true)
            console.log(email, password, confirmPassword)
            const res = await authCntxt!.signUp(email, password, confirmPassword)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    /*
touray@uni-potsdam.de touray123 touray123
 LOG  {"app_metadata": {"provider": "email", "providers": ["email"]}, "aud": "authenticated", "created_at": "2026-03-03T13:53:16.917746Z", "email": "touray@uni-potsdam.de", "email_confirmed_at": "2026-03-03T13:53:16.962744081Z", "id": "23ff106f-0c90-4530-a471-5ab01789a516", "identities": [{"created_at": "2026-03-03T13:53:16.950231Z", "email": "touray@uni-potsdam.de", "id": "23ff106f-0c90-4530-a471-5ab01789a516", "identity_data": [Object], "identity_id": "f0f91440-001d-4b94-972d-04d72ca378d9", "last_sign_in_at": "2026-03-03T13:53:16.949656751Z", "provider": "email", "updated_at": "2026-03-03T13:53:16.950231Z", "user_id": "23ff106f-0c90-4530-a471-5ab01789a516"}], "is_anonymous": false, "last_sign_in_at": "2026-03-03T13:53:16.978788506Z", "phone": "", "role": "authenticated", "updated_at": "2026-03-03T13:53:17.004319Z", "user_metadata": {"email": "touray@uni-potsdam.de", "email_verified": true, "phone_verified": false, "sub": "23ff106f-0c90-4530-a471-5ab01789a516"}}
    */
    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Your EchoNow Account</Text>
                <Text style={styles.subtitle}>Sign Up...</Text>

                <View style={styles.form}>
                    <TextInput autoCapitalize="none" placeholder="Email..."
                        keyboardType="email-address"
                        autoComplete="email"
                        placeholderTextColor={"#999"}
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail} />

                    <TextInput placeholder="Password..."
                        secureTextEntry
                        autoComplete="password"
                        autoCapitalize="none"
                        placeholderTextColor={"#999"}
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword} />
                    <TextInput placeholder="Confirm Password..."
                        secureTextEntry
                        autoComplete="password"
                        autoCapitalize="none"
                        placeholderTextColor={"#999"}
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword} />

                    <TouchableOpacity style={styles.button} onPress={onSignUpPressed}>
                        {loading ? (
                            <ActivityIndicator size={20} color="white" />
                        ) : (
                            <Text style={styles.loginButtonText}>Sign Up</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.replace("/(auth)/login")} style={styles.linkButton}>
                        <Text>Already have an account? <Text style={styles.signupText}>Login</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        marginTop: 8
    },
    form: {
        width: "100%",
        marginTop: 24,
        gap: 16
    },
    input: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: "lightgreen",
        padding: 16,
        borderRadius: 8,
        alignItems: "center"
    },
    linkButton: {
        padding: 16,
        alignItems: "center"
    },
    signupText: {
        color: "white",
        fontWeight: "bold"
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})
export default Signup

