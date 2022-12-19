import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrarablgmlkmnehkbaxq.supabase.co";
export const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYXJhYmxnbWxrbW5laGtiYXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0MTY0NjIsImV4cCI6MTk4Njk5MjQ2Mn0.bVXgkCp8rpG7nBRB562G1XE65MV0QpUOCuA8ThujJZI"
);
