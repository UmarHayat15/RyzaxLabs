import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SeaTech Consulting",
  description:
    "Privacy Policy for SeaTech Consulting. Learn how we collect, use, and protect your information across our digital products and services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 10, 2025";

  return (
    <main className="bg-white text-[#0A2C4A] font-[Poppins,sans-serif]">
      {/* Hero / Breadcrumb */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#0B4D8F] to-[#0a3f74]">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#F9B233]" />
        <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
          <p className="text-white/80 text-xs font-semibold tracking-[0.14em]">LEGAL</p>
          <h1 className="mt-2 text-white text-3xl sm:text-4xl font-bold leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-white/80 text-sm">Last updated: {lastUpdated}</p>
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol className="flex items-center gap-2 text-white/80 text-sm">
              <li>
                <Link href="/" className="hover:text-white underline decoration-dotted">
                  Home
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li className="text-white">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <p className="text-[15px] leading-7 text-slate-700">
            SeaTech Consulting (“SeaTech,” “we,” “our,” or “us”) respects your privacy. This
            Privacy Policy explains how we collect, use, disclose, and protect information when you
            visit our websites, contact us, or use our products and services (collectively, the
            “Services”). If you do not agree with this Policy, please do not use the Services.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold tracking-wide text-[#0B4D8F]">WHO WE ARE</p>
              <p className="mt-1 text-[14px] text-slate-700">
                SeaTech Consulting • 3055 NW YEON AVE UNTT#271, Portland, OR 97210 • (206) 571-7659
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold tracking-wide text-[#0B4D8F]">CONTACT</p>
              <p className="mt-1 text-[14px] text-slate-700">
                info@seatechconsulting.com • order@seatechconsulting.com
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold tracking-wide text-[#0B4D8F]">REGIONS</p>
              <p className="mt-1 text-[14px] text-slate-700">
                We serve U.S. and international clients. Rights may vary by jurisdiction.
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-2xl font-bold">1) Scope</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            This Policy applies to information we process in connection with our Services, including
            our websites (e.g., seatechconsulting.com and related pages), contact forms, proposals,
            project communications, and client portals. It does not cover third-party websites or
            services that we do not control.
          </p>

          <h2 className="mt-8 text-2xl font-bold">2) Information We Collect</h2>
          <ul className="mt-2 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold">Contact & Business Details:</span> name, email,
              phone, company, role, address, and any information you provide when you contact us,
              request a quote, or start a project.
            </li>
            <li>
              <span className="font-semibold">Project & Support Data:</span> requirements,
              specifications, content, assets, feedback, and communications needed to deliver
              services (e.g., web/app development, branding, digital marketing).
            </li>
            <li>
              <span className="font-semibold">Usage & Device Data:</span> IP address, browser type,
              pages viewed, timestamps, referring pages/links, approximate location, and similar
              technical data collected through cookies, pixels, and analytics tools.
            </li>
            <li>
              <span className="font-semibold">Payment/Transactional Data:</span> invoices, billing
              contact and history. We typically use PCI-compliant processors and do not store full
              payment card numbers on our servers.
            </li>
            <li>
              <span className="font-semibold">Recruitment Data:</span> resumes/CVs, portfolio
              links, and interview notes if you apply for a role or contract engagement.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">3) How We Use Information</h2>
          <ul className="mt-2 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>Provide, operate, and improve our Services and customer support.</li>
            <li>Plan, scope, and execute projects and deliverables.</li>
            <li>Communicate about proposals, updates, invoices, and service notices.</li>
            <li>Personalize content, measure performance, and enhance user experience.</li>
            <li>Maintain security, prevent fraud/abuse, and comply with legal obligations.</li>
            <li>Marketing with your consent or as permitted by law (opt-out anytime).</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">4) Legal Bases (EEA/UK/Similar)</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We rely on legitimate interests, contractual necessity, consent (for certain marketing
            and cookies), and legal obligations, as applicable.
          </p>

          <h2 className="mt-8 text-2xl font-bold">5) How We Share Information</h2>
          <ul className="mt-2 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold">Vendors/Processors:</span> hosting, cloud platforms,
              analytics, communication tools, payment processors, and subcontractors who assist in
              delivering the Services under contracts that protect your data.
            </li>
            <li>
              <span className="font-semibold">Business Transfers:</span> merger, acquisition,
              financing, or sale of assets.
            </li>
            <li>
              <span className="font-semibold">Legal/Compliance:</span> to comply with law, enforce
              agreements, or protect rights, safety, and security.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">6) Cookies & Similar Technologies</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We use cookies/local storage to operate our sites, remember preferences, analyze
            traffic, and improve performance:
          </p>
          <ul className="mt-2 list-disc pl-6 text-[15px] leading-7 text-slate-700">
            <li><span className="font-semibold">Essential:</span> core functionality and security.</li>
            <li><span className="font-semibold">Performance/Analytics:</span> usage insights.</li>
            <li><span className="font-semibold">Functional:</span> preferences and settings.</li>
            <li><span className="font-semibold">Marketing:</span> measure campaigns (if used).</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">7) Analytics, Third-Party Links & Social</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We may use analytics services to measure usage trends. Our sites may link to third-party
            sites or social platforms; their policies govern your interactions there.
          </p>

          <h2 className="mt-8 text-2xl font-bold">8) “Do Not Track”</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            Because no uniform DNT standard exists, our Services do not currently respond to DNT signals.
          </p>

          <h2 className="mt-8 text-2xl font-bold">9) Children’s Privacy</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            Our Services are not directed to children under 13. We do not knowingly collect
            information from children. Contact us to request deletion if you believe a child provided data.
          </p>

          <h2 className="mt-8 text-2xl font-bold">10) Data Security</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We implement administrative, technical, and physical safeguards to protect information.
            No method is 100% secure; we cannot guarantee absolute security.
          </p>

          <h2 className="mt-8 text-2xl font-bold">11) Data Retention</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We retain information as needed to provide Services, meet legal obligations, resolve
            disputes, and enforce agreements, unless longer retention is required/permitted by law.
          </p>

          <h2 className="mt-8 text-2xl font-bold">12) International Transfers</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We are U.S.-based and may process data in the U.S. and other countries with different
            laws. Where required, we use appropriate safeguards for cross-border transfers.
          </p>

          <h2 className="mt-8 text-2xl font-bold">13) Your Privacy Rights</h2>
          <div className="mt-2 space-y-4 text-[15px] leading-7 text-slate-700">
            <div>
              <p className="font-semibold">U.S. (e.g., California/CPRA):</p>
              <ul className="mt-1 list-disc pl-6">
                <li>Right to know/access, delete, correct, limit use of sensitive info (if applicable).</li>
                <li>Right to opt out of “sale”/“sharing” (if applicable) and to non-discrimination.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">EEA/UK (GDPR):</p>
              <ul className="mt-1 list-disc pl-6">
                <li>Access, rectification, erasure, restriction, portability, and objection rights.</li>
                <li>Where processing is based on consent, you may withdraw consent at any time.</li>
              </ul>
            </div>
            <p className="mt-2">
              To exercise rights, email{" "}
              <a
                className="underline decoration-dotted text-[#0B4D8F] hover:brightness-110"
                href="mailto:info@seatechconsulting.com"
              >
                info@seatechconsulting.com
              </a>{" "}
              with “Privacy Request” in the subject. We may need to verify your identity.
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-bold">14) “Sale” or “Sharing”</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We do not knowingly “sell” personal information as defined by CPRA. If we engage in
            activity that qualifies as “sharing” for cross-context behavioral advertising, you may
            opt out via a “Do Not Sell or Share My Personal Information” control (when available).
          </p>

          <h2 className="mt-8 text-2xl font-bold">15) Your Choices</h2>
          <ul className="mt-2 list-disc pl-6 text-[15px] leading-7 text-slate-700">
            <li>Use unsubscribe links in marketing emails.</li>
            <li>Adjust browser settings to block/clear cookies.</li>
            <li>Use platform privacy settings to manage personalized ads.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">16) Content You Provide & Optional AI Tools</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            If you provide content or data for a project, you represent you have the rights to use
            it. Where mutually agreed, we may use privacy-aware AI-assisted tools to support
            ideation, QA, or analysis. We do not use client-confidential materials to train third-party
            foundation models.
          </p>

          <h2 className="mt-8 text-2xl font-bold">17) Changes</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            We may update this Policy from time to time. The “Last updated” date reflects the most
            recent changes. Material updates will be highlighted in a reasonable manner.
          </p>

          <h2 className="mt-8 text-2xl font-bold">18) Contact Us</h2>
          <div className="mt-3 rounded-lg border border-slate-200 p-5">
            <p className="text-[15px] leading-7 text-slate-700">
              <span className="font-semibold">SeaTech Consulting</span> <br />
              3055 NW YEON AVE UNTT#271 <br />
              Portland, OR 97210, USA
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="tel:+12065717659"
                className="inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-[#0A2C4A] hover:bg-slate-50"
              >
                Call: (206) 571-7659
              </a>
              <a
                href="mailto:info@seatechconsulting.com"
                className="inline-flex items-center rounded-md bg-[#0B4D8F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
              >
                Email: info@seatechconsulting.com
              </a>
            </div>
          </div>

          <p className="mt-6 text-[12px] leading-6 text-slate-500">
            This Privacy Policy is for general informational purposes and is not legal advice.
            Depending on your implementation (analytics, ads, client portals), you may need
            additional disclosures. Consider consulting counsel to tailor this Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
