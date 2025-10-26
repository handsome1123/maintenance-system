import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Cpu, 
  BarChart3, 
  Settings, 
  Users,
  FileText,
  Bell,
  HelpCircle,
  ChevronLeft
} from "lucide-react";

export default function Sidebar({ isOpen }) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: "machines", label: "Machines", icon: Cpu, path: "/machines" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
    { id: "reports", label: "Reports", icon: FileText, path: "/reports" },
    { id: "team", label: "Team", icon: Users, path: "/team" },
  ];

  const bottomMenuItems = [
    { id: "notifications", label: "Notifications", icon: Bell, path: "/notifications" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
    { id: "help", label: "Help & Support", icon: HelpCircle, path: "/help" },
  ];

  const styles = {
    sidebar: {
      position: "fixed",
      top: "70px",
      left: isOpen ? 0 : "-280px",
      width: "280px",
      height: "calc(100vh - 70px)",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #e5e7eb",
      transition: "left 0.3s ease",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      overflowY: "auto"
    },
    section: {
      padding: "20px 16px",
      flex: 1
    },
    sectionTitle: {
      fontSize: "11px",
      fontWeight: "600",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      padding: "0 12px",
      marginBottom: "8px"
    },
    menuItem: (isActive) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 16px",
      margin: "4px 0",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.2s",
      backgroundColor: isActive ? "#eff6ff" : "transparent",
      color: isActive ? "#2563eb" : "#374151",
      fontWeight: isActive ? "600" : "500",
      fontSize: "14px"
    }),
    iconWrapper: (isActive) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: isActive ? "#2563eb" : "#6b7280"
    }),
    bottomSection: {
      padding: "16px",
      borderTop: "1px solid #e5e7eb"
    },
    divider: {
      height: "1px",
      backgroundColor: "#e5e7eb",
      margin: "16px 0"
    },
    userCard: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "16px",
      backgroundColor: "#f9fafb",
      borderRadius: "12px",
      margin: "16px",
      cursor: "pointer",
      transition: "background-color 0.2s"
    },
    userAvatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "600",
      fontSize: "14px"
    },
    userInfo: {
      flex: 1
    },
    userName: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "2px"
    },
    userRole: {
      fontSize: "12px",
      color: "#6b7280"
    },
    badge: {
      backgroundColor: "#ef4444",
      color: "white",
      fontSize: "10px",
      fontWeight: "600",
      padding: "2px 6px",
      borderRadius: "10px",
      marginLeft: "auto"
    }
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Add navigation logic here
    // navigate(item.path);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Main Menu</div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <div
              key={item.id}
              style={styles.menuItem(isActive)}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div style={styles.iconWrapper(isActive)}>
                <Icon size={20} />
              </div>
              <span>{item.label}</span>
              {item.id === "notifications" && (
                <span style={styles.badge}>3</span>
              )}
            </div>
          );
        })}

        <div style={styles.divider}></div>

        <div style={styles.sectionTitle}>Other</div>
        {bottomMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <div
              key={item.id}
              style={styles.menuItem(isActive)}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div style={styles.iconWrapper(isActive)}>
                <Icon size={20} />
              </div>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      <div style={styles.bottomSection}>
        <div 
          style={styles.userCard}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
        >
          <div style={styles.userAvatar}>JD</div>
          <div style={styles.userInfo}>
            <div style={styles.userName}>John Doe</div>
            <div style={styles.userRole}>Manager</div>
          </div>
          <ChevronLeft size={16} style={{ color: "#9ca3af" }} />
        </div>
      </div>
    </div>
  );
}