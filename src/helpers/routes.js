import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function IsUserRedirect ({
  user,
  loggedInPath,
  children,
  ...restProps
}) {
  if (!user) {
    return children;
  } else if (user) {
    return (
        <Navigate to={{ pathname: loggedInPath }} />
    );
  }
  return null;
}

export function ProtectedRoute({ user, children, ...restProps }) {
  if (user) {
    return children;
  } else if (!user) {
    return ({ location }) => {
      <Route {...restProps}>
        <Navigate to={{ pathname: "signin", state: { from: location } }} />
      </Route>;
    };
  }
  return null;
}
