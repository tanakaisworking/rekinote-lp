import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseのURLとキーを取得
// （本番環境やローカルの .env.local に設定する必要があります）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
