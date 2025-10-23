"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Sparkles,
  PenTool,
  Layout,
  Wand2,
  ArrowRight,
  BadgeCheck,
  Palette,
  MonitorSmartphone,
  Layers,
  Rocket,
  CheckCircle2,
  Target,
  Flag,
  Compass,
} from "lucide-react";

/* ----------------------------- Data ----------------------------- */
const cards = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Web / App Design",
    body:
      "Human-centered interfaces engineered for clarity, speed, and conversion. We blend UX research with crisp UI to ship pixel-perfect screens.",
    bullets: ["UX flows", "Design systems", "Component libraries"],
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "Website Redesign",
    body:
      "Refresh your experience without breaking what works. Modern layouts, faster performance, and tighter brand alignment end-to-end.",
    bullets: ["Audit & strategy", "SEO & performance", "A/B ready"],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Graphic Design",
    body:
      "Impactful visuals across every touchpoint—illustrations, infographics, and marketing collateral that tell your story with intent.",
    bullets: ["Infographics", "Campaign assets", "Print & digital"],
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Logo & Identity",
    body:
      "Timeless marks and scalable identity systems. From logotypes to complete brand kits ready for web, print, and product.",
    bullets: ["Brand marks", "Guidelines", "Usage systems"],
  },
];

const services = [
  {
    k1: "User Experience",
    k2: "Design",
    body:
      "We craft journeys that convert. Research-backed UX, prototyped rapidly and validated with data.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    k1: "Landing Page",
    k2: "Design",
    body:
      "High-impact pages engineered for acquisition. Narrative, hierarchy, and interactions tuned to your goals.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    k1: "Responsive Web",
    k2: "Design",
    body:
      "Fluid, device-perfect layouts that look incredible on mobile, tablet, and desktop—without compromise.",
    icon: <MonitorSmartphone className="w-5 h-5" />,
  },
];

const mga = [
  {
    icon: <Flag className="w-5 h-5" />,
    title: "Mission",
    body:
      "Design brand experiences people love using: fast to grasp, easy to act on, and memorable to revisit.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Goal",
    body:
      "Lift conversion and trust with a systemized design language that scales across web, app, and campaigns.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Approach",
    body:
      "Insights → concept sprints → design tokens & components → production assets with QA and handoff.",
  },
];

const tools = [
  { name: "Figma", src: "https://cdn.simpleicons.org/figma" },
  { name: "Adobe CC", src: "https://cdn.simpleicons.org/adobecreativecloud" },
  { name: "Laravel", src: "https://cdn.simpleicons.org/laravel/EF3B2D" }, // fixed: always loads
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss" },
];

