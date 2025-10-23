// app/contact/page.jsx
"use client";

import React, { useMemo, useState } from "react";
import {
  Mail, Phone, MapPin, Clock, Shield, MessageSquare, Send,
  ChevronRight, CheckCircle2, Sparkles, Info, Globe, Users
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", topic: "General Inquiry" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // {type:'success'|'error', msg:string}
  const [chars, setChars] = useState(0);
  const maxChars = 1200;

  const topics = useMemo(
    () => [
      "General Inquiry",
      "New Website / App",
      "Branding & Design",
      "Support / Technical",
      "Partnerships",
      "Hiring / Careers",
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (name === "message") setChars(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ type: "error", msg: "Please fill all fields before sending." });
      return;
    }
    const emailOK = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(form.email.trim());
    if (!emailOK) {
      setToast({ type: "error", msg: "Enter a valid email address." });
      return;
    }
    setSending(true);

    const to = "info@ryzax.com";
    const cc = "Order@ryzax.com";
    const subject = `Website Contact — ${form.topic} — ${form.name || "New Inquiry"}`;
    const body = [
      `Topic: ${form.topic}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    // open mail client
    const mailto = `mailto:${encodeURIComponent(to)}?cc=${encodeURIComponent(
      cc
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // subtle UX: show success toast right away, then open
    setTimeout(() => {
      setToast({ type: "success", msg: "Draft opened in your email client. We’ll get back within 24 hours." });
      setSending(false);
      window.location.href = mailto;
    }, 450);
  };

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* ================= Banner (kept minimal; you said hero is fine) ================= */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://expert-themes.com/html/globex/images/background/pattern-16.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#0b1430]/80" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
            CONTACT US
          </h1>

          <div className="mt-4 flex justify-center">
            <ul className="flex items-center gap-2 text-sm font-medium text-white/80">
              <li className="capitalize">
                <a href="/" className="hover:text-white/95">Home</a>
              </li>
              <li>:</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Contact Cards (brand-new UI) ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Title */}
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-[#2467ff] uppercase">
              Contact us
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-[#0c1b3b] dark:text-white">
              Let’s build what’s next—together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#656d79] dark:text-slate-300">
              Call <span className="font-semibold">+92 301 0006837</span>, or email us for a free consultation.
            </p>
          </div>

          {/* Card Grid */}
          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<MapPin className="h-6 w-6" />}
              title="Visit"
              lines={[
                "Giga Mall , World Trade Center, 3rd floor, office 3050A ",
                "Islamabad, Pakistan",
              ]}
              accent="from-cyan-400 to-blue-600"
              action={{ label: "Open on Maps", href: "https://maps.google.com/?q=3055+NW+YEON+AVE+UNIT+271,+Portland,+OR+97210" }}
            />
            <InfoCard
              icon={<Phone className="h-6 w-6" />}
              title="Call"
              lines={["+92 301 0006837"]}
              accent="from-emerald-400 to-teal-600"
              action={{ label: "Call Now", href: "tel:+923010006837" }}
            />
            <InfoCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              lines={[
                "info@ryzax.com",
                "support@ryzax.com",
                "devs@ryzax.com",
              ]}
              accent="from-fuchsia-500 to-indigo-600"
              action={{ label: "Compose Email", href: "mailto:info@ryzax.com" }}
            />

          
          </div>

          
        </div>
      </section>

      {/* ================= Map ================= */}
      <section className="pb-10">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-[#e9edf5] dark:border-slate-800 shadow-[0_10px_30px_rgba(16,36,94,0.06)]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-2xl" />
            </div>
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps?q=Giga%20Mall%20World%20Trade%20Center%203rd%20Floor%20Office%203050A%20Islamabad%20Pakistan&output=embed"
  width="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ryzax Technologies Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Message Section (new, high-level UI) ================= */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
              <div>
                <div className="text-xs font-semibold tracking-widest text-[#2467ff] uppercase">
                  Send your message
                </div>
                <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b] dark:text-white">
                  Tell us what you’re building
                </h2>
              </div>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#656d79] dark:text-slate-300">
                Share goals, timelines, or links. We’ll respond with clear next steps and a suggested plan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left: Trust panel */}
            <aside className="order-last lg:order-first lg:col-span-1">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-sm p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white shadow">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Why Ryzax?</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Modern stack. Senior talent. Measurable outcomes.</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-[2px]" />
                    <span className="text-slate-700 dark:text-slate-300">Next.js / React specialists, API-first architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-[2px]" />
                    <span className="text-slate-700 dark:text-slate-300">Branding + UI/UX with performance baked in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-[2px]" />
                    <span className="text-slate-700 dark:text-slate-300">Transparent timelines, sprint reports, SLAs</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Average first reply</p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">Under 24 hours</p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <Users className="h-4 w-4" />
                  <span>Trusted by 100+ brands & growing</span>
                </div>
              </div>
            </aside>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 sm:p-8 shadow-[0_15px_40px_0_rgba(16,36,94,0.06)]"
              >
                {/* Gradient ring */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl [background:linear-gradient(180deg,rgba(36,103,255,0.18),rgba(255,255,255,0)_30%,rgba(36,103,255,0.18))]"></div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Name */}
                  <Field label="Name" htmlFor="name">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="peer h-11 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 px-3 pr-10 text-[15px] text-slate-900 dark:text-white outline-none transition focus:border-[#2467ff]"
                        aria-label="Your name"
                      />
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                    </div>
                  </Field>

                  {/* Email */}
                  <Field label="Email Address" htmlFor="email">
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="peer h-11 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 px-3 pr-10 text-[15px] text-slate-900 dark:text-white outline-none transition focus:border-[#2467ff]"
                        aria-label="Your email"
                      />
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                  </Field>

                  {/* Topic */}
                  <Field label="Topic" htmlFor="topic">
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className="h-11 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 px-3 text-[15px] text-slate-900 dark:text-white outline-none transition focus:border-[#2467ff]"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* Quick chips */}
                  <div className="md:pt-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Website redesign",
                        "New SaaS / MVP",
                        "Brand identity",
                        "Fix performance",
                        "Ongoing support",
                      ].map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, topic: chip }))}
                          className={`rounded-full border px-3 py-1 text-xs transition ${
                            form.topic === chip
                              ? "border-blue-600 text-blue-700 bg-blue-50"
                              : "border-slate-200 dark:border-slate-700 text-slate-600 hover:border-blue-300"
                          }`}
                          aria-label={`Set topic to ${chip}`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#0c1b3b] dark:text-slate-200">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Share goals, scope, timeline, budget signals, links…"
                      rows={7}
                      required
                      maxLength={maxChars}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-y rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 p-3 pr-14 text-[15px] text-slate-900 dark:text-white outline-none transition focus:border-[#2467ff]"
                    />
                    <div className={`absolute bottom-2 right-2 text-xs ${chars > maxChars * 0.9 ? "text-amber-600" : "text-slate-500"}`}>
                      {chars}/{maxChars}
                    </div>
                  </div>
               
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                 
                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative inline-flex h-11 items-center justify-center rounded-lg bg-[#0e1b3d] px-6 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus:outline-none disabled:opacity-60"
                  >
                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
                      <span className="absolute -left-10 top-0 h-full w-8 -skew-x-12 bg-[#2467ff] opacity-0 transition-all duration-500 group-hover:left-[110%] group-hover:opacity-100" />
                    </span>
                    {sending ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin text-white/90" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {/* Toast */}
              {toast && (
                <div
                  className={`fixed z-[60] bottom-6 right-6 rounded-xl border px-4 py-3 text-sm shadow-lg
                    ${toast.type === "success"
                      ? "bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                      : "bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300"
                    }`}
                  role="status"
                >
                  <div className="flex items-center gap-2">
                    {toast.type === "success" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Info className="h-4 w-4" />
                    )}
                    <span>{toast.msg}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------------- Small components ---------------------- */

function InfoCard({ icon, title, lines = [], accent = "from-blue-500 to-indigo-600", action }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-[#eef0f6] dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm transition-all hover:shadow-xl"
    >
      {/* Glow */}
      <div className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition group-hover:opacity-20`} />
      {/* Icon */}
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#0c1b3b] dark:text-white">{title}</h3>
      <ul className="mt-2 space-y-1 text-[15px] text-[#656d79] dark:text-slate-300">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      {action?.href && (
        <a
          href={action.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2467ff] hover:underline"
        >
          {action.label}
          <ChevronRight className="h-4 w-4" />
        </a>
      )}
    </article>
  );
}

function UtilityCard({ icon, title, items = [] }) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6">
      <div className="mb-3 flex items-center gap-2 text-slate-700 dark:text-slate-200">
        <div className="h-8 w-8 grid place-items-center rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <dl className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {items.map(([k, v], i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <dt className="text-slate-500">{k}</dt>
            <dd className="font-medium text-slate-800 dark:text-slate-200">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="mb-2 text-sm font-medium text-[#0c1b3b] dark:text-slate-200">
        {label}
      </label>
      {children}
    </div>
  );
}
