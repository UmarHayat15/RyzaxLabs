// app/companies/page.jsx
import Link from "next/link";
import Image from "next/image";
import { companies, theme } from "./data";

export default function CompaniesPage() {
  return (
    <main className="bg-white">
      {/* ===== Hero (distinct look from Projects) ===== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${theme.bgPattern}')` }}
        />
        <div className="absolute inset-0 bg-[#0b1430]/85" />
        {/* soft gradient motifs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,103,255,0.30),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-2xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-18 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Companies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
            A growing portfolio under SeaTechConsulting—designed to perform, built to scale.
          </p>

          {/* Breadcrumb */}
          <div className="mt-5 flex justify-center">
            <ul className="flex items-center gap-2 text-xs font-medium text-white/80">
              <li><Link href="/" className="hover:text-white/95">Home</Link></li>
              <li>›</li>
              <li>Companies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Companies grid (distinct card design) ===== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-widest" style={{ color: theme.accent }}>
                PORTFOLIO
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b]">Brands under SeaTechConsulting</h2>
              <p className="mt-3 max-w-2xl text-[15px] text-[#656d79]">
                Each built with clear strategy, strong UX, and measurable outcomes.
              </p>
            </div>
          </div>

          <ul className="grid gap-7 md:grid-cols-2">
            {companies.map((c) => (
              <li key={c.slug} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-[#e8eefc] bg-white shadow-[0_18px_50px_rgba(16,36,94,0.08)] transition hover:-translate-y-[3px]">
                  {/* top gradient bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.primary})` }}
                  />

                  {/* content */}
                  <div className="p-6">
                    {/* logo + title row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#eef3ff] bg-[#f8fbff]">
                          <Image src={c.icon} alt={`${c.name} logo`} fill className="object-contain p-1.5" sizes="48px" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0c1b3b]">{c.name}</h3>
                          <p className="text-xs font-semibold tracking-widest" style={{ color: theme.accent }}>
                            CLIENT SPOTLIGHT
                          </p>
                        </div>
                      </div>

                      {/* action pill */}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-[#e7ecf5] bg-[#f9fbff] px-3 py-1 text-xs font-semibold text-[#0c1b3b] transition hover:brightness-105"
                      >
                        Visit Site
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1">
                          <path d="M14 3h7v7M21 3l-9 9" stroke="currentColor" strokeWidth="1.7"/>
                          <path d="M5 12v7h7" stroke="currentColor" strokeWidth="1.7"/>
                        </svg>
                      </a>
                    </div>

                    {/* tagline */}
                    <p className="mt-4 text-[15px] text-[#3f4a60]">{c.tagline}</p>

                    {/* summary */}
                    <p className="mt-2 text-[14.5px] leading-relaxed text-[#657089]">
                      {c.summary}
                    </p>

                    {/* badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.badges?.map((b) => (
                        <span key={b} className="rounded-md border border-[#e6edff] bg-[#f8fbff] px-2 py-1 text-xs" style={{ color: theme.accent }}>
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* footer ctas */}
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-[#0e1b3d] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                      >
                        Explore
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-2">
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>

                      <Link
                        href={`/companies/${c.slug}`}
                        className="inline-flex items-center rounded-md border border-[#e7ecf5] bg-white px-4 py-2 text-sm font-semibold text-[#0c1b3b] transition hover:bg-[#f8fbff]"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* subtle note */}
          <p className="mt-6 text-center text-xs text-[#98a2b3]">Logos are property of their respective brands.</p>
        </div>
      </section>
    </main>
  );
}
