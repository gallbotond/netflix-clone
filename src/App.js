import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signin" element={<h1>signin</h1>}></Route>
      <Route path="/signup" element={<h1>signup</h1>}></Route>
      <Route path="/browse" element={<h1>browse</h1>}></Route>
    </Routes>
  );
}

export default App;
