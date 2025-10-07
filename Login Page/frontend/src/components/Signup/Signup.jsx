import React from 'react'
import { useState } from 'react'

const Signup = () => {
    let res="";
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });
        {console.log("From frontend",res.json())}
    }
  return (
    <div>
      <form action="">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}>Signup Here</button>
      </form>
      
      {res && <p>{res}</p>}
    </div>
  )
}

export default Signup
