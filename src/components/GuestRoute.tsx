// src/components/GuestRoute.tsx
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../app/context/AuthContext";

export const GuestRoute = ({ children }: { children: ReactNode }) => {
  const authContext = useContext(AuthContext);

  if (authContext?.loading) {
    return <div>Carregando...</div>;
  }

  // Se já estiver logado e tentar acessar o login/registro, manda para a /home
  if (authContext?.session) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};
