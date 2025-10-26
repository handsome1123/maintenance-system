import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Machines() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const machines = [
    { id: 1, name: "Machine A", status: "Active" },
    { id: 2, name: "Machine B", status: "Maintenance" },
    { id: 3, name: "Machine C", status: "Active" },
  ];

  const styles = {
    mainContent: {
      marginLeft: sidebarOpen ? "220px" : "0",
      padding: "30px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      transition: "margin-left 0.3s"
    },
    header: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#007BFF"
    },
    card: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      overflowX: "auto"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse"
    },
    th: {
      textAlign: "left",
      padding: "12px",
      backgroundColor: "#007BFF",
      color: "white",
      fontWeight: "bold"
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #ddd"
    },
    trHover: {
      backgroundColor: "#f1f1f1"
    },
    statusActive: {
      color: "green",
      fontWeight: "bold"
    },
    statusMaintenance: {
      color: "red",
      fontWeight: "bold"
    }
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <div style={styles.mainContent}>
        <h1 style={styles.header}>Machines</h1>
        <div style={styles.card}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((m) => (
                <tr key={m.id} style={styles.trHover}>
                  <td style={styles.td}>{m.id}</td>
                  <td style={styles.td}>{m.name}</td>
                  <td style={styles.td} style={m.status === "Active" ? styles.statusActive : styles.statusMaintenance}>
                    {m.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
