import React, { useState, useEffect } from "react";
import { 
  Settings, 
  Power, 
  AlertTriangle, 
  CheckCircle, 
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  Clock,
  Zap
} from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Machines() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const machines = [
    { 
      id: 1, 
      name: "CNC Machine A", 
      status: "Active",
      type: "CNC Mill",
      efficiency: 94,
      runtime: "156 hrs",
      output: "1,234 units",
      lastMaintenance: "2 days ago"
    },
    { 
      id: 2, 
      name: "Lathe Machine B", 
      status: "Maintenance",
      type: "Lathe",
      efficiency: 0,
      runtime: "0 hrs",
      output: "0 units",
      lastMaintenance: "Today"
    },
    { 
      id: 3, 
      name: "Press Machine C", 
      status: "Active",
      type: "Hydraulic Press",
      efficiency: 89,
      runtime: "142 hrs",
      output: "987 units",
      lastMaintenance: "1 week ago"
    },
    { 
      id: 4, 
      name: "Welding Robot D", 
      status: "Active",
      type: "Robotic Welder",
      efficiency: 97,
      runtime: "168 hrs",
      output: "2,145 units",
      lastMaintenance: "3 days ago"
    },
    { 
      id: 5, 
      name: "Grinder E", 
      status: "Idle",
      type: "Surface Grinder",
      efficiency: 0,
      runtime: "0 hrs",
      output: "0 units",
      lastMaintenance: "5 days ago"
    },
    { 
      id: 6, 
      name: "3D Printer F", 
      status: "Active",
      type: "Industrial 3D Printer",
      efficiency: 91,
      runtime: "89 hrs",
      output: "567 units",
      lastMaintenance: "1 day ago"
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredMachines = machines.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         m.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || m.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return { bg: "#dcfce7", text: "#166534", icon: CheckCircle };
      case "Maintenance": return { bg: "#fee2e2", text: "#991b1b", icon: AlertTriangle };
      case "Idle": return { bg: "#fef3c7", text: "#92400e", icon: Power };
      default: return { bg: "#f3f4f6", text: "#374151", icon: Power };
    }
  };

  const styles = {
    mainContent: {
      marginLeft: sidebarOpen && !isMobile ? "280px" : "0",
      marginTop: "70px",
      padding: isMobile ? "20px" : "30px",
      backgroundColor: "#f9fafb",
      minHeight: "calc(100vh - 70px)",
      transition: "margin-left 0.3s",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      marginBottom: "30px",
      flexDirection: isMobile ? "column" : "row",
      gap: "15px"
    },
    title: {
      fontSize: isMobile ? "24px" : "32px",
      color: "#111827",
      fontWeight: "700",
      margin: 0
    },
    subtitle: {
      fontSize: "16px",
      color: "#6b7280",
      marginTop: "4px"
    },
    controls: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      width: isMobile ? "100%" : "auto"
    },
    searchBar: {
      position: "relative",
      flex: isMobile ? "1 1 100%" : "0 0 300px"
    },
    searchInput: {
      width: "100%",
      padding: "10px 16px 10px 44px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "white"
    },
    searchIcon: {
      position: "absolute",
      left: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af"
    },
    filterButton: {
      padding: "10px 16px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      backgroundColor: "white",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.2s",
      color: "#374151"
    },
    statsBar: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: "16px",
      marginBottom: "30px"
    },
    statCard: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb"
    },
    statLabel: {
      fontSize: "13px",
      color: "#6b7280",
      marginBottom: "8px",
      fontWeight: "500"
    },
    statValue: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#111827"
    },
    viewToggle: {
      display: "flex",
      gap: "4px",
      backgroundColor: "#f3f4f6",
      padding: "4px",
      borderRadius: "8px"
    },
    viewButton: (isActive) => ({
      padding: "6px 12px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      backgroundColor: isActive ? "white" : "transparent",
      color: isActive ? "#111827" : "#6b7280",
      transition: "all 0.2s"
    }),
    gridContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "20px"
    },
    machineCard: {
      backgroundColor: "white",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      padding: "24px",
      transition: "all 0.3s",
      cursor: "pointer"
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "16px"
    },
    machineName: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "4px"
    },
    machineType: {
      fontSize: "14px",
      color: "#6b7280"
    },
    statusBadge: (status) => {
      const colors = getStatusColor(status);
      return {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "600",
        backgroundColor: colors.bg,
        color: colors.text
      };
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      marginTop: "16px"
    },
    metric: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    },
    metricLabel: {
      fontSize: "12px",
      color: "#6b7280",
      display: "flex",
      alignItems: "center",
      gap: "4px"
    },
    metricValue: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#111827"
    },
    progressBar: {
      width: "100%",
      height: "6px",
      backgroundColor: "#f3f4f6",
      borderRadius: "3px",
      overflow: "hidden",
      marginTop: "8px"
    },
    progressFill: (value) => ({
      width: `${value}%`,
      height: "100%",
      backgroundColor: value > 90 ? "#10b981" : value > 70 ? "#3b82f6" : "#f59e0b",
      transition: "width 0.3s"
    }),
    tableContainer: {
      backgroundColor: "white",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      overflow: "hidden"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse"
    },
    th: {
      textAlign: "left",
      padding: "16px",
      backgroundColor: "#f9fafb",
      color: "#374151",
      fontSize: "13px",
      fontWeight: "600",
      borderBottom: "1px solid #e5e7eb"
    },
    td: {
      padding: "16px",
      borderBottom: "1px solid #f3f4f6",
      fontSize: "14px",
      color: "#111827"
    },
    actionButton: {
      padding: "6px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: "#6b7280",
      transition: "all 0.2s"
    }
  };

  const StatusIcon = ({ status }) => {
    const { icon: Icon, text } = getStatusColor(status);
    return <Icon size={16} color={text} />;
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Machine Management</h1>
            <p style={styles.subtitle}>{filteredMachines.length} machines total</p>
          </div>
          <div style={styles.controls}>
            <div style={styles.searchBar}>
              <Search size={18} style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search machines..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              style={{...styles.filterButton, cursor: "pointer"}}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Idle">Idle</option>
            </select>
            {!isMobile && (
              <div style={styles.viewToggle}>
                <button 
                  style={styles.viewButton(viewMode === "grid")}
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </button>
                <button 
                  style={styles.viewButton(viewMode === "list")}
                  onClick={() => setViewMode("list")}
                >
                  List
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={styles.statsBar}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Active Machines</div>
            <div style={styles.statValue}>{machines.filter(m => m.status === "Active").length}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>In Maintenance</div>
            <div style={styles.statValue}>{machines.filter(m => m.status === "Maintenance").length}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Avg Efficiency</div>
            <div style={styles.statValue}>
              {Math.round(machines.reduce((acc, m) => acc + m.efficiency, 0) / machines.length)}%
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Total Output</div>
            <div style={styles.statValue}>
              {machines.reduce((acc, m) => acc + parseInt(m.output.replace(/,/g, '')), 0).toLocaleString()}
            </div>
          </div>
        </div>

        {viewMode === "grid" || isMobile ? (
          <div style={styles.gridContainer}>
            {filteredMachines.map((machine) => {
              const statusColors = getStatusColor(machine.status);
              return (
                <div
                  key={machine.id}
                  style={styles.machineCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={styles.cardHeader}>
                    <div>
                      <div style={styles.machineName}>{machine.name}</div>
                      <div style={styles.machineType}>{machine.type}</div>
                    </div>
                    <button style={styles.actionButton}>
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div style={styles.statusBadge(machine.status)}>
                    <StatusIcon status={machine.status} />
                    {machine.status}
                  </div>

                  {machine.status === "Active" && (
                    <>
                      <div style={{ marginTop: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                          <span style={{ fontSize: "13px", color: "#6b7280" }}>Efficiency</span>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{machine.efficiency}%</span>
                        </div>
                        <div style={styles.progressBar}>
                          <div style={styles.progressFill(machine.efficiency)}></div>
                        </div>
                      </div>
                    </>
                  )}

                  <div style={styles.metricsGrid}>
                    <div style={styles.metric}>
                      <div style={styles.metricLabel}>
                        <Clock size={14} />
                        Runtime
                      </div>
                      <div style={styles.metricValue}>{machine.runtime}</div>
                    </div>
                    <div style={styles.metric}>
                      <div style={styles.metricLabel}>
                        <Zap size={14} />
                        Output
                      </div>
                      <div style={styles.metricValue}>{machine.output}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    Last maintenance: {machine.lastMaintenance}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Machine</th>
                  <th style={styles.th}>Type</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Efficiency</th>
                  <th style={styles.th}>Runtime</th>
                  <th style={styles.th}>Output</th>
                  <th style={styles.th}>Last Maintenance</th>
                  <th style={styles.th}></th>
                </tr>
              </thead>
              <tbody>
                {filteredMachines.map((machine) => (
                  <tr 
                    key={machine.id}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <td style={styles.td}>
                      <div style={{ fontWeight: "600" }}>{machine.name}</div>
                    </td>
                    <td style={styles.td}>{machine.type}</td>
                    <td style={styles.td}>
                      <span style={styles.statusBadge(machine.status)}>
                        <StatusIcon status={machine.status} />
                        {machine.status}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontWeight: "600" }}>{machine.efficiency}%</span>
                        {machine.status === "Active" && (
                          <div style={{ width: "60px", height: "4px", backgroundColor: "#f3f4f6", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ width: `${machine.efficiency}%`, height: "100%", backgroundColor: machine.efficiency > 90 ? "#10b981" : "#3b82f6" }}></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={styles.td}>{machine.runtime}</td>
                    <td style={styles.td}>{machine.output}</td>
                    <td style={styles.td}>{machine.lastMaintenance}</td>
                    <td style={styles.td}>
                      <button 
                        style={styles.actionButton}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}