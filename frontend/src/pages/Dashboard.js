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
  LineElement,
  Filler
} from "chart.js";
import { Activity, TrendingUp, AlertCircle, Package } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [timeRange, setTimeRange] = useState("week");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Units Produced",
        data: [120, 150, 130, 170, 160, 180, 200],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      },
      {
        label: "Downtime (hrs)",
        data: [2, 1.5, 3, 2, 1, 0.5, 1],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 13 }
        }
      },
      title: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, changeType, color }) => (
    <div style={{
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb",
      transition: "all 0.3s",
      cursor: "pointer"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "8px", fontWeight: "500" }}>{title}</p>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>{value}</h2>
          {change && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{
                color: changeType === "positive" ? "#10b981" : "#ef4444",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {changeType === "positive" ? "↑" : "↓"} {change}
              </span>
              <span style={{ color: "#6b7280", fontSize: "13px" }}>vs last week</span>
            </div>
          )}
        </div>
        <div style={{
          backgroundColor: color,
          padding: "12px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Icon size={24} color="white" />
        </div>
      </div>
    </div>
  );

  const styles = {
    mainContent: {
      marginLeft: sidebarOpen ? "280px" : "0",
      marginTop: "70px",
      padding: "30px",
      backgroundColor: "#f9fafb",
      minHeight: "calc(100vh - 70px)",
      transition: "margin-left 0.3s"
    },
    header: {
      fontSize: "32px",
      marginBottom: "8px",
      color: "#111827",
      fontWeight: "700"
    },
    subtitle: {
      fontSize: "16px",
      color: "#6b7280",
      marginBottom: "30px"
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "30px"
    },
    chartCard: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb"
    },
    chartHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    },
    chartTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#111827",
      margin: 0
    },
    filterButtons: {
      display: "flex",
      gap: "8px",
      backgroundColor: "#f3f4f6",
      padding: "4px",
      borderRadius: "8px"
    },
    filterButton: {
      padding: "6px 16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.2s"
    },
    chartContainer: {
      height: "350px",
      position: "relative"
    }
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <div style={styles.mainContent}>
        <h1 style={styles.header}>Production Dashboard</h1>
        <p style={styles.subtitle}>Monitor your production metrics in real-time</p>

        <div style={styles.statsGrid}>
          <StatCard
            icon={Activity}
            title="Active Machines"
            value="25"
            change="12%"
            changeType="positive"
            color="#3b82f6"
          />
          <StatCard
            icon={AlertCircle}
            title="Total Downtime"
            value="2 hrs"
            change="8%"
            changeType="positive"
            color="#ef4444"
          />
          <StatCard
            icon={Package}
            title="Units Produced"
            value="1,200"
            change="15%"
            changeType="positive"
            color="#10b981"
          />
          <StatCard
            icon={TrendingUp}
            title="Efficiency"
            value="94.2%"
            change="3%"
            changeType="positive"
            color="#8b5cf6"
          />
        </div>

        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Production Overview</h3>
            <div style={styles.filterButtons}>
              {["day", "week", "month"].map((range) => (
                <button
                  key={range}
                  style={{
                    ...styles.filterButton,
                    backgroundColor: timeRange === range ? "#3b82f6" : "transparent",
                    color: timeRange === range ? "white" : "#6b7280"
                  }}
                  onClick={() => setTimeRange(range)}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div style={styles.chartContainer}>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}