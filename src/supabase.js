
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tdszwlyaqxpjgxzmkaqy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkc3p3bHlhcXhwamd4em1rYXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxMDU5NDUsImV4cCI6MTk4NzY4MTk0NX0.dtP2hHJrm7gsimXVK57IYP_CrvT8E8VRjj5HRFWmiZI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;