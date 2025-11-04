"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  BadgeCheck, 
  CheckCircle2, 
  X, 
  Code2, 
  Rocket, 
  Users, 
  Trophy,
  Star,
  Globe,
  Zap,
  Shield,
  Target,
  Clock,
  TrendingUp,
  Sparkles
} from "lucide-react";

const banner = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop";
const overviewImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop";

const techs = [
  {
    key: "react",
    title: "React & Next.js",
    subtitle: "Modern Frontend",
    excerpt: "Build lightning-fast, SEO-optimized web applications with React and Next.js. Server-side rendering, static generation, and cutting-edge performance.",
    banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Frontend Excellence",
    heroLine2: "React & Next.js Development",
    heroLine3: "Building the future of web applications",
    sections: [
      {
        heading: "React & Next.js Development Services",
        paragraphs: [
          "React has revolutionized frontend development with its component-based architecture and virtual DOM. Combined with Next.js, we create blazing-fast applications with server-side rendering, automatic code splitting, and optimized performance.",
          "Our React experts build scalable, maintainable applications that provide exceptional user experiences. From single-page applications to complex enterprise solutions, we leverage the full power of the React ecosystem.",
          "With Next.js, we ensure your applications are SEO-friendly, performant, and ready for production from day one."
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  {
    key: "nodejs",
    title: "Node.js",
    subtitle: "Backend Development",
    excerpt: "Scalable server-side applications with Node.js. Event-driven architecture, real-time capabilities, and high-performance APIs for modern web solutions.",
    banner: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Backend Excellence",
    heroLine2: "Node.js Development",
    heroLine3: "Powering scalable server-side solutions",
    sections: [
      {
        heading: "Node.js Development Services",
        paragraphs: [
          "Node.js enables us to build fast, scalable network applications using JavaScript on the server-side. Its event-driven, non-blocking I/O model makes it perfect for data-intensive real-time applications.",
          "Our Node.js expertise spans from RESTful APIs to real-time chat applications, microservices architecture, and enterprise-grade backend solutions.",
          "We leverage the vast npm ecosystem to deliver robust, maintainable server-side applications that scale with your business needs."
        ],
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  {
    key: "python",
    title: "Python & Django",
    subtitle: "Full-Stack Development",
    excerpt: "Rapid development with Python and Django. Clean, pragmatic design for web applications, APIs, and data-driven solutions with robust security.",
    banner: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "Python Excellence",
    heroLine2: "Django Development",
    heroLine3: "Rapid, secure, and scalable web solutions",
    sections: [
      {
        heading: "Python & Django Development",
        paragraphs: [
          "Python's simplicity and Django's 'batteries-included' philosophy enable rapid development of secure, maintainable web applications.",
          "We build everything from content management systems to complex data analytics platforms using Python's rich ecosystem.",
          "Django's built-in security features, ORM, and admin interface accelerate development while ensuring enterprise-grade reliability."
        ],
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  {
    key: "laravel",
    title: "Laravel & PHP",
    subtitle: "Backend Framework",
    excerpt: "Elegant PHP development with Laravel. Expressive syntax, powerful features, and rapid development for modern web applications and APIs.",
    banner: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "PHP Excellence",
    heroLine2: "Laravel Development",
    heroLine3: "Elegant solutions for modern web development",
    sections: [
      {
        heading: "Laravel Development Services",
        paragraphs: [
          "Laravel's elegant syntax and powerful features make PHP development a joy. We create robust, scalable applications with clean, maintainable code.",
          "From e-commerce platforms to enterprise applications, Laravel's rich ecosystem enables rapid development without compromising quality.",
          "Built-in features like Eloquent ORM, Blade templating, and Artisan CLI accelerate development while maintaining best practices."
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  {
    key: "wordpress",
    title: "WordPress",
    subtitle: "CMS Development",
    excerpt: "Custom WordPress solutions from simple websites to complex applications. Theme development, plugin creation, and headless WordPress implementations.",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "CMS Excellence",
    heroLine2: "WordPress Development",
    heroLine3: "Powering the web with flexible content management",
    sections: [
      {
        heading: "WordPress Development Services",
        paragraphs: [
          "WordPress powers over 40% of the web, and we harness its full potential to create custom solutions tailored to your needs.",
          "From custom themes and plugins to headless WordPress implementations, we extend WordPress beyond traditional boundaries.",
          "Our WordPress expertise includes e-commerce integration, performance optimization, and enterprise-grade security implementations."
        ],
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  {
    key: "ecommerce",
    title: "E-Commerce",
    subtitle: "Online Stores",
    excerpt: "Complete e-commerce solutions with Shopify, WooCommerce, and custom platforms. Payment integration, inventory management, and conversion optimization.",
    banner: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
    heroLine1: "E-Commerce Excellence",
    heroLine2: "Online Store Development",
    heroLine3: "Driving sales with powerful e-commerce solutions",
    sections: [
      {
        heading: "E-Commerce Development Services",
        paragraphs: [
          "We create powerful e-commerce platforms that drive sales and enhance customer experience. From Shopify customizations to custom-built solutions.",
          "Our e-commerce expertise includes payment gateway integration, inventory management, order processing, and conversion rate optimization.",
          "We build scalable online stores that grow with your business, supporting everything from small boutiques to enterprise marketplaces."
        ],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  }
];

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized for speed with modern frameworks and best practices"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "SEO Optimized",
    description: "Built for search engines with technical SEO best practices"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance First",
    description: "Core Web Vitals optimized for exceptional user experience"
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: <Trophy className="w-5 h-5" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
  { number: "10+", label: "Years Experience", icon: <Target className="w-5 h-5" /> }
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
    icon: <Target className="w-6 h-6" />
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Our designers create stunning, user-centric interfaces with interactive prototypes for validation.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Our developers build your solution using cutting-edge technologies with rigorous testing throughout.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and optimization services.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

function LearnMoreModal({ open, onClose, techKey }) {
  if (!open || !techKey) return null;
  const item = techs.find((t) => t.key === techKey);
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-card shadow-2xl ring-1 ring-border">
          <div className="relative h-[320px] overflow-hidden rounded-t-2xl">
            <Image src={item.banner} alt={`${item.title} banner`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="relative z-10 h-full p-6 sm:p-10 text-white flex items-center">
              <div>
                <p className="text-sm opacity-90">{item.heroLine1}</p>
                <h3 className="text-3xl sm:text-5xl font-black leading-tight">{item.heroLine2}</h3>
                <p className="mt-1 text-sm sm:text-base opacity-90">{item.heroLine3}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-12">
            {item.sections.map((s, idx) => (
              <div key={idx} className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <h4 className="text-2xl font-extrabold text-foreground">{s.heading}</h4>
                  {s.paragraphs && (
                    <div className="mt-3 space-y-4 text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border">
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image src={banner} alt="Web development" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Web Development Excellence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
              We build world-class web applications that combine stunning design with cutting-edge technology. 
              From concept to deployment, we deliver solutions that drive business growth.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300"
              >
                Our Process
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 mb-6">
                <BadgeCheck className="h-4 w-4" /> 
                Web Development Services
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Tomorrow's Web Today
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  In today's digital-first world, your website is often the first impression customers have of your business. 
                  We create web experiences that not only look stunning but also drive conversions and business growth.
                </p>
                <p>
                  Our development process combines strategic thinking with technical excellence. We don't just build websites; 
                  we craft digital solutions that solve real business problems and create lasting value.
                </p>
                <p>
                  From responsive design to performance optimization, security implementation to SEO best practices, 
                  every aspect of our development process is designed to deliver exceptional results.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Responsive Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">SEO Optimized</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Fast Loading</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Secure & Reliable</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border shadow-2xl">
                <Image src={overviewImage} alt="Web development services" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build scalable, maintainable, and high-performance web applications
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {techs.map((tech, index) => (
              <div
                key={tech.key}
                onClick={() => setModalTech(tech.key)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tech.title}
                      </h3>
                      <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {tech.subtitle}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg overflow-hidden ring-1 ring-border">
                      <Image 
                        src={tech.sections?.[0]?.image || tech.banner} 
                        alt={tech.title} 
                        width={48} 
                        height={48} 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {tech.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-black text-primary/20 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project and create a web solution that drives results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary shadow-lg hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Learn More Modal */}
      <LearnMoreModal open={!!modalTech} onClose={() => setModalTech(null)} techKey={modalTech} />
    </main>
  );
}