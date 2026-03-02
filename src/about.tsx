
import { Image } from "expo-image"
import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const About = (props: any) => {
    const router = useRouter()

    console.log(props)

    const handleBack = () => {
        router.back()
        
    }
    return (
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "orange" }}>
                <Button title="Back" onPress={handleBack} />
                <Text>About echonow</Text>
                <Image
                    source={require("../../assets/images/profile_pic_final.jpg")}
                    style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 10, marginTop: 10 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default About