import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Units Produced",
        data: [120, 150, 130, 170, 160, 180, 200],
        borderColor: "blue",
        backgroundColor: "rgba(0,123,255,0.2)",
        tension: 0.4
      },
      {
        label: "Downtime (hrs)",
        data: [2, 1.5, 3, 2, 1, 0.5, 1],
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.2)",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Production Overview" }
    }
  };

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
      marginBottom: "20px"
    },
    summaryText: {
      fontSize: "18px",
      marginBottom: "8px"
    }
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <div style={styles.mainContent}>
        <h1 style={styles.header}>Dashboard</h1>

        <div style={styles.card}>
          <p style={styles.summaryText}><strong>Active Machines:</strong> 25</p>
          <p style={styles.summaryText}><strong>Downtime:</strong> 2 hrs</p>
          <p style={styles.summaryText}><strong>Output:</strong> 1200 units</p>
        </div>

        <div style={styles.card}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
