import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
      <Route path={ROUTES.SIGN_UP} element={<h1>signup</h1>}></Route>
      <Route path={ROUTES.BROWSE} element={<h1>browse</h1>}></Route>
    </Routes>
  );
}

export default App;
