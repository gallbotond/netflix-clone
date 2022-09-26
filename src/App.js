import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import IsUserRedirect, { ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { SignIn, Home, SignUp, Browse } from "./pages";

function App() {
  const { user } = useAuthListener();

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <Home />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.SIGN_IN}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignIn />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.BROWSE}
        element={
          <ProtectedRoute user={user}>
            <Browse />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
