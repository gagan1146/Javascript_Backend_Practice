import React, { useState } from "react";
import "./Signup.css"; // ✅ Reuse same CSS

const Signup = () => {
  const [name, setName] = useState(""); // ✅ Added missing name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // ✅ Correct data
      });

      const data = await res.json();
      console.log("From frontend:", data);

      if (res.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server not responding");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2> {/* ✅ Correct heading */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit">Signup Here</button> {/* ✅ Fixed label */}
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Signup;