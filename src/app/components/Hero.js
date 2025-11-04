"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/** Ryzax Technologies Hero Slider — Professional showcase with theme support, auto-play, crossfade, Ken Burns, parallax, dots, keyboard, swipe */

const SLIDES = [
  {
    id: 1,
    tag: "Web Development",
    title: <>Transform Ideas Into <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Digital Reality</span></>,
    subtitle: "We build lightning-fast, secure web applications that drive real business growth. From concept to launch, we deliver excellence.",
    stats: { number: "500+", label: "Projects Delivered" },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Mobile Development",
    title: <>Build Apps That <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Users Love</span></>,
    subtitle: "Native iOS & Android apps with stunning UI/UX. Cross-platform solutions that perform like native with React Native & Flutter.",
    stats: { number: "1M+", label: "App Downloads" },
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "AI & Machine Learning",
    title: <>Harness The Power Of <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Artificial Intelligence</span></>,
    subtitle: "Custom AI solutions, machine learning models, and intelligent automation that transform your business processes.",
    stats: { number: "95%", label: "Accuracy Rate" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "Cloud & DevOps",
    title: <>Scale Without <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Limits</span></>,
    subtitle: "Cloud-native architecture, CI/CD pipelines, and DevOps automation that ensures 99.9% uptime and seamless scaling.",
    stats: { number: "99.9%", label: "Uptime Guarantee" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
  },
];

const AUTOPLAY_MS = 3500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timer = useRef(null);
  const touch = useRef({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Reset index when component mounts (page navigation)
  useEffect(() => {
    setIndex(0);
  }, []);

  // Simple autoplay effect
  useEffect(() => {
    if (reducedMotion || hovering || !inView) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    
    return () => clearInterval(interval);
  }, [reducedMotion, hovering, inView]);

  // Preload next image
  useEffect(() => {
    const nextIdx = (index + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].image;
  }, [index]);

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

  const goTo = (i) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  };
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
      className="relative h-screen min-h-[650px] w-full overflow-hidden transition-all duration-500"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Ryzax Technologies services hero"
    >
      {/* Slides */}
      {SLIDES.map((s, i) => {
        const active = i === index;
        return (
          <article
            key={s.id}
            className={`absolute inset-0 will-change-transform ${
              reducedMotion
                ? `${active ? "opacity-100" : "opacity-0"} transition-opacity duration-300`
                : `transition-all duration-500 ease-out ${
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
                transitionDuration: reducedMotion ? undefined : "3500ms",
              }}
            />

            {/* Enhanced gradient scrim with theme support */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/30 dark:from-primary/70 dark:via-primary/50 dark:to-primary/20 transition-all duration-500" />

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

            {/* Enhanced Content */}
            <div className="relative z-[2] mx-auto flex h-full max-w-[1200px] items-center px-6 pt-20">
              <div className="max-w-[900px]">
                {/* Enhanced Tag */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:scale-105">
                  <div className="relative">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    <span className="absolute inset-0 h-2 w-2 rounded-full bg-orange-400 animate-ping" />
                  </div>
                  <span className="text-sm font-bold tracking-[.14em] text-white uppercase">{s.tag}</span>
                </div>

                {/* Enhanced Title */}
                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500">
                  {s.title}
                </h1>

                {/* Enhanced Subtitle */}
                <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/95 font-medium transition-all duration-500">
                  {s.subtitle}
                </p>

                {/* Stats Badge */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md border border-white/20">
                  <div className="text-2xl font-black text-orange-400">{s.stats.number}</div>
                  <div className="text-sm font-semibold text-white/90">{s.stats.label}</div>
                </div>

                {/* Enhanced CTAs */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-orange-500/25 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 transition-transform group-hover:translate-x-1">Start Your Project</span>
                    <svg className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="#about"
                    className="group inline-flex items-center justify-center rounded-xl border-2 border-white/60 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-105"
                  >
                    <svg className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    <span className="transition-transform group-hover:translate-x-1">Watch Demo</span>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex items-center gap-6 text-white/70">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Money Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {/* Enhanced Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[3] mx-auto flex max-w-[1200px] items-center justify-between px-6">
        {/* Enhanced dots with progress */}
        <ul className="pointer-events-auto flex items-center gap-2">
          {SLIDES.map((_, i) => {
            const active = i === index;
            return (
              <li key={i}>
                <button
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`relative h-2.5 w-6 overflow-hidden rounded-full border border-white/20 bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                    active ? "w-12 shadow-lg" : "hover:bg-white/30"
                  }`}
                >
                  <span
                    className="absolute left-0 top-0 h-full bg-orange-400 shadow-sm"
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

        {/* Enhanced Prev / Next */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-3">
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
      className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg"
    >
      <span className="transition-transform group-hover:scale-110">{children}</span>
      <span className="text-sm font-semibold transition-transform group-hover:translate-x-1">{label}</span>
    </button>
  );
}

function ParallaxDecor({ active }) {
  return (
    <>
      {/* Enhanced soft circle glow */}
      <div
        className={`absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary blur-[120px] opacity-30 transition-all duration-1000 dark:bg-primary/60 ${
          active ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        }`}
      />
      {/* Enhanced corner gradient wedge */}
      <div
        className={`pointer-events-none absolute -right-14 -bottom-14 h-72 w-72 rotate-45 rounded-3xl bg-gradient-to-br from-orange-400 to-transparent opacity-30 blur-[80px] transition-all duration-1000 ${
          active ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        }`}
      />
      {/* Enhanced dotted mesh */}
      <svg
        className={`absolute right-8 top-16 opacity-30 transition-all duration-700 ${
          active ? "translate-y-0 scale-100" : "translate-y-2 scale-95"
        }`}
        width="160"
        height="120"
        viewBox="0 0 160 120"
        aria-hidden="true"
      >
        {[...Array(9)].map((_, r) =>
          [...Array(12)].map((_, c) => (
            <circle 
              key={`${r}-${c}`} 
              cx={c * 14} 
              cy={r * 14} 
              r="1.4" 
              fill="white" 
              className="animate-pulse"
              style={{ animationDelay: `${(r + c) * 0.1}s` }}
            />
          ))
        )}
      </svg>
    </>
  );
}