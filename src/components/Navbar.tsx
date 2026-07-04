"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Saru Apps"
              width={500}
              height={115}
              className="h-9 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-gray-600 hover:text-gray-950 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.saruapps.com/login"
              className="text-[15px] font-medium text-gray-600 hover:text-gray-950 transition-colors duration-300 px-4 py-2"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.saruapps.com/register"
              className="text-[15px] font-medium text-white bg-gray-950 hover:bg-gray-800 px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-950/20"
            >
              Comenzar gratis
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white pt-[72px]"
          >
            <nav className="flex flex-col px-6 py-8 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-gray-900 py-3 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-8">
                <a
                  href="https://app.saruapps.com/login"
                  className="text-center text-base font-medium text-gray-600 py-3"
                >
                  Iniciar sesión
                </a>
                <a
                  href="https://app.saruapps.com/register"
                  className="text-center text-base font-medium text-white bg-gray-950 py-3.5 rounded-full"
                >
                  Comenzar gratis
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
