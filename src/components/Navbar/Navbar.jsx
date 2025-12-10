import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black border-b border-yellow-400/40 shadow-[0_0_20px_3px_rgba(255,255,0,0.25)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]">
          BeCoMiNg ThE BeSt
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-yellow-300 font-medium">
          <li className="cursor-pointer transition hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">
            Home
          </li>
          <li className="cursor-pointer transition hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">
            Tasks
          </li>
          <li className="cursor-pointer transition hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">
            About
          </li>
        </ul>

        {/* Add Task Button */}
        <button className="hidden md:block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition shadow-[0_0_12px_rgba(255,255,0,0.6)] hover:shadow-[0_0_20px_rgba(255,255,0,0.9)] hover:bg-yellow-500">
          Add Task
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer text-yellow-300 hover:text-yellow-400 transition drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
