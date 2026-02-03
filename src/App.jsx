import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoBrand from "./assets/logo.png";

function AziendaPage() {
  const [showBox, setShowBox] = useState(false);
  const navigate = useNavigate();
  const xPos = useMotionValue(-20);

  const logoBrightness = useTransform(
    xPos,
    [-20, 20, 45, 50, 55, 80, 120],
    [1, 1, 4, 8, 4, 1, 1]
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-4">
      
      <motion.div
        style={{ x: xPos.get() + "vw", left: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          x: ["-20vw", "120vw"],
          y: ["55vh", "-10vh", "55vh"],
          opacity: [0, 1, 1, 0]
        }}
        onUpdate={(latest) => xPos.set(parseFloat(latest.x))}
        transition={{ duration: 7, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
        className="absolute w-20 h-20 md:w-28 md:h-28 bg-white rounded-full z-0 shadow-[0_120px_250px_90px_rgba(255,255,255,0.85)] blur-[1px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ filter: useTransform(logoBrightness, (v) => `brightness(${v})`) }}
        className="relative z-10 mb-8 md:mb-12"
      >
        <img src={logoBrand} alt="Logo" className="h-20 md:h-32 w-auto" />
      </motion.div>

      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 w-full max-w-lg"
          >
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] text-center">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-6 md:mt-8 mb-4 tracking-tight leading-tight">
                Il nostro lancio è vicino.
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-2">
                Costruiamo una nuova realtà basata su visione, competenza e innovazione.
              </p>

              <div className="pt-6 md:pt-8 border-t border-slate-100">
                <button
                  onClick={() => navigate('/')}
                  className="text-cyan-600 hover:text-cyan-700 text-[10px] md:text-[11px] font-bold transition-colors uppercase tracking-[0.2em] block mx-auto"
                >
                  ← Torna a PolizzaSanitaria.it
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER CORRETTO: Centrato */}
      <footer className="absolute bottom-8 w-full text-center px-4 text-slate-500 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 font-medium">
        &copy; 2026 FS BROTHERS & BROKERS S.R.L.
      </footer>
    </div>
  );
}

export default AziendaPage;