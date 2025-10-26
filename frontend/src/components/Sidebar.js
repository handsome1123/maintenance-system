import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  const styles = {
    sidebar: {
      width: "220px",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: isOpen ? 0 : "-240px",
      transition: "left 0.3s",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
      zIndex: 999
    },
    title: {
      marginBottom: "20px",
      fontSize: "20px",
      color: "#007BFF"
    },
    ul: {
      listStyle: "none",
      padding: 0
    },
    li: {
      marginBottom: "15px"
    },
    link: (isActive) => ({
      textDecoration: "none",
      color: isActive ? "white" : "#333",
      backgroundColor: isActive ? "#007BFF" : "transparent",
      padding: "10px 15px",
      borderRadius: "6px",
      display: "block",
      transition: "0.3s"
    })
  };

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Menu</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/dashboard" style={styles.link(location.pathname === "/dashboard")}>
            Dashboard
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/machines" style={styles.link(location.pathname === "/machines")}>
            Machines
          </Link>
        </li>
      </ul>
    </div>
  );
}
