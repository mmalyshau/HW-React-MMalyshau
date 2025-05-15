import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@config/firebase";
import {signOut} from "firebase/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    const logout = () => {
        signOut(auth).catch((error) => {
            console.error("Logout error:", error);
        });
    };
    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
