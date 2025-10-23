"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/** SeaTech Hero Slider — tailored to your 6 services (auto-play, crossfade, Ken Burns, parallax, dots, keyboard, swipe) */

const SLIDES = [
  {
    id: 1,
    tag: "Web Development",
    title: <>Experience-Led <span className="text-[#F9B233]">Web Development</span></>,
    subtitle:
      "We craft fast, secure, accessible websites and web apps that turn strategy into measurable results.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop", // dev team / code review
  },
  {
    id: 2,
    tag: "Mobile Development",
    title: <>Modern <span className="text-[#F9B233]">Mobile Apps</span></>,
    subtitle:
      "Native and cross-platform apps with clean UX, reliable integrations, and enterprise-grade performance.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1920&auto=format&fit=crop", // mobile app design/dev
  },
  {
  id: 3,
  tag: "Branding & Identity",
  title: <>Distinctive <span className="text-[#F9B233]">Brand Systems</span></>,
  subtitle:
    "Strategy, visual identity, and design systems that connect meaningfully with your audience.",
  image:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop", // brand guideline boards + swatches
},

  {
    id: 4,
    tag: "Digital Marketing",
    title: <>Performance-Driven <span className="text-[#F9B233]">Marketing</span></>,
    subtitle:
      "SEO, content, and campaigns that build awareness and convert traffic into customers.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop", // analytics dashboard / marketing
  },
  {
    id: 5,
    tag: "IT Consultancy",
    title: <>Practical <span className="text-[#F9B233]">IT Consulting</span></>,
    subtitle:
      "We remove workflow friction, modernize stacks, and guide technology decisions with clarity.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920&auto=format&fit=crop", // consulting meeting / whiteboard
  },
  {
    id: 6,
    tag: "Dedicated Team",
    title: <>A <span className="text-[#F9B233]">Dedicated Team</span> on Your Side</>,
    subtitle:
      "Assemble a focused, long-term squad to build, ship, and iterate — like an in-house unit.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1920&auto=format&fit=crop", // team collaboration
  },
];

const AUTOPLAY_MS = 5200;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timer = useRef(null);
  const touch = useRef({ x: 0, y: 0 });
  const sectionRef = useRef(null);

// Autoplay (continuous, except when user prefers reduced motion)
useEffect(() => {
  if (reducedMotion) return;
  const id = setInterval(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, AUTOPLAY_MS);
  return () => clearInterval(id);
}, [reducedMotion]);


  // Preload next image
  useEffect(() => {
    const nextIdx = (index + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].image;
  }, [index]);

  // Pause on tab hidden
  useEffect(() => {
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pause if hero not in viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? true),
      { threshold: 0.2 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (hovering || !inView || reducedMotion) return stop();
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, inView, index, reducedMotion]);

  const start = () => {
    stop();
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
  };
  const stop = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const goTo = (i) => setIndex((i + SLIDES.length) % SLIDES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // Touch swipe
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[580px] w-full overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="SeaTech services hero"
    >
      {/* Slides */}
      {SLIDES.map((s, i) => {
        const active = i === index;
        return (
          <article
            key={s.id}
            className={`absolute inset-0 will-change-transform ${
              reducedMotion
                ? `${active ? "opacity-100" : "opacity-0"} transition-opacity duration-500`
                : `transition-all duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${
                    active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                  }`
            }`}
            aria-hidden={!active}
          >
            {/* Background (Ken Burns via inline duration so Tailwind compiles reliably) */}
            <div
              className={`absolute inset-0 bg-center bg-cover ${reducedMotion ? "" : "transition-transform"}`}
              style={{
                backgroundImage: `url(${s.image})`,
                transform: active && !reducedMotion ? "scale(1.08)" : "scale(1)",
                transitionDuration: reducedMotion ? undefined : "5200ms",
              }}
            />

            {/* Gradient scrim */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,44,74,0.85),rgba(11,77,143,0.65)_45%,rgba(11,77,143,0.35))]" />

            {/* Subtle grain on md+ */}
            <div
              className="pointer-events-none absolute inset-0 hidden opacity-[0.11] mix-blend-overlay md:block"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1526312426976-593c2d0fb1df?q=80&w=1600&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            />

            {/* Parallax decor */}
            {!reducedMotion && <ParallaxDecor active={active} />}

            {/* Content */}
            <div className="relative z-[2] mx-auto flex h-full max-w-[1200px] items-center px-6">
              <div className="max-w-[820px]">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#F9B233]" />
                  <span className="text-xs font-semibold tracking-[.14em] text-white/90">{s.tag}</span>
                </div>

                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                  {s.title}
                </h1>

                <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/90 font-[Open_Sans,sans-serif]">
                  {s.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-[#F9B233] px-7 py-3 font-semibold text-[#0B4D8F] shadow-md transition hover:brightness-110"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-center rounded-md border-2 border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B4D8F]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[3] mx-auto flex max-w-[1200px] items-center justify-between px-6">
        {/* Dots with progress */}
        <ul className="pointer-events-auto flex items-center gap-2">
          {SLIDES.map((_, i) => {
            const active = i === index;
            return (
              <li key={i}>
                <button
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`relative h-2.5 w-6 overflow-hidden rounded-full border border-white/20 bg-white/20 backdrop-blur transition ${
                    active ? "w-12" : "hover:bg-white/30"
                  }`}
                >
                  <span
                    className="absolute left-0 top-0 h-full bg-[#F9B233]"
                    style={{
                      width: active && !reducedMotion ? "100%" : "0%",
                      transitionProperty: "width",
                      transitionDuration: `${AUTOPLAY_MS}ms`,
                      transitionTimingFunction: "linear",
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Prev / Next */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-2">
          <HeroButton label="Prev" onClick={prev}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </HeroButton>
          <HeroButton label="Next" onClick={next}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </HeroButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function HeroButton({ children, label, onClick }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-white backdrop-blur-lg transition hover:bg-white/20"
    >
      {children}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function ParallaxDecor({ active }) {
  return (
    <>
      {/* soft circle glow */}
      <div
        className={`absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#0B4D8F] blur-[120px] opacity-30 transition-transform duration-1000 ${
          active ? "translate-y-0" : "translate-y-6"
        }`}
      />
      {/* corner gradient wedge */}
      <div
        className={`pointer-events-none absolute -right-14 -bottom-14 h-72 w-72 rotate-45 rounded-3xl bg-gradient-to-br from-[#F9B233] to-transparent opacity-30 blur-[80px] transition-transform duration-1000 ${
          active ? "translate-y-0" : "translate-y-6"
        }`}
      />
      {/* dotted mesh */}
      <svg
        className={`absolute right-8 top-16 opacity-30 transition-transform duration-700 ${
          active ? "translate-y-0" : "translate-y-2"
        }`}
        width="160"
        height="120"
        viewBox="0 0 160 120"
        aria-hidden="true"
      >
        {[...Array(9)].map((_, r) =>
          [...Array(12)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 14} cy={r * 14} r="1.4" fill="white" />
          ))
        )}
      </svg>
    </>
  );
}
