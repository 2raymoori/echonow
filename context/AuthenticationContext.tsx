import { supabase } from "@/lib/supabase/client"
import { File } from "expo-file-system"
import { createContext, useContext, useState } from "react"

interface IUser {
    id: number,
    name: string
}
interface AuthContextType {
    user: IUser | null,
    signIn: (email: string, password: string) => Promise<void>
    signUp: (email: string, password: string, confirmPassword: string) => Promise<void>
}
export const Cntxt = createContext<AuthContextType | undefined>(undefined)

export const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null)
    const signIn = async (email: string, password: string): Promise<void> => {
        const result = await supabase.auth.signInWithPassword({ email, password })
        if (result.error) {
            throw result.error
        }
        if (result.data.user)
            console.log(result.data.user)
    }
    const signUp = async (email: string, password: string, confirmPassword: string): Promise<void> => {
        const result = await supabase.auth.signUp({ email, password })
        if (result.error) {
            throw result.error
        }
        if (result.data.user) {
            console.log(result.data.user)
            const onboardingCreateRes: boolean = await createOnboarding(result.data.user.id)
            if (!onboardingCreateRes) {
                throw new Error("Sorry there exists an error in creating an onboarding...")
            }
        }
    }
    return (

        <Cntxt.Provider value={{ user, signIn, signUp }}>
            {children}
        </Cntxt.Provider >
    )
}
export const selectOnboardedUsers = async () => {
    try {

        const { data, error } = await supabase
            .from('profiles')
            .insert([
                {
                    id: "5f6829e2-fffe-401f-a072-0d6f26f9a4fc", name: 'Mordor', username: "sdfs", profile_image_url: "profile_image_url", onboarding_complete: true
                }
            ])
            .select()
        console.log(error)

        const res = await supabase.from("profiles").select("*")
        console.log(res)
    } catch (error) {
        throw new Error("Sorry there exists an issue...")
    }
}
export const createOnboarding = async (id: string): Promise<boolean> => {
    try {
        const { data, error } = await supabase.from("profiles").insert([
            { id }
        ])
        if (error) {

            console.log(error)
            return false
        }
        else
            return true
    } catch (error) {
        console.log(error)
        throw error
    }
}

const useAuthentication = () => {
    const context = useContext(Cntxt)
    if (context === undefined) {
        throw new Error("Sorry useAuth must be defined within a provider")
    }
    return context
}

export const uploadProfileImage = async (userId: string, imageURI: string) => {
    try {

        const fileExtension = imageURI.split(".").pop() || "jpg";
        const randomString = Math.random().toString().split(".").pop()
        const fileName = `${userId}_${randomString}/profile.${fileExtension}`
        const file = new File(imageURI) //
        const bytes = await file.bytes() //
        const res = await supabase.storage.from("profiles").upload(fileName, bytes, {
            contentType: `image/${fileExtension}`
        })
        const { data: urlData } = await supabase.storage.from("profiles").getPublicUrl(fileName)
        console.log(urlData.publicUrl)
        console.log(res)
        console.log("?????????????? Image upload success....")
    } catch (error) {
        console.log("####################################################")
        console.log(error)
    }
}