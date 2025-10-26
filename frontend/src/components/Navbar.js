import React, { useState, useEffect } from "react";

export default function Navbar({ toggleSidebar }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "#007BFF",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      zIndex: 1000
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold"
    },
    user: {
      fontSize: "16px"
    },
    menuButton: {
      display: windowWidth < 768 ? "block" : "none",
      fontSize: "24px",
      cursor: "pointer",
      background: "none",
      border: "none",
      color: "white"
    }
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.title}>Smart Factory</div>
      <button style={styles.menuButton} onClick={toggleSidebar}>
        ☰
      </button>
      <div style={styles.user}>Admin</div>
    </div>
  );
}
