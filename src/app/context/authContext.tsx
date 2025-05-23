import { createContext, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@config";
import { signOut } from "firebase/auth";
import type { User } from "firebase/auth";

type TAuthProviderProps = {
    children: React.ReactNode;
};

type TAuthContext = {
    user: User | null;
    loading: boolean;
    logout: () => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: TAuthProviderProps) => {
    const [user, loading] = useAuthState(auth);

    const logout = useCallback(() => {
        signOut(auth).catch((error) => {
            console.error("Logout error:", error);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user: user ?? null, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext};
