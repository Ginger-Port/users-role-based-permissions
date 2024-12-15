import React, { Children } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
    console.log({protectedRouteCheck :role});
  return role === "admin" ? children : <Navigate to={"/login"} replace/>
}
