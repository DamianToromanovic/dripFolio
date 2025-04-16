import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
