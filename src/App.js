import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { SignIn, Home, SignUp, Browse } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
      <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
      <Route path={ROUTES.BROWSE} element={<Browse />}></Route>
    </Routes>
  );
}

export default App;
