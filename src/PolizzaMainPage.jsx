import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, HeartPulse, Users, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Protezione chiara",
    text: "Soluzioni sanitarie raccontate in modo semplice, leggibile e concreto.",
  },
  {
    icon: <HeartPulse size={20} />,
    title: "Benessere al centro",
    text: "Una visione orientata alla tutela reale delle persone e delle famiglie.",
  },
  {
    icon: <Users size={20} />,
    title: "Approccio umano",
    text: "Tecnologia e consulenza convivono senza trasformare tutto in un labirinto burocratico.",
  },
];

const benefits = [
  "Linguaggio semplice e accessibile",
  "Orientamento a privati, famiglie e professionisti",
  "Esperienza digitale moderna",
  "Percorso di contatto e consulenza più diretto",
];

export default function PolizzaMainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-5%] bottom-[-20%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            PolizzaSanitaria.it
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            La protezione sanitaria in una forma più semplice, moderna e vicina alle persone.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            PolizzaSanitaria.it nasce per rendere più immediata la comprensione delle soluzioni
            sanitarie, con un’esperienza digitale chiara e una comunicazione meno ingessata.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/")}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Torna alla newsletter
            </button>

            <button
              onClick={() => navigate("/azienda")}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Scopri l’azienda
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Cosa offre
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Una piattaforma pensata per orientare, spiegare e avvicinare.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
              Perché funziona
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Meno opacità, più comprensione.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              Il valore di una soluzione sanitaria non sta solo nella proposta, ma nella capacità
              di renderla comprensibile, confrontabile e adatta alla vita reale delle persone.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-slate-900/60 p-5"
              >
                <BadgeCheck className="mt-0.5 text-cyan-300" size={18} />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="rounded-[2.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Prossimo passo
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Un punto di accesso più semplice alla consulenza sanitaria.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200 md:text-lg">
            Questa pagina può diventare la base per integrare servizi, sezioni informative,
            contatti, FAQ e funnel di richiesta consulenza.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
          >
            Torna alla landing
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500 md:px-8">
        © 2026 POLIZZASANITARIA.IT
      </footer>
    </div>
  );
}