import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Briefcase,
  BadgeCheck,
  HeartPulse,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import logoBrand from "./assets/logo.png";

export default function CompanyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2B2F33] text-[#D9E1EA]">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#3A3F45] shadow-[0_1px_0_rgba(255,255,255,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          <img
            src={logoBrand}
            alt="FS Brothers & Brokers"
            className="h-12 w-auto brightness-110 md:h-14"
          />

          <button
            onClick={() => navigate("/polizza")}
            className="inline-flex items-center gap-2 rounded-full bg-[#5E97C6] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:brightness-110"
          >
            PolizzaSanitaria.it
            <ArrowUpRight size={14} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#4A5158] via-[#3F454C] to-[#2B2F33]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5E97C6]">
              FS Brothers & Brokers
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Consulenza assicurativa con visione ampia e approccio moderno.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#C9D4E2] md:text-lg">
              Affianchiamo persone, famiglie, professionisti e imprese nella costruzione
              di soluzioni assicurative chiare, sostenibili e coerenti con bisogni reali.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate("/polizza")}
                className="rounded-full bg-[#4B79A8] px-6 py-3 text-sm font-black text-white transition hover:brightness-110"
              >
                Area Salute
              </button>

              <button
                onClick={() => navigate("/")}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Landing Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Ambiti di consulenza"
          title="Un ecosistema assicurativo completo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            icon={<ShieldCheck size={20} />}
            title="Protezione personale"
            text="Soluzioni assicurative orientate alla tutela individuale, alla serenità quotidiana e alla gestione più consapevole del rischio."
          />
          <ServiceCard
            icon={<Users size={20} />}
            title="Coperture familiari"
            text="Percorsi costruiti per nuclei familiari con esigenze diverse, con attenzione a stabilità, continuità e protezione condivisa."
          />
          <ServiceCard
            icon={<Briefcase size={20} />}
            title="Professionisti e attività"
            text="Supporto per freelance, studi e attività che desiderano maggiore ordine e tutela nella gestione della propria protezione assicurativa."
          />
          <ServiceCard
            icon={<Building2 size={20} />}
            title="Soluzioni aziendali"
            text="Approccio consulenziale per realtà organizzate, con strumenti pensati per valorizzare persone, struttura e continuità aziendale."
          />
          <ServiceCard
            icon={<HeartPulse size={20} />}
            title="Area salute"
            text="La protezione sanitaria rappresenta uno degli ambiti centrali della nostra visione, con progetti dedicati come PolizzaSanitaria.it."
          />
          <ServiceCard
            icon={<BadgeCheck size={20} />}
            title="Consulenza chiara"
            text="Traduciamo concetti spesso complessi in percorsi leggibili, concreti e più facili da valutare senza nebbia burocratica."
          />
        </div>
      </section>

      {/* VALORI */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="rounded-[2.5rem] bg-[#3A3F45] p-10">
          <SectionTitle
            eyebrow="Perché noi"
            title="Un modo più leggibile e solido di fare consulenza."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Value>Approccio consulenziale personalizzato</Value>
            <Value>Comunicazione semplice e trasparente</Value>
            <Value>Visione contemporanea del mondo assicurativo</Value>
            <Value>Relazione umana prima del prodotto</Value>
            <Value>Supporto per privati, famiglie, professionisti e aziende</Value>
            <Value>Capacità di sviluppare progetti digitali verticali dedicati</Value>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 text-center md:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#5E97C6]">
          Progetto digitale verticale
        </p>

        <h3 className="mt-4 text-3xl font-black text-white md:text-5xl">
          PolizzaSanitaria.it
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-[#B8C4D3] md:text-lg">
          Un progetto dedicato all’area salute, pensato per rendere la consulenza più accessibile,
          immediata e contemporanea.
        </p>

        <button
          onClick={() => navigate("/polizza")}
          className="mt-8 rounded-full bg-[#5E97C6] px-8 py-3 font-black text-white transition hover:brightness-110"
        >
          Vai al progetto
        </button>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs uppercase tracking-[0.25em] text-[#9AA7B5]">
        © 2026 FS BROTHERS & BROKERS S.R.L.
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#5E97C6]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#3A3F45] p-7 transition hover:border-[#5E97C6]/50">
      <div className="mb-5 inline-flex rounded-2xl bg-[#4B79A8]/15 p-3 text-[#5E97C6]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#C9D4E2]">{text}</p>
    </div>
  );
}

function Value({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-[1.4rem] bg-[#2B2F33] p-5">
      <BadgeCheck className="mt-1 text-[#5E97C6]" size={18} />
      <span className="text-[#D9E1EA]">{children}</span>
    </div>
  );
}