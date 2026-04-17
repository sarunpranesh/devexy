"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import smilecareImg from "../smilecare_hero.png";

const projects = [
  {
    tag: "Healthcare",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.15)",
    title: "SmileCare Dental",
    desc: "A modern, fully-localized dental clinic application featuring an interactive appointment booking system.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    stackColors: ["rgba(96,165,250,0.2)", "rgba(52,211,153,0.2)", "rgba(168,85,247,0.15)"],
    accentColor: "rgba(16,185,129,0.3)",
    gradientBg: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08))",
    href: "https://smilecare-ashy.vercel.app/",
    image: smilecareImg,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#10b981]">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    tag: "E-commerce",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.15)",
    title: "ShopSmart Platform",
    desc: "A full-stack e-commerce solution with AI-powered product recommendations, real-time inventory, and a seamless checkout experience.",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
    stackColors: ["rgba(124,58,237,0.2)", "rgba(13,148,136,0.2)", "rgba(34,211,238,0.15)"],
    accentColor: "rgba(124,58,237,0.3)",
    gradientBg: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#a855f7]">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    tag: "Chatbot",
    tagColor: "#22d3ee",
    tagBg: "rgba(34,211,238,0.15)",
    title: "WhatsApp Sales Bot",
    desc: "An AI-powered WhatsApp automation bot that qualifies leads, answers FAQs, and books appointments — reducing response time by 90%.",
    stack: ["Node.js", "OpenAI", "WhatsApp API"],
    stackColors: ["rgba(34,211,238,0.2)", "rgba(168,85,247,0.2)", "rgba(13,148,136,0.15)"],
    accentColor: "rgba(13,148,136,0.3)",
    gradientBg: "linear-gradient(135deg, rgba(13,148,136,0.15), rgba(34,211,238,0.08))",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#22d3ee]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="relative z-[1] py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="inline-block text-[0.78rem] px-3.5 py-1 rounded-full mb-4 uppercase tracking-[0.08em] font-medium"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a855f7",
            }}
          >
            Our Portfolio
          </span>
          <h2
            className="font-syne font-extrabold text-[#e2e8f0] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Work That Speaks for Itself
          </h2>
          <p className="text-[#94a3b8] max-w-[480px] leading-[1.7]">
            A selection of projects where we delivered measurable results through
            design and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.href}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative rounded-[20px] overflow-hidden transition-all duration-300 ${p.href ? 'cursor-pointer' : 'cursor-default'}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "block"
              }}
              whileHover={{ y: -4, borderColor: p.accentColor }}
            >
              {/* Top visual area */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: p.gradientBg }}
              >
                {p.image ? (
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={p.image} 
                      alt={p.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top" 
                      placeholder="blur"
                    />
                    {/* Dark overlay for better blend with the site theme */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ) : (
                  <>
                    <div
                      className="w-16 h-16 rounded-[18px] flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {p.icon}
                    </div>
                    {/* Decorative sparkles */}
                    <div
                      className="absolute top-3 right-4 w-1.5 h-1.5 rounded-full"
                      style={{ background: p.tagColor, opacity: 0.6 }}
                    />
                    <div
                      className="absolute bottom-4 left-6 w-2 h-2 rounded-full"
                      style={{ background: p.tagColor, opacity: 0.4 }}
                    />
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="inline-block text-[0.72rem] px-2.5 py-1 rounded-full mb-3 font-medium"
                  style={{ background: p.tagBg, color: p.tagColor }}
                >
                  {p.tag}
                </span>
                <h3 className="font-syne font-bold text-[1.1rem] text-[#e2e8f0] mb-2 flex items-center justify-between">
                  {p.title}
                  {p.href && (
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </h3>
                <p className="text-[#94a3b8] text-[0.85rem] leading-[1.65] mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech, j) => (
                    <span
                      key={tech}
                      className="text-[0.75rem] px-2.5 py-0.5 rounded-full text-[#94a3b8]"
                      style={{ background: p.stackColors[j] }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
