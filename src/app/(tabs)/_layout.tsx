import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={"orange"} />
                    ),
                    title: "Home"
                }} />
            <Tabs.Screen
                name="aboutme"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={"orange"} />
                    ),
                    title: "About Me"
                }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile", tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={size} color={"orange"} />
                )
            }} />
        </Tabs>
    )
}
export default TabsLayout