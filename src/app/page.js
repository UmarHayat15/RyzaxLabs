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
    name: "Umar Hayat",
    role: "DevOps Lead",
    img: "/images/umar-hayat.png",
    href: "/contact",
  },
  {
    name: "Khubaib Khalid",
    role: "Web Lead",
    img: "/images/khubaib-khalid.png",
    href: "/contact",
  },
  {
    name: "Syed Heshaam",
    role: "AI Lead",
    img: "/images/syed-hasham.png",
    href: "/contact",
  },
  // {
  //   name: "Adaim Mrala",
  //   role: "IT Service Officer",
  //   img: "/images/",
  //   href: "/contact",
  // },
];

export default function Home() {
  return (
    <>
       {/* --- Hero --- */}
       <HeroSlider />

      {/* === ENHANCED ABOUT SECTION === */}
      <section id="about" className="about-wrap py-12 bg-background lg:py-16 transition-colors duration-300">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Title */}
          <div className="mb-8">
            <div className="text-[13px] font-bold tracking-[.12em] text-primary uppercase">
              ABOUT COMPANY 
            </div>
            <h2 className="mt-3 text-[34px] sm:text-[42px] md:text-[46px] font-bold leading-tight text-foreground">
              You Can not Use Up <br className="hidden sm:block" /> Creativity.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left copy */}
            <div>
              <p className="text-[15px] leading-7 text-muted-foreground max-w-[560px]">
                Does any industry face a more complex audience journey and marketing sales
                process than B2B technology? Consider the number of people who influence a sale,
                the length of the decision-making cycle, the competing interests of the people who
                purchase, implement, manage, and use the technology. It is a lot meaningful content here.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-6">
                {/* Experience */}
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M8 3h8l-2 4H10L8 3Z" />
                        <circle cx="12" cy="13" r="4"/>
                        <path d="M9.5 17 8 21l4-2 4 2-1.5-4"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-[18px] font-semibold text-foreground">Experience</h6>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      Our great team of more than 1400 software experts.
                    </p>
                  </div>
                </div>

                {/* Quick Support */}
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="5"/>
                        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-[18px] font-semibold text-foreground">Quick Support</h6>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      We will help you test bold new ideas while sharing your.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="h-8 w-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
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
                  {/* <div className="about-photo ap-4">
                    <img src="https://expert-themes.com/html/globex/images/resource/about-4.jpg" alt="About 4" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ENHANCED FEATURE BAND === */}
      <section className="bg-background transition-colors duration-300 overflow-x-hidden py-20 mt-20">
        <div className="mx-auto max-w-[1200px] px-6 overflow-x-hidden">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1 - Projects Delivered */}
            <article className="group relative overflow-hidden rounded-3xl h-[280px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 via-teal-600/50 to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <div className="relative z-10 h-full w-full p-8 sm:p-10 text-white flex flex-col justify-center">
                <div className="text-[52px] sm:text-[64px] font-black leading-none tracking-tight font-[Poppins,sans-serif] group-hover:scale-110 transition-transform duration-300">
                  500<span className="text-3xl text-emerald-200">+</span>
                </div>
                <h4 className="mt-4 text-[24px] sm:text-[28px] font-bold">
                  Projects Delivered
                </h4>
                <p className="mt-4 max-w-[400px] text-[16px] leading-7 text-white/90">
                  Successfully launched websites, mobile apps, and digital solutions that drive real business growth.
                </p>
                
                {/* Achievement Badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <svg className="h-4 w-4 text-emerald-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-white">Verified Results</span>
                </div>
              </div>
            </article>

            {/* Card 2 - Happy Clients */}
            <article className="group relative overflow-hidden rounded-3xl h-[280px] bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 shadow-2xl hover:shadow-violet-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/70 via-purple-600/50 to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <div className="relative z-10 h-full w-full p-8 sm:p-10 text-white flex flex-col justify-center">
                <div className="text-[52px] sm:text-[64px] font-black leading-none tracking-tight font-[Poppins,sans-serif] group-hover:scale-110 transition-transform duration-300">
                  98<span className="text-3xl text-violet-200">%</span>
                </div>
                <h4 className="mt-4 text-[24px] sm:text-[28px] font-bold">
                  Client Satisfaction
                </h4>
                <p className="mt-4 max-w-[400px] text-[16px] leading-7 text-white/90">
                  Our clients love working with us. From startups to enterprises, we deliver exceptional results every time.
                </p>
                
                {/* Star Rating */}
                <div className="mt-6 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-6 w-6 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white/90 font-semibold">4.9/5</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* === ENHANCED SERVICES SECTION === */}
      <section id="what" className="services-section relative py-20 md:py-36 transition-colors duration-300 overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Enhanced Background */}
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
        
        <div className="relative z-[1] mx-auto max-w-[1200px] px-6 overflow-x-hidden">
          {/* Enhanced Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[12px] font-bold tracking-[.15em] text-primary uppercase">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-black leading-[1.15] font-[Poppins,sans-serif] tracking-tight">
              We deal with the aspects of{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                professional IT Services
              </span>
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Delivering cutting-edge technology solutions that transform businesses and drive innovation across industries.
            </p>
          </div>

          {/* Enhanced Service Cards */}
          <section
            aria-labelledby="services"
            className="relative"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              const x = e.clientX - r.left;
              const y = e.clientY - r.top;
              el.style.setProperty("--spot-x", `${x}px`);
              el.style.setProperty("--spot-y", `${y}px`);
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(800px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(59,177,245,0.12), rgba(139,92,246,0.08), transparent 60%)",
                maskImage:
                  "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 40%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 40%, transparent 100%)",
                transition: "all 150ms ease-out",
              }}
            />

            <div
              id="services"
              className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4"
            >
              {/* IT Solutions Card */}
              <article className="group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-full px-7 pb-7 pt-8">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
                        <rect x="3" y="4" width="12" height="9" rx="1.5" />
                        <rect x="7" y="16" width="14" height="4" rx="1.5" />
                        <path d="M9 9h4M10 18h8" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Core Service
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    <a href="/ITconsultation" className="inline-flex items-center gap-2 hover:underline underline-offset-4 group-hover:text-primary transition-colors duration-300">
                      IT Solutions
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-muted-foreground">
                    Plan, modernize, and support your stack—cloud, integrations, DevOps, and day-to-day IT. Reduce cost,
                    increase uptime, and move faster.
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="/ITconsultation"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold text-foreground ring-1 ring-border transition-all hover:bg-accent hover:ring-primary/30"
                    >
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </a>

                    <div className="flex -space-x-2">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary ring-1 ring-primary/20">
                        Cloud
                      </span>
                      <span className="rounded-full bg-orange-400/10 px-2 py-1 text-[11px] font-medium text-orange-600 ring-1 ring-orange-400/20">
                        DevOps
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Web Development Card */}
              <article className="group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-full px-7 pb-7 pt-8">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
                        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 7l-2 10" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-500/20">
                      Experience
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    <a href="/web-development" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                      Web Development
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-muted-foreground">
                    High-performance sites in React/Next.js with headless CMS. SEO-ready, accessible, responsive, and built
                    for conversion & speed.
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="/web-development"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold text-foreground ring-1 ring-border transition-all hover:bg-accent hover:ring-primary/30"
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

              {/* Mobile Development Card */}
              <article className="group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-full px-7 pb-7 pt-8">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
                        <rect x="4" y="6" width="16" height="10" rx="1.6" />
                        <path d="M2 18h20" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-700 ring-1 ring-amber-500/20">
                      Mobile
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    <a href="/mobile-development" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                      App Development
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-muted-foreground">
                    Native iOS/Android & cross-platform (React Native/Flutter), secure APIs, analytics, CI/CD—from MVP to
                    launch & ongoing support.
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="/mobile-development"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold text-foreground ring-1 ring-border transition-all hover:bg-accent hover:ring-primary/30"
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

              {/* AI Solutions Card */}
              <article className="group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-full px-7 pb-7 pt-8">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6" />
                        <path d="m21 12-6-3-6 3-6-3" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-purple-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-purple-700 ring-1 ring-purple-500/20">
                      AI
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    <a href="/ai" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                      AI Solutions
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-muted-foreground">
                    Machine learning, NLP, computer vision, and intelligent automation solutions that transform business processes.
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="/ai"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold text-foreground ring-1 ring-border transition-all hover:bg-accent hover:ring-primary/30"
                    >
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </a>

                    <div className="flex -space-x-2">
                      <span className="rounded-full bg-purple-100 px-2 py-1 text-[11px] font-medium text-purple-800 ring-1 ring-purple-200 dark:bg-purple-900/40 dark:text-purple-200 dark:ring-purple-800">
                        ML
                      </span>
                      <span className="rounded-full bg-pink-100 px-2 py-1 text-[11px] font-medium text-pink-800 ring-1 ring-pink-200 dark:bg-pink-900/40 dark:text-pink-200 dark:ring-pink-800">
                        NLP
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <TechIndexHero />

      {/* === ULTIMATE CREATIVE TEAM SECTION === */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
        </div>
        
        {/* Animated Mesh Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'mesh-move 20s linear infinite'
          }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10  mx-auto max-w-7xl px-6 py-20">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.4s'}} />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
                Meet Our Experts
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Creative Minds
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Behind Innovation
              </span>
            </h2>
            
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Our world-class team of visionaries, architects, and innovators who transform ideas into digital masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {TEAM.map((member, index) => (
              <article key={member.name} className="group relative">
                {/* Floating Card Container */}
                <div className="relative transform transition-all duration-700 group-hover:-translate-y-8 group-hover:rotate-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{padding: '2px'}}>
                        <div className="h-full w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl" />
                      </div>
                    </div>
                    
                    {/* Image Container with 3D Effect */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        style={{
                          filter: 'contrast(1.1) saturate(1.2)',
                        }}
                      />
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping" />
                        <div className="absolute top-8 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
                        <div className="absolute bottom-12 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                      </div>
                      
                      {/* Holographic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    
                    {/* Enhanced Info Panel */}
                    <div className="relative p-6">
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                          {member.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-1 w-8 bg-gradient-to-r from-primary to-purple-400 rounded-full" />
                          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
                            {member.role}
                          </span>
                        </div>
                        
                        {/* Skill Indicators */}
                        <div className="flex gap-2 mb-4">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-1.5 w-6 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 group-hover:w-full" 
                                style={{width: `${60 + i * 15}%`, transitionDelay: `${i * 200}ms`}}
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* Interactive Button */}
                        <a href="/contact" className="block w-full py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg text-white/80 hover:text-white text-sm font-medium transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        {/* Custom Animations */}
        <style jsx>{`
          @keyframes mesh-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
          }
        `}</style>
      </section>

      <ClientSpotlight speed={28} gap={48} />
    </>
  );
}