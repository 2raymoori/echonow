//import { Text } from '@expo/ui/swift-ui';
import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BottomSheetFitsContentExample() {
    const [isPresented, setIsPresented] = useState(false);

    return (
        <SafeAreaView>
            <Text>The Home Page</Text>
            {
                /*
                <Host style={{ flex: 1 }}>
                            <VStack>
                                <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
                                <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
                                    <Group
                                        modifiers={[
                                            presentationDetents([{ fraction: 0.5 }]),
                                        ]}>
                                        <Text>This sheet can snap to multiple heights.</Text>
                                    </Group>
                                </BottomSheet>
                            </VStack>
                        </Host>
                */
            }
        </SafeAreaView>

    );
}