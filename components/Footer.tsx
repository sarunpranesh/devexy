"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "About" },
  { href: "#demo", label: "Demo" },
  { href: "mailto:hello@devexy.com", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-[1] py-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#94a3b8",
        fontSize: "0.85rem",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 no-underline font-syne font-extrabold text-[1.1rem] text-white"
          >
            <div
              className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7, #22d3ee)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: 14, height: 14 }}
                className="fill-white"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            Devexy
          </Link>

          {/* Links */}
          <div className="flex gap-6 flex-wrap">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#94a3b8] no-underline transition-colors duration-200 hover:text-[#e2e8f0]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <span>© 2026 Devexy. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
