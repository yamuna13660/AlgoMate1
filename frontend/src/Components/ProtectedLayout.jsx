import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProtectedLayout() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
