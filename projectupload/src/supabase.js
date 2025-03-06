import { createClient } from "@supabase/supabase-js";

// Supabase 프로젝트 설정 (supabase 콘솔에서 복사한 정보 입력)
const supabaseUrl = "https://xppvibfuepgjhbjzqakh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwcHZpYmZ1ZXBnamhianpxYWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjgwOTEsImV4cCI6MjA1Njc0NDA5MX0.Wb21u8iK2ibmyJap1_RTHVWOFbcD_hP8dHxJb4V7dqU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
