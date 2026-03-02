
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../context/AuthContext";

const Signup = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const { signUp } = useAuth();

    const onSignUpPressed = async () => {
        try {
            setLoading(true)
            console.log(email, password, confirmPassword)
            const res = await signUp(email, password)
            console.log(res)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Your EchoNow Account</Text>
                <Text style={styles.subtitle}>Sign Up...</Text>

                <View style={styles.form}>
                    <TextInput placeholder="Email..."
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

