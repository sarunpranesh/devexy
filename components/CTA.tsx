"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo" ref={ref} className="relative z-[1] py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] px-8 py-16 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(13,148,136,0.1))",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.2), transparent 70%)",
              opacity: 0.5,
            }}
          />

          <h2
            className="relative font-syne font-extrabold text-[#e2e8f0] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            Ready to Grow Your Business?
          </h2>
          <p className="relative text-[#94a3b8] max-w-[500px] mx-auto leading-[1.7] mb-8">
            Book a free strategy call and let&apos;s map out exactly how we can
            help you scale with smart technology.
          </p>

          <div className="relative flex gap-4 justify-center flex-wrap">
            {/* Primary: WhatsApp */}
            <Link
              href="https://wa.me/+919488113232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-base font-medium no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(124,58,237,0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(124,58,237,0.4)")
              }
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get a Free Demo →
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full text-[#e2e8f0] text-base font-medium no-underline border transition-all duration-200 hover:bg-[rgba(255,255,255,0.05)]"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
