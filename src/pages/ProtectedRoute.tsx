// src/components/ProtectedRoute.tsx
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../app/context/AuthContext";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const authContext = useContext(AuthContext);

  // 1. Enquanto estiver validando/buscando a sessão (ao dar F5), não redireciona
  if (authContext?.loading) {
    return <div>Carregando...</div>;
  }

  // 2. Após terminar de carregar, se continuar sem sessão, redireciona para o login
  if (!authContext?.session) {
    return <Navigate to="/auth/login" replace />;
  }

  // 3. Se houver sessão, renderiza a página protegida
  return <>{children}</>;
};
