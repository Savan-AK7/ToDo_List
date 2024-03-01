import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
      

    const isLogin = JSON.parse(localStorage.getItem("token"));
    if (!isLogin) {
      setIsLogin(isLogin);
    }
  }, []);
  // console.log("isLogin",isLogin);
  if (isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
}
