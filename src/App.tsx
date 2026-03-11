// import { useEffect, useState } from "react";
// import supabase from "./supabase/client";
// import type { Database } from "./supabase/database.types";
// import { Home } from "./pages/Home";
// import { useState } from "react";
import "./App.css";
import { RenderBooks } from "./components/RenderBooks";
// import supabase from "./supabase/client";
// import { Button } from "./components/ui/Button";
// import { Search } from "lucide-react";

function App() {
  return (
    <>
      {/* <Home /> */}
      <RenderBooks />

      {/* <button
        className="text-white m-10 bg-blue-400 hover:bg-blue-500 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-bold cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Count : &nbsp;{count}
      </button> */}
    </>
  );
}
export default App;
