import { Routes, Route, Link } from "react-router";
import { Login } from "./Login";
import { Signup } from "./Signup";
export function Home() {
  return (
    <>
      <Link to="/"> Home Page &nbsp; &nbsp;</Link>
      <Link to="./login">Login &nbsp; &nbsp;</Link>
      <Link to="./signup"> Signup</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
