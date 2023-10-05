import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globals.css";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
