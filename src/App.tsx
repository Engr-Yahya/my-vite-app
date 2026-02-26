import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./components/ui/Home";
import { About } from "./components/ui/About";
import { Navbar } from "./components/ui/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
