import React, { useState, useEffect } from "react";
import { Menu, Bell, Search, User, Settings, LogOut } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const notifications = [
    { id: 1, text: "Machine 12 maintenance due", time: "5 min ago", unread: true },
    { id: 2, text: "Production target achieved", time: "1 hour ago", unread: true },
    { id: 3, text: "Shift change at 6:00 PM", time: "2 hours ago", unread: false }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "70px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      zIndex: 1000
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    },
    menuButton: {
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "8px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s",
      color: "#374151"
    },
    brandSection: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    logo: {
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "20px",
      color: "white"
    },
    title: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#111827",
      display: windowWidth < 640 ? "none" : "block"
    },
    centerSection: {
      display: windowWidth < 768 ? "none" : "flex",
      flex: 1,
      maxWidth: "500px",
      margin: "0 40px"
    },
    searchBar: {
      position: "relative",
      width: "100%"
    },
    searchInput: {
      width: "100%",
      padding: "10px 16px 10px 44px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "#f9fafb",
      transition: "all 0.2s"
    },
    searchIcon: {
      position: "absolute",
      left: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af"
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    iconButton: {
      position: "relative",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s",
      color: "#374151"
    },
    badge: {
      position: "absolute",
      top: "6px",
      right: "6px",
      backgroundColor: "#ef4444",
      color: "white",
      fontSize: "10px",
      fontWeight: "600",
      borderRadius: "10px",
      padding: "2px 6px",
      minWidth: "18px",
      textAlign: "center"
    },
    userButton: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "6px 12px",
      borderRadius: "10px",
      transition: "background-color 0.2s"
    },
    avatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "600",
      fontSize: "15px"
    },
    userName: {
      display: windowWidth < 1024 ? "none" : "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },
    userNameText: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#111827"
    },
    userRole: {
      fontSize: "12px",
      color: "#6b7280"
    },
    dropdown: {
      position: "absolute",
      top: "60px",
      right: "24px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
      border: "1px solid #e5e7eb",
      minWidth: "280px",
      padding: "8px",
      zIndex: 1001
    },
    notificationDropdown: {
      position: "absolute",
      top: "60px",
      right: "80px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
      border: "1px solid #e5e7eb",
      width: "320px",
      maxHeight: "400px",
      overflowY: "auto",
      zIndex: 1001
    },
    dropdownHeader: {
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
      fontWeight: "600",
      fontSize: "14px",
      color: "#111827"
    },
    dropdownItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 16px",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "background-color 0.2s",
      fontSize: "14px",
      color: "#374151"
    },
    notificationItem: {
      padding: "12px 16px",
      borderBottom: "1px solid #f3f4f6",
      cursor: "pointer",
      transition: "background-color 0.2s"
    },
    notificationText: {
      fontSize: "14px",
      color: "#111827",
      marginBottom: "4px"
    },
    notificationTime: {
      fontSize: "12px",
      color: "#6b7280"
    },
    unreadDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      marginRight: "8px",
      display: "inline-block"
    }
  };

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.leftSection}>
          <button
            style={styles.menuButton}
            onClick={toggleSidebar}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <Menu size={24} />
          </button>
          
          <div style={styles.brandSection}>
            <div style={styles.logo}>SF</div>
            <div style={styles.title}>Smart Factory</div>
          </div>
        </div>

        <div style={styles.centerSection}>
          <div style={styles.searchBar}>
            <Search size={18} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search machines, reports, analytics..."
              style={styles.searchInput}
              onFocus={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "#3b82f6";
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = "#f9fafb";
                e.target.style.borderColor = "#e5e7eb";
              }}
            />
          </div>
        </div>

        <div style={styles.rightSection}>
          <button
            style={styles.iconButton}
            onClick={() => setShowNotifications(!showNotifications)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <Bell size={20} />
            {unreadCount > 0 && <span style={styles.badge}>{unreadCount}</span>}
          </button>

          <button
            style={styles.userButton}
            onClick={() => setShowUserMenu(!showUserMenu)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <div style={styles.avatar}>JD</div>
            <div style={styles.userName}>
              <span style={styles.userNameText}>John Doe</span>
              <span style={styles.userRole}>Manager</span>
            </div>
          </button>
        </div>
      </div>

      {showNotifications && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setShowNotifications(false)}
          />
          <div style={styles.notificationDropdown}>
            <div style={styles.dropdownHeader}>Notifications</div>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                style={styles.notificationItem}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <div style={styles.notificationText}>
                  {notif.unread && <span style={styles.unreadDot}></span>}
                  {notif.text}
                </div>
                <div style={styles.notificationTime}>{notif.time}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {showUserMenu && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setShowUserMenu(false)}
          />
          <div style={styles.dropdown}>
            <div
              style={styles.dropdownItem}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <User size={18} />
              <span>Profile</span>
            </div>
            <div
              style={styles.dropdownItem}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <Settings size={18} />
              <span>Settings</span>
            </div>
            <div
              style={{...styles.dropdownItem, color: "#ef4444", marginTop: "8px", borderTop: "1px solid #e5e7eb", paddingTop: "12px"}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fef2f2"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}