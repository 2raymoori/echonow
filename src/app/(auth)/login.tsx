import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { signIn } = useAuth();

    const showLogin = () => {
        console.log(email, password)
    }
    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to EchoNow</Text>
                <Text style={styles.subtitle}>Sign In to Continue</Text>

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

                    <TouchableOpacity style={styles.button} onPress={showLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/(auth)/signup")} style={styles.linkButton}>
                        <Text>Don't have an account? <Text style={styles.signupText}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Login
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