import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  Mail,
  Menu,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import logoBrand from "./assets/logo-navbar.svg";
import heroMilano from "./assets/hero-milano.png";

import servicePrivati from "./assets/privati.png";
import serviceFamiglie from "./assets/famiglia.png";
import serviceProfessionisti from "./assets/professionisti.png";
import serviceImprese from "./assets/imprese.png";
import metodoImage from "./assets/metodo.png";

const credibilityItems = [
  {
    icon: <ShieldCheck size={20} />,
    value: "Privati",
    label: "Percorsi assicurativi chiari e personalizzati",
  },
  {
    icon: <Users size={20} />,
    value: "Famiglie",
    label: "Coperture pensate per continuità e tutela",
  },
  {
    icon: <Briefcase size={20} />,
    value: "Professionisti",
    label: "Soluzioni coerenti con attività e responsabilità",
  },
  {
    icon: <Building2 size={20} />,
    value: "Imprese",
    label: "Approccio consulenziale orientato alla stabilità",
  },
];

const services = [
  {
    title: "Protezione personale",
    image: servicePrivati,
    imagePosition: "object-center",
    text: "Soluzioni assicurative costruite per la tutela individuale, con attenzione alla leggibilità delle coperture, alla sostenibilità e alla coerenza con obiettivi reali.",
  },
  {
    title: "Coperture familiari",
    image: serviceFamiglie,
    imagePosition: "object-[68%_center]",
    text: "Percorsi dedicati ai nuclei familiari, orientati a continuità, protezione condivisa e maggiore equilibrio nella gestione del rischio.",
  },
  {
    title: "Professionisti e attività",
    image: serviceProfessionisti,
    imagePosition: "object-center",
    text: "Supporto per freelance, studi e attività che desiderano strutturare meglio la propria tutela assicurativa con un impianto più ordinato e consapevole.",
  },
  {
    title: "Soluzioni aziendali",
    image: serviceImprese,
    imagePosition: "object-center",
    text: "Consulenza per realtà organizzate che vogliono rafforzare continuità, assetto operativo e capacità di protezione nel medio e lungo periodo.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ascolto e analisi",
    text: "Partiamo dalle esigenze reali della persona, della famiglia o dell’impresa, per costruire una base decisionale più solida.",
  },
  {
    number: "02",
    title: "Mappatura delle priorità",
    text: "Individuiamo ciò che va protetto, valutando esposizioni, obiettivi e aree che meritano maggiore attenzione.",
  },
  {
    number: "03",
    title: "Definizione della soluzione",
    text: "Selezioniamo un impianto coerente, sostenibile e comprensibile, evitando standardizzazioni poco utili.",
  },
  {
    number: "04",
    title: "Affiancamento nel tempo",
    text: "La consulenza continua anche dopo la scelta iniziale, accompagnando l’evoluzione delle esigenze con continuità.",
  },
];

const strengths = [
  "Approccio consulenziale personalizzato",
  "Comunicazione chiara e trasparente",
  "Lettura concreta del contesto",
  "Visione stabile e orientata al lungo periodo",
  "Relazione professionale prima del prodotto",
  "Struttura pensata per privati, professionisti e imprese",
];

const contactDetails = {
  company: "FS BROTHERS & BROKERS SRL",
  address: "GALLERIA DEL CORSO 4, 20122 MILANO",
  vat: "P.IVA 14353790968",
  rui: "RUI B000797510",
  email: "info@fsbassicura.it",
  pec: "fsbassicura@pec.it",
  mapsHref:
    "https://www.google.com/maps?q=Galleria+del+Corso+4,+20122+Milano",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Galleria+del+Corso+4,+20122+Milano",
  mapsEmbed:
    "https://www.google.com/maps?q=Galleria+del+Corso+4,+20122+Milano&z=16&output=embed",
};

