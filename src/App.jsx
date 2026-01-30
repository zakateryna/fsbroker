import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import logoBrand from "./assets/logo.png";

function App() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] bg-gradient-animate">
      {/* Sfera animata */}
      <motion.div
        initial={{ x: "-20vw", scale: 0.8, rotate: 0 }}
        animate={{ x: "120vw", scale: 3, rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full sphere-glow opacity-40 blur-[2px] z-0"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 mb-10"
      >
        <img
          src={logoBrand}
          alt="Brand Logo"
          className="h-20 md:h-28 w-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
        />
      </motion.div>

      {/* Box messaggio */}
      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 80 }}
            className="z-20 w-full max-w-md mx-4"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Il nostro lancio è vicino.
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  Stiamo dando forma a una nuova piattaforma, basata su competenza e visione.
                </p>

                <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest">
                  FS Brothers &amp; Brokers — Coming soon
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="absolute bottom-8 text-slate-600 text-sm">
        &copy; 2026 FS BROTHERS &amp; BROKERS S.R.L. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
