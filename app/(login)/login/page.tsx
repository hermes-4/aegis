"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      //             const payload = {
      //                 username,
      //                 password
      //             }
      // const res = axios.post("", payload)

      setLoading(true);
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      setLoading(false);
    } catch (error) {
      console.log(`This is the error: ${error}`);
      setLoading(false);
      setLoginMessage("Enter the correct credentials");
    }
  };
  return (
    <main>
      <div className="mX-auto mY-auto">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {loading ? <div className=""></div> : "Log In"}
          </button>
          {loginMessage && <p>{loginMessage}</p>}
        </form>
      </div>
    </main>
  );
}
