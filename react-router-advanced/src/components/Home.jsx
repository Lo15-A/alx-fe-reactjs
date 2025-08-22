// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
