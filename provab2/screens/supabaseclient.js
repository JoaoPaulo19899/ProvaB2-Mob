import { createClient } from '@supabase/supabase-js';

// Substitua com a URL do seu projeto Supabase
const SUPABASE_URL = 'https://<your-project-ref>.supabase.co';  // Altere com sua URL
const SUPABASE_ANON_KEY = 'your-anon-key';  // Altere com sua chave anônima

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
