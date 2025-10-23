// app/projects/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { projects, theme } from "../data";

// Helper
function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export default function ProjectDetail({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link className="mt-6 inline-block text-blue-600 underline" href="/projects">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* ======= Hero with gradient & glass badge ======= */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${theme.bgPattern}')` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0b1430]/80" />
        {/* Corner gradient orbs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,103,255,0.35),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-2xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-medium text-white/80">
            <Link href="/" className="hover:text-white/95">Home</Link>
            <span>›</span>
            <Link href="/projects" className="hover:text-white/95">Projects</Link>
            <span>›</span>
            <span className="text-white/90">{project.name}</span>
          </div>

          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Title + Meta */}
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <Image src={project.icon} alt={`${project.name} logo`} fill className="object-contain p-2" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-1 text-sm text-white/80">
                  {project.category} • {project.type}
                </p>

                {/* Tech pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/90 backdrop-blur transition hover:bg-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                All Projects
              </Link>
              <a
                href={project.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-5 py-2 text-sm font-semibold"
                style={{ color: theme.primary }}
              >
                Visit Project
                <span
                  className="ml-2 h-5 w-5 -skew-x-12"
                  style={{ background: theme.accent }}
                />
              </a>
            </div>
          </div>

          {/* Hero showcase card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="relative h-[320px] w-full sm:h-[440px]">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* subtle gradient bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1430]/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ======= Content with sticky sidebar ======= */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main */}
            <article className="lg:col-span-2">
              {/* Section: Overview (glass card) */}
              <div className="rounded-2xl border border-[#e8eefc] bg-white p-6 shadow-[0_12px_36px_rgba(16,36,94,0.06)]">
                <h2 className="text-xl font-bold text-[#0c1b3b]">Overview</h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#414b5f]">
                  {project.summary}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#cfe0ff] to-transparent" />

                {/* Key highlights (derived from detail paragraphs if present) */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7484]">
                    Key Highlights
                  </h3>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {(project.content || []).slice(0, 4).map((line, i) => (
                      <li
                        key={i}
                        className="group relative overflow-hidden rounded-lg border border-[#eef3ff] bg-[#f8fbff] p-4 transition hover:-translate-y-[2px] hover:border-[#cfe0ff]"
                      >
                        <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,103,255,0.15),transparent_60%)] blur-xl transition group-hover:opacity-70" />
                        <div className="relative z-10 flex items-start gap-3">
                          <span
                            className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                            style={{ background: theme.accent }}
                          >
                            {i + 1}
                          </span>
                          <p className="text-[14.5px] leading-relaxed text-[#3f4a60]">{line}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section: The Experience (long form) */}
              {project.content?.length > 0 && (
                <div className="mt-8 rounded-2xl border border-[#e8eefc] bg-white p-6 shadow-[0_12px_36px_rgba(16,36,94,0.06)]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#0c1b3b]">The Experience</h2>
                    <span className="text-xs font-semibold tracking-widest text-[#2467ff]">
                      CASE STUDY
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    {project.content.map((para, i) => (
                      <p key={i} className="text-[15.5px] leading-relaxed text-[#414b5f]">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Gradient divider */}
                  <div className="my-8 h-[2px] w-full bg-gradient-to-r from-[#e6eeff] via-[#b9d0ff] to-[#e6eeff]" />

                  {/* Visual feature grid (iconic bullets) */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Human-centered UX with frictionless flows",
                      "Performance-minded builds for scale",
                      "Secure architecture & best practices",
                      "Clear admin visibility & control",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-[#eef3ff] bg-[#f9fbff] p-4"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-1 flex-shrink-0"
                          style={{ color: theme.accent }}
                        >
                          <path
                            d="M20 6 9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-[14.5px] text-[#3f4a60]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar (sticky) */}
            <aside className="lg:pl-6">
              <div className="sticky top-24 space-y-6">
                {/* Snapshot card */}
                <div className="overflow-hidden rounded-2xl border border-[#e8eefc] bg-white shadow-[0_12px_36px_rgba(16,36,94,0.06)]">
                  {/* top gradient bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${theme.accent}, ${theme.primary})`,
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#0c1b3b]">Project Snapshot</h3>
                    <dl className="mt-4 space-y-3 text-[15px]">
                      <div className="flex justify-between">
                        <dt className="text-[#6b7484]">Category</dt>
                        <dd className="font-medium text-[#0c1b3b]">{project.category}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#6b7484]">Type</dt>
                        <dd className="font-medium text-[#0c1b3b]">{project.type}</dd>
                      </div>
                    </dl>

                    <div className="mt-5">
                      <h4 className="mb-2 text-sm font-semibold text-[#0c1b3b]">
                        Development Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[#e6edff] bg-[#f8fbff] px-2 py-1 text-xs"
                            style={{ color: theme.accent }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#0e1b3d] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Launch Site
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-2">
                        <path d="M14 3h7v7M21 3l-9 9" stroke="currentColor" strokeWidth="1.7"/>
                        <path d="M5 12v7h7" stroke="currentColor" strokeWidth="1.7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contact CTA (on-theme) */}
                <div className="overflow-hidden rounded-2xl border border-[#e8eefc] bg-[#0e1b3d] text-white shadow-[0_12px_36px_rgba(16,36,94,0.25)]">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">Like what you see?</h4>
                    <p className="mt-2 text-sm text-white/80">
                      Let’s build something remarkable together.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold"
                      style={{ color: theme.primary }}
                    >
                      Contact us
                      <span
                        className="ml-2 h-5 w-5 -skew-x-12"
                        style={{ background: theme.accent }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ======= Footer band with subtle metrics placeholders (visual polish) ======= */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Scope", v: project.type },
              { k: "Focus", v: project.category },
              { k: "Status", v: "Launched" },
            ].map((it) => (
              <div
                key={it.k}
                className="group relative overflow-hidden rounded-2xl border border-[#e8eefc] bg-white p-5 shadow-[0_10px_28px_rgba(16,36,94,0.06)] transition hover:-translate-y-[2px]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,103,255,0.12),transparent_60%)] blur-xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7484]">
                    {it.k}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0c1b3b]">{it.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
