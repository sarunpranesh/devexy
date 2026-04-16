"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TYPING_WORDS = ["Smart Automation", "Chatbot Solutions", "IT Consulting"];

function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplayed(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  const typedText = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 z-[1]"
    >
      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full text-[0.8rem] mb-6 px-4 py-1.5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a855f7",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"
                style={{ animation: "pulse_dot 2s infinite" }}
              />
              Trusted by 200+ businesses
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-syne font-extrabold leading-[1.15] mb-6 text-[#e2e8f0]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              We Build Websites &<br />
              <span className="grad-text">{typedText}</span>
              <span className="animate-pulse text-[#a855f7]">|</span> That
              <br />
              <span className="grad-text-pink">Grow</span> Your Business
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-[#94a3b8] text-base leading-[1.7] mb-8 max-w-[420px]"
            >
              Web development, chatbots, and IT solutions tailored for modern
              businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href="#demo"
                className="px-7 py-3 rounded-full text-white text-[0.95rem] font-medium no-underline transition-all duration-200 hover:-translate-y-0.5"
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
                className="px-7 py-3 rounded-full text-[#e2e8f0] text-[0.95rem] font-medium no-underline border border-[rgba(255,255,255,0.08)] transition-all duration-200 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)]"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right: Floating Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Spinning gear badge */}
            <div
              className="absolute -top-5 -right-5 w-14 h-14 rounded-full flex items-center justify-center z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(168,85,247,0.2))",
                border: "1px solid rgba(168,85,247,0.3)",
                animation: "spin_slow 10s linear infinite",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[26px] h-[26px] fill-[#a855f7]"
              >
                <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7.43-2.22c.04-.32.07-.65.07-.98s-.03-.67-.07-1l2.16-1.69a.5.5 0 0 0 .12-.64l-2.05-3.55a.5.5 0 0 0-.61-.22l-2.54 1.03a7.38 7.38 0 0 0-1.68-.97l-.38-2.71A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.38 2.71c-.61.25-1.17.59-1.68.97L4.9 5.07a.5.5 0 0 0-.61.22L2.24 8.84a.49.49 0 0 0 .12.64l2.15 1.69c-.04.33-.07.66-.07 1s.03.67.07 1L2.36 14.85a.5.5 0 0 0-.12.64l2.05 3.55c.12.22.37.31.61.22l2.54-1.03c.51.38 1.07.71 1.68.97l.38 2.71c.07.24.29.42.54.42h4c.25 0 .47-.18.53-.42l.38-2.71c.61-.26 1.17-.59 1.68-.97l2.54 1.03c.24.09.49 0 .61-.22l2.05-3.55a.49.49 0 0 0-.12-.64l-2.15-1.68z" />
              </svg>
            </div>

            {/* Floating card */}
            <div
              className="rounded-[20px] p-6 w-[320px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              {/* Window dots */}
              <div className="flex gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              </div>

              {/* Row 1 */}
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #0d9488)",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16v-5H7l5-9v5h4l-5 9z" />
                  </svg>
                </div>
                <div
                  className="flex-1 h-2.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #22d3ee)",
                      animation: "barFill 3s ease-in-out infinite alternate",
                    }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0d9488, #22d3ee)",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                  </svg>
                </div>
                <div
                  className="flex-1 h-2.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #0d9488, #22d3ee)",
                      animation: "barFill 3s ease-in-out infinite alternate",
                      animationDelay: "-1.5s",
                    }}
                  />
                </div>
              </div>

              {/* Input row */}
              <div
                className="rounded-[10px] px-4 py-2.5 flex items-center justify-between mt-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-[0.78rem] text-[#94a3b8]">
                  Type a message…
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-[#a855f7]"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
