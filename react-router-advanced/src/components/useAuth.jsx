import { useState } from "react";

// Simple authentication hook for demonstration
export default function useAuth() {
  const [user, setUser] = useState(null); // null means not logged in

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return { user, login, logout };
}