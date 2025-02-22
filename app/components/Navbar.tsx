"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import ChatAI from "./chatAI/chatAI";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg border-b ${scrolled ? "bg-white/80 shadow-lg" : "bg-transparent"}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-wide">
          AI Learning
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-900 text-lg font-medium">
          <Link href="#features" className="hover:text-blue-700 transition-all duration-300">
            Fitur
          </Link>
          <Link href="#testimonials" className="hover:text-blue-700 transition-all duration-300">
            Testimoni
          </Link>
          <Link href="#pricing" className="hover:text-blue-700 transition-all duration-300">
            Harga
          </Link>
          <Link href="#contact" className="hover:text-blue-700 transition-all duration-300">
            Kontak
          </Link>
          <button onClick={() => setIsChatOpen(!isChatOpen)} className="hover:text-blue-700 transition-all duration-300 flex items-center gap-2">
            <MessageSquare size={20} /> Playground AI
          </button>
        </div>

        {/* Login & Sign Up */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="px-6 py-2 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md">Daftar</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div className="md:hidden bg-white/90 border-t shadow-md absolute w-full py-6 px-8" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="flex flex-col space-y-6 text-gray-900 text-lg font-medium">
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
          <div className="mt-6 flex flex-col space-y-3">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-3 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md">Login</button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md">Daftar</button>
            </Link>
          </div>
        </motion.div>
      )}

      {/* Tampilkan Chat AI jika isChatOpen true */}
      {isChatOpen && <ChatAI onClose={() => setIsChatOpen(false)} />}
    </motion.nav>
  );
};

export default Navbar;