export default function ProdottoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuOpenedAtRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const now = Date.now();
      const justOpened = now - menuOpenedAtRef.current < 250;

      if (!justOpened) {
        setMobileMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  function handleMobileNavClick() {
    setMobileMenuOpen(false);
  }

  function handleLogoClick(event) {
    event.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-[#17202A]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#091522]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <a href="/" className="flex items-center" onClick={handleLogoClick}>
            <NavbarLogo />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servizi"
              className="text-sm font-semibold text-white/72 transition hover:text-white lg:text-base"
            >
              Servizi
            </a>
            <a
              href="#metodo"
              className="text-sm font-semibold text-white/72 transition hover:text-white lg:text-base"
            >
              Metodo
            </a>
            <a
              href="#chi-siamo"
              className="text-sm font-semibold text-white/72 transition hover:text-white lg:text-base"
            >
              Perché FSB
            </a>
            <a
              href="#contatti"
              className="rounded-full bg-[#6CA9DB] px-5 py-2.5 text-sm font-bold text-[#081523] transition hover:brightness-110 lg:text-base"
            >
              Contatti
            </a>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              menuOpenedAtRef.current = Date.now();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/8 bg-[#0A1623] transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <a
              href="#servizi"
              onClick={handleMobileNavClick}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
            >
              Servizi
            </a>
            <a
              href="#metodo"
              onClick={handleMobileNavClick}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
            >
              Metodo
            </a>
            <a
              href="#chi-siamo"
              onClick={handleMobileNavClick}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
            >
              Perché FSB
            </a>
            <a
              href="#contatti"
              onClick={handleMobileNavClick}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#6CA9DB] px-5 py-3 text-base font-bold text-[#081523] transition hover:brightness-110"
            >
              Contatti
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-[620px] overflow-hidden bg-[#0F2740] sm:min-h-[680px] md:min-h-[760px]">
          <div className="absolute inset-0">
            <img
              src={heroMilano}
              alt="Sede a Milano"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,31,0.84)_0%,rgba(10,30,49,0.7)_34%,rgba(11,33,54,0.38)_60%,rgba(8,23,38,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,24,0.38)_0%,rgba(5,13,24,0.08)_30%,rgba(5,13,24,0.26)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,169,219,0.14),transparent_32%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(236,95,146,0.14),transparent_30%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-14 sm:min-h-[680px] sm:py-16 md:min-h-[760px] md:px-8 md:py-24 lg:py-28">
            <div className="max-w-3xl rounded-[1.25rem] border border-white/14 bg-[rgba(8,24,40,0.44)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7 md:rounded-[1.5rem] md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8CAE6] sm:text-xs md:text-base md:tracking-[0.32em]">
                FS Brothers &amp; Brokers
              </p>

              <h1 className="mt-4 text-3xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl md:mt-5 md:text-7xl">
                Consulenza assicurativa costruita con chiarezza, metodo e
                visione.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#E2EAF1] sm:text-lg md:mt-7 md:text-2xl">
                Affianchiamo privati, famiglie, professionisti e imprese nella
                costruzione di soluzioni assicurative coerenti con bisogni
                reali, obiettivi di tutela e necessità di continuità nel tempo.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <a
                  href="#contatti"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#163A5A] transition hover:bg-[#F2F6FA] sm:w-auto sm:text-base"
                >
                  Richiedi una consulenza
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#servizi"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto sm:text-base"
                >
                  Scopri le aree di consulenza
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D8E0E8] bg-[#EDF2F6]">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:gap-5 sm:py-8 md:grid-cols-2 md:px-8 xl:grid-cols-4">
            {credibilityItems.map((item) => (
              <div
                key={item.value}
                className="rounded-[1rem] bg-white p-5 shadow-[0_10px_35px_rgba(16,24,32,0.04)] sm:rounded-[1.15rem] sm:p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#EAF2F8] p-3 text-[#1E4E79]">
                  {item.icon}
                </div>
                <p className="text-2xl font-black tracking-tight text-[#101820] sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#526273] sm:mt-3 sm:text-base md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="servizi"
          className="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-24"
        >
          <SectionHeader
            eyebrow="Aree di consulenza"
            title="Competenze organizzate in modo chiaro, per esigenze diverse."
            text="Strutturiamo la consulenza per ambiti, così da rendere più semplice orientarsi tra priorità, protezione e continuità."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section
          id="metodo"
          className="scroll-mt-24 md:scroll-mt-28 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="flex flex-col gap-6">
                <SectionHeader
                  eyebrow="Metodo"
                  title="Un percorso consulenziale ordinato, leggibile e progressivo."
                  text="La qualità di una consulenza si misura anche dalla capacità di guidare il cliente con chiarezza, senza sovraccarico e senza ambiguità."
                />

                <div className="overflow-hidden rounded-[1.25rem] border border-[#D8E0E8] bg-[#F7F9FB] shadow-[0_14px_36px_rgba(16,24,32,0.06)]">
                  <div className="relative h-[260px] sm:h-[320px]">
                    <img
                      src={metodoImage}
                      alt="Metodo di lavoro"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,21,34,0.08)_0%,rgba(9,21,34,0.22)_100%)]" />
                  </div>

                  <div className="p-5 sm:p-7">
                    <p className="text-base leading-relaxed text-[#4E5E6E] sm:text-lg">
                      L’obiettivo non è aggiungere complessità, ma aiutare a
                      prendere decisioni più solide attraverso un processo
                      chiaro, verificabile e coerente con il contesto reale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {steps.map((step) => (
                  <StepRow key={step.number} {...step} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="chi-siamo"
          className="scroll-mt-24 md:scroll-mt-28 bg-[#12263A]"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#89B7DD] sm:text-xs md:text-base md:tracking-[0.32em]">
                  Perché FSB
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:mt-5 md:text-6xl">
                  Un modo più professionale di intendere relazione, tutela e
                  consulenza.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D1DEE9] sm:text-lg md:mt-6 md:text-xl">
                  Lavoriamo per rendere più chiari i percorsi decisionali,
                  rafforzare la qualità della protezione e costruire una
                  relazione fondata su ascolto, solidità e continuità.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[1rem] border border-white/10 bg-white/[0.05] p-4 sm:rounded-[1.2rem] sm:p-5"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#89B7DD]"
                      size={18}
                    />
                    <p className="text-sm leading-relaxed text-[#E4EDF4] sm:text-base md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-24">
          <div className="rounded-[1.25rem] bg-[#E9EEF3] px-6 py-8 sm:px-8 sm:py-10 md:rounded-[1.5rem] md:px-12 md:py-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1E4E79] sm:text-xs md:text-base md:tracking-[0.32em]">
              Contatto diretto
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#101820] sm:text-4xl md:text-6xl">
              Costruiamo insieme una soluzione più adatta al tuo contesto.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4C5D6D] sm:text-lg md:mt-5 md:text-xl">
              Un confronto iniziale può aiutare a leggere meglio esigenze,
              priorità e possibilità di tutela in modo più ordinato e
              consapevole.
            </p>

            <div className="mt-7 sm:mt-8">
              <a
                href="#contatti"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E4E79] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110 sm:w-auto sm:text-base"
              >
                Vai ai contatti
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <section
        id="contatti"
        className="scroll-mt-24 md:scroll-mt-28 border-t border-[#16324A] bg-[linear-gradient(180deg,#09131E_0%,#0D1C2B_100%)] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8BB9DE] sm:text-xs md:text-base md:tracking-[0.3em]">
              Contatti
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-6xl">
              Un contatto diretto, chiaro e professionale.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#D2DEE8] sm:text-lg md:mt-5 md:text-xl">
              Puoi contattarci via email per un primo confronto o per richiedere
              informazioni sui nostri servizi.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-6">
              <div className="rounded-[1.25rem] border border-white/10 bg-[#102234] p-5 shadow-[0_24px_50px_rgba(0,0,0,0.24)] sm:p-6 md:rounded-[1.5rem] md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8BB9DE] sm:text-xs md:text-sm">
                  Contatto diretto
                </p>

                <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-[1.8rem] md:text-3xl">
                  Parliamo della soluzione più adatta al tuo contesto.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/78 sm:text-base md:text-lg">
                  Un primo confronto può aiutare a chiarire esigenze, priorità e
                  possibilità di tutela in modo più ordinato e consapevole.
                </p>

                <div className="mt-7">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#6CA9DB] px-6 py-3.5 text-sm font-bold text-[#081523] shadow-[0_16px_28px_rgba(108,169,219,0.24)] transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:text-base"
                  >
                    <Mail size={18} />
                    Contattaci via email
                  </a>
                </div>

                <div className="mt-8 grid gap-4">
                  <ContactCard
                    icon={<Mail size={18} />}
                    label="Email"
                    value={contactDetails.email}
                    href={`mailto:${contactDetails.email}`}
                  />
                  <ContactCard
                    icon={<Mail size={18} />}
                    label="PEC"
                    value={contactDetails.pec}
                    href={`mailto:${contactDetails.pec}`}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#102234] shadow-[0_24px_50px_rgba(0,0,0,0.24)] md:rounded-[1.5rem]">
                <div className="border-b border-white/10 px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8BB9DE] sm:text-xs md:text-sm">
                    Sede operativa
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-white/86 sm:text-lg md:text-xl">
                    Galleria del Corso 4, 20122 Milano
                  </p>
                </div>

                <div className="relative">
                  <iframe
                    title="Mappa sede FS Brothers & Brokers"
                    src={contactDetails.mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[320px] w-full border-0 sm:h-[360px] md:h-[460px]"
                  />

                  <a
                    href={contactDetails.directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#0C1B29]/88 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:bg-[#13273A]/92 sm:right-4 sm:top-4 sm:px-4 sm:py-2.5 sm:text-sm md:right-5 md:top-5"
                  >
                    Naviga con Google Maps
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#07111B] text-white/68">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 md:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/88 sm:text-sm sm:tracking-[0.18em]">
              {contactDetails.company}
            </p>
            <p className="mt-1 text-xs text-white/52 sm:text-sm">
              {contactDetails.vat} · {contactDetails.rui}
            </p>
          </div>

          <div className="text-xs sm:text-sm md:text-right">
            <p>{contactDetails.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavbarLogo() {
  return (
    <div className="navbar-logo-shell">
      <img
        src={logoBrand}
        alt="FS Brothers & Brokers"
        className="navbar-logo-image h-10 w-auto sm:h-11 md:h-24"
      />
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-4xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1E4E79] sm:text-xs md:text-base md:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#101820] sm:text-4xl md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[#516172] sm:text-lg md:mt-5 md:text-xl">
        {text}
      </p>
    </div>
  );
}

function ServiceCard({ title, text, image, imagePosition = "object-center" }) {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-[#D8E0E8] bg-white shadow-[0_12px_35px_rgba(16,24,32,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(16,24,32,0.07)] sm:rounded-[1.25rem]">
      <div className="relative h-44 overflow-hidden sm:h-48">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,21,34,0.08)_0%,rgba(9,21,34,0.22)_100%)]" />
      </div>

      <div className="p-5 sm:p-7">
        <h3 className="text-xl font-bold text-[#101820] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#566676] sm:text-base md:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
}

function StepRow({ number, title, text }) {
  return (
    <div className="grid gap-3 rounded-[1.1rem] border border-[#D9E1E8] bg-[#F7F9FB] p-5 sm:gap-4 sm:rounded-[1.2rem] sm:p-6 md:grid-cols-[72px_1fr]">
      <div className="text-2xl font-black tracking-tight text-[#1E4E79] sm:text-3xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#101820] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#526273] sm:text-base md:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="mt-0.5 inline-flex shrink-0 rounded-xl bg-[#8BB9DE]/14 p-2.5 text-[#9FD0F4] sm:p-3">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
          {label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base md:text-lg">
          {value}
        </p>
      </div>
    </div>
  );

  const baseClassName =
    "rounded-[1.1rem] border border-white/10 bg-[#0C1B29] p-4 text-white shadow-[0_14px_32px_rgba(0,0,0,0.14)] transition sm:rounded-[1.2rem] sm:p-5";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={`${baseClassName} hover:border-[#8BB9DE]/35 hover:bg-[#102233]`}
      >
        {content}
      </a>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}