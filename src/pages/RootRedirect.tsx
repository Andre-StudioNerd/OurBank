// src/pages/RootRedirect.tsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../app/context/AuthContext";

export const RootRedirect = () => {
  const authContext = useContext(AuthContext);

  // Aguarda a verificação do Supabase ao carregar a página
  if (authContext?.loading) {
    return <div>Carregando...</div>;
  }

  // Se houver sessão ativa, redireciona para /home; caso contrário, vai para /auth/login
  return authContext?.session ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};
