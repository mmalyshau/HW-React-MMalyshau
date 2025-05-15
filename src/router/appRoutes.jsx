import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "@pages/loginPage/loginPage";
import { HomePage } from "@pages/homePage/HomePage";
import { MenuPage } from "@pages/menuPage/MenuPage";
import { useAuth } from "@context/AuthContext";



export function AppRoutes({addToCart}) {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/menu" replace /> : <LoginPage />}
            />
            <Route
                path="/menu"
                element={user ? <MenuPage addToCart={addToCart} /> : <Navigate to="/login" replace />}
            />
        </Routes>
    );
}
