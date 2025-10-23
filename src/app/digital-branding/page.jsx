"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Palette,
  PenTool,
  MonitorSmartphone,
  RefreshCcw,
  Rocket,
  Target,
  Layers,
  Sparkles,
  Layout,
  MoveRight,
} from "lucide-react";

/* --------- Simple snap scroller (no deps) ---------- */
function SnapScroller({ items }) {
  const ref = useRef(null);
  return (
    <div className="relative">
      <div
        ref={ref}
        className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>
        {items.map((card) => (
          <article
            key={card.title}
            className="snap-start min-w-[300px] sm:min-w-[360px] relative overflow-hidden rounded-2xl ring-1 ring-slate-200/70 bg-white/80 backdrop-blur transition-shadow shadow-sm hover:shadow-2xl"
          >
            {/* sheen */}
            <div className="pointer-events-none absolute -top-24 -left-10 h-40 w-40 rotate-12 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="p-5">
              <p className="text-xl font-bold tracking-tight">{card.title}</p>
              <p className="mt-2 text-slate-600">{card.body}</p>
            </div>
            {/* bottom gradient bar */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500" />
          </article>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent dark:from-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent dark:from-slate-950"
        aria-hidden
      />
    </div>
  );
}

/* --------- Fancy service card (glow + tilt) ---------- */
function ServiceCard({ icon: Icon, k1, k2, body }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -6;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      className="group relative overflow-hidden rounded-2xl p-6 ring-1 ring-slate-200 bg-white/70 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* gradient glow frame */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ background: "linear-gradient(120deg, rgba(56,189,248,.25), rgba(59,130,246,.25), rgba(236,72,153,.25))", padding: 1 }} />
      {/* soft sheen */}
      <div className="pointer-events-none absolute -top-16 -left-8 h-48 w-48 rotate-12 rounded-full bg-sky-400/10 blur-3xl group-hover:opacity-90 opacity-0 transition" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-semibold">{k1}</div>
            <div className="-mt-0.5 text-lg font-extrabold tracking-tight">{k2}</div>
          </div>
        </div>
        <p className="mt-3 text-slate-600">{body}</p>
        <div className="mt-5 inline-flex items-center gap-2 font-semibold text-sky-700">
          Explore <MoveRight className="h-4 w-4" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500 opacity-0 group-hover:opacity-100" />
    </div>
  );
}

export default function DesignBrandingPage() {
  /* hero / overview images (remote) */
  const heroBg =
    "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000";
  const overviewImg =
    "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";

  const whatWeDo = [
    {
      title: "Web / App Design",
      body:
        "22 years designing for web & mobile. We pair research, systems thinking, and modern tech to craft interfaces that convert and scale.",
    },
    {
      title: "Website Redesign",
      body:
        "Give your site a contemporary look without disrupting core flows. Fresh, clean, and aligned to your KPIs.",
    },
    {
      title: "Graphic Design",
      body:
        "Infographics, illustration, and sophisticated layouts that communicate your strategy with clarity.",
    },
    {
      title: "Logo & Identity",
      body:
        "Distinctive identities and brand toolkits that stay consistent across every touchpoint.",
    },
  ];

  const servicesCards = [
    {
      k1: "User experience",
      k2: "design",
      body:
        "Human-centered UX that feels natural and performs. Design systems, pixel-perfect UI, and thoughtful flows.",
      icon: PenTool,
    },
    {
      k1: "Landing page",
      k2: "design",
      body:
        "Research-driven pages engineered for conversions: messaging, hierarchy, and friction-free UX.",
      icon: MonitorSmartphone,
    },
    {
      k1: "Responsive web",
      k2: "design",
      body:
        "Device-agnostic layouts and components. Modern, fast, accessible, and SEO-friendly.",
      icon: RefreshCcw,
    },
  ];

  const pillars = [
    {
      icon: Rocket,
      title: "Mission",
      text:
        "Deliver design that accelerates business impact — beautiful, fast, and measurable across web and mobile.",
    },
    {
      icon: Target,
      title: "Goal",
      text:
        "Ship consistent brand experiences that increase conversion, retention, and trust.",
    },
    {
      icon: Layers,
      title: "Approach",
      text:
        "Strategy → research → design systems → high-fidelity UI → handoff with dev-ready components.",
    },
  ];

  const process = [
    ["Discovery", "Stakeholder interviews, analytics review, and competitive mapping."],
    ["Direction", "Moodboards, brand voice, and design principles."],
    ["Design System", "Tokens, components, and accessibility baselines."],
    ["Hi-Fi UI", "Page templates, states, and responsive breakpoints."],
    ["Handoff", "Specs, redlines, and component documentation."],
    ["Iterate", "A/B tests, heatmaps, and continuous refinement."],
  ];

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* ambient blobs */}
        <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Design & brand hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.35)_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Palette className="w-3.5 h-3.5" />
              Design & Branding
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              We design the trend
            </h1>
            <p className="mt-3 text-white/85">
              Simplifying web experience with design since 2000.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 hover:translate-y-[-1px]"
              >
                Explore design services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section id="overview" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Design that works!
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Beautiful, useful, and unmistakably you
              </h2>
              <div className="mt-4 space-y-3 text-slate-600">
                <p>
                  Good design isn’t just how it looks—it’s how it works. We create sites that invite,
                  inform, and convert.
                </p>
                <p>
                  We start with your brand objectives, then blend them with audience insights to hit
                  that just-right balance of form and function.
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Brand discovery → mood boards → design system → high-fidelity UI → handoff",
                  "Accessibility, performance, and SEO-conscious markup",
                  "Component libraries that scale across pages and campaigns",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <Image
                  src={overviewImg}
                  alt="Design collaboration"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 p-[2px]">
                  <div className="rounded-2xl bg-white/80 px-4 py-3 backdrop-blur">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      Secure • Performant • Accessible
                    </div>
                    <div className="text-xs text-slate-600">
                      Design system + component docs included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PILLARS: Mission / Goal / Approach ================= */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 backdrop-blur shadow-sm hover:shadow-xl transition"
              >
                <div className="absolute inset-x-0 -top-[1px] h-[2px] bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500" />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO (cards scroller) ================= */}
      <section id="what-we-do" className="py-20 border-y-4 border-slate-900/90 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">What we do</h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
            We turn ideas into extraordinary visuals — across brand, web, and product.
          </p>
          <SnapScroller items={whatWeDo} />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Web design services to augment your online presence</h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCards.map((c) => (
              <ServiceCard key={c.k1} icon={c.icon} k1={c.k1} k2={c.k2} body={c.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (timeline) ================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Our design process</h3>
            <p className="mt-2 text-slate-600">
              Transparent, collaborative, and measurable — from kickoff to launch.
            </p>
          </div>

          <ol className="mt-10 relative border-s border-transparent">
            {process.map(([title, text], i) => (
              <li key={title} className="relative pl-10 py-5">
                <span className="absolute left-0 top-6 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-sm" />
                {i !== process.length - 1 && (
                  <span className="absolute left-[3px] top-8 h-[calc(100%-2rem)] w-[2px] bg-slate-200" />
                )}
                <div className="rounded-xl bg-white/80 ring-1 ring-slate-200 p-5 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-2">
                    <Layout className="h-4 w-4 text-sky-600" />
                    <p className="font-semibold">{title}</p>
                  </div>
                  <p className="mt-1 text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-r from-sky-600 via-blue-700 to-sky-600" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur text-white">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Ready to level up your brand experience?</h3>
                <p className="mt-2 text-white/85">
                  Get a free mini-audit with quick wins for UX, speed, and conversion.
                </p>
              </div>
              <div className="md:text-right">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
                >
                  Book a consult <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
