"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", moveDot);
    return () => document.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <>
      {/* Background gradient scene */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(124,58,237,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(13,148,136,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 80%, rgba(34,211,238,0.08) 0%, transparent 50%), #050b18",
        }}
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb 1 */}
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 500,
          height: 500,
          background: "rgba(124,58,237,0.15)",
          top: -100,
          left: -100,
          filter: "blur(80px)",
          animation: "drift 12s ease-in-out infinite alternate",
          animationDelay: "0s",
        }}
      />

      {/* Orb 2 */}
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 400,
          height: 400,
          background: "rgba(13,148,136,0.12)",
          top: "10%",
          right: -80,
          filter: "blur(80px)",
          animation: "drift 12s ease-in-out infinite alternate",
          animationDelay: "-4s",
        }}
      />

      {/* Orb 3 */}
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 300,
          height: 300,
          background: "rgba(168,85,247,0.1)",
          bottom: "20%",
          left: "30%",
          filter: "blur(80px)",
          animation: "drift 12s ease-in-out infinite alternate",
          animationDelay: "-8s",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: 5,
          height: 5,
          background: "rgba(168,85,247,0.6)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "all 0.08s",
        }}
      />
    </>
  );
}
