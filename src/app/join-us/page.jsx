"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Sparkles,
  Users,
  HeartHandshake,
  Rocket,
  Lightbulb,
  Star,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Target,
  Flag,
  Compass,
  Trophy,
  Briefcase,
  Smile,
} from "lucide-react";

export default function WhyJoinUsPage() {
  const railRef = useRef(null);
  const scrollRail = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.9, 900);
    rail.scrollTo({ left: rail.scrollLeft + dir * amount, behavior: "smooth" });
  };

  const reasons = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Grow With Us",
      body: "We’re passionate about helping our team members achieve personal and professional growth through mentorship, learning opportunities, and leadership pathways.",
      bullets: ["Career mentoring", "Skill advancement", "Leadership exposure"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      body: "You’ll join a diverse and open-minded team where ideas matter, voices are heard, and collaboration is at the heart of everything we do.",
      bullets: ["Inclusive environment", "Team-driven success", "Open communication"],
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Meaningful Work",
      body: "Be part of projects that make a real-world impact — from community initiatives to innovative solutions that transform industries.",
      bullets: ["Purpose-driven", "Community impact", "Global outreach"],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      body: "We encourage creativity and experimentation — innovation isn’t an option here, it’s part of our DNA.",
      bullets: ["Autonomy to explore", "Cutting-edge tools", "Bold thinking"],
    },
  ];

  const values = [
    {
      icon: <Flag className="w-5 h-5" />,
      title: "Mission",
      body: "To empower passionate individuals to innovate, collaborate, and build a better tomorrow — together.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Goal",
      body: "Foster a global workplace where every team member feels inspired, supported, and motivated to grow.",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Approach",
      body: "We blend empathy, creativity, and technology to create an environment that values people as much as performance.",
    },
  ];

  const perks = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Recognition & Rewards",
      body: "We celebrate wins — big or small — because we know that every milestone contributes to the bigger picture.",
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "Healthy Work-Life",
      body: "Flexible hours, mental health days, and a balanced environment to help you thrive both professionally and personally.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Career Growth",
      body: "We invest in your success through structured learning paths, training programs, and leadership tracks.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
            alt="Team working together"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" />
              Join Our Team
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Build the future with us — <span className="text-sky-300">where purpose meets passion</span>.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              We’re more than just a workplace. We’re a family of dreamers, doers, and innovators — united by a shared goal to create meaningful change.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#reasons"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore Benefits <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Apply Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/80">
              {[
                ["200+", "Team Members"],
                ["15+", "Countries"],
                ["98%", "Retention Rate"],
                ["100%", "Growth Focused"],
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

      {/* VALUES */}
      <section className="relative py-16" id="values">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/60 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-blue-600/40 to-fuchsia-500/40"
              >
                <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950/70 dark:ring-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
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

      {/* WHY JOIN US (SCROLLER) */}
      <section id="reasons" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">Why Join Us</p>
              <h3 className="mt-1 text-3xl font-bold">Because your growth matters</h3>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
                We believe in creating an environment where your ideas, efforts, and ambitions
                thrive — together with our vision for global impact.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollRail(-1)} className="rounded-xl border px-3 py-2 text-sm">◀</button>
              <button onClick={() => scrollRail(1)} className="rounded-xl border px-3 py-2 text-sm">▶</button>
            </div>
          </div>

          <div ref={railRef} className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reasons.map((r) => (
              <article key={r.title} className="snap-start min-w-[320px] sm:min-w-[360px] lg:min-w-[420px]">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-sky-500/30 via-blue-600/30 to-fuchsia-500/30 p-[1px]">
                  <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-950/70 p-6">
                    <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 dark:bg-slate-900 dark:ring-slate-700">
                        {r.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{r.title}</h4>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">{r.body}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {r.bullets.map((b) => (
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
      </section>

      {/* PERKS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-3xl font-bold">Perks & Benefits</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              We care about your well-being, growth, and happiness inside and outside work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white/90 dark:bg-slate-950/70 p-6 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                    {p.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM IMAGE GRID */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900" id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8">Life at Our Company</h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
              "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
              "https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <Image
                  src={`${src}?auto=compress&cs=tinysrgb&dpr=2&w=1200`}
                  alt="Team moments"
                  fill
                  className="object-cover transition hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg ring-1 ring-white/10 hover:from-sky-500 hover:to-blue-600 transition"
            >
              See Open Roles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
    