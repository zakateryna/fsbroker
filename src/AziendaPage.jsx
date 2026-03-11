import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoBrand from "./assets/logo.png";

export default function AziendaPage() {
  const [showBox, setShowBox] = useState(false);
  const navigate = useNavigate();
  const xPos = useMotionValue(-20);

  const logoBrightness = useTransform(
    xPos,
    [-20, 20, 45, 50, 55, 80, 120],
    [1, 1, 1.6, 2.1, 1.6, 1.1, 1]
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#2B2F33] px-4 text-[#D9E1EA]">
      {/* glow orbitale coerente col brand */}
      <motion.div
        style={{ x: xPos.get() + "vw", left: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          x: ["-20vw", "120vw"],
          y: ["55vh", "-10vh", "55vh"],
          opacity: [0, 1, 1, 0],
        }}
        onUpdate={(latest) => xPos.set(parseFloat(latest.x))}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
        className="absolute h-20 w-20 rounded-full bg-[#D9E1EA] blur-[1px] shadow-[0_120px_240px_90px_rgba(94,151,198,0.30)] md:h-28 md:w-28"
      />

      {/* lieve aura di sfondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#4B79A8]/10 blur-3xl" />
        <div className="absolute right-[-8%] bottom-[-12%] h-80 w-80 rounded-full bg-[#5E97C6]/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ filter: useTransform(logoBrightness, (v) => `brightness(${v})`) }}
        className="relative z-10 mb-8 md:mb-12"
      >
        <img
          src={logoBrand}
          alt="FS Brothers & Brokers"
          className="h-20 w-auto brightness-110 md:h-32"
        />
      </motion.div>

      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 w-full max-w-xl"
          >
            <div className="rounded-[2.5rem] border border-white/10 bg-[#3A3F45]/95 p-8 text-center shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm md:rounded-[3rem] md:p-14">
              <span className="inline-block rounded-full bg-[#4B79A8]/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#5E97C6]">
                FS Brothers & Brokers
              </span>

              <h2 className="mb-4 mt-6 text-3xl font-black tracking-tight text-white md:mt-8 md:text-5xl">
                Il nostro lancio è vicino.
              </h2>

              <p className="mb-8 text-base leading-relaxed text-[#C9D4E2] md:text-lg">
                Costruiamo una nuova realtà basata su visione, competenza e innovazione.
              </p>

              <div className="border-t border-white/10 pt-6 md:pt-8">
                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => navigate("/azienda")}
                    className="rounded-full bg-[#5E97C6] px-6 py-3 text-sm font-black text-white transition hover:brightness-110"
                  >
                    Scopri l’azienda
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className="mx-auto block text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8C4D3] transition hover:text-white"
                  >
                    ← Torna a PolizzaSanitaria.it
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-8 w-full px-4 text-center text-[10px] uppercase tracking-[0.3em] text-[#9AA7B5] opacity-80">
        &copy; 2026 FS BROTHERS & BROKERS S.R.L.
      </footer>
    </div>
  );
}