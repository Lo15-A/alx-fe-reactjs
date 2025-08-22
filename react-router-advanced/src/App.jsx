// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dynamic Blog route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
