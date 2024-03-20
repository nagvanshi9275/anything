

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://gdmntkkpdjcbqicyapxn.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbW50a2twZGpjYnFpY3lhcHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2ODgyMDQsImV4cCI6MjAyNjI2NDIwNH0.KjlW38TMJoqig7Cvlkevv9fASQa57rXh71BPFLKz_p0'

 const supabase = createClient(supabaseUrl, supabaseKey)


 export default supabase;