/* ------------------ Simple horizontal snap scroller ------------------ */
function SnapScroller({ items }) {
  const ref = useRef(null);
  return (
    <div className="relative">
      <div
        ref={ref}
        className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((card) => (
          <article
            key={card.title}
            className="snap-start min-w-[320px] sm:min-w-[360px] lg:min-w-[420px]"
          >
            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/30 via-blue-600/30 to-fuchsia-500/30">
              <div className="relative h-full rounded-2xl bg-white/90 dark:bg-slate-950/70 ring-1 ring-slate-200/70 dark:ring-slate-800/70 p-6 overflow-hidden">
                <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 dark:bg-slate-900 dark:ring-slate-700">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{card.body}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-slate-700 dark:text-slate-200">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Page ----------------------------- */
export default function WhatWeBrandingPage() {
  const railRef = useRef(null);

  const scrollRail = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.9, 900);
    rail.scrollTo({ left: rail.scrollLeft + dir * amount, behavior: "smooth" });
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/branding.webp"
            alt="Abstract blue/navy gradients"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" />
              Brand & Creative
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              We design what’s next—<span className="text-sky-300">and make it work</span>.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Strategy-led branding and product-grade UI that converts. From identity to interfaces,
              we unify your story across web, app, and marketing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore our work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Get a proposal
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/80">
              {[
                ["22+ Years", "Design experience"],
                ["320+", "Brand systems"],
                ["98%", "Client retention"],
                ["A/B", "Conversion-first"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xl font-bold">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION • GOAL • APPROACH */}
      <section className="relative py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/60 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {mga.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-blue-600/40 to-fuchsia-500/40"
              >
                <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950/70 dark:ring-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                      {m.icon}
                    </div>
                    <p className="text-lg font-semibold">{m.title}</p>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN THAT WORKS */}
      <section className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Design that works
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Looks are great. Results are better.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Great design is how it feels and how it functions. We blend your brand vision with
                user needs to deliver delightful, measurable outcomes—every screen, every touchpoint.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                {[
                  "Research → Wireframes → High-fidelity UI → Design system",
                  "Performance, accessibility, and SEO baked in",
                  "Fluid, mobile-first layouts with modern motion",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                  alt="UI design explorations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 p-[2px]">
                  <div className="rounded-2xl bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/70">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <PenTool className="w-4 h-4 text-sky-600" />
                      Brand kit ready
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      Logos, color, typography, and components.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO – SCROLL RAIL */}
      <section id="work" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">What we do</p>
              <h3 className="mt-1 text-3xl font-bold">Ideas → Extraordinary visuals</h3>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
                From brochure sites to complex e-commerce, our team ships brand
                systems and interfaces trusted by growth teams and founders.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollRail(-1)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">◀</button>
              <button onClick={() => scrollRail(1)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">▶</button>
            </div>
          </div>

          <div ref={railRef} className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cards.map((c) => (
              <article key={c.title} className="snap-start min-w-[320px] sm:min-w-[360px] lg:min-w-[420px]">
                <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/30 via-blue-600/30 to-fuchsia-500/30">
                  <div className="relative h-full rounded-2xl bg-white/90 dark:bg-slate-950/70 ring-1 ring-slate-200/70 dark:ring-slate-800/70 p-6 overflow-hidden transition hover:-translate-y-0.5 hover:shadow-xl">
                    <div className="relative flex items-center gap-3 text-sky-700 dark:text-sky-300">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 dark:bg-slate-900 dark:ring-slate-700">
                        {c.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{c.title}</h4>
                    </div>
                    <p className="relative mt-3 text-slate-600 dark:text-slate-300">{c.body}</p>
                    <ul className="relative mt-4 space-y-2 text-sm">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-slate-700 dark:text-slate-200">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {/* no Learn more */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Web design services to supercharge your presence</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Built for clarity, speed, and scale—across every device.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.k1} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-blue-600/40 to-fuchsia-500/40">
                <div className="relative rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950/70 dark:ring-slate-800">
                  <div className="absolute -inset-16 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(30%_30%_at_80%_70%,rgba(59,130,246,0.15),transparent)]" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{s.k1}</div>
                      <div className="-mt-0.5 text-lg font-extrabold tracking-tight">{s.k2}</div>
                    </div>
                  </div>
                  <p className="relative mt-3 text-slate-600 dark:text-slate-300">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">Our Process</p>
            <h3 className="mt-1 text-3.5xl font-bold">From brief to brand lift</h3>
          </div>

          <ol className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              ["Discover", "Stakeholder interviews, analytics, and competitive scan."],
              ["Define", "Brand strategy, voice, and success metrics."],
              ["Design", "Concepts → systems → production-ready assets."],
              ["Deliver", "Guidelines, components, and launch support."],
            ].map(([h, p], idx) => (
              <li key={h} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm dark:bg-slate-950 dark:ring-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-lg font-semibold">{h}</div>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

  

      {/* GALLERY / PROOF */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { src: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200", href: "/work/case-study-1" },
              { src: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200", href: "/work/case-study-2" },
              { src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200", href: "/work/case-study-3" },
            ].map(({ src, href }, i) => (
              <Link key={src} href={href} className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <Image
                  src={src}
                  alt={`Case study ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white opacity-0 transition group-hover:opacity-100">
                  <div className="text-sm font-semibold">Case Study {i + 1}</div>
                  <div className="inline-flex items-center gap-1 text-xs">
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-600 via-blue-700 to-slate-900" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-extrabold text-white">Ready to build a brand that performs?</h3>
              <p className="mt-2 text-white/80">Tell us your goals. We’ll bring the system, the craft, and the results.</p>
            </div>
            <div className="flex items-end lg:justify-end">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-[1.01]">
                Start your project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
