import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) navigate("/dashboard");
    else alert("Enter email and password!");
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #007BFF, #00C6FF)",
    },
    card: {
      backgroundColor: "white",
      padding: "40px 30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      width: "350px",
      maxWidth: "90%",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#007BFF",
      fontSize: "24px",
    },
    input: {
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
    },
    button: {
      padding: "12px",
      backgroundColor: "#007BFF",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    signup: {
      textAlign: "center",
      marginTop: "15px",
      fontSize: "14px",
    },
    link: {
      color: "#007BFF",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Smart Factory Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.signup}>
          Don't have an account? <a href="#" style={styles.link}>Sign up</a>
        </p>
      </form>
    </div>
  );
}
