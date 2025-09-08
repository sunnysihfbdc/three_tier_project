import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [token, setToken] = useState("");
  const [me, setMe] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    await axios.post("/api/auth/register", form);
    alert("Registered! Now login.");
  };

  const login = async () => {
    const res = await axios.post("/api/auth/login", {
      email: form.email,
      password: form.password,
    });
    setToken(res.data.token);
    alert("Login successful!");
  };

  const getMe = async () => {
    const res = await axios.get("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMe(res.data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>3-Tier App Demo</h2>

      <div>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button onClick={register}>REGISTER HERE</button>
      <button onClick={login}>LOGIN</button>
      <button onClick={getMe} disabled={!token}>
        Get My Info
      </button>

      {me && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Info</h3>
          <p>ID: {me.id}</p>
          <p>Username: {me.username}</p>
          <p>Email: {me.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

