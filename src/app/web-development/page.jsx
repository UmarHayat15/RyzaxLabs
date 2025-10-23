"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, CheckCircle2, X } from "lucide-react";

/*
  =============================================
  Website Development — ultra-modern page (JSX)
  Matches the provided screenshot & inspect HTML, using the same images.
  =============================================
*/

const banner = "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"; // remote hero // from inspect
const overviewImage = "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"; // remote overview image // from inspect

// Per-tech modal content (shortened but faithful to the provided inspect code)
const techs = [
  {
    key: "nodejs",
    title: "Nodejs",
    subtitle: "Development",
    excerpt:
      "Modern businesses are rapidly adapting to the online digital space. Delivering a successful Digital asset is all about vision, planning and quality implementation...",
    banner: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "web development services",
    heroLine2: "Node.JS development company",
    heroLine3: "We build powerful Website for the Node.JS platform",
    sections: [
      {
        heading: "Node.js development services",
        paragraphs: [
          "Modern businesses are rapidly adapting to the online digital space. Delivering a successful Digital asset is all about vision, planning and quality implementation. It about aligning best practices with your business goal.",
          "Node.js holds a crucial place in the modern technology stack offering an amazing scalability and performance. With event driven and non-blocking I/O, it’s a great choice for building network based solutions that demand high number of simultaneous connections and an impressive throughput.",
          "At SeaTech, we live and breathe technology. With a team of experienced and highly skilled Node.JS developers, we craft powerful applications and ensure that your application architecture is proactively designed to meet future challenges and expansion.",
        ],
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
      {
        heading: "Nodejs web development services we offer",
        bullets: [
          "Node.JS Web Development",
          "Node.JS Customization",
          "Node.JS Module Development",
          "Node.JS Migration",
          "3rd Party Integrations",
          "Web Services and APIs",
          "Node.JS Consulting",
          "NoSQL and SQL Database Integrations",
          "Application Support and Maintenance",
        ],
        image: "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "angular",
    title: "Angular",
    subtitle: "Development",
    excerpt:
      "In the mobile-centered world of today, firms are more focused on creating applications that can work seamlessly across platforms. This approach is critical...",
    banner: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "Angular development company",
    heroLine3: "For the Angular Platform, we create dynamic websites.",
    sections: [
      {
        heading: "Angular development services",
        paragraphs: [
          "SeaTech - A Leading Player in Angular Consulting.",
          "Angular is one of the best platforms available in the market to build and deploy mobile and desktop web applications.",
          "SeaTech is a leading player in the Angular consulting and implementation market today. We help set the perfect Angular roadmap for you, guide you through implementation, and help you derive the maximum benefit out of it.",
        ],
        image:
          "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "python",
    title: "Python",
    subtitle: "Development",
    excerpt:
      "An astronomical rise in the Mobile trend has transformed the way Businesses interact with their customers. Smart technologies are trying to bridge…",
    banner: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Machine learning and AI",
    heroLine2: "Python",
    heroLine3: "General purpose programming language",
    sections: [
      {
        heading: "Python",
        paragraphs: [
          "Data Science landscape is evolving rapidly and technologies for extracting Intelligence from Data are getting smarter with ML and Big Data.",
          "At Fullestop, we use top Python tools for data pipelines, ML model building and serving, transforming your data asset into real business value.",
        ],
        image: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "laravel",
    title: "Laravel",
    subtitle: "Development",
    excerpt:
      "Fullestop, as a Laravel development company offers a complete skill set in the Laravel Customization and Laravel web development...",
    banner: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "Laravel Development Company",
    heroLine3:
      "Highly-Customized & Feature Rich Laravel Web Development to Empower Your Business.",
    sections: [
      {
        heading: "Laravel development services",
        paragraphs: [
          "SeaTech offers a complete skill set in Laravel Customization and Laravel web development.",
          "Our result‑driven approach and end‑to‑end solutions have served many different businesses.",
        ],
        image: "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "wordpress",
    title: "Wordpress",
    subtitle: "Development",
    excerpt:
      "Handling a large customer base from small business startups to large enterprises, SeaTech has gained relevant experience and strong expertise…",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Content management systems",
    heroLine2: "WordPress Website Development Company",
    heroLine3: "WordPress is loaded with many features, and trusted by millions.",
    sections: [
      {
        heading: "WordPress development services",
        paragraphs: [
          "We elevate authentic quality standards and embed innovation‑driven methodologies with agile delivery.",
          "Our experts integrate smooth and sophisticated visual features and details while enabling growth.",
        ],
        image:
          "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "cakephp",
    title: "CakePHP",
    subtitle: "Development",
    excerpt:
      "Experience the true power of CakePHP Development with Us. Be Scalable, Flexible and Smart...",
    banner: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "CakePHP Development Company",
    heroLine3: "Experience the true power of CakePHP Development with Us.",
    sections: [
      {
        heading: "CakePHP development services",
        paragraphs: [
          "Built on solid Design Patterns and Engineering Principles, CakePHP is a leading framework for modern web solutions.",
        ],
        image:
          "https://images.pexels.com/photos/3862383/pexels-photo-3862383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "dotnet",
    title: "Microsoft",
    subtitle: ".NET Development",
    excerpt:
      "In the era of iOS and iPhone Apps where everything is at the touch of your thumb, businesses can take the leverage of this smart technology to…",
    banner:
      "https://images.unsplash.com/photo-1551281044-8b89a4fd6f72?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "Asp .Net development company",
    heroLine3: "ASP.NET web development services with optimum quality standards.",
    sections: [
      {
        heading: "Asp .net development services",
        paragraphs: [
          "We are ardent supporters of Microsoft technologies. ASP.NET enables dynamic, high‑performing web apps and services.",
        ],
        image:
          "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "ror",
    title: "Ruby On Rails",
    subtitle: "Development",
    excerpt:
      "Critical to any company’s cloud implementation, architecture and automation are integral parts of any cloud service offered…",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "Ruby on rails development company",
    heroLine3: "Cloud Ready RoR Apps with Uncompromised Quality and Performance",
    sections: [
      {
        heading: "Ruby on rails development services",
        paragraphs: [
          "RoR is widely acknowledged for scalability, versatility and stability — ideal for RAD and agile delivery.",
        ],
        image:
          "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
  {
    key: "lamp",
    title: "Lamp (PHP/MySql)",
    subtitle: "Solutions",
    excerpt:
      "Fullestop offers custom LAMP (Linux, Apache, MySQL, PHP) development solutions to help with offshore development, programming and e‑commerce…",
    banner: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Web development services",
    heroLine2: "LAMP and PHP web development company",
    heroLine3: "LAMP developers help you get the best module for your project",
    sections: [
      {
        heading: "LAMP and PHP web development services",
        paragraphs: [
          "We provide custom LAMP solutions – from enterprise ecommerce to portals and community tools.",
        ],
        image:
          "https://images.pexels.com/photos/3862383/pexels-photo-3862383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
      },
    ],
  },
];

const techIcons = [
  { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "ASP.NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Drupal", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
  { name: "HTML 5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
  { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Magento", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Node", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Wordpress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

function LearnMoreModal({ open, onClose, techKey }) {
  if (!open || !techKey) return null;
  const item = techs.find((t) => t.key === techKey);
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
          {/* Modal hero */}
          <div className="relative h-[320px] overflow-hidden rounded-t-2xl">
            <Image src={item.banner} alt={`${item.title} banner`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="relative z-10 h-full p-6 sm:p-10 text-white flex items-center">
              <div>
                <p className="text-sm opacity-90">{item.heroLine1}</p>
                <h3 className="text-3xl sm:text-5xl font-black leading-tight">
                  {item.heroLine2}
                </h3>
                <p className="mt-1 text-sm sm:text-base opacity-90">{item.heroLine3}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 space-y-12">
            {item.sections.map((s, idx) => (
              <div key={idx} className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="heading text-2xl font-extrabold">{s.heading}</p>
                  {s.paragraphs && (
                    <div className="mt-3 space-y-4 text-slate-700">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-slate-800">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <Image src={s.image} alt={s.heading} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [modalTech, setModalTech] = useState(null);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* animated background chips */}
        <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0">
          <Image src={banner} alt="Website development banner" fill priority className="object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.3)_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl text-white">
            <h5 className="text-white/90">Driven to deliver</h5>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Website development company
            </h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              When it comes to high-end development we don’t forget about the basics. Delivering on time, on budget, and per scope. It’s what we’ve done for over a decade.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 hover:translate-y-[-1px]"
              >
                Explore services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                <BadgeCheck className="h-3.5 w-3.5" /> Web development services
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                Web development services
              </h2>
              <div className="mt-4 space-y-4 text-slate-700">
                <p>
                  Living in today's digital world, the Web has a much wider reach than any other form of digital media. As an invaluable and always accessible resource for information, it serves as a center of your online presence for your Business. Web Development starts with a well thought-out strategy and plan, understanding business goals, end user needs, and the competition. A strategically planned website helps establish credibility and provides an opportunity to tell your customers why they should trust you.
                </p>
                <p>
                  In today's expanding digital marketplace, it just isn’t enough to show up. Engaging aspect of the website is one of the core elements of a successful online presence and Usability plays a vital role in the effectiveness of your online investment. However, Designing a usable system requires far more than simply applying technology.
                </p>
                <p>
                  Knowing and understanding your online customers and meeting their expectations is the key that sets your web presence apart from your competition. Optimizing the User Experience helps optimize your success and humanize your relationship with your online visitors. The process of constructing a perfect usability strategy can be complex and requires deep analysis of the user behaviour and research based guidelines.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-lg">
                <Image src={overviewImage} alt="services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="heading text-lg font-semibold">
              Innovation & excellence powered by latest technology
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techs.map((t) => (
              <div
                key={t.key}
                onClick={() => setModalTech(t.key)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* gradient border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" style={{background:"linear-gradient(120deg, rgba(56,189,248,0.35), rgba(59,130,246,0.35), rgba(236,72,153,0.35))", padding:1}} />
                {/* sheen */}
                <div className="pointer-events-none absolute -top-24 -left-10 h-48 w-48 rotate-12 rounded-full bg-sky-400/20 blur-2xl group-hover:opacity-90 opacity-0 transition" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight">{t.title}</h4>
                      <div className="mt-1 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {t.subtitle}
                      </div>
                    </div>
                    {/* preview thumb */}
                    <div className="relative h-12 w-16 overflow-hidden rounded-md ring-1 ring-slate-200">
                      <Image src={t.sections?.[0]?.image || t.banner} alt={`${t.title} preview`} fill className="object-cover transition duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 line-clamp-3">
                    {t.excerpt}
                  </p>
                  {/* <div className="mt-5 flex items-center gap-2 text-sky-700 font-semibold">
                    <span className="transition group-hover:translate-x-1">Open details</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </div> */}
                </div>
                {/* bottom gradient bar */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">
              Web <span className="text-yellow-400">technologies</span> we work with
            </p>
            <p className="mt-3 text-white/80 max-w-4xl mx-auto">
              Our elite team of young and highly skilled web developers possesses in-depth knowledge of design and excels in various scripting and coding languages such as Node, Angular, React, Laravel, MongoDB, HTML5, PHP, ASP.NET and Wordpress. We also hold proficiency in CSS3, Magento, CMS and object modeling.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techIcons.map((icon) => (
              <li
                key={icon.name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                {/* <div className="relative h-10 w-10">
                  <Image src={icon.src} alt={icon.name} fill className="object-contain" />
                </div> */}
                <strong className="text-white text-sm">{icon.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Learn More Modal */}
      <LearnMoreModal open={!!modalTech} onClose={() => setModalTech(null)} techKey={modalTech} />
    </main>
  );
}
