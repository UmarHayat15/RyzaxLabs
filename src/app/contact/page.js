"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", topic: "General Inquiry" });
  const [sending, setSending] = useState(false);

  const topics = [
    "General Inquiry",
    "New Website / App", 
    "Branding & Design",
    "Support / Technical",
    "Partnerships",
    "Hiring / Careers",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    const mailto = `mailto:info@ryzax.com?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0ATopic: ${form.topic}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
    
    setTimeout(() => {
      setSending(false);
      window.location.href = mailto;
    }, 500);
  };

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Amazing</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Reach Us
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Phone */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                <a href="tel:+923001234567" className="text-primary font-semibold hover:underline">
                  +92 300 1234567
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed message</p>
                <a href="mailto:info@ryzax.com" className="text-primary font-semibold hover:underline">
                  info@ryzax.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Come see us in person</p>
                <p className="text-primary font-semibold">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Type
                </label>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={sending}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  {sending ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}