import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUsers from "../pages/AddUsers";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export default function index() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/add-user"
        element={
          <ProtectedRoute>
            <AddUsers />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
