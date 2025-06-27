import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage";
import { LoginPage } from "@pages/LoginPage/LoginPage";
import { MenuPage } from "@pages/MenuPage/MenuPage";
import { OrderPage } from "@pages/OrderPage/OrderPage";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { PrivateRoutes } from "@router/privateRoutes"; 
import type { RootState } from "@store/store";

export function AppRoutes() {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/login"
        element={user ? <Navigate to="/menu" replace /> : <LoginPage />}
      />


      <Route element={<PrivateRoutes />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

