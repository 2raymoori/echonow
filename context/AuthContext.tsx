import { supabase } from "@/lib/supabase/client";
import { createContext, useContext, useState } from "react";

export interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    profileImage?: string;
    onboardingCompleted?: boolean
}
interface AuthContextType {
    user: User | null;
    signUp: (email: string, password: string) => Promise<void>;
    signIn?: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) throw error;
        if (data.user) console.log(data.user);
    }
    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email, password
        })
        if (error) throw error;
        if (data.user) console.log(data.user);
    }

    return (
        <AuthContext.Provider value={{ user, signUp, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}