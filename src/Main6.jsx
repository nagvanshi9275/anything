


  import './index.css'
  import { useState, useEffect } from 'react'
  import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

  //const supabase = createClient('https://gdmntkkpdjcbqicyapxn.supabase.co', 
  
 // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbW50a2twZGpjYnFpY3lhcHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2ODgyMDQsImV4cCI6MjAyNjI2NDIwNH0.KjlW38TMJoqig7Cvlkevv9fASQa57rXh71BPFLKz_p0')

  import supabase from "./config.js"


  export default function Main6() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
      return (<div>Logged in!</div>)
    }
  }















