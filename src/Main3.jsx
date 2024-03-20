






import React from "react";
import supabase from "./config";

export default function Main3() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const[dekh, setdekh] = React.useState(false)

  const[stop, setstop] = React.useState(true)

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function signup() {
    console.log("Signup clicked");

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      console.log("Signup successful");
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  }

  async function login() {
    console.log("Login clicked");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log("Login successful");

      setstop(false)

      setdekh(true)
    } catch (error) {
      console.error("Login error:", error.message);
    }
  }

  return (
    <div>
     {stop && <h1>Signup/Login fgfg Form in Main3</h1> }
    { stop && <input type="text" onChange={handleEmailChange} /> }
     { stop && <input type="text" onChange={handlePasswordChange} />}
     { stop && <button onClick={signup}>Signup</button>}
     {stop && <button onClick={login}>Login</button>}

     
       {dekh && <h1>dr ritesh malik</h1>}


    </div>
  );
}





























