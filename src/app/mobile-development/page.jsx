"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Layout,
  ShieldCheck,
  Apple,
  Smartphone,
  Shuffle,
  Rocket,
  Code2,
  AppWindow,
  Handshake,
  Gauge,
  LifeBuoy,
  ClipboardCheck,
  Bug,
  LineChart,
  Settings2,
  RefreshCcw,
  Globe,
  UploadCloud,
  Layers,
} from "lucide-react";
import ios from "../../../public/images/ios-image.jpg"
/* ------------------------------------ */
/* Small helpers                        */
/* ------------------------------------ */

function SectionTitle({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-sky-800 ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:text-sky-300 dark:ring-slate-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
          {title}
        </span>
      </h2>
      {description && (
        <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </div>
  );
}

function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ring-1 shadow-sm ${
        active
          ? "bg-gradient-to-r from-sky-600 to-blue-700 text-white ring-white/10 shadow-blue-900/20"
          : "bg-white/80 text-slate-700 ring-slate-200 hover:bg-white dark:bg-slate-900/70 dark:text-slate-200 dark:ring-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
      <span>{children}</span>
    </li>
  );
}

/* ------------------------------------ */
/* DATA                                 */
/* ------------------------------------ */

// Hero image updated to be explicitly app development themed (network image)
const heroBg =
  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"; // phone + code + desk (app dev vibe)

const overviewImg =
  "https://images.pexels.com/photos/4049986/pexels-photo-4049986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";

const platformDetails = {
  ios: {
    title: "iOS App Development",
    kicker: "Mobile App Development",
    tagline: "We build powerful mobile apps for the iPhone platform.",
    hero:
      "https://images.pexels.com/photos/7889469/pexels-photo-7889469.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "iOS application development services",
    body: [
      "In the era of iOS and iPhone apps where everything is at the touch of your thumb, businesses can leverage this smart technology to market themselves prominently.",
      "We build enriched, dynamic apps tailored to your goals and brand. Beautifully designed iOS apps improve customer engagement and recognition.",
      "A comprehensive experience of leading full lifecycle iOS development.",
    ],
    sideImage:
      ios,
    techTabs: [
      { key: "swift", label: "Swift" },
      { key: "objc", label: "Objective-C" },
      { key: "coredata", label: "CoreData" },
      { key: "ui", label: "SwiftUI" },
      { key: "kit", label: "CloudKit" },
    ],
    techExplainers: {
      swift: {
        img:
          "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "01 Swift",
        copy: [
          "Swift is a powerful, expressive language for crafting custom iOS apps with modern safety and performance.",
          "Developed by Apple, Swift supports advanced features for flexible, efficient development. Our senior iOS team is deeply experienced with Swift for production apps.",
        ],
      },
      objc: {
        img:
          "https://images.pexels.com/photos/3861948/pexels-photo-3861948.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "02 Objective-C",
        copy: [
          "For mature codebases and specific integrations, Objective-C remains a first-class citizen.",
          "We modernize and extend legacy apps safely while upholding Apple’s latest platform standards.",
        ],
      },
      coredata: {
        img:
          "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "03 CoreData",
        copy: [
          "Robust local persistence for offline-first UX.",
          "We design performant models, migrations, and sync layers aligned with your data strategy.",
        ],
      },
      ui: {
        img:
          "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "04 SwiftUI",
        copy: [
          "Modern, declarative UI for iOS, iPadOS, watchOS and macOS.",
          "Component libraries, accessibility and performance baked in.",
        ],
      },
      kit: {
        img:
          "https://images.pexels.com/photos/3862383/pexels-photo-3862383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "05 CloudKit",
        copy: [
          "Secure cloud sync out of the box with Apple IDs and privacy controls.",
          "Great for lightweight, privacy-forward data models.",
        ],
      },
    },
  },

  android: {
    title: "Android App Development",
    kicker: "Mobile App Development",
    tagline: "We build powerful mobile apps for the Android platform.",
    hero:
      "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "Android application development services",
    body: [
      "We deliver qualitative Android solutions for enterprises worldwide, built for reliability and scale.",
      "Harnessing Android SDK, Jetpack, Kotlin and Google services, we design, develop, test and deploy end-to-end solutions.",
    ],
    sideImage:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    architecture: [
      {
        h: "Android app development",
        p: "Custom applications using Android SDK/Jetpack, Material design, media APIs, LBS, Bluetooth, Wi-Fi, and modern security architecture.",
        img:
          "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
      {
        h: "Android game development",
        p: "Close collaboration between engineering, design and QA to deliver performant gameplay and delightful visuals.",
        img:
          "https://images.pexels.com/photos/907174/pexels-photo-907174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
      {
        h: "Android solutions include",
        p: "We build across smartphones, tablets and TVs; our solutions cover custom apps, enterprise apps, productivity, testing and ongoing maintenance.",
        bullets: [
          "Custom Android apps",
          "Enterprise applications",
          "Gaming applications",
          "Productivity apps",
          "Comprehensive testing & QA",
          "Maintenance & Support",
        ],
        img:
          "https://images.pexels.com/photos/5952653/pexels-photo-5952653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
    conversion: {
      title: "iPhone to Android app conversion",
      text:
        "Already have an iPhone app? We can port it to Android—phones and tablets—while preserving UX and platform conventions.",
      techPoints: [
        "Android/Google APIs",
        "Location Services & GPS",
        "Multi-touch & Sensors",
        "AR, OpenGL ES, media playback",
        "SQLite, Room, networking",
        "3rd-party API integrations",
      ],
      img:
        "https://images.pexels.com/photos/6078122/pexels-photo-6078122.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    },
  },

  reactnative: {
    title: "React Native Development",
    kicker: "Mobile App Development",
    tagline: "Hybrid apps with native feel, shared code, and rapid delivery.",
    hero:
      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "React Native development services",
    body: [
      "React Native provides native-like experiences with shared code, enabling shorter cycles and efficient deployments.",
      "We deliver high-quality apps with a strong focus on usability—driving acquisition, engagement and retention.",
    ],
    sideImage:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    whyUs: [
      "Experienced, product-minded team",
      "Mature QA process",
      "Agile + DevOps",
      "Robust, scalable architecture",
      "Flexible engagement models",
    ],
    services: [
      "iOS & Android apps",
      "UI/UX consultation",
      "Maintenance & support",
      "Team augmentation",
      "Server-side API development",
      "SQL & NoSQL integrations",
      "Migration to React Native",
      "MVP delivery",
    ],
  },

  flutter: {
    title: "Flutter App Development",
    kicker: "Mobile App Development",
    tagline: "Beautiful native apps for iOS & Android—single codebase.",
    hero:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "Flutter development services",
    body: [
      "Flutter delivers powerful, customizable UI with a rich widget set and strong performance.",
      "We build user-centric apps that acquire, retain, and deliver measurable value.",
    ],
    sideImage:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    whyUs: [
      "Deep cross-platform expertise",
      "Design systems & component libraries",
      "Agile delivery & CI/CD",
      "Scalable architectures",
      "Flexible engagement models",
    ],
    services: [
      "Flutter iOS & Android apps",
      "UI/UX consultation",
      "Maintenance & support",
      "Team augmentation",
      "Server-side APIs",
      "SQL & NoSQL integrations",
      "Migration to Flutter",
      "MVP delivery",
    ],
  },

  xamarin: {
    title: "Xamarin App Development",
    kicker: "Mobile App Development",
    tagline: "Modern .NET for mobile with native performance.",
    hero:
      "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "Xamarin app development services",
    body: [
      "We craft dynamic, brand-aligned apps with clean, maintainable C#/.NET codebases.",
      "Clutter-free design with standards-compliant code for smooth performance and longevity.",
    ],
    sideImage:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  },

  maintenance: {
    title: "Mobile App Support & Maintenance",
    hero:
      "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    servicesTitle: "Application maintenance services",
    servicesBody: [
      "Reduce cost, minimize risk, and improve ROI from your applications with structured AMS.",
      "Our services span production support, enhancements, bug fixing, user support, and training—covering the full life cycle.",
    ],
    servicesImg:
      "https://images.pexels.com/photos/3862384/pexels-photo-3862384.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    types: [
      { k1: "Corrective", k2: "Maintenance", bullets: ["Identify and remove defects", "Correct errors"] },
      { k1: "Perfective", k2: "Maintenance", bullets: ["Improve performance & dependability", "Add new features"] },
      { k1: "Adaptive", k2: "Maintenance", bullets: ["Adapt to new environments (OS, devices, middleware)"] },
      { k1: "Preventive", k2: "Maintenance", bullets: ["Detect latent faults", "Improve safety & resilience"] },
      { k1: "Emergency", k2: "Maintenance", bullets: ["Unscheduled corrective maintenance"] },
    ],
    expertiseImg:
      "https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    expertiseCopy: [
      "Round-the-clock coverage tailored to your stack and budget.",
      "Expert blend of architects, DBAs, and consultants with Fortune 500 experience.",
    ],
    enableImg:
      "https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    enableBullets: [
      "Lower risk and increase predictability",
      "Timely releases & enhancements",
      "Improve stability and efficiency",
      "Refocus on strategic initiatives",
      "Stay current with latest tech",
      "Migrate to new platforms",
      "Improve service quality",
      "Reduce total cost of ownership",
    ],
    methodology: [
      {
        title: "Pre-Transition",
        bullets: [
          "Feasibility study",
          "As-is assessment",
          "Right maintenance model",
          "Scope documentation",
          "Knowledge transfer plan",
          "Team composition",
        ],
      },
      {
        title: "Transition",
        bullets: [
          "Deploy team & training",
          "Environment deep-dive",
          "Dry-runs & benchmarking",
          "Stabilize support processes",
          "Workload planning",
        ],
      },
      {
        title: "Maintenance",
        bullets: [
          "Help desk & L2/L3 support",
          "Review & control",
          "Performance benchmarking",
          "Process improvements",
        ],
      },
      {
        title: "Support",
        bullets: ["Steady-state operations", "Updates, versioning, end-user support"],
      },
    ],
    activities: [
      { icon: ClipboardCheck, label: "Documentation development" },
      { icon: Bug, label: "Error tracking & debugging" },
      { icon: RefreshCcw, label: "Version enhancements" },
      { icon: LifeBuoy, label: "Comprehensive user support" },
      { icon: Settings2, label: "Technical troubleshooting" },
      { icon: LineChart, label: "Performance monitoring" },
      { icon: Gauge, label: "Performance testing" },
      { icon: UploadCloud, label: "Version upgrades" },
      { icon: AppWindow, label: "QA testing" },
      { icon: Globe, label: "Offshore product maintenance" },
    ],
  },
};

/* ------------------------------------ */
/* COMPONENTS                           */
/* ------------------------------------ */

function PlatformIntro(props) {
  const { title, body, sideImage, bodyTitle, kicker, tagline, hero, children } = props;
  return (
    <div className="mt-16">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 dark:ring-slate-800">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt={`${title} cover`}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.88),rgba(2,6,23,.7),rgba(30,64,175,.5))]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <Smartphone className="w-3.5 h-3.5" />
            {kicker}
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-white/85">{tagline}</p>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-semibold">{bodyTitle}</h4>
          <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {children}
        </div>
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
            <Image
              src={sideImage}
              alt={`${title} visual`}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon: Icon, k1, k2, body, bullets }) {
  return (
    <div className="group relative rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-[2px] hover:shadow-2xl dark:bg-slate-950/80 dark:ring-slate-800">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(600px_200px_at_var(--x,50%)_-20%,rgba(59,130,246,.15),transparent)]" />
      </div>
      <div className="absolute inset-x-0 -top-[1px] h-[2px] bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-lg font-semibold">{k1}</div>
          <div className="-mt-0.5 text-lg font-extrabold tracking-tight">{k2}</div>
        </div>
      </div>
      {body && <p className="mt-3 text-slate-600 dark:text-slate-300">{body}</p>}
      {bullets && (
        <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
          {bullets.map((b) => (
            <Bullet key={b}>{b}</Bullet>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------ */
/* PAGE                                 */
/* ------------------------------------ */

export default function MobileDevelopmentPage() {
  const [activePlatform, setActivePlatform] = useState("ios");

  const iosTabKeys = platformDetails.ios.techTabs.map((t) => t.key);
  const [iosTech, setIosTech] = useState(iosTabKeys[0]);

  // spotlight cursor position for cards (pure CSS fallback is already nice)
  const handleSpotlight = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="App development workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.92),rgba(2,6,23,.7),rgba(30,64,175,.5))]" />
          {/* subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Rocket className="w-3.5 h-3.5" />
              Mobile App Development
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Become your clients’ go-to for{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">
                high-end mobile apps
              </span>
              —delivered on time, on budget, in scope.
            </h1>
            <p className="mt-4 text-white/85">
              We’ve been launching reliable, performance-driven iOS, Android, and cross-platform
              apps for over a decade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#platforms"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                View platforms
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/85">
              {[
                ["22+ Years", "Design & engineering"],
                ["180+", "Mobile launches"],
                ["98%", "Client retention"],
                ["A/B", "Conversion-first"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                  <div className="text-xl font-bold">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Mobile app development services
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Create value through mobile—custom apps that scale
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <p>
                  Mobile apps have reshaped the digital world. Reach millions quickly and stay
                  visible to your customers at all times.
                </p>
                <p>
                  At SeaTech, you get technology and innovation under one roof. We plan and execute
                  mobile strategies that deliver results and positive ROI—backed by a skilled team
                  and proven delivery.
                </p>
                <p>
                  With deep experience across iOS, Android, and cross-platform frameworks, we craft
                  exceptional engagement for your audience.
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                <Bullet>Discovery → architecture → design → development → launch</Bullet>
                <Bullet>Performance, accessibility, and security embedded in the pipeline</Bullet>
                <Bullet>CI/CD, testing, analytics, and monitoring from day one</Bullet>
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <Image
                  src={overviewImg}
                  alt="Team planning mobile flows"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SELECTOR */}
      <section id="platforms" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
              Stacks we excel at
            </span>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Choose your platform — we’ll make it sing
              </span>
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              iOS, Android, and cross-platform frameworks—aligned to your goals, team, and
              timeline.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex max-w-5xl flex-wrap items-center justify-center gap-2">
              <Pill active={activePlatform === "ios"} onClick={() => setActivePlatform("ios")}>
                <span className="inline-flex items-center gap-2">
                  <Apple className="w-4 h-4" /> iOS
                </span>
              </Pill>
              <Pill
                active={activePlatform === "android"}
                onClick={() => setActivePlatform("android")}
              >
                Android
              </Pill>
              <Pill
                active={activePlatform === "reactnative"}
                onClick={() => setActivePlatform("reactnative")}
              >
                React Native
              </Pill>
              <Pill
                active={activePlatform === "flutter"}
                onClick={() => setActivePlatform("flutter")}
              >
                Flutter
              </Pill>
              <Pill
                active={activePlatform === "xamarin"}
                onClick={() => setActivePlatform("xamarin")}
              >
                Xamarin
              </Pill>
              <Pill
                active={activePlatform === "maintenance"}
                onClick={() => setActivePlatform("maintenance")}
              >
                Support & Maintenance
              </Pill>
            </div>
          </div>

          {/* iOS */}
          {activePlatform === "ios" && (
            <PlatformIntro {...platformDetails.ios}>
              {/* iOS tech tabs */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {platformDetails.ios.techTabs.map((t) => (
                    <Pill key={t.key} active={iosTech === t.key} onClick={() => setIosTech(t.key)}>
                      {t.label}
                    </Pill>
                  ))}
                </div>
                <div className="mt-8 grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                      <Image
                        src={platformDetails.ios.techExplainers[iosTech].img}
                        alt={platformDetails.ios.techExplainers[iosTech].title}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h5 className="text-xl font-semibold">
                      {platformDetails.ios.techExplainers[iosTech].title}
                    </h5>
                    <div className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                      {platformDetails.ios.techExplainers[iosTech].copy.map((c) => (
                        <p key={c}>{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PlatformIntro>
          )}

          {/* Android */}
          {activePlatform === "android" && (
            <div className="mt-16">
              <PlatformIntro {...platformDetails.android} />

              {/* Android architecture blocks */}
              <div className="mt-12 grid lg:grid-cols-2 gap-8">
                {platformDetails.android.architecture.map((a) => (
                  <div
                    key={a.h}
                    onMouseMove={handleSpotlight}
                    className="relative rounded-2xl bg-white/80 ring-1 ring-slate-200 p-6 shadow-sm transition hover:shadow-xl dark:bg-slate-950/80 dark:ring-slate-800"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(600px_200px_at_var(--x,50%)_-20%,rgba(59,130,246,.14),transparent)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    <h4 className="text-lg font-semibold">{a.h}</h4>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{a.p}</p>
                    {a.bullets && (
                      <ul className="mt-3 space-y-2">
                        {a.bullets.map((b) => (
                          <Bullet key={b}>{b}</Bullet>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                      <Image
                        src={a.img}
                        alt={a.h}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* iPhone → Android conversion CTA */}
              <div className="mt-12 rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <div className="relative">
                  <div className="absolute inset-0">
                    <Image
                      src={platformDetails.android.conversion.img}
                      alt="iPhone to Android conversion"
                      fill
                      sizes="100vw"
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.88),rgba(2,6,23,.6),rgba(30,64,175,.45))]" />
                  </div>
                  <div className="relative z-10 p-8 sm:p-12 text-white">
                    <div className="flex items-center gap-2">
                      <Apple className="w-5 h-5" />
                      <Shuffle className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-2xl font-bold">
                      {platformDetails.android.conversion.title}
                    </h4>
                    <p className="mt-2 text-white/90">
                      {platformDetails.android.conversion.text}
                    </p>
                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {platformDetails.android.conversion.techPoints.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 text-white/90 bg-white/10 ring-1 ring-white/15 rounded-xl px-3 py-2 backdrop-blur"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-300" />
                          <span className="text-sm">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* React Native */}
          {activePlatform === "reactnative" && (
            <div className="mt-16">
              <PlatformIntro {...platformDetails.reactnative} />
              <div className="mt-10 grid lg:grid-cols-2 gap-8">
                <Card
                  icon={ShieldCheck}
                  k1="Why us"
                  k2=""
                  bullets={platformDetails.reactnative.whyUs}
                />
                <Card
                  icon={Layers}
                  k1="Our React Native services"
                  k2=""
                  bullets={platformDetails.reactnative.services}
                />
              </div>
            </div>
          )}

          {/* Flutter */}
          {activePlatform === "flutter" && (
            <div className="mt-16">
              <PlatformIntro {...platformDetails.flutter} />
              <div className="mt-10 grid lg:grid-cols-2 gap-8">
                <Card icon={ShieldCheck} k1="Why us" k2="" bullets={platformDetails.flutter.whyUs} />
                <Card
                  icon={Layers}
                  k1="Our Flutter services"
                  k2=""
                  bullets={platformDetails.flutter.services}
                />
              </div>
            </div>
          )}

          {/* Xamarin */}
          {activePlatform === "xamarin" && <PlatformIntro {...platformDetails.xamarin} />}

          {/* Support & Maintenance */}
          {activePlatform === "maintenance" && (
            <div className="mt-16">
              {/* banner */}
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <div className="absolute inset-0">
                  <Image
                    src={platformDetails.maintenance.hero}
                    alt="Support & Maintenance"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.85),rgba(2,6,23,.6),rgba(30,64,175,.4))]" />
                </div>
                <div className="relative z-10 p-8 sm:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">Application maintenance & support</h3>
                  <p className="mt-2 text-white/90">Fulfilling your needs—our objective.</p>
                </div>
              </div>

              {/* intro */}
              <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold">
                    {platformDetails.maintenance.servicesTitle}
                  </h4>
                  <div className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                    {platformDetails.maintenance.servicesBody.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                    <Image
                      src={platformDetails.maintenance.servicesImg}
                      alt="Application maintenance services"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* types */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {platformDetails.maintenance.types.map((t) => (
                  <div key={t.k1} onMouseMove={handleSpotlight}>
                    <Card
                      icon={Settings2}
                      k1={t.k1}
                      k2={t.k2}
                      bullets={t.bullets}
                    />
                  </div>
                ))}
              </div>

              {/* expertise dark block */}
              <div className="mt-12 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[320px]">
                    <Image
                      src={platformDetails.maintenance.expertiseImg}
                      alt="Expertise"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-slate-950 text-white p-8 sm:p-12">
                    <h4 className="text-2xl font-bold">
                      Our <span className="text-yellow-300">expertise</span>
                    </h4>
                    <div className="mt-4 space-y-3 text-white/90">
                      {platformDetails.maintenance.expertiseCopy.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* enable customers */}
              <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                    <Image
                      src={platformDetails.maintenance.enableImg}
                      alt="Enable customers"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h4 className="text-xl font-semibold">
                    Our application maintenance services enable customers
                  </h4>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {platformDetails.maintenance.enableBullets.map((b) => (
                      <Bullet key={b}>{b}</Bullet>
                    ))}
                  </ul>
                </div>
              </div>

              {/* methodology */}
              <div className="mt-12">
                <SectionTitle
                  center
                  title="Our application maintenance methodology consists of four key phases"
                />
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {platformDetails.maintenance.methodology.map((m) => (
                    <div
                      key={m.title}
                      className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm dark:bg-slate-950/80 dark:ring-slate-800"
                    >
                      <p className="text-lg font-bold">{m.title}</p>
                      <ul className="mt-3 space-y-2">
                        {m.bullets.map((b) => (
                          <Bullet key={b}>{b}</Bullet>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* activities icon grid */}
              <div className="mt-12">
                <SectionTitle
                  center
                  title="Our application maintenance & support services encompass"
                />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {platformDetails.maintenance.activities.map((a) => (
                    <li
                      key={a.label}
                      className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200 shadow-sm dark:bg-slate-950/80 dark:ring-slate-800"
                    >
                      <a.icon className="w-5 h-5 text-sky-600 shrink-0" />
                      <span className="text-sm">{a.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE SEATECH */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold">
              Why choose SeaTech as your custom mobile app development agency
            </h3>
            <p className="mt-4 text-white/85">
              Tailored services, seasoned engineers, and a transparent process—serving founders and
              enterprises across industries worldwide.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              ["23+", "Years experience"],
              ["100+", "Team members"],
              ["7100+", "Successful projects"],
              ["100%", "Transparent process"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-4xl font-extrabold text-yellow-300">{n}</div>
                <div className="mt-1 text-sm">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle center title="How we work?" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Handshake, label: "Strategy / Consulting" },
              { icon: Layout, label: "Design" },
              { icon: Code2, label: "Development" },
              { icon: ClipboardCheck, label: "QA & Launch" },
              { icon: LifeBuoy, label: "Ongoing Support" },
            ].map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200 shadow-sm dark:bg-slate-950/80 dark:ring-slate-800"
              >
                <s.icon className="w-5 h-5 text-sky-600" />
                <span className="text-sm">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2">
              <p className="text-3xl font-bold">Our</p>
              <p className="text-3xl font-bold text-yellow-500">Capabilities</p>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We extract the full potential of major mobile technologies to deliver innovative
              solutions.
            </p>

            <div className="mt-6 inline-flex rounded-xl ring-1 ring-slate-200 overflow-hidden">
              <button className="px-5 py-2 bg-sky-600 text-white">iOS</button>
              <button className="px-5 py-2 bg-white dark:bg-slate-950">Android</button>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-sm">
            {[
              "Swift",
              "Objective-C",
              "3D Touch",
              "CloudKit",
              "Core Bluetooth",
              "Cocoa Touch",
              "iOS Simulators",
              "CoreData",
              "CallKit",
              "HealthKit",
              "SpriteKit",
              "SQLite",
              "SwiftUI",
              "TestFlight",
              "Xcode",
            ].map((cap) => (
              <li
                key={cap}
                className="flex items-center justify-center rounded-xl bg-white px-3 py-3 ring-1 ring-slate-200 text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-800"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
