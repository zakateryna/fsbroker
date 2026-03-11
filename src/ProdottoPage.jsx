import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProdottoPage() {
  const [showBox, setShowBox] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 500);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    console.log("Iscrizione newsletter:", email);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-4">
      <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-cyan-900/10 blur-[80px] md:h-[600px] md:w-[600px] md:blur-[120px]" />

      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 w-full max-w-lg"
          >
            <div className="rounded-[2.5rem] bg-white/95 p-8 text-center shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-sm md:rounded-[3rem] md:p-14">
              <span className="rounded-full bg-cyan-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600">
                Innovazione Digitale
              </span>

              <h1 className="mt-6 mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                polizzasanitaria<span className="text-cyan-500">.it</span>
              </h1>

              <p className="mb-8 text-slate-600 md:text-lg">
                La nuova frontiera della protezione sanitaria.
                <br className="hidden md:block" />
                Semplice. Trasparente. Evoluta.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Inserisci la tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:border-cyan-400"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-cyan-500 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-cyan-600"
                  >
                    Iscriviti alla newsletter
                  </button>
                </form>
              ) : (
                <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
                  ✓ Iscrizione ricevuta. Ti aggiorneremo presto.
                </div>
              )}

              <div className="mt-10 border-t border-slate-100 pt-6">
                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => navigate("/polizza")}
                    className="rounded-full bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-slate-800"
                  >
                    Vai alla pagina principale
                  </button>

                  <button
                    onClick={() => navigate("/home")}
                    className="mx-auto block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900"
                  >
                    Progetto a cura di FS Brothers & Brokers →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-8 w-full px-4 text-center text-[10px] uppercase tracking-[0.3em] text-slate-500 opacity-60">
        © 2026 FS BROTHERS & BROKERS S.R.L. — POLIZZASANITARIA.IT
      </footer>
    </div>
  );
}