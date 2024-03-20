import React from "react";
import supabase from "./config";

export default function Main1() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSignIn() {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if (error) {
        console.error("Sign in error:", error.message);
      } else {
        console.log("User signed in:", user);
      }
    } catch (error) {
      console.error("Sign in error:", error.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={handleChangeEmail}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={handleChangePassword}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
