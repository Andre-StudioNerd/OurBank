import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // MUDOU AQUI (ANON_KEY)

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Variáveis de ambiente VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não foram encontradas no arquivo .env",
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
