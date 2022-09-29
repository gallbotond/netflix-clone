import React from "react";
import { Navigate } from "react-router-dom";

export default function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...restProps
}) {
  if (!user) {
    return children;
  } else if (user) {
    return <Navigate {...restProps} to={{ pathname: loggedInPath }} />;
  }
  return null;
}

export function ProtectedRoute({ user, children, ...restProps }) {
  if (user) {
    return children;
  } else if (!user) {
    return;
    <Navigate {...restProps} to={{ pathname: "signin" }} />;
  }
  return null;
}
