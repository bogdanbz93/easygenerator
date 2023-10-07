// AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

interface AuthContextType {
  loggedIn: boolean;
  loginDisplay: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const loginDisplay = () => {
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, loginDisplay, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth method must be used within an AuthProvider.");
  }
  return context;
};
