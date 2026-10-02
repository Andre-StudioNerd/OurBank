import { createContext, ReactNode, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../infra/supabase/config";

interface IAuthContext {
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  session: Session | null;
  loading: boolean; // Adicionado
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Inicia como true

  useEffect(() => {
    // Captura a sessão inicial (evento 'INITIAL_SESSION') e mudanças futuras
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    // Limpa o listener ao desmontar o componente
    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ session, loading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
