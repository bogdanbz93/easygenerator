import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globals.css";
import PrivateRoutes from "./utils/PrivateRoutes";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Utils
import { AuthProvider } from "./utils/AuthContext";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
