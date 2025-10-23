// app/companies/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { companies, theme } from "../data";

function getCompany(slug) {
  return companies.find((c) => c.slug === slug);
}

export default function CompanyDetail({ params }) {
  const company = getCompany(params.slug);

  if (!company) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-2xl font-bold">Company not found</h1>
        <Link className="mt-6 inline-block text-blue-600 underline" href="/companies">
          Back to companies
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* ===== Hero: glass + gradients ===== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${theme.bgPattern}')` }}
        />
        <div className="absolute inset-0 bg-[#0b1430]/85" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,103,255,0.32),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-2xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-medium text-white/80">
            <Link href="/" className="hover:text-white/95">Home</Link>
            <span>›</span>
            <Link href="/companies" className="hover:text-white/95">Companies</Link>
            <span>›</span>
            <span className="text-white/90">{company.name}</span>
          </div>

          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <Image src={company.icon} alt={`${company.name} logo`} fill className="object-contain p-2" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {company.name}
                </h1>
                <p className="mt-1 text-sm text-white/80">{company.tagline}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/companies"
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                All Companies
              </Link>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-5 py-2 text-sm font-semibold"
                style={{ color: theme.primary }}
              >
                Visit Site
                <span className="ml-2 h-5 w-5 -skew-x-12" style={{ background: theme.accent }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Content: summary + sticky card ===== */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main copy */}
            <article className="lg:col-span-2">
              <div className="rounded-2xl border border-[#e8eefc] bg-white p-6 shadow-[0_12px_36px_rgba(16,36,94,0.06)]">
                <h2 className="text-xl font-bold text-[#0c1b3b]">About this company</h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#414b5f]">
                  {company.summary}
                </p>

                {/* Value bullets */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Clear positioning & value proposition",
                    "Performance-minded builds for scale",
                    "Security-first architecture & best practices",
                    "Customer-centric UX flows",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 rounded-xl border border-[#eef3ff] bg-[#f9fbff] p-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: theme.accent }} className="mt-1">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-[14.5px] text-[#3f4a60]">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sticky meta card */}
            <aside className="lg:pl-6">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-2xl border border-[#e8eefc] bg-white shadow-[0_12px_36px_rgba(16,36,94,0.06)]">
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.primary})` }} />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#0c1b3b]">Snapshot</h3>
                    <dl className="mt-4 space-y-3 text-[15px]">
                      <div className="flex justify-between">
                        <dt className="text-[#6b7484]">Brand</dt>
                        <dd className="font-medium text-[#0c1b3b]">{company.name}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#6b7484]">Website</dt>
                        <dd className="font-medium text-[#0c1b3b]">
                          <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-[#0c1b3b] underline decoration-[#e0e7ff] underline-offset-4 hover:text-[#1a2a55]">
                            {company.url.replace(/^https?:\/\//, "")}
                          </a>
                        </dd>
                      </div>
                    </dl>

                    {company.badges?.length ? (
                      <>
                        <h4 className="mt-5 mb-2 text-sm font-semibold text-[#0c1b3b]">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {company.badges.map((b) => (
                            <span key={b} className="rounded-md border border-[#e6edff] bg-[#f8fbff] px-2 py-1 text-xs" style={{ color: theme.accent }}>
                              {b}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#0e1b3d] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Visit Site
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-2">
                        <path d="M14 3h7v7M21 3l-9 9" stroke="currentColor" strokeWidth="1.7"/>
                        <path d="M5 12v7h7" stroke="currentColor" strokeWidth="1.7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#e8eefc] bg-[#0e1b3d] text-white shadow-[0_12px_36px_rgba(16,36,94,0.25)]">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">Partner with SeaTechConsulting</h4>
                    <p className="mt-2 text-sm text-white/80">Let’s design, build, and grow your next venture.</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold"
                      style={{ color: theme.primary }}
                    >
                      Contact us
                      <span className="ml-2 h-5 w-5 -skew-x-12" style={{ background: theme.accent }} />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
