//import { BottomSheet, Button, Group, Host, VStack } from "@expo/ui/swift-ui"
//import { presentationDetents } from "@expo/ui/swift-ui/modifiers"
import { useState } from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const About = () => {
    const [isPresented, setIsPresented] = useState(false)
    return (
        <SafeAreaView>
            <Text>The About Me Page</Text>
            {
                /*

            <Host>
                <VStack>
                    <Button onPress={() => setIsPresented(true)}>
                        <Text>Open bottom sheet</Text>
                    </Button>

                    <BottomSheet isPresented={isPresented} onIsPresentedChange={() => { setIsPresented(false) }}>
                        <Group modifiers={[
                            presentationDetents([{ fraction: 0.5 }]),
                        ]}>
                            <Text>Hello</Text>
                        </Group>

                    </BottomSheet>
                </VStack>

            </Host>
                */

            }
        </SafeAreaView>
    )
}
export default About