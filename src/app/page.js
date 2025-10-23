"use client"

import Image from "next/image";
import TechIndexHero from "./components/TechIndexHero";
import HeroHeader from "./components/Header";
import ClientSpotlight from "./components/ClientSpotlight";
import Footer from "./components/Footer";
import HeroSlider from "./components/Hero";
import Link from "next/link";


const TEAM = [
  {
    name: "Jennifer Garcia",
    role: "DevOps Lead",
    img: "/images/umar-hayat.png",
    href: "/team",
  },
  {
    name: "Robert Liam",
    role: "Web Lead",
    img: "/images/khu8baib.png",
    href: "/team",
  },
  {
    name: "Jassica Ethan",
    role: "AI Lead",
    img: "/images/syed-hasham.png",
    href: "/team",
  },
  // {
  //   name: "Adaim Mrala",
  //   role: "IT Service Officer",
  //   img: "https://expert-themes.com/html/globex/images/resource/team-4.jpg",
  //   href: "/team",
  // },
];

export default function Home() {
  return (
    <>
       {/* --- Hero --- */}
       <HeroSlider />
   


      <section id="about" className="about-wrap py-16 bg-white lg:py-24">
  <div className="mx-auto max-w-[1200px] px-6">
    {/* Title */}
    <div className="mb-8">
      <div className="text-[13px] font-bold tracking-[.12em] text-[#0B4D8F]">
        ABOUT COMPANY 
      </div>
      <h2 className="mt-3 text-[34px] sm:text-[42px] md:text-[46px] font-bold leading-tight text-[#0A2C4A]">
        You Can not Use Up <br className="hidden sm:block" /> Creativity.
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left copy */}
      <div>
        <p className="text-[15px] leading-7 text-slate-600 max-w-[560px]">
          Does any industry face a more complex audience journey and marketing sales
          process than B2B technology? Consider the number of people who influence a sale,
          the length of the decision-making cycle, the competing interests of the people who
          purchase, implement, manage, and use the technology. It’s a lot meaningful content here.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-6">
          {/* Experience */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              {/* medal icon */}
              <svg className="h-9 w-9 text-[#0B4D8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 3h8l-2 4H10L8 3Z" />
                <circle cx="12" cy="13" r="4"/>
                <path d="M9.5 17 8 21l4-2 4 2-1.5-4"/>
              </svg>
            </div>
            <div>
              <h6 className="text-[18px] font-semibold text-[#0A2C4A]">Experience</h6>
              <p className="mt-1 text-[15px] text-slate-600">
                Our great team of more than 1400 software experts.
              </p>
            </div>
          </div>

          {/* Quick Support */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              {/* support/gear icon */}
              <svg className="h-9 w-9 text-[#0B4D8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
              </svg>
            </div>
            <div>
              <h6 className="text-[18px] font-semibold text-[#0A2C4A]">Quick Support</h6>
              <p className="mt-1 text-[15px] text-slate-600">
                We’ll help you test bold new ideas while sharing your.
              </p>
            </div>
          </div>
        </div>

        {/* Intro Video button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="btn-intro"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Contact Us &nbsp; &nbsp;

          </a>
        </div>


      </div>

<div className="images-column">
  <div className="about-right">
    <div className="about-stack mt-6">
      <div className="about-photo ap-1">
        <img src="https://expert-themes.com/html/globex/images/resource/about-1.jpg" alt="About 1" />
      </div>
      <div className="about-photo ap-2">
        <img src="https://expert-themes.com/html/globex/images/resource/about-2.jpg" alt="About 2" />
      </div>
      <div className="about-photo ap-3">
        <img src="https://expert-themes.com/html/globex/images/resource/about-3.jpg" alt="About 3" />
      </div>
      <div className="about-photo ap-4">
        <img src="https://expert-themes.com/html/globex/images/resource/about-4.jpg" alt="About 4" />
      </div>
    </div>
  </div>
</div>



    </div>
  </div>
</section>







{/* === FEATURE BAND (half above white, half over the dark section) === */}
<section className="bg-white">
  <div className="feature-overlap">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <article
          className="feat-card  translate-y-1/4"
          style={{
            backgroundImage:
              'url("https://expert-themes.com/html/globex/images/resource/feature-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-[1] h-full w-full p-8 sm:p-10 text-white">
            <div
              className="text-[42px] sm:text-[50px] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              35 <span className="pl-1">+</span>
            </div>
            <h4 className="mt-2 text-[20px] sm:text-[22px] font-semibold">
              Worldwide Work Pair
            </h4>
            <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-white/85">
              To succeed, every software solution must be deeply integrated
              into the existing tech environment..
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article
          className="feat-card translate-y-1/4"
          style={{
            backgroundImage:
              'url("https://expert-themes.com/html/globex/images/resource/feature-2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-[1] h-full w-full p-8 sm:p-10 text-white">
            <div
              className="text-[42px] sm:text-[50px] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              40 <span className="pl-1">k</span>
            </div>
            <h4 className="mt-2 text-[20px] sm:text-[22px] font-semibold">
              Happy Clients
            </h4>
            <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-white/85">
              To succeed, every software solution must be deeply integrated
              into the existing tech environment..
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>











<section id="what" className="services-section py-20 md:py-36">
  <div className="relative z-[1] mx-auto max-w-[1200px] px-6">
    {/* Title */}
    <div className="text-center">
      <div className="text-[13px] font-bold tracking-[.12em] text-white/80">
        WHO WE ARE
      </div>
      <h2
        className="mt-3 text-white text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold leading-[1.25]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        We deal with the aspects of <br className="hidden sm:block" />
        professional IT Services
      </h2>
    </div>


{/* ============  NEXT-LEVEL SERVICE CARDS  ============ */}
<section
  aria-labelledby="services"
  className="relative mt-14"
  onMouseMove={(e) => {
    // Spotlight follow (no libs)
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  }}
>
  {/* Background gradient wash + spotlight */}
  <div
    className="pointer-events-none absolute inset-0 rounded-3xl"
    style={{
      background:
        "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(11,77,143,0.12), transparent 45%)",
      maskImage:
        "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 50%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 50%, transparent 100%)",
      transition: "mask-position 120ms ease-out, background-position 120ms ease-out",
    }}
  />

  <div
    id="services"
    className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4 [--card-ring:linear-gradient(135deg,#0B4D8F_0%,#3BB1F5_40%,#00D1C1_100%)]"
  >
    {/* CARD: IT Solutions */}
    <article className="group relative overflow-hidden rounded-2xl">
      {/* Gradient ring frame */}
      <div className="absolute inset-0 rounded-2xl p-[1px]">
        <div className="h-full w-full rounded-2xl bg-[image:var(--card-ring)] opacity-30 blur-[1px] transition duration-300 group-hover:opacity-70" />
      </div>

      {/* Card body */}
      <div className="relative h-full rounded-2xl bg-white/90 px-7 pb-7 pt-8 shadow-[0_10px_30px_rgba(10,44,74,0.06)] backdrop-blur-sm transition-all duration-300 dark:bg-slate-900/80">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Icon bubble */}
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-[#0A2C4A] shadow-sm ring-1 ring-sky-100 dark:from-slate-800 dark:to-slate-800 dark:text-sky-200 dark:ring-slate-700">
            <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
              <rect x="3" y="4" width="12" height="9" rx="1.5" />
              <rect x="7" y="16" width="14" height="4" rx="1.5" />
              <path d="M9 9h4M10 18h8" />
            </svg>
          </div>

          {/* Badge */}
          <span className="rounded-full bg-[#0B4D8F]/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#0B4D8F] ring-1 ring-[#0B4D8F]/20 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-400/20">
            Core Service
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-semibold text-[#0B4D8F] dark:text-sky-200">
          <a href="/ITconsultation" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            IT Solutions
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </h3>

        {/* Copy */}
        <p className="mt-3 text-[14px] leading-6 text-slate-600 dark:text-slate-300/90">
          Plan, modernize, and support your stack—cloud, integrations, DevOps, and day-to-day IT. Reduce cost,
          increase uptime, and move faster.
        </p>

        {/* Footer: CTAs */}
        <div className="mt-6 flex items-center justify-between">
          <a
            href="/ITconsultation"
            className="inline-flex items-center cursor-pointer gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold text-[#0A2C4A] ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
            aria-label="Read more about IT Solutions"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <div className="flex -space-x-2">
            <span className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-medium text-sky-800 ring-1 ring-sky-200 dark:bg-sky-900/40 dark:text-sky-200 dark:ring-sky-800">
              Cloud
            </span>
            <span className="rounded-full bg-cyan-100 px-2 py-1 text-[11px] font-medium text-cyan-800 ring-1 ring-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-200 dark:ring-cyan-800">
              DevOps
            </span>
          </div>
        </div>
      </div>

      {/* Hover lift */}
      <div className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5" />
    </article>

    {/* CARD: Security System */}
    <article className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 rounded-2xl p-[1px]">
        <div className="h-full w-full rounded-2xl bg-[image:var(--card-ring)] opacity-30 blur-[1px] transition duration-300 group-hover:opacity-70" />
      </div>

      <div className="relative h-full rounded-2xl bg-white/90 px-7 pb-7 pt-8 shadow-[0_10px_30px_rgba(10,44,74,0.06)] backdrop-blur-sm transition-all duration-300 dark:bg-slate-900/80">
        <div className="flex items-start justify-between">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-[#0A2C4A] shadow-sm ring-1 ring-sky-100 dark:from-slate-800 dark:to-slate-800 dark:text-sky-200 dark:ring-slate-700">
            <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
              <rect x="3" y="4" width="18" height="12" rx="1.8" />
              <path d="M9 20h6M12 16v4" />
            </svg>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-400/20">
            Security
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-[#0B4D8F] dark:text-sky-200">
          <a href="/ITconsultation#security" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            Security System
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-slate-600 dark:text-slate-300/90">
          Hardening for web, mobile, and infrastructure: IAM, endpoint protection, 24/7 monitoring, backups,
          disaster recovery, and compliance readiness.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="/ITconsultation#security"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] cursor-pointer font-semibold text-[#0A2C4A] ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
            aria-label="Read more about Security System"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <div className="flex -space-x-2">
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-200 dark:ring-emerald-800">
              SOC
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-800 ring-1 ring-slate-200 dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-700">
              DR/BCP
            </span>
          </div>
        </div>
      </div>
    </article>

    {/* CARD: Web Development */}
    <article className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 rounded-2xl p-[1px]">
        <div className="h-full w-full rounded-2xl bg-[image:var(--card-ring)] opacity-30 blur-[1px] transition duration-300 group-hover:opacity-70" />
      </div>

      <div className="relative h-full rounded-2xl bg-white/90 px-7 pb-7 pt-8 shadow-[0_10px_30px_rgba(10,44,74,0.06)] backdrop-blur-sm transition-all duration-300 dark:bg-slate-900/80">
        <div className="flex items-start justify-between">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-[#0A2C4A] shadow-sm ring-1 ring-sky-100 dark:from-slate-800 dark:to-slate-800 dark:text-sky-200 dark:ring-slate-700">
            <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 7l-2 10" />
            </svg>
          </div>
          <span className="rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-fuchsia-700 ring-1 ring-fuchsia-500/20 dark:text-fuchsia-300 dark:ring-fuchsia-400/20">
            Experience
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-[#0B4D8F] dark:text-sky-200">
          <a href="/web-development" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            Web Development
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-slate-600 dark:text-slate-300/90">
          High-performance sites in React/Next.js with headless CMS. SEO-ready, accessible, responsive, and built
          for conversion & speed.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="/web-development"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] cursor-pointer font-semibold text-[#0A2C4A] ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
            aria-label="Read more about Web Development"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <div className="flex -space-x-2">
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-[11px] font-medium text-indigo-800 ring-1 ring-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-200 dark:ring-indigo-800">
              Next.js
            </span>
            <span className="rounded-full bg-rose-100 px-2 py-1 text-[11px] font-medium text-rose-800 ring-1 ring-rose-200 dark:bg-rose-900/40 dark:text-rose-200 dark:ring-rose-800">
              Headless
            </span>
          </div>
        </div>
      </div>
    </article>

    {/* CARD: App Development */}
    <article className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 rounded-2xl p-[1px]">
        <div className="h-full w-full rounded-2xl bg-[image:var(--card-ring)] opacity-30 blur-[1px] transition duration-300 group-hover:opacity-70" />
      </div>

      <div className="relative h-full rounded-2xl bg-white/90 px-7 pb-7 pt-8 shadow-[0_10px_30px_rgba(10,44,74,0.06)] backdrop-blur-sm transition-all duration-300 dark:bg-slate-900/80">
        <div className="flex items-start justify-between">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-[#0A2C4A] shadow-sm ring-1 ring-sky-100 dark:from-slate-800 dark:to-slate-800 dark:text-sky-200 dark:ring-slate-700">
            <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
              <rect x="4" y="6" width="16" height="10" rx="1.6" />
              <path d="M2 18h20" />
            </svg>
          </div>
          <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300 dark:ring-amber-400/20">
            Mobile
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-[#0B4D8F] dark:text-sky-200">
          <a href="/mobile-development" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            App Development
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-slate-600 dark:text-slate-300/90">
          Native iOS/Android & cross-platform (React Native/Flutter), secure APIs, analytics, CI/CD—from MVP to
          launch & ongoing support.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="/mobile-development"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] cursor-pointer font-semibold text-[#0A2C4A] ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
            aria-label="Read more about App Development"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <div className="flex -space-x-2">
            <span className="rounded-full bg-amber-100 px-2 py-1 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:ring-amber-800">
              iOS
            </span>
            <span className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-medium text-sky-800 ring-1 ring-sky-200 dark:bg-sky-900/40 dark:text-sky-200 dark:ring-sky-800">
              Android
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>

  {/* Motion preference: disable spotlight if user prefers reduced motion */}
  <style jsx>{`
    @media (prefers-reduced-motion: reduce) {
      section[aria-labelledby="services"] > div:first-child {
        display: none;
      }
    }
  `}</style>
</section>


  
  </div>
</section>








<section className="services-two md:-translate-y-1/5 mt-10 md:mt-16">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
    {/* BLUE HEADER PANEL */}
    <div className="services2-head px-4 sm:px-10 py-8 sm:py-12 reveal-up rounded-xl sm:rounded-[20px]">
      {/* faint shapes — hide on mobile to reduce clutter */}
      <div className="hidden sm:block icon-one"></div>
      <div className="hidden sm:block icon-two"></div>
      <div className="hidden sm:block icon-three"></div>

      {/* title */}
      <div className="relative z-[1] text-center text-white">
        <div className="text-[11px] sm:text-[13px] font-bold tracking-[.14em] opacity-90">
          WHAT WE SERVE
        </div>
        <h2
        className="mt-3 text-white text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold leading-[1.25]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        We deal with the aspects of <br className="hidden sm:block" />
        professional IT Services
      </h2>
      </div>
    </div>

 {/* ✨ NEXT-LEVEL SERVICE CARDS */}
<div className="-mt-8 sm:-mt-6 max-w-[1100px] mx-auto">
  {/* data-driven so you can tweak easily */}
  {[
    {
      title: "Web Development",
      desc:
        "High-performance Next.js apps, headless CMS, and pixel-perfect UI built for speed and scale.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="1.6"/>
          <path d="M7 10l-3 2 3 2M17 10l3 2-3 2M12 9l-2 6"/>
        </svg>
      ),
      badge: "Pro",
      delay: "reveal-delay-1",
    },
    {
      title: "Mobile Development",
      desc:
        "iOS/Android with one codebase. PWAs or React Native with smooth performance and native feel.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="7" y="2" width="10" height="20" rx="2"/>
          <circle cx="12" cy="18" r="1.3"/>
          <path d="M9 6h6"/>
        </svg>
      ),
      badge: "Native",
      delay: "reveal-delay-2",
    },
    {
      title: "Branding & Identity",
      desc:
        "Strategy-led identities, systems, and guidelines that stay consistent across every touchpoint.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="12" rx="1.6"/>
          <path d="M7 9h10M7 13h4"/>
        </svg>
      ),
      badge: "Studio",
      delay: "reveal-delay-3",
    },
    {
      title: "Digital Marketing",
      desc:
        "SEO + ads + content engines that compound. Analytics-driven funnels, not guesswork.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      badge: "Growth",
      delay: "reveal-delay-1",
    },
    {
      title: "IT Consultancy",
      desc:
        "Solve bottlenecks, modernize stacks, harden security, and ship with confidence.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="12" rx="1.6"/>
          <path d="M9 21h6M12 17v4"/>
        </svg>
      ),
      badge: "Ops",
      delay: "reveal-delay-2",
    },
    {
      title: "Dedicated Team",
      desc:
        "Embedded squads that ship like an in-house team — velocity, rituals, and outcomes.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="8" cy="7" r="3"/>
          <circle cx="16" cy="7" r="3"/>
          <path d="M2 20c1.2-3 3.8-5 6-5s4.8 2 6 5M14 12h4a4 4 0 0 1 4 4v4"/>
        </svg>
      ),
      badge: "Elite",
      delay: "reveal-delay-3",
    },
  ].reduce((rows, item, idx, arr) => {
    if (idx % 3 === 0) rows.push(arr.slice(idx, idx + 3));
    return rows;
  }, []).map((row, rIdx) => (
    <div
      key={rIdx}
      className="grid grid-cols-1 gap-4 mb-4 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
    >
      {row.map((card, i) => (
        <article
          key={card.title}
          aria-label={card.title}
          className={[
            // gradient border wrapper
            "group relative p-[1px] rounded-2xl",
            "bg-gradient-to-br from-[#0a2c4a] via-blue-500/60 to-cyan-400",
            "shadow-[0_0_0_1px_rgba(10,44,74,.08),0_10px_30px_-10px_rgba(16,24,40,.2)]",
            "transition-transform duration-300 will-change-transform",
            "hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(16,24,40,.28)]",
            card.delay,
          ].join(" ")}
        >
          {/* inner glass panel */}
          <div
            className={[
              "rounded-[14px] sm:rounded-[16px] p-5 sm:p-7",
              "bg-white/75 dark:bg-slate-900/60 backdrop-blur-xl",
              "ring-1 ring-black/5 dark:ring-white/5",
              "relative overflow-hidden",
            ].join(" ")}
          >
            {/* radial glow */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-500/10" />
            {/* badge */}
            <span className="absolute right-3 top-3 select-none rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
              {card.badge}
            </span>

            {/* icon bubble */}
            <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl bg-slate-50/80 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-inner">
              {/* tint icon to theme on hover */}
              <div className="transition-colors duration-300 group-hover:[&>svg]:stroke-indigo-700 dark:group-hover:[&>svg]:stroke-cyan-700">
                {card.icon}
              </div>
            </div>

            {/* title */}
            <h5 className="mt-4 text-[16px] sm:text-[18px] font-semibold tracking-tight text-[#0A2C4A] dark:text-slate-100">
              {card.title}
            </h5>

            {/* description */}
            <p className="mt-2 text-[14px] leading-6 text-slate-600 dark:text-slate-300">
              {card.desc}
            </p>

            {/* bottom action / chips */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  Strategy
                </span>
                <span className="rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  Build
                </span>
                <span className="hidden sm:inline rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  Launch
                </span>
              </div>

              {/* arrow with micro-motion */}
              <button
                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:gap-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
                type="button"
              >
                Explore
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* sheen on hover */}
            <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
          </div>
        </article>
      ))}
    </div>
  ))}
</div>

  </div>
</section>




 <TechIndexHero />


<section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://expert-themes.com/html/globex/images/background/2.jpg)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16 md:py-20">
        {/* Sec Title */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* left */}
            <div className="max-w-[600px]">
              <div className="text-[12px] font-bold tracking-wide text-[#0B4D8F] uppercase">
                Our Dedicated Team
              </div>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0A2C4A] sm:text-4xl md:text-[42px] md:leading-[1.2]">
                We have Large No <br className="hidden sm:block" />
                of Expert Team Member
              </h2>
            </div>
            {/* right */}
            <div className="max-w-[520px] text-[15px] leading-7 text-[#657283] md:text-right">
              Our goal is to help our companies maintain or achieve best-
              in-class <br className="hidden md:block" />
              positions in their respective industries and our team works.
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article key={m.name} className="group">
              <div className="relative">
                {/* image */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#e9e9e9]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

            

                {/* name plate */}
                <div className="absolute left-4 -bottom-20 right-4">
                  <div className="rounded-md bg-white shadow-[0_12px_20px_rgba(0,0,0,0.08)]">
                    <div className="h-[4px] w-full rounded-t-md bg-[#2F6BFF]" />
                    <div className="px-5 py-4">
                      <h5 className="text-[18px] font-extrabold text-[#0A2C4A]">
                        <p>{m.name}</p>
                      </h5>
                      <div className="mt-1 text-[13px] font-medium text-[#8A95A6]">
                        {m.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* spacer to account for the overhang */}
              <div className="h-16" />
            </article>
          ))}
        </div>
      </div>
    </section>


<ClientSpotlight speed={28} gap={48} />

    



    </>
  );
}

