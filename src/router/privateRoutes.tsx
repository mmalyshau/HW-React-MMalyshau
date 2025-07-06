import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@hooks";

const PrivateRoutes = () => {
  const user = useAppSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;