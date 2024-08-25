/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
}
export const useAuth = () => useContext(AuthContext);
