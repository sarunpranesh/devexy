"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#demo", label: "Demo" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,11,24,0.85)"
          : "rgba(5,11,24,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.3)"
          : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 no-underline font-syne font-extrabold text-[1.4rem] text-white">
            <div
              className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7, #22d3ee)",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            Devexy
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#94a3b8] no-underline text-sm transition-colors duration-200 hover:text-[#e2e8f0]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              href="#demo"
              className="px-5 py-2 rounded-full text-white text-sm font-medium no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(124,58,237,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(124,58,237,0.3)")
              }
            >
              Get a Free Demo
            </Link>
            <Link
              href="#portfolio"
              className="px-5 py-2 rounded-full text-[#e2e8f0] text-sm font-medium no-underline border border-[rgba(255,255,255,0.08)] transition-all duration-200 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)]"
            >
              View Our Work
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-[110]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 bg-[#e2e8f0] transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-[#e2e8f0] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-[#e2e8f0] transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(5,11,24,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#94a3b8] no-underline text-sm py-1 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <Link
                  href="#demo"
                  className="text-center px-5 py-2.5 rounded-full text-white text-sm font-medium no-underline"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get a Free Demo
                </Link>
                <Link
                  href="#portfolio"
                  className="text-center px-5 py-2.5 rounded-full text-[#e2e8f0] text-sm font-medium no-underline border border-[rgba(255,255,255,0.08)]"
                  onClick={() => setMenuOpen(false)}
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
