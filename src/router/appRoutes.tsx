import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "@pages";
import { HomePage } from "@pages";
import { MenuPage } from "@pages";

import { useAppSelector } from '@hooks'
import type { RootState } from '@store'



 function AppRoutes() {
    const user = useAppSelector((state: RootState) => state.auth.user);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/menu" replace /> : <LoginPage />}
            />
            <Route
                path="/menu"
                element={user ? <MenuPage /> : <Navigate to="/login" replace />}
            />
        </Routes>
    );
}

export default AppRoutes;