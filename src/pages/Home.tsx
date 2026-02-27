import { Routes, Route, Link } from "react-router";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import "../App.css";
export function Home() {
  return (
    <>
      <nav className="flex items-center h-[80px] max-w-[800px] mx-auto gap-4">
        <Link to="/" className="text-2xl">
          {" "}
          Home Page
        </Link>
        <Link to="./login" className="text-2xl">
          Login
        </Link>
        <Link to="./signup" className="text-2xl">
          {" "}
          Signup
        </Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
