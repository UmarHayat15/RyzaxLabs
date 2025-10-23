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
  Brain,
  Cpu,
  Database,
  Server,
  Bot,
  Workflow,
  CircuitBoard,
  GitBranch,
  Cloud,
} from "lucide-react";

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
/* DATA (AI-focused)                    */
/* ------------------------------------ */

// AI hero & imagery (royalty-free, tech/AI relevant)
const heroBg =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"; // abstract neural/board

const overviewImg =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"; // team w/ data screens

const aiDetails = {
  llm: {
    title: "Large Language Models (LLMs)",
    kicker: "AI Engineering",
    tagline:
      "RAG, agents, and domain-tuned LLMs that drive measurable business outcomes.",
    hero:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
    bodyTitle: "LLM solutions & conversational AI",
    body: [
      "Design and deploy task-specific LLMs with Retrieval-Augmented Generation (RAG), tool use, and guardrails.",
      "Enterprise features: role-based access, audit logs, PII redaction, and evaluators for safety/quality.",
      "From prompt-ops to production: data prep, prompt libraries, vector stores, evals, monitoring, and CI/CD.",
    ],
    sideImage:
      "https://images.unsplash.com/photo-1555252586-50c4d0b15f06?q=80&w=1200&auto=format&fit=crop",
    techTabs: [
      { key: "families", label: "Model Families" },
      { key: "rag", label: "RAG & Indexing" },
      { key: "finetune", label: "Fine-Tuning" },
      { key: "agents", label: "Agents & Tools" },
      { key: "evals", label: "Evals & Guardrails" },
    ],
    techExplainers: {
      families: {
        img:
          "https://images.unsplash.com/photo-1534759846116-5797a4d0f82f?q=80&w=1400&auto=format&fit=crop",
        title: "01 Model Families",
        copy: [
          "OpenAI (GPT-4/4.1/mini), Anthropic (Claude), Google (Gemini), Mistral, Meta (Llama) — selected per task, latency, and cost targets.",
          "Quantization, distillation, and on-device/edge strategies when data locality or cost is critical.",
        ],
      },
      rag: {
        img:
          "https://images.unsplash.com/photo-1516880711640-4e6e3f1b37d9?q=80&w=1400&auto=format&fit=crop",
        title: "02 Retrieval & Indexing",
        copy: [
          "Chunking strategies, hybrid search (BM25 + dense), re-ranking, and metadata governance for high-fidelity answers.",
          "Vector DBs: Pinecone, Weaviate, Qdrant, Milvus; embeddings orchestration and drift detection.",
        ],
      },
      finetune: {
        img:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop",
        title: "03 Fine-Tuning",
        copy: [
          "Instruction-tuning, LoRA/QLoRA, parameter-efficient methods, curriculum design, and evaluation loops.",
          "Data curation pipelines: dedupe, PII scrub, weak labeling, preference data (DPO), and RLHF hooks.",
        ],
      },
      agents: {
        img:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
        title: "04 Agents & Tool Use",
        copy: [
          "Structured tool calling, multi-step planning, function routers, and safety sandboxes for external actions.",
          "Integrations with CRMs, ERPs, ticketing, payments, search, and private APIs.",
        ],
      },
      evals: {
        img:
          "https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1400&auto=format&fit=crop",
        title: "05 Evals & Guardrails",
        copy: [
          "Automated evals for correctness, toxicity, bias, and hallucination rates; golden sets & canary tests.",
          "Guardrails: content filters, policy prompts, jailbreak prevention, red-team test harnesses.",
        ],
      },
    },
  },

  vision: {
    title: "Computer Vision",
    kicker: "AI Engineering",
    tagline:
      "Detection, OCR, multi-modal, and video understanding tailored to your workflows.",
    hero:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1800&auto=format&fit=crop",
    bodyTitle: "Vision pipelines & multi-modal AI",
    body: [
      "Object/instance segmentation, defect detection, document AI (OCR, KVP extraction), and SKU classification.",
      "Vision-Language models (VLMs) for step-by-step reasoning, visual QA, and report generation.",
    ],
    sideImage:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop",
    architecture: [
      {
        h: "Vision data engine",
        p: "Curate, augment, and label with active-learning loops and quality metrics.",
        img:
          "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1400&auto=format&fit=crop",
      },
      {
        h: "Models & deployment",
        p: "YOLO/Detectron2, Segment-Anything, GroundingDINO, VLMs — packaged to edge, cloud, or on-prem.",
        img:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        h: "Quality & governance",
        p: "Bias checks, drift monitors, human-in-the-loop reviews, and auditability.",
        bullets: ["Golden sets", "Real-time metrics", "PII policy gates"],
        img:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
      },
    ],
    conversion: {
      title: "From POC to production vision",
      text:
        "Harden pilots with robust data, repeatable pipelines, and SLA-grade serving.",
      techPoints: [
        "GPU scheduling",
        "Edge streaming",
        "Async batch jobs",
        "A/B shadow deploys",
        "Canary releases",
        "Auto-rollback",
      ],
      img:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    },
  },

  speech: {
    title: "Speech & NLP",
    kicker: "AI Engineering",
    tagline: "Transcription, translation, summarization, and NLU at scale.",
    hero:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1800&auto=format&fit=crop",
    bodyTitle: "Speech/NLP systems",
    body: [
      "Streaming ASR with diarization, multilingual NMT, topic extraction, and entity linking.",
      "Task-oriented dialogue, contact-center intelligence, and compliance QA.",
    ],
    sideImage:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
    whyUs: [
      "Sub-second latency paths",
      "Batch & streaming pipelines",
      "PII scrubbing + redaction",
      "Quality evals & test suites",
      "Multi-cloud portability",
    ],
    services: [
      "ASR/NMT pipelines",
      "Contact-center analytics",
      "Topic & intent models",
      "Summarization/QA",
      "Language ID & diarization",
      "Prompt-ops for NLP",
      "Data labeling ops",
      "Edge & mobile inference",
    ],
  },

  mlops: {
    title: "MLOps & Platforms",
    kicker: "AI Platform",
    tagline:
      "From notebooks to governed, observable, and scalable AI platforms.",
    hero:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop",
    bodyTitle: "Production AI platforms",
    body: [
      "Model registry, feature store, lineage, and CI/CD for ML/LLM with automated tests & gates.",
      "Kubernetes + GPUs, autoscaling, canaries, and cost controls (spot, right-sizing, caching).",
    ],
    sideImage:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop",
    whyUs: [
      "MLflow, Vertex, SageMaker, Databricks",
      "Feature stores & batch/stream",
      "Observability (Arize, WhyLabs, Prometheus)",
      "DS/Eng guardrails & RBAC",
      "Infra as code (Terraform)",
    ],
    services: [
      "Model serving/gateway",
      "Feature engineering",
      "Model registry & lineage",
      "A/B & shadow testing",
      "LLM eval harnesses",
      "FinOps & cost telemetry",
      "Data contracts",
      "Compliance & audit",
    ],
  },

  data: {
    title: "Data Engineering",
    kicker: "Data Platform",
    tagline: "Modern data stacks that fuel AI: reliable, fast, and governed.",
    hero:
      "https://images.unsplash.com/photo-1551281044-8d8d0d8dfc5f?q=80&w=1800&auto=format&fit=crop",
    bodyTitle: "Pipelines & real-time data",
    body: [
      "Batch/stream pipelines, CDC, and orchestration with Airflow/Prefect/Ray.",
      "Warehouse/lakehouse design, medallion layers, and data quality SLAs.",
    ],
    sideImage:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },

  maintenance: {
    title: "Model Lifecycle & Support",
    hero:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop",
    servicesTitle: "Post-production model operations",
    servicesBody: [
      "Keep models accurate, safe, and cost-efficient across data, concept, and prompt drift.",
      "Playbooks for rollback, re-train, re-index, and prompt iteration with approvals.",
    ],
    servicesImg:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
    types: [
      { k1: "Corrective", k2: "Maintenance", bullets: ["Defect & incident response", "Hotfix & rollback"] },
      { k1: "Perfective", k2: "Tuning", bullets: ["Latency & cost optimization", "Feature & prompt updates"] },
      { k1: "Adaptive", k2: "Upgrades", bullets: ["New model families", "Hardware/software shifts"] },
      { k1: "Preventive", k2: "Hardening", bullets: ["Chaos testing", "Security & policy gates"] },
      { k1: "Emergency", k2: "Response", bullets: ["PII leaks", "Policy non-compliance"] },
    ],
    expertiseImg:
      "https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1400&auto=format&fit=crop",
    expertiseCopy: [
      "24×7 monitoring SLAs with on-call rotations and runbooks.",
      "Automated evals on fresh data, plus regression suites pre-deploy.",
    ],
    enableImg:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1400&auto=format&fit=crop",
    enableBullets: [
      "Lower risk & predictable costs",
      "Release cadence & versioning",
      "Robustness under drift",
      "Focus on product velocity",
      "Stay current with model advances",
      "Smooth vendor transitions",
      "Quality of service KPIs",
      "Lower total cost of ownership",
    ],
    methodology: [
      {
        title: "Pre-Transition",
        bullets: [
          "Baseline evals & SLAs",
          "Observability plan",
          "Data/PII contracts",
          "Access & RBAC setup",
        ],
      },
      {
        title: "Transition",
        bullets: [
          "Knowledge transfer",
          "Shadowing & dry-runs",
          "Playbook rehearsal",
          "SRE hand-off",
        ],
      },
      {
        title: "Maintenance",
        bullets: [
          "Error budgets",
          "Drift alerts & triage",
          "Re-train & re-index",
          "Cost tuning",
        ],
      },
      {
        title: "Support",
        bullets: ["Steady-state ops", "Audit logs & compliance reports"],
      },
    ],
    activities: [
      { icon: ClipboardCheck, label: "Runbooks & documentation" },
      { icon: Bug, label: "Incident & regression triage" },
      { icon: RefreshCcw, label: "Model & prompt updates" },
      { icon: LifeBuoy, label: "Tiered on-call support" },
      { icon: Settings2, label: "Infra & gateway tuning" },
      { icon: LineChart, label: "Live KPIs & drift charts" },
      { icon: Gauge, label: "Latency & throughput testing" },
      { icon: UploadCloud, label: "Rollouts & rollbacks" },
      { icon: AppWindow, label: "E2E QA and canaries" },
      { icon: Globe, label: "Multi-region resilience" },
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
            <Cpu className="w-3.5 h-3.5" />
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

export default function AIServicesPage() {
  const [activeTrack, setActiveTrack] = useState("llm");

  const llmTabKeys = aiDetails.llm.techTabs.map((t) => t.key);
  const [llmTech, setLlmTech] = useState(llmTabKeys[0]);

  // spotlight cursor position for cards
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
            alt="AI & MLOps workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.92),rgba(2,6,23,.7),rgba(30,64,175,.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Brain className="w-3.5 h-3.5" />
              AI & MLOps Studio
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Build, ship, and govern{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">
                production-grade AI
              </span>
              —LLMs, vision, speech, and end-to-end ML pipelines.
            </h1>
            <p className="mt-4 text-white/85">
              From data to deployment: we design model architectures, automate ML pipelines,
              fine-tune models, and operate AI platforms with enterprise-grade security, evals, and cost controls.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore capabilities <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                View AI tracks
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/85">
              {[
                ["10x", "Time-to-value"],
                ["<200ms", "LLM tool-call paths"],
                ["99.9%", "Serving uptime"],
                ["30–70%", "Cost optimizations"],
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
                AI strategy → production operations
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                End-to-end AI: models, data, pipelines, and platform
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <p>
                  We translate business goals into model architectures and ML pipelines that are measurable and maintainable.
                </p>
                <p>
                  Our accelerators cover RAG, agents, evals, feature stores, model registry, and CI/CD for ML/LLM workloads.
                </p>
                <p>
                  Enterprise-ready by default: RBAC, audit trails, PII redaction, cost telemetry, and compliance gates.
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                <Bullet>Discovery → data design → modeling → deployment → MLOps</Bullet>
                <Bullet>Rigor: offline/online evals, canaries, drift & safety monitors</Bullet>
                <Bullet>Multi-cloud + on-prem, GPUs, and edge/stream serving</Bullet>
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <Image
                  src={overviewImg}
                  alt="Team planning AI pipelines"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK SELECTOR */}
      <section id="tracks" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
              AI tracks we deliver
            </span>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Pick your AI track — we’ll make it sing
              </span>
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              LLMs, Vision, Speech/NLP, MLOps Platforms, and Data Engineering — aligned to your objectives, SLAs, and budget.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex max-w-5xl flex-wrap items-center justify-center gap-2">
              <Pill active={activeTrack === "llm"} onClick={() => setActiveTrack("llm")}>
                <span className="inline-flex items-center gap-2">
                  <Bot className="w-4 h-4" /> LLMs
                </span>
              </Pill>
              <Pill active={activeTrack === "vision"} onClick={() => setActiveTrack("vision")}>
                <span className="inline-flex items-center gap-2">
                  <AppWindow className="w-4 h-4" /> Vision
                </span>
              </Pill>
              <Pill active={activeTrack === "speech"} onClick={() => setActiveTrack("speech")}>
                <span className="inline-flex items-center gap-2">
                  <MicIcon />+ Speech/NLP
                </span>
              </Pill>
              <Pill active={activeTrack === "mlops"} onClick={() => setActiveTrack("mlops")}>
                <span className="inline-flex items-center gap-2">
                  <Workflow className="w-4 h-4" /> MLOps
                </span>
              </Pill>
              <Pill active={activeTrack === "data"} onClick={() => setActiveTrack("data")}>
                <span className="inline-flex items-center gap-2">
                  <Database className="w-4 h-4" /> Data Eng
                </span>
              </Pill>
              <Pill
                active={activeTrack === "maintenance"}
                onClick={() => setActiveTrack("maintenance")}
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Model Lifecycle
                </span>
              </Pill>
            </div>
          </div>

          {/* LLMs */}
          {activeTrack === "llm" && (
            <PlatformIntro {...aiDetails.llm}>
              {/* LLM tech tabs */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {aiDetails.llm.techTabs.map((t) => (
                    <Pill key={t.key} active={llmTech === t.key} onClick={() => setLlmTech(t.key)}>
                      {t.label}
                    </Pill>
                  ))}
                </div>
                <div className="mt-8 grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                      <Image
                        src={aiDetails.llm.techExplainers[llmTech].img}
                        alt={aiDetails.llm.techExplainers[llmTech].title}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h5 className="text-xl font-semibold">
                      {aiDetails.llm.techExplainers[llmTech].title}
                    </h5>
                    <div className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                      {aiDetails.llm.techExplainers[llmTech].copy.map((c) => (
                        <p key={c}>{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PlatformIntro>
          )}

          {/* Vision */}
          {activeTrack === "vision" && (
            <div className="mt-16">
              <PlatformIntro {...aiDetails.vision} />

              {/* Vision blocks */}
              <div className="mt-12 grid lg:grid-cols-2 gap-8">
                {aiDetails.vision.architecture.map((a) => (
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

              {/* POC → production CTA */}
              <div className="mt-12 rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <div className="relative">
                  <div className="absolute inset-0">
                    <Image
                      src={aiDetails.vision.conversion.img}
                      alt="POC to production"
                      fill
                      sizes="100vw"
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.88),rgba(2,6,23,.6),rgba(30,64,175,.45))]" />
                  </div>
                  <div className="relative z-10 p-8 sm:p-12 text-white">
                    <div className="flex items-center gap-2">
                      <CircuitBoard className="w-5 h-5" />
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-2xl font-bold">
                      {aiDetails.vision.conversion.title}
                    </h4>
                    <p className="mt-2 text-white/90">{aiDetails.vision.conversion.text}</p>
                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {aiDetails.vision.conversion.techPoints.map((t) => (
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

          {/* Speech/NLP */}
          {activeTrack === "speech" && (
            <div className="mt-16">
              <PlatformIntro {...aiDetails.speech} />
              <div className="mt-10 grid lg:grid-cols-2 gap-8">
                <Card icon={ShieldCheck} k1="Why us" k2="" bullets={aiDetails.speech.whyUs} />
                <Card icon={Layers} k1="Speech/NLP services" k2="" bullets={aiDetails.speech.services} />
              </div>
            </div>
          )}

          {/* MLOps */}
          {activeTrack === "mlops" && (
            <div className="mt-16">
              <PlatformIntro {...aiDetails.mlops} />
              <div className="mt-10 grid lg:grid-cols-2 gap-8">
                <Card icon={Server} k1="Why us" k2="" bullets={aiDetails.mlops.whyUs} />
                <Card icon={Workflow} k1="Our MLOps services" k2="" bullets={aiDetails.mlops.services} />
              </div>
            </div>
          )}

          {/* Data Eng */}
          {activeTrack === "data" && <PlatformIntro {...aiDetails.data} />}

          {/* Model Lifecycle */}
          {activeTrack === "maintenance" && (
            <div className="mt-16">
              {/* banner */}
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                <div className="absolute inset-0">
                  <Image
                    src={aiDetails.maintenance.hero}
                    alt="Model Lifecycle & Support"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.85),rgba(2,6,23,.6),rgba(30,64,175,.4))]" />
                </div>
                <div className="relative z-10 p-8 sm:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">Model lifecycle & platform support</h3>
                  <p className="mt-2 text-white/90">Accuracy today. Reliability tomorrow.</p>
                </div>
              </div>

              {/* intro */}
              <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold">{aiDetails.maintenance.servicesTitle}</h4>
                  <div className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
                    {aiDetails.maintenance.servicesBody.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
                    <Image
                      src={aiDetails.maintenance.servicesImg}
                      alt="Post-production operations"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* types */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {aiDetails.maintenance.types.map((t) => (
                  <div key={t.k1} onMouseMove={handleSpotlight}>
                    <Card icon={Settings2} k1={t.k1} k2={t.k2} bullets={t.bullets} />
                  </div>
                ))}
              </div>

              {/* expertise dark block */}
              <div className="mt-12 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[320px]">
                    <Image
                      src={aiDetails.maintenance.expertiseImg}
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
                      {aiDetails.maintenance.expertiseCopy.map((p) => (
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
                      src={aiDetails.maintenance.enableImg}
                      alt="Enable customers"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h4 className="text-xl font-semibold">
                    Our lifecycle services enable your teams to
                  </h4>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {aiDetails.maintenance.enableBullets.map((b) => (
                      <Bullet key={b}>{b}</Bullet>
                    ))}
                  </ul>
                </div>
              </div>

              {/* methodology */}
              <div className="mt-12">
                <SectionTitle
                  center
                  title="Operational methodology across four phases"
                />
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {aiDetails.maintenance.methodology.map((m) => (
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
                <SectionTitle center title="Lifecycle operations include" />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {aiDetails.maintenance.activities.map((a) => (
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

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold">
              Why choose us as your AI partner
            </h3>
            <p className="mt-4 text-white/85">
              We align model quality, latency, and cost to business KPIs — then ship with governance and observability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              ["100+", "Models shipped"],
              ["<1 wk", "Pilot to POC"],
              ["SLA", "Uptime & support"],
              ["SOC2", "Security posture"],
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
          <SectionTitle center title="How we work" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Handshake, label: "Discovery & scoping" },
              { icon: Layout, label: "Solution design" },
              { icon: Code2, label: "Build & integrate" },
              { icon: ClipboardCheck, label: "Evals & hardening" },
              { icon: LifeBuoy, label: "Operate & improve" },
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
              <p className="text-3xl font-bold text-yellow-500">AI Stack</p>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We assemble the right tools for the job — interoperable, observable, and future-proof.
            </p>

            <div className="mt-6 inline-flex rounded-xl ring-1 ring-slate-200 overflow-hidden">
              <button className="px-5 py-2 bg-sky-600 text-white">Modeling</button>
              <button className="px-5 py-2 bg-white dark:bg-slate-950">Platform</button>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-sm">
            {[
              // Modeling & LLM
              "PyTorch",
              "TensorFlow",
              "scikit-learn",
              "HuggingFace",
              "LangChain",
              "LlamaIndex",
              "OpenAI/Claude/Gemini/Mistral",
              "RAG (Pinecone/Weaviate/Qdrant)",
              // Platform & Data
              "MLflow",
              "Weights & Biases",
              "Ray",
              "Airflow/Prefect",
              "Kubernetes",
              "Docker",
              "Terraform",
              "Databricks",
              "Snowflake/BigQuery",
              "Kafka",
              "Redis",
              "Postgres",
              "Neo4j",
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

/* ------------------------------------ */
/* Small inline icon for Speech label   */
/* ------------------------------------ */
function MicIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="inline-block"
      {...props}
    >
      <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <path d="M12 19v4" />
    </svg>
  );
}