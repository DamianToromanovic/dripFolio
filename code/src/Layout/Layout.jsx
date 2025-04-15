import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
