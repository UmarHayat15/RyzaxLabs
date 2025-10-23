"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Users2,
  BriefcaseBusiness,
  ShieldCheck,
  Server,
  Network,
  Cloud,
  Database,
  Cpu,
  PhoneCall,
  Headphones,
  ClipboardCheck,
  FolderCog,
  Layers,
  Rocket,
  Wrench,
} from "lucide-react";

/* Small reusable bits */
function CheckItem({ children }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
      <span>{children}</span>
    </li>
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
      <Icon className="w-3.5 h-3.5" />
      {children}
    </span>
  );
}

/* Simple horizontal scroller */
function SnapScroller({ items }) {
  const ref = useRef(null);
  return (
    <div className="relative">
      <div
        ref={ref}
        className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
        {items.map((card) => (
          <div
            key={card.title}
            className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl bg-white ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
          >
            <div className="p-5">
              <p className="text-xl font-bold">{card.title}</p>
              {card.kicker ? (
                <p className="-mt-1 text-xl font-extrabold tracking-tight">{card.kicker}</p>
              ) : null}
              <p className="mt-2 text-slate-600 dark:text-slate-300">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-r from-white via-transparent to-white dark:from-slate-950 dark:to-slate-950"
        aria-hidden
      />
    </div>
  );
}

export default function ITConsultationPage() {
  /* Images (royalty-free) */
  const heroBg =
    "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"; // boardroom/consulting
  const overviewImg =
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const engagementImg =
    "https://images.pexels.com/photos/5686100/pexels-photo-5686100.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const managedITImg =
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const supportImg =
    "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const outsourcingImg =
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const enableImg =
    "https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const dedicatedTeamImg =
    "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";
  const howWeWorkImg =
    "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";

  /* Carousels / scrollers */
  const whyCards = [
    {
      title: "Innovative",
      kicker: "Ideas",
      body:
        "We apply modern architectures and proven methods so your operations run the way you expect—reliably and at speed.",
    },
    {
      title: "Latest",
      kicker: "Technologies",
      body:
        "From cloud-native stacks to BI platforms, we design and manage solutions with engaging, high-performance interfaces.",
    },
    {
      title: "Great",
      kicker: "Network",
      body:
        "Partnerships with credible software and hardware vendors to meet your IT needs end-to-end.",
    },
    {
      title: "Successful",
      kicker: "Projects",
      body:
        "We improve business efficiency and deliver measurable outcomes across industries and sizes.",
    },
  ];

  const expertise = [
    { icon: Cpu, title: "Mobile Technologies" },
    { icon: Server, title: "Web Technologies" },
    { icon: Database, title: "Data Analytics" },
    { icon: Layers, title: "Data Warehousing" },
    { icon: FolderCog, title: "Relational & NoSQL DB Design" },
  ];

  const operateIn = [
    { icon: ClipboardCheck, title: "Information Management" },
    { icon: Network, title: "Web-based Solutions" },
    { icon: Database, title: "Business Intelligence (OLAP & ETL)" },
    { icon: FolderCog, title: "Project Governance & Analysis" },
    { icon: Layers, title: "Enterprise Solutions" },
    { icon: Wrench, title: "Application Development" },
    { icon: ShieldCheck, title: "Storage & Availability" },
    { icon: Cloud, title: "Technology Solutions" },
    { icon: ShieldCheck, title: "Mobile Security" },
    { icon: Network, title: "Networking Solutions" },
  ];

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="IT solutions consulting hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex gap-2 flex-wrap">
              <Pill icon={Users2}>Staff Augmentation</Pill>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              IT solutions consulting company
            </h1>
            <p className="mt-3 text-white/85">
              Providing the best technology and business consulting.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Get a proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                IT consultation services
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Actionable strategy, measurable outcomes
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <p>
                  Next-gen providers juggle complex products in fast-moving markets. With BSS/OSS
                  and enterprise application solutions, we help you maximize ROI, reduce costs,
                  improve service, and accelerate time-to-market.
                </p>
                <p>
                  Our value proposition blends deep business understanding, comprehensive
                  technological skills, and a focused approach powered by in-house practices,
                  frameworks, and tools.
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                <CheckItem>Innovation, productivity, and cost optimization</CheckItem>
                <CheckItem>Resource utilization and delivery excellence</CheckItem>
                <CheckItem>Security, observability, and governance built-in</CheckItem>
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={overviewImg}
                  alt="Consulting collaboration"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIONABLE INSIGHTS / ENGAGEMENT MODELS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Actionable insights from expert professionals</h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titleTop: "Engagement",
                titleBold: "models",
                body:
                  "A robust engagement model underpins a great offshore experience. Ours centers on fulfilling your needs—planning through delivery—with global best practices.",
                cta: "#engagement",
              },
              {
                titleTop: "Managed IT",
                titleBold: "services",
                body:
                  "Tailor-made managed solutions that simplify complexity, reduce cost, and keep systems healthy 24×7×365.",
                cta: "#managed-it",
              },
              {
                titleTop: "Dedicated",
                titleBold: "teams",
                body:
                  "Bridge talent gaps fast. Our dedicated teams work exclusively on your projects—from engineers to QA and PM—inside rigorous processes.",
                cta: "#dedicated",
              },
            ].map((c) => (
              <a
                key={c.titleBold}
                href={c.cta}
                className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950 dark:ring-slate-800"
              >
                <p className="text-2xl font-semibold">{c.titleTop}</p>
                <p className="-mt-1 text-2xl font-extrabold tracking-tight">{c.titleBold}</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sky-700 dark:text-sky-300 font-semibold">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT DETAIL */}
      <section id="engagement" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={engagementImg}
                  alt="Engagement benefits"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Engagement models</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Commitment from planning to delivery. We practice standard global models tailored to
                your context—transparent, predictable, and outcome-driven.
              </p>
              <h4 className="mt-8 text-xl font-semibold">Idea to execution</h4>
              <div className="mt-4 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Innovate works",
                    body:
                      "Custom solutions over copy-paste. We invent and adapt with cutting-edge tech to fit your business uniquely.",
                  },
                  {
                    title: "Out-of-the-box",
                    body:
                      "Beyond conventional approaches—creative design and engineering to keep you ahead.",
                  },
                  {
                    title: "Top-notch support",
                    body:
                      "We stay with you long after launch with responsive, dependable support.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 p-5 bg-white dark:bg-slate-950"
                  >
                    <p className="text-lg font-bold">{b.title}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{b.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6">
                <p className="text-center text-xl font-semibold">Customer’s needs</p>
                <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                  {[
                    "High Quality",
                    "Fast Delivery",
                    "Low Cost",
                    "Increased Project Profitability",
                    "Flexible Resource Allocation",
                    "Predictable Support",
                    "Handling Future Needs",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits of working with SeaTech */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold">Benefits of working with SeaTech</h3>
              <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                <CheckItem>Dedicated resources focused on your project</CheckItem>
                <CheckItem>Best value for your investment</CheckItem>
                <CheckItem>
                  Named resources—participate in selecting PMs, developers, QA, and analysts
                </CheckItem>
                <CheckItem>Trial exercise available to demonstrate capabilities</CheckItem>
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={supportImg}
                  alt="Benefits imagery"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* How we work */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={howWeWorkImg}
                  alt="How we work"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">How we work</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                We work with you, for you, and your business interests—your growth is our growth. We
                uphold well-defined processes to consistently meet delivery and quality benchmarks.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                <b>SeaTech is a CMMI level 3 certified organization.</b> We implement world-class
                systems and streamline service delivery around your needs.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                We start with thorough requirements: consultation, specification finalization,
                wireframes, and iterative review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGED IT */}
      <section id="managed-it" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold">Managed IT solutions</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                As systems grow more complex, time and cost rise. Our managed services simplify the
                stack and can save up to 30% on operational costs while reducing resource needs
                significantly.
              </p>

              <div className="mt-8 grid gap-8">
                <div>
                  <h4 className="text-xl font-semibold">Managed IT support</h4>
                  <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
                    <CheckItem>Fully managed or co-managed partnership</CheckItem>
                    <CheckItem>Intelligent monitoring & patching, backup & recovery</CheckItem>
                    <CheckItem>24×7×365 SLAs and availability</CheckItem>
                    <CheckItem>Network, security, virtualization, desktop & mobile support</CheckItem>
                    <CheckItem>Server and data storage management</CheckItem>
                  </ul>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold">IT services & outsourcing</h4>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                      Focus on your business—let us manage the rest with tailored packages.
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
                      <CheckItem>Backup & disaster recovery</CheckItem>
                      <CheckItem>Application support & connectivity</CheckItem>
                      <CheckItem>Cloud computing & hosting</CheckItem>
                      <CheckItem>Asset management & PMO</CheckItem>
                      <CheckItem>Software dev & automation</CheckItem>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                      <Image
                        src={outsourcingImg}
                        alt="IT outsourcing"
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Our managed services enable you to</h4>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-200">
                    <CheckItem>Reduce OpEx and increase service efficiency</CheckItem>
                    <CheckItem>Stabilize budgets & reduce complexity</CheckItem>
                    <CheckItem>Prevent sudden, costly downtime</CheckItem>
                    <CheckItem>Focus on core business & customers</CheckItem>
                    <CheckItem>Rely on expert hands for IT operations</CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={managedITImg}
                  alt="Managed IT"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={enableImg}
                  alt="Enablement imagery"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Why choose us */}
          <div className="mt-16">
            <h3 className="text-center text-3xl font-bold">Why SeaTech — because we deliver</h3>
            <SnapScroller items={whyCards} />
          </div>
        </div>
      </section>

      {/* DEDICATED TEAMS */}
      <section id="dedicated" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={dedicatedTeamImg}
                  alt="Dedicated team"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Hire dedicated developers</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Close talent gaps with seasoned teams working exclusively on your projects—saving up
                to 60% on development costs while maintaining high quality.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-200">
                {[
                  "Dedicated developer working just for you",
                  "Right talent for every technology",
                  "24-hour support",
                  "Modern communication & tracking",
                  "IP rights remain with you",
                  "Client-centric, customized solutions",
                  "Excellent infrastructure & security",
                  "Well-defined processes",
                  "Freedom to select resources",
                  "High creativity and innovation",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="text-xl font-semibold">Hire skills</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Web Developer",
                    "Mobile Developer",
                    "Database Developer",
                    "Open-Source Developer",
                    "Quality Analyst",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Our expertise</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We plan, design, implement, and operate solutions across a wide range of platforms,
              enabled by cloud and shared infrastructures.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl bg-white p-6 text-center ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
              >
                <e.icon className="mx-auto h-7 w-7" />
                <p className="mt-3 font-semibold">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE OPERATE IN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold">We operate in</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Full-spectrum IT consulting: governance, development, networking, enterprise
              solutions, and intelligence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {operateIn.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl bg-white p-6 text-center ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
              >
                <o.icon className="mx-auto h-7 w-7" />
                <p className="mt-3 font-semibold">{o.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </main>
  );
}
