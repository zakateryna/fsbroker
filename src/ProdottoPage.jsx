import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProdottoPage() {
  const [showBox, setShowBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
      {/* Bagliore Ciano */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 w-full max-w-lg mx-4"
          >
            <div className="bg-white/95 backdrop-blur-sm p-10 md:p-14 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] text-center">
              <span className="bg-cyan-50 text-cyan-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                Innovazione Digitale
              </span>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-8 mb-4 tracking-tight">
                polizzasanitaria<span className="text-cyan-500">.it</span>
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                La nuova frontiera della protezione sanitaria. <br className="hidden md:block" /> Semplice, trasparente, evoluta.
              </p>

              <div className="pt-8 border-t border-slate-100">
                <button 
                  onClick={() => navigate('/home')}
                  className="text-slate-400 hover:text-slate-900 text-[11px] font-bold transition-colors uppercase tracking-[0.2em] block mx-auto"
                >
                  Progetto a cura di FS Brothers & Brokers →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-8 text-slate-500 text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium">
        &copy; 2026 FS BROTHERS & BROKERS S.R.L. — POLIZZASANITARIA.IT
      </footer>
    </div>
  );
}

export default ProdottoPage;