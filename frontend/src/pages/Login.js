import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Factory } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/dashboard");
      }, 1000);
    } else {
      alert("Please enter email and password!");
    }
  };

  const styles = {
    page: {
      display: "flex",
      minHeight: "100vh",
      background: "#f9fafb",
    },
    leftSection: {
      flex: 1,
      background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px",
      color: "white",
      position: "relative",
      overflow: "hidden"
    },
    leftContent: {
      maxWidth: "500px",
      zIndex: 1
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "40px"
    },
    logo: {
      width: "50px",
      height: "50px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "24px"
    },
    brandName: {
      fontSize: "28px",
      fontWeight: "700"
    },
    heroTitle: {
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "20px",
      lineHeight: "1.2"
    },
    heroSubtitle: {
      fontSize: "18px",
      opacity: 0.9,
      lineHeight: "1.6",
      marginBottom: "40px"
    },
    features: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    },
    feature: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "16px",
      opacity: 0.9
    },
    featureIcon: {
      width: "24px",
      height: "24px",
      borderRadius: "6px",
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    pattern: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0.05,
      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    },
    rightSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    },
    card: {
      backgroundColor: "white",
      padding: "48px",
      borderRadius: "20px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      border: "1px solid #e5e7eb",
      width: "100%",
      maxWidth: "450px"
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#111827",
      marginBottom: "8px"
    },
    subtitle: {
      fontSize: "16px",
      color: "#6b7280",
      marginBottom: "32px"
    },
    formGroup: {
      marginBottom: "24px"
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "8px"
    },
    inputWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    inputIcon: {
      position: "absolute",
      left: "16px",
      color: "#9ca3af"
    },
    input: {
      width: "100%",
      padding: "12px 16px 12px 48px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.2s",
      backgroundColor: "#f9fafb"
    },
    eyeIcon: {
      position: "absolute",
      right: "16px",
      cursor: "pointer",
      color: "#9ca3af"
    },
    rememberRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px"
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      color: "#374151",
      cursor: "pointer"
    },
    checkbox: {
      width: "18px",
      height: "18px",
      cursor: "pointer"
    },
    forgotLink: {
      fontSize: "14px",
      color: "#3b82f6",
      textDecoration: "none",
      fontWeight: "500"
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#3b82f6",
      color: "white",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px"
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "32px 0",
      color: "#9ca3af",
      fontSize: "14px"
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#e5e7eb"
    },
    dividerText: {
      padding: "0 16px"
    },
    socialButtons: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "32px"
    },
    socialButton: {
      padding: "12px",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      backgroundColor: "white",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px"
    },
    signup: {
      textAlign: "center",
      fontSize: "14px",
      color: "#6b7280"
    },
    link: {
      color: "#3b82f6",
      textDecoration: "none",
      fontWeight: "600"
    },
    spinner: {
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid white",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      animation: "spin 0.8s linear infinite"
    }
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            .left-section { display: none !important; }
          }
        `}
      </style>
      
      <div style={styles.leftSection} className="left-section">
        <div style={styles.pattern}></div>
        <div style={styles.leftContent}>
          <div style={styles.logoContainer}>
            <div style={styles.logo}>
              <Factory size={28} />
            </div>
            <span style={styles.brandName}>Smart Factory</span>
          </div>
          
          <h1 style={styles.heroTitle}>
            Welcome to the Future of Manufacturing
          </h1>
          <p style={styles.heroSubtitle}>
            Manage your production lines, monitor machine health, and optimize efficiency in real-time.
          </p>
          
          <div style={styles.features}>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <span>Real-time machine monitoring</span>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <span>Advanced analytics & insights</span>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <span>Predictive maintenance alerts</span>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <span>Seamless team collaboration</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.rightSection}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Sign In</h2>
          <p style={styles.subtitle}>Enter your credentials to access your account</p>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <Mail size={20} style={styles.inputIcon} />
              <input
                type="email"
                placeholder="john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.backgroundColor = "white";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.backgroundColor = "#f9fafb";
                }}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={20} style={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.backgroundColor = "white";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.backgroundColor = "#f9fafb";
                }}
              />
              <div style={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div style={styles.rememberRow}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={styles.checkbox}
              />
              Remember me
            </label>
            <a href="#" style={styles.forgotLink}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3b82f6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {isLoading ? (
              <>
                <div style={styles.spinner}></div>
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight size={20} />
              </>
            )}
          </button>

          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>Or continue with</span>
            <div style={styles.dividerLine}></div>
          </div>

          <div style={styles.socialButtons}>
            <button
              type="button"
              style={styles.socialButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              style={styles.socialButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          <p style={styles.signup}>
            Don't have an account? <a href="#" style={styles.link}>Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
}