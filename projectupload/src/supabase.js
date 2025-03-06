import { createClient } from "@supabase/supabase-js";

// Supabase 프로젝트 설정 (supabase 콘솔에서 복사한 정보 입력)
const supabaseUrl = "https://pbfkvszjhwepjrqujgxr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZmt2c3pqaHdlcGpycXVqZ3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTE3MjUsImV4cCI6MjA1Njc2NzcyNX0.udkWj432sY5fAoTyBEUeucv6s-cL5j3_fzreajv7K2A";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
