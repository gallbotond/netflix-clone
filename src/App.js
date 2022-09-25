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
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        element={
          <IsUserRedirect>
            <Home />
          </IsUserRedirect>
        }
      ></Route>
    </Routes>
  );
}

export default App;
