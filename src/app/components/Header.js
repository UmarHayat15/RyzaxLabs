"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companies } from "@/app/companies/data";
import { projects } from "@/app/projects/data";

const whatWeDo = [
  { name: "Branding", href: "/branding" },
  { name: "Web Development", href: "/web-development" },
  { name: "App Development", href: "/mobile-development" },
  { name: "Artificial Intelligence", href: "/ai" },
  { name: "DevOps", href: "/devops" },
  { name: "IT Consultation", href: "/ITconsultation" },
];

export default function HeroHeader() {
  const [open, setOpen] = useState(false);
  const [openCompanies, setOpenCompanies] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openWhat, setOpenWhat] = useState(false);
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    if (!pathname) return;
    setOpen(false);
    setOpenCompanies(false);
    setOpenProjects(false);
    setOpenWhat(false);
  }, [pathname]);

  // Close menu if viewport jumps to desktop while open
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // ESC + body scroll lock + focus trap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (!open || !panelRef.current) return;

      if (e.key === "Tab") {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (open) {
      document.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeBtnRef.current?.focus());
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  const Chevron = ({ open }) => (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
    </svg>
  );

  return (
    <main className="bg-white text-[#0A2C4A] font-[Poppins,sans-serif]">
      {/* Top Info Bar */}
      

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-gray-700 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-3 sm:gap-6">
            {/* Logo */}
            <Link href="/" className="flex w-[70px] sm:w-[100px] select-none items-center">
              <img
                src="/images/ryzax.png"
                alt="ryzax"
                className="h-auto w-full"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-7 text-[15px] font-[Open_Sans,sans-serif]">
                <li>
                  <Link
                    href="/"
                    className="relative font-semibold text-white after:absolute after:left-0 after:-bottom-[14px] after:h-[3px] after:w-full after:rounded after:bg-[#0B4D8F]"
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    href="#about"
                    className="inline-flex items-center gap-1 px-2 py-5 text-white transition-colors hover:text-[#0B4D8F]"
                  >
                    ABOUT
                  </Link>
                </li>

                {/* COMPANIES */}
                {/* <li className="relative group"> */}
                  {/* <Link
                    href="/companies"
                    className="inline-flex items-center gap-1 px-2 py-5 text-white transition-colors group-hover:text-[#0B4D8F] focus:outline-none"
                  >
                    COMPANIES
                    <svg
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </Link> */}

                
                  {/* <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2 w-[300px] pt-4
                      opacity-0 invisible pointer-events-none
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                      focus-within:opacity-100 focus-within:visible focus-within:pointer-events-auto
                      transition-all duration-200
                    "
                  >
                    <div className="rounded-xl border border-gray-100 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                      <div className="h-[3px] w-full rounded-t-xl bg-[#0B4D8F]" />
                      <ul className="py-2">
                        {(companies || []).map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/companies/${c.slug}`}
                              className="relative block px-6 py-3 text-[14px] text-white border-b border-gray-100 last:border-0 hover:bg-[#f7f9fb] hover:text-[#0B4D8F] transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0B4D8F] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                        <li className="border-t">
                          <Link
                            href="/companies"
                            className="block px-6 py-3 text-[14px] font-medium text-[#0B4D8F]"
                          >
                            View all
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                {/* </li> */}

                {/* PROJECTS */}
                {/* <li className="relative group">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 px-2 py-5 text-white transition-colors group-hover:text-[#0B4D8F] focus:outline-none"
                  >
                    PROJECTS
                    <svg
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </Link>

                  <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2 w-[300px] pt-4
                      opacity-0 invisible pointer-events-none
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                      focus-within:opacity-100 focus-within:visible focus-within:pointer-events-auto
                      transition-all duration-200
                    "
                  >
                    <div className="rounded-xl border border-gray-100 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                      <div className="h-[3px] w-full rounded-t-xl bg-[#0B4D8F]" />
                      <ul className="py-2">
                        {(projects || []).map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/projects/${p.slug}`}
                              className="relative block px-6 py-3 text-[14px] text-[#203245] border-b border-gray-100 last:border-0 hover:bg-[#f7f9fb] hover:text-[#0B4D8F] transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0B4D8F] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                        <li className="border-t">
                          <Link
                            href="/projects"
                            className="block px-6 py-3 text-[14px] font-medium text-[#0B4D8F]"
                          >
                            View all
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}



                {/* WHAT WE DO (desktop dropdown) */}
                <li className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-2 py-5 text-white transition-colors group-hover:text-[#0B4D8F] focus:outline-none"
                    aria-expanded="false"
                  >
                    WHAT WE DO
                    <svg
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </button>

                  <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2 w-[300px] pt-4
                      opacity-0 invisible pointer-events-none
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                      focus-within:opacity-100 focus-within:visible focus-within:pointer-events-auto
                      transition-all duration-200
                    "
                  >
                    <div className="rounded-xl border border-gray-100 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                      <div className="h-[3px] w-full rounded-t-xl bg-[#0B4D8F]" />
                      <ul className="py-2">
                        {whatWeDo.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="relative block px-6 py-3 text-[14px] text-[#203245] border-b border-gray-100 last:border-0 hover:bg-[#f7f9fb] hover:text-[#0B4D8F] transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0B4D8F] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>


                 <li>
                  <Link
                    href="/join-us"
                    className="inline-flex items-center gap-1 px-2 py-5 text-white transition-colors hover:text-[#0B4D8F]"
                  >
                    WHY JOIN US
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right: burger + CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/[0.06] lg:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0A2C4A]">
                  <path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                </svg>
              </button>

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center rounded-md bg-[#0B4D8F] px-3 sm:px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE DIALOG */}
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Panel */}
          <section
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={panelRef}
            className={`fixed inset-x-0 top-0 z-[70] origin-top bg-white shadow-2xl transition-transform duration-300 ease-out ${
              open ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{
              height: "100dvh",
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img
                  src="https://seatechconsulting.com/Images/logo.png"
                  alt="SeaTech Consulting"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                ref={closeBtnRef}
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-black/[0.06]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <nav className="px-4 py-4 h-[calc(100dvh-64px- env(safe-area-inset-top))] overflow-y-auto">
              <ul className="space-y-1 text-[15px] font-[Open_Sans,sans-serif]">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 font-semibold text-[#0B4D8F] bg-[#0B4D8F]/5"
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    href="#about"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                  >
                    ABOUT
                  </Link>
                </li>

                {/* COMPANIES (mobile) */}
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenCompanies((s) => !s)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                    aria-expanded={openCompanies}
                    aria-controls="mobile-companies"
                  >
                    <span className="flex items-center gap-2">COMPANIES</span>
                    <Chevron open={openCompanies} />
                  </button>
                  <div
                    id="mobile-companies"
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openCompanies ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="mt-1 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      {(companies || []).map((c) => (
                        <li key={c.slug} className="border-b last:border-b-0">
                          <Link
                            href={`/companies/${c.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 text-[14px] hover:bg-[#f7f9fb] hover:text-[#0B4D8F]"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t">
                        <Link
                          href="/companies"
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[14px] font-medium text-[#0B4D8F]"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* PROJECTS (mobile) */}
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenProjects((s) => !s)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                    aria-expanded={openProjects}
                    aria-controls="mobile-projects"
                  >
                    <span className="flex items-center gap-2">PROJECTS</span>
                    <Chevron open={openProjects} />
                  </button>
                  <div
                    id="mobile-projects"
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openProjects ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="mt-1 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      {(projects || []).map((p) => (
                        <li key={p.slug} className="border-b last:border-b-0">
                          <Link
                            href={`/projects/${p.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 text-[14px] hover:bg-[#f7f9fb] hover:text-[#0B4D8F]"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t">
                        <Link
                          href="/projects"
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[14px] font-medium text-[#0B4D8F]"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* WHAT WE DO (mobile) */}
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenWhat((s) => !s)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                    aria-expanded={openWhat}
                    aria-controls="mobile-whatwedo"
                  >
                    <span className="flex items-center gap-2">WHAT WE DO</span>
                    <Chevron open={openWhat} />
                  </button>
                  <div
                    id="mobile-whatwedo"
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openWhat ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="mt-1 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      {whatWeDo.map((item) => (
                        <li key={item.href} className="border-b last:border-0">
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 text-[14px] hover:bg-[#f7f9fb] hover:text-[#0B4D8F]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* CTA */}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#0B4D8F] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* Meta */}
                <li className="pt-3">
                  <div className="rounded-lg border border-gray-100 p-3 text-[13px] text-[#0A2C4A]/70">
                    <p className="font-semibold text-[#0B4D8F]">SeaTech Consulting</p>
                    <p>3055 NW YEON AVE UNTT#271</p>
                    <p>Portland, OR 97210</p>
                    <div className="mt-2 flex items-center gap-3">
                      <Link href="tel:+12065717659" className="underline decoration-dotted hover:text-[#0B4D8F]">
                        (206)571-7659
                      </Link>
                      <span className="h-3 w-px bg-gray-200" />
                      <Link
                        className="underline decoration-dotted hover:text-[#0B4D8F]"
                        href="mailto:info@seatechconsulting.com"
                      >
                        info@seatechconsulting.com
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </header>
    </main>
  );
}
