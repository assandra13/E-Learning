"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full transition-all z-50 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600 cursor-pointer">AI Learning</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800">
          <Link href="#features" className="hover:text-blue-600 transition">
            Fitur
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">
            Testimoni
          </Link>
          <Link href="#pricing" className="hover:text-blue-600 transition">
            Harga
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Kontak
          </Link>
        </div>

        {/* Login & Sign Up */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Daftar</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div className="md:hidden bg-white border-t shadow-md absolute w-full py-4 px-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="flex flex-col space-y-4 text-gray-800">
            <Link href="#features" onClick={() => setIsOpen(false)}>
              Fitur
            </Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimoni
            </Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)}>
              Harga
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
          </div>

          {/* Login & Sign Up in Mobile */}
          <div className="mt-4 flex flex-col space-y-2">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Login</button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Daftar</button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
