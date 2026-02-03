import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import "./index.css";
import logoBrand from "./assets/logo.png";

function App() {
  const [showBox, setShowBox] = useState(false);
  
  // Tracciamo la posizione X per calcolare la luminosità del logo
  const xPos = useMotionValue(-20);

  // Luminosità dinamica: picco quando la sfera è al centro (50vw)
  const logoBrightness = useTransform(
    xPos, 
    [-20, 30, 50, 70, 120], 
    [1, 1, 8, 1, 1] // Aumentato a 8 per un effetto ancora più forte
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* Sfera con traiettoria ad arco */}
      <motion.div
        style={{ x: xPos.get() + "vw", left: 0 }}
        initial={{ opacity: 0 }}
        animate={{ 
          x: ["-20vw", "120vw"],
          // Movimento ad arco: parte basso, sale al centro, scende alla fine
          y: ["50vh", "-5vh", "50vh"], 
          opacity: [0, 1, 1, 0] 
        }}
        onUpdate={(latest) => {
          // Aggiorna xPos per sincronizzare la luce del logo
          const numericX = parseFloat(latest.x);
          xPos.set(numericX);
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut", // Rende l'arco più fluido
          times: [0, 0.5, 1]
        }}
        className="absolute w-32 h-32 bg-white rounded-full z-0 
                   shadow-[0_100px_200px_80px_rgba(255,255,255,0.9)] blur-[1px]"
      />

      {/* Logo che reagisce alla sfera */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ filter: useTransform(logoBrightness, (v) => `brightness(${v})`) }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mb-12 flex items-center justify-center"
      >
        <img
          src={logoBrand}
          alt="Brand Logo"
          className="h-24 md:h-32 w-auto transition-none"
        />
      </motion.div>

      {/* Box Messaggio Bianco */}
      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 80 }}
            className="z-20 w-full max-w-md mx-4"
          >
            <div className="bg-[#FFFFFF] p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Il nostro lancio è vicino.
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Stiamo dando forma a una nuova piattaforma, basata su competenza e visione.
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    FS Brothers &amp; Brokers — Coming soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-8 text-slate-500 text-xs tracking-widest">
        &copy; 2026 FS BROTHERS &amp; BROKERS S.R.L.
      </footer>
    </div>
  );
}

export default App;