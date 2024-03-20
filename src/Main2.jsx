



import React from "react";
import supabase from "./config";

export default function Main2() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      const { data, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });

      console.log("Login successful");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  }

  return (
    <div>
      <h1>Signup/Login Form</h1>
      <input type="text" onChange={handleEmailChange} />
      <input type="text" onChange={handlePasswordChange} />
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
    </div>
  );
}















