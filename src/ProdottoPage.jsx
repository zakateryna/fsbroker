import React, { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import logoBrand from "./assets/logo-navbar.svg";
import heroMilano from "./assets/hero-milano.png";

const credibilityItems = [
  {
    value: "Privati",
    label: "Percorsi assicurativi chiari e personalizzati",
  },
  {
    value: "Famiglie",
    label: "Coperture pensate per continuità e tutela",
  },
  {
    value: "Professionisti",
    label: "Soluzioni coerenti con attività e responsabilità",
  },
  {
    value: "Imprese",
    label: "Approccio consulenziale orientato alla stabilità",
  },
];

const services = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Protezione personale",
    text: "Soluzioni assicurative costruite per la tutela individuale, con attenzione alla leggibilità delle coperture, alla sostenibilità e alla coerenza con obiettivi reali.",
  },
  {
    icon: <Users size={20} />,
    title: "Coperture familiari",
    text: "Percorsi dedicati ai nuclei familiari, orientati a continuità, protezione condivisa e maggiore equilibrio nella gestione del rischio.",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Professionisti e attività",
    text: "Supporto per freelance, studi e attività che desiderano strutturare meglio la propria tutela assicurativa con un impianto più ordinato e consapevole.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Soluzioni aziendali",
    text: "Consulenza per realtà organizzate che vogliono rafforzare continuità, assetto operativo e capacità di protezione nel medio e lungo periodo.",
  },
  {
    icon: <Landmark size={20} />,
    title: "Tutela del patrimonio",
    text: "Un approccio attento alla protezione del patrimonio personale e familiare, costruito con logica prudente, visione d’insieme e chiarezza decisionale.",
  },
  {
    icon: <Scale size={20} />,
    title: "Lettura del rischio",
    text: "Traduciamo scenari complessi in percorsi valutabili, riducendo opacità, linguaggio tecnico superfluo e soluzioni poco aderenti al contesto.",
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
  code: "Cod. univoco KRRH6B9",
  rui: "RUI B000797510",
  email: "info@fsbassicura.it",
  pec: "fsbassicura@pec.it",
  whatsappHref:
    "https://wa.me/393515575287?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20servizi%20di%20FS%20Brothers%20%26%20Brokers.",
  whatsappLabel: "WhatsApp +39 351 557 5287",
  mapsHref:
    "https://www.google.com/maps?q=Galleria+del+Corso+4,+20122+Milano",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Galleria+del+Corso+4,+20122+Milano",
  mapsEmbed:
    "https://www.google.com/maps?q=Galleria+del+Corso+4,+20122+Milano&z=16&output=embed",
};

