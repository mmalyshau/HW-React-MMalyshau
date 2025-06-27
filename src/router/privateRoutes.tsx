import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@shared/hooks/useAppSelector";

export const PrivateRoutes = () => {
  const user = useAppSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

