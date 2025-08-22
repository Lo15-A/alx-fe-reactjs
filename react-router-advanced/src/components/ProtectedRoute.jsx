// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Set to true to simulate login
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