export default function ProdottoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileNavClick() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-[#17202A]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#091522]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a
            href="#top"
            className="flex items-center"
            onClick={handleMobileNavClick}
          >
            <NavbarLogo />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servizi"
              className="text-base font-semibold text-white/72 transition hover:text-white"
            >
              Servizi
            </a>
            <a
              href="#metodo"
              className="text-base font-semibold text-white/72 transition hover:text-white"
            >
              Metodo
            </a>
            <a
              href="#chi-siamo"
              className="text-base font-semibold text-white/72 transition hover:text-white"
            >
              Perché FSB
            </a>
            <a
              href="#contatti"
              className="rounded-full bg-[#6CA9DB] px-5 py-2.5 text-base font-bold text-[#081523] transition hover:brightness-110"
            >
              Contatti
            </a>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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

      <main id="top">
        <section className="relative min-h-[760px] overflow-hidden bg-[#0F2740]">
          <div className="absolute inset-0">
            <img
              src={heroMilano}
              alt="Sede a Milano"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,31,0.76)_0%,rgba(10,30,49,0.62)_30%,rgba(11,33,54,0.3)_58%,rgba(8,23,38,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,24,0.38)_0%,rgba(5,13,24,0.06)_28%,rgba(5,13,24,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,169,219,0.16),transparent_32%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(236,95,146,0.18),transparent_28%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-4 py-20 md:px-8 md:py-28 lg:py-32">
            <div className="max-w-3xl rounded-[1.5rem] border border-white/14 bg-[rgba(8,24,40,0.4)] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.24)] backdrop-blur-md md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#A8CAE6] md:text-base">
                FS Brothers &amp; Brokers
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[1.01] tracking-tight text-white md:text-7xl">
                Consulenza assicurativa costruita con chiarezza, metodo e
                visione.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#E2EAF1] md:text-2xl">
                Affianchiamo privati, famiglie, professionisti e imprese nella
                costruzione di soluzioni assicurative coerenti con bisogni
                reali, obiettivi di tutela e necessità di continuità nel tempo.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contatti"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#163A5A] transition hover:bg-[#F2F6FA]"
                >
                  Richiedi una consulenza
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#servizi"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
                >
                  Scopri le aree di consulenza
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D8E0E8] bg-[#EDF2F6]">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-2 md:px-8 xl:grid-cols-4">
            {credibilityItems.map((item) => (
              <div
                key={item.value}
                className="rounded-[1.15rem] bg-white p-6 shadow-[0_10px_35px_rgba(16,24,32,0.04)]"
              >
                <p className="text-3xl font-black tracking-tight text-[#101820]">
                  {item.value}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#526273] md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="servizi"
          className="mx-auto max-w-7xl px-4 py-18 md:px-8 md:py-24"
        >
          <SectionHeader
            eyebrow="Aree di consulenza"
            title="Competenze organizzate in modo chiaro, per esigenze diverse."
            text="Strutturiamo la consulenza per ambiti, così da rendere più semplice orientarsi tra priorità, protezione e continuità."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section id="metodo" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-18 md:px-8 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeader
                  eyebrow="Metodo"
                  title="Un percorso consulenziale ordinato, leggibile e progressivo."
                  text="La qualità di una consulenza si misura anche dalla capacità di guidare il cliente con chiarezza, senza sovraccarico e senza ambiguità."
                />

                <div className="mt-8 rounded-[1.4rem] border border-[#D8E0E8] bg-[#F7F9FB] p-7">
                  <p className="text-lg leading-relaxed text-[#4E5E6E]">
                    L’obiettivo non è aggiungere complessità, ma aiutare a
                    prendere decisioni più solide attraverso un processo chiaro,
                    verificabile e coerente con il contesto reale.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {steps.map((step) => (
                  <StepRow key={step.number} {...step} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="chi-siamo" className="bg-[#12263A]">
          <div className="mx-auto max-w-7xl px-4 py-18 md:px-8 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#89B7DD] md:text-base">
                  Perché FSB
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                  Un modo più professionale di intendere relazione, tutela e
                  consulenza.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#D1DEE9] md:text-xl">
                  Lavoriamo per rendere più chiari i percorsi decisionali,
                  rafforzare la qualità della protezione e costruire una
                  relazione fondata su ascolto, solidità e continuità.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-5"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#89B7DD]"
                      size={18}
                    />
                    <p className="text-base leading-relaxed text-[#E4EDF4] md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 md:px-8 md:py-24">
          <div className="rounded-[1.5rem] bg-[#E9EEF3] px-8 py-10 md:px-12 md:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#1E4E79] md:text-base">
              Contatto diretto
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-[#101820] md:text-6xl">
              Costruiamo insieme una soluzione più adatta al tuo contesto.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4C5D6D] md:text-xl">
              Un confronto iniziale può aiutare a leggere meglio esigenze,
              priorità e possibilità di tutela in modo più ordinato e
              consapevole.
            </p>

            <div className="mt-8">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4E79] px-6 py-3.5 text-base font-bold text-white transition hover:brightness-110"
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
        className="border-t border-[#16324A] bg-[linear-gradient(180deg,#09131E_0%,#0D1C2B_100%)] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8BB9DE] md:text-base">
              Contatti
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Un contatto diretto, chiaro e professionale.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#D2DEE8] md:text-xl">
              Puoi scriverci o raggiungerci rapidamente su WhatsApp per un primo contatto.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#102234] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.24)] md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8BB9DE]">
                  Contatto diretto
                </p>

                <h3 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
                  Parliamo della soluzione più adatta al tuo contesto.
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/78 md:text-lg">
                  Un primo confronto può aiutare a chiarire esigenze, priorità e
                  possibilità di tutela in modo più ordinato e consapevole.
                </p>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={contactDetails.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#1FA855_0%,#16924A_100%)] px-6 py-3.5 text-base font-bold text-white shadow-[0_16px_28px_rgba(20,120,62,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
                  >
                    <MessageCircle size={18} />
                    Scrivici su WhatsApp
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
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102234] shadow-[0_24px_50px_rgba(0,0,0,0.24)]">
                <div className="border-b border-white/10 px-6 py-6">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8BB9DE]">
                    Sede operativa
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-white/86 md:text-xl">
                    Galleria del Corso 4, 20122 Milano
                  </p>
                </div>

                <div className="relative">
                  <iframe
                    title="Mappa sede FS Brothers & Brokers"
                    src={contactDetails.mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[360px] w-full border-0 md:h-[460px]"
                  />

                  <a
                    href={contactDetails.directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#0C1B29]/88 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:bg-[#13273A]/92 md:right-5 md:top-5"
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/88">
              FS BROTHERS &amp; BROKERS SRL
            </p>
            <p className="mt-1 text-sm text-white/52">
              {contactDetails.vat} · {contactDetails.rui} ·{" "}
              {contactDetails.code}
            </p>
          </div>

          <div className="text-sm md:text-right">
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
        className="navbar-logo-image h-14 w-auto md:h-24"
      />
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#1E4E79] md:text-base">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-[#101820] md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-[#516172] md:text-xl">
        {text}
      </p>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="rounded-[1.25rem] border border-[#D8E0E8] bg-white p-7 shadow-[0_12px_35px_rgba(16,24,32,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(16,24,32,0.07)]">
      <div className="mb-5 inline-flex rounded-xl bg-[#EAF2F8] p-3 text-[#1E4E79]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#101820]">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-[#566676] md:text-lg">
        {text}
      </p>
    </div>
  );
}

function StepRow({ number, title, text }) {
  return (
    <div className="grid gap-4 rounded-[1.2rem] border border-[#D9E1E8] bg-[#F7F9FB] p-6 md:grid-cols-[72px_1fr]">
      <div className="text-3xl font-black tracking-tight text-[#1E4E79]">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#101820]">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-[#526273] md:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 inline-flex shrink-0 rounded-xl bg-[#8BB9DE]/14 p-3 text-[#9FD0F4]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/45">
          {label}
        </p>
        <p className="mt-2 text-base leading-relaxed text-white/88 md:text-lg">
          {value}
        </p>
      </div>
    </div>
  );

  const baseClassName =
    "rounded-[1.2rem] border border-white/10 bg-[#0C1B29] p-5 text-white shadow-[0_14px_32px_rgba(0,0,0,0.14)] transition";

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

function LegalRow({ label, value }) {
  return (
    <div className="rounded-[1.1rem] border border-white/8 bg-[#0B1825] px-5 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/42">
        {label}
      </p>
      <p className="mt-2 text-base leading-relaxed text-white/88 md:text-lg">
        {value}
      </p>
    </div>
  );
}