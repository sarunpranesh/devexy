"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Fast Delivery",
    desc: "Most projects delivered within 7–14 days without compromising quality.",
  },
  {
    title: "Custom-Built Solutions",
    desc: "No templates. Every project is tailored to your brand and goals.",
  },
  {
    title: "Ongoing Support",
    desc: "We don't disappear after launch — we're your long-term tech partner.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees. Clear scopes, clear timelines, clear costs.",
  },
];

const metrics = [
  { label: "Client Retention", pct: 96, color: "linear-gradient(90deg, #7c3aed, #a855f7)" },
  { label: "On-time Delivery", pct: 94, color: "linear-gradient(90deg, #0d9488, #22d3ee)" },
  { label: "Chatbot Accuracy", pct: 99, color: "linear-gradient(90deg, #a855f7, #ec4899)" },
  { label: "Customer Satisfaction", pct: 98, color: "linear-gradient(90deg, #7c3aed, #a855f7)" },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" ref={ref} className="relative z-[1] py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left: Feature list */}
          <div>
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
                Why Choose Us
              </span>
              <h2
                className="font-syne font-extrabold text-[#e2e8f0] mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Built for Results,
                <br />
                Not Just Looks
              </h2>
              <p className="text-[#94a3b8] max-w-[480px] leading-[1.7] mb-10">
                We combine technical excellence with business intuition to
                deliver measurable outcomes.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-7 h-7 rounded-[8px] flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.3)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-[#a855f7] fill-none"
                      strokeWidth={2.5}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-[0.95rem] text-[#e2e8f0] mb-1">
                      {f.title}
                    </h4>
                    <p className="text-[#94a3b8] text-[0.85rem] leading-[1.6]">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Progress card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="rounded-[20px] p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="font-syne font-bold text-[1.1rem] text-[#e2e8f0] mb-6">
                Performance Metrics
              </h3>
              <div className="flex flex-col gap-5">
                {metrics.map((m, i) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[0.8rem] text-[#94a3b8] mb-1.5">
                      <span>{m.label}</span>
                      <span>{m.pct}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: m.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${m.pct}%` } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + i * 0.15,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
