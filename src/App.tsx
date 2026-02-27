import { useEffect, useState } from "react";
import supabase from "./supabase/client";
import type { Database } from "./supabase/database.types";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
