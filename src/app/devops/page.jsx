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

/* ------------------------------------ */
/* DevOps Helpers                      */
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
/* DevOps Data                         */
/* ------------------------------------ */

const heroBg =
  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"; // DevOps workspace, servers, code

const overviewImg =
  "https://images.pexels.com/photos/4049986/pexels-photo-4049986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";

const platformDetails = {
  devops: {
    title: "DevOps Engineering",
    kicker: "CI/CD Automation",
    tagline: "Streamline your pipeline with robust DevOps practices.",
    hero:
      "https://images.pexels.com/photos/5589437/pexels-photo-5589437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    bodyTitle: "DevOps implementation services",
    body: [
      "We offer comprehensive DevOps solutions that enable seamless integration, continuous delivery, and improved collaboration.",
      "With advanced automation tools and cloud-native solutions, we help you reduce downtime and increase deployment frequency.",
      "Our DevOps practices include containerization, microservices architecture, and robust cloud-based infrastructure.",
    ],
    sideImage:
      "https://images.pexels.com/photos/5076847/pexels-photo-5076847.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    techTabs: [
      { key: "jenkins", label: "Jenkins" },
      { key: "kubernetes", label: "Kubernetes" },
      { key: "docker", label: "Docker" },
      { key: "terraform", label: "Terraform" },
      { key: "ansible", label: "Ansible" },
    ],
    techExplainers: {
      jenkins: {
        img:
          "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "01 Jenkins",
        copy: [
          "Jenkins is an open-source automation server used for continuous integration and continuous delivery.",
          "We implement Jenkins pipelines to automate your build, test, and deployment process.",
        ],
      },
      kubernetes: {
        img:
          "https://images.pexels.com/photos/3861948/pexels-photo-3861948.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "02 Kubernetes",
        copy: [
          "Kubernetes is an open-source container orchestration system for automating application deployment, scaling, and management.",
          "Our team configures Kubernetes clusters to provide high availability, security, and scalability for your applications.",
        ],
      },
      docker: {
        img:
          "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "03 Docker",
        copy: [
          "Docker simplifies deployment by packaging applications in containers that can run anywhere.",
          "We use Docker for efficient and reproducible development environments and CI/CD pipelines.",
        ],
      },
      terraform: {
        img:
          "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "04 Terraform",
        copy: [
          "Terraform is an infrastructure as code tool that enables you to define and provision infrastructure using a high-level configuration language.",
          "We use Terraform to automate the provisioning of cloud resources and ensure infrastructure consistency.",
        ],
      },
      ansible: {
        img:
          "https://images.pexels.com/photos/3862383/pexels-photo-3862383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
        title: "05 Ansible",
        copy: [
          "Ansible is an open-source automation tool for configuration management, application deployment, and task automation.",
          "We use Ansible to automate server configuration, software installation, and cloud provisioning.",
        ],
      },
    },
  },

  /* Other platforms like "cloud", "reactnative", etc., can be added here */
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
        </div>
        <div className="relative z-10 p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <ShieldCheck className="w-3.5 h-3.5" />
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

export default function DevOpsPage() {
  const [activePlatform, setActivePlatform] = useState("devops");

  const devOpsTabKeys = platformDetails.devops.techTabs.map((t) => t.key);
  const [devOpsTech, setDevOpsTech] = useState(devOpsTabKeys[0]);

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
            alt="DevOps workspace"
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
              DevOps Automation
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Unlock DevOps Efficiency with{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">
                Seamless Automation
              </span>
              — empowering your pipeline
            </h1>
            <p className="mt-4 text-white/85">
              Experience cutting-edge automation and cloud-native solutions that scale with your enterprise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#platforms"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Explore Platforms
              </a>
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
                DevOps implementation services
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Empower your business through DevOps-driven automation
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <p>
                  Drive your infrastructure with automated pipelines, cloud-native tools, and seamless integrations.
                </p>
                <p>
                  Our team crafts tailored DevOps solutions that ensure continuous integration, continuous delivery (CI/CD), and automated scaling.
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                <Bullet>Cloud-native tools and orchestration</Bullet>
                <Bullet>CI/CD automation for faster deployment</Bullet>
                <Bullet>Cloud infrastructure with security-first principles</Bullet>
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <Image
                  src={overviewImg}
                  alt="Cloud infrastructure"
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
              Select your DevOps tools — we'll help you scale
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Harness the power of Jenkins, Docker, Kubernetes, Terraform, and more.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex max-w-5xl flex-wrap items-center justify-center gap-2">
              <Pill active={activePlatform === "devops"} onClick={() => setActivePlatform("devops")}>
                <span className="inline-flex items-center gap-2">
                  <Apple className="w-4 h-4" /> DevOps
                </span>
              </Pill>
            </div>
          </div>

          {/* DevOps */}
          {activePlatform === "devops" && (
            <PlatformIntro {...platformDetails.devops}>
              {/* DevOps tech tabs */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {platformDetails.devops.techTabs.map((t) => (
                    <Pill key={t.key} active={devOpsTech === t.key} onClick={() => setDevOpsTech(t.key)}>
                      {t.label}
                    </Pill>
                  ))}
                </div>
                <div className="mt-8 grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                      <Image
                        src={platformDetails.devops.techExplainers[devOpsTech].img}
                        alt={platformDetails.devops.techExplainers[devOpsTech].title}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h5 className="text-xl font-semibold">
                      {platformDetails.devops.techExplainers[devOpsTech].title}
                    </h5>
                    <div className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                      {platformDetails.devops.techExplainers[devOpsTech].copy.map((c) => (
                        <p key={c}>{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PlatformIntro>
          )}
        </div>
      </section>
    </main>
  );
}