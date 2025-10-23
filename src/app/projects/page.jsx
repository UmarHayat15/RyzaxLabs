import Link from "next/link";
import Image from "next/image";
import { projects, theme } from "./data";

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${theme.bgPattern}')` }}
        />
        <div className="absolute inset-0 bg-[#0b1430]/80" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
            OUR PROJECTS
          </h1>
          <div className="mt-4 flex justify-center">
            <ul className="flex items-center gap-2 text-sm font-medium text-white/80">
              <li><Link href="/" className="hover:text-white/95">Home</Link></li>
              <li>:</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-widest" style={{ color: theme.accent }}>
              FEATURED WORK
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b]">Case Studies & Builds</h2>
            <p className="mt-3 max-w-2xl text-[15px] text-[#656d79]">
              A selection of enterprise websites, platforms, and commerce experiences.
            </p>
          </div>

          <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li key={p.slug} className="group">
                <Link
                  href={`/projects/${p.slug}`}
                  className="block overflow-hidden rounded-xl border border-[#eef0f6] bg-white shadow-[0_12px_36px_rgba(16,36,94,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,36,94,0.10)]"
                >
                  <div className="relative h-48 w-full bg-[#f6f8fd]">
                    <Image
                      src={p.image}
                      alt={`${p.name} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow">
                      <div className="relative h-6 w-6 overflow-hidden rounded">
                        <Image src={p.icon} alt={`${p.name} logo`} fill className="object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-[#0c1b3b]">{p.name}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#0c1b3b]">{p.name}</h3>
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{ background: "#eef3ff", color: theme.accent }}
                      >
                        {p.type}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-[#7a8394]">{p.category}</p>
                    <p className="mt-3 line-clamp-3 text-[15px] text-[#4b5563]">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[#e6edff] px-2 py-1 text-xs"
                          style={{ color: theme.accent }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: theme.accent }}>
                      <span className="transition group-hover:translate-x-0.5">View details</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
