"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#a855f7]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    iconStyle: {
      background: "rgba(124,58,237,0.15)",
      border: "1px solid rgba(124,58,237,0.25)",
    },
    title: "Web Development",
    desc: "Business websites, landing pages, custom apps — crafted for speed, beauty, and conversions.",
    glowColor: "rgba(124,58,237,0.1)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#22d3ee]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
      </svg>
    ),
    iconStyle: {
      background: "rgba(13,148,136,0.15)",
      border: "1px solid rgba(13,148,136,0.25)",
    },
    title: "Chatbot Solutions",
    desc: "WhatsApp bots, website bots, automation — AI-powered assistants that work 24/7 for your business.",
    glowColor: "rgba(13,148,136,0.1)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#f472b6]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    iconStyle: {
      background: "rgba(236,72,153,0.12)",
      border: "1px solid rgba(236,72,153,0.2)",
    },
    title: "IT Consulting",
    desc: "Strategy, optimization, digital transformation — helping you make the right technology decisions.",
    glowColor: "rgba(168,85,247,0.1)",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative z-[1] py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-[0.78rem] px-3.5 py-1 rounded-full mb-4 uppercase tracking-[0.08em] font-medium"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a855f7",
            }}
          >
            Our Services
          </span>
          <h2
            className="font-syne font-extrabold text-[#e2e8f0] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Everything Your Business Needs
          </h2>
          <p className="text-[#94a3b8] max-w-[480px] leading-[1.7] mb-12">
            From building beautiful websites to deploying intelligent
            automation—we cover the full spectrum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-[20px] p-8 cursor-default overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              whileHover={{
                y: -4,
                background: "rgba(255,255,255,0.07)",
                borderColor: "rgba(124,58,237,0.3)",
              }}
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, ${s.glowColor}, transparent 60%)`,
                }}
              />

              <div
                className="relative w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5"
                style={s.iconStyle}
              >
                {s.icon}
              </div>
              <h3 className="relative font-syne font-bold text-[1.15rem] text-[#e2e8f0] mb-2.5">
                {s.title}
              </h3>
              <p className="relative text-[#94a3b8] text-[0.88rem] leading-[1.65]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
