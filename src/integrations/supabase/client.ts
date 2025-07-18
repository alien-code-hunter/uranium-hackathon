// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lejuqdwwwjuqpnoxqqag.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlanVxZHd3d2p1cXBub3hxcWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NTk2NTAsImV4cCI6MjA2ODEzNTY1MH0.RKdT8dgNxx6-Hw5qQga4GSmpx6lj-0a7sHkNXGGzpS8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});