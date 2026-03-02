import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Onboarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Complete Your Profile</Text>
                <Text style={styles.subtitle}>Let's get to know you better</Text>
            </View>
            <View style={styles.form}>
                <TouchableOpacity style={styles.imageContainer}>
                    <View style={styles.placeholderImage}>
                        <Text style={{ color: "black", fontSize: 40 }}>+</Text>
                    </View>
                    <View style={styles.editContainer}>
                        <Text style={{ color: "white" }}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TextInput placeholder="Name..." style={styles.input} />
                <TextInput placeholder="Username..." style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loginButtonText}>Complete Setup</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
        paddingHorizontal: 15
    },
    form: {
        marginTop: 50

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        marginTop: 8
    },
    imageContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    placeholderImage: {
        backgroundColor: "white",
        padding: 20,
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    editContainer: {
        position: "absolute",
        bottom: 15,
        right: 140,
        backgroundColor: "black",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    input: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
        marginVertical: 8
    },
    button: {
        backgroundColor: "lightgreen",
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: "center"
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }

})