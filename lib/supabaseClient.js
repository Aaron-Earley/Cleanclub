// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lhkzotjfjjcgygwxlnst.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxoa3pvdGpmampjZ3lnd3hsbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTEzNTQsImV4cCI6MjA2MDM4NzM1NH0.qJ6FkMxwNX5uXaoXRb-omVYONXB8g78P1JTcbEAe8FY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
