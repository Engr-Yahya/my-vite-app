import { Routes, Route, Link } from "react-router";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import "../App.css";
export function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#1a222c] text-white">
        {/* Header / Navbar */}
        <header className="w-full bg-[#1f2937] shadow-md">
          <div className="max-w-[900px] mx-auto h-[80px] flex items-center justify-between px-6">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              MyApp
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                to="/login"
                className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                Signup
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center mt-10 px-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
