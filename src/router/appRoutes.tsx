import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, MenuPage, OrderPage, NotFoundPage } from "@pages";
import { useAppSelector } from "@hooks";
import { PrivateRoutes } from "@router"; 
import type { RootState } from "@store";

function AppRoutes() {
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

export default AppRoutes;
