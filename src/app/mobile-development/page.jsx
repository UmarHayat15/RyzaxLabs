"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  X,
  Smartphone,
  Rocket,
  Code2,
  Zap,
  Shield,
  Globe,
  Star,
  Trophy,
  Clock,
  Target,
  Sparkles,
  Apple,
  Monitor,
  Layers,
  TrendingUp,
  Users,
  Heart,
  Award,
  Play,
  Download,
  Palette,
  Database,
  Settings,
  BarChart3,
  Headphones
} from "lucide-react";

const heroBg = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop";
const overviewImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop";

const platforms = [
  {
    key: "ios",
    title: "iOS Development",
    subtitle: "Native iPhone & iPad Apps",
    excerpt: "Build stunning native iOS applications with Swift and SwiftUI. Optimized for performance, security, and the latest iOS features.",
    banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    icon: <Apple className="w-6 h-6" />,
    color: "from-slate-600 to-slate-800",
    features: ["Swift & SwiftUI", "Core Data", "CloudKit", "App Store Optimization", "iOS 17 Features"]
  },
  {
    key: "android",
    title: "Android Development", 
    subtitle: "Native Android Apps",
    excerpt: "Create powerful Android applications with Kotlin and Jetpack Compose. Material Design 3, performance optimization, and Google Play integration.",
    banner: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2000&auto=format&fit=crop",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-green-600 to-emerald-700",
    features: ["Kotlin & Compose", "Material Design 3", "Android Jetpack", "Google Services", "Play Store Optimization"]
  },
  {
    key: "react-native",
    title: "React Native",
    subtitle: "Cross-Platform Apps",
    excerpt: "Develop for both iOS and Android with a single codebase. Native performance with JavaScript and React components.",
    banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    icon: <Layers className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-600",
    features: ["React Native", "Expo Framework", "Native Modules", "Code Sharing", "Hot Reloading"]
  },
  {
    key: "flutter",
    title: "Flutter Development",
    subtitle: "Beautiful Cross-Platform",
    excerpt: "Build natively compiled applications with Flutter and Dart. Beautiful UIs, fast development, and excellent performance.",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-600 to-purple-600",
    features: ["Flutter & Dart", "Material & Cupertino", "Custom Widgets", "Hot Reload", "Multi-Platform"]
  }
];

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Fast Development",
    description: "Rapid prototyping and agile development cycles"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cross-Platform",
    description: "Native performance on iOS and Android"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Performance",
    description: "Optimized for speed and smooth user experience"
  }
];

const stats = [
  { number: "300+", label: "Apps Launched", icon: <Trophy className="w-5 h-5" /> },
  { number: "99%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
  { number: "5+", label: "Years Experience", icon: <Target className="w-5 h-5" /> }
];

const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    description: "We analyze your requirements, target audience, and create a comprehensive mobile strategy.",
    icon: <Target className="w-6 h-6" />
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Our designers create intuitive, beautiful interfaces optimized for mobile interactions.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your app using best practices with continuous testing and quality assurance.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We handle app store submission and provide ongoing maintenance and updates.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Native App Development",
    description: "Platform-specific apps for iOS and Android with optimal performance",
    features: ["Swift/Kotlin", "Native APIs", "Platform Guidelines", "App Store Optimization"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Cross-Platform Development", 
    description: "Single codebase for multiple platforms using React Native or Flutter",
    features: ["Code Reusability", "Faster Time-to-Market", "Consistent UX", "Cost Effective"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that creates engaging mobile experiences",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Scalable server infrastructure and APIs for your mobile applications",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Real-time Features"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "App Maintenance",
    description: "Ongoing support, updates, and performance optimization",
    features: ["Bug Fixes", "OS Updates", "Performance Monitoring", "Feature Updates"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Optimization",
    description: "Data-driven insights to improve app performance and user engagement",
    features: ["User Analytics", "Performance Metrics", "A/B Testing", "Conversion Optimization"]
  }
];

function PlatformModal({ open, onClose, platform }) {
  if (!open || !platform) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card shadow-2xl ring-1 ring-border">
          <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
            <Image src={platform.banner} alt={platform.title} fill className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-90`} />
            <div className="relative z-10 h-full p-6 sm:p-10 text-white flex items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {platform.icon}
                  <span className="text-sm opacity-90">{platform.subtitle}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black leading-tight">{platform.title}</h3>
                <p className="mt-2 text-white/90 max-w-2xl">{platform.excerpt}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10">
            <h4 className="text-xl font-bold text-foreground mb-4">Key Features & Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platform.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileDevelopmentPage() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="Mobile app development" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-60 right-32 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '3s'}} />
        </div>

        {/* Floating Phone Mockups */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-48 h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-12 animate-float">
              <div className="w-full h-full bg-gradient-to-b from-primary/20 to-blue-600/20 rounded-[2rem] flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-white/50" />
              </div>
            </div>
            <div className="absolute -left-20 top-10 w-40 h-80 bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2rem] p-2 shadow-xl transform -rotate-6 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-full h-full bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-[1.5rem] flex items-center justify-center">
                <Apple className="w-12 h-12 text-white/50" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Mobile App Development</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Building Mobile
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
              <br />
              <span className="text-white">That Matter</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10">
              We create innovative mobile applications that engage users, drive business growth, and deliver exceptional experiences across iOS and Android platforms.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#platforms"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Explore Platforms <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                Our Process
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
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
              Why Choose Our Mobile Development Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative design to deliver mobile solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4 group-hover:scale-110">
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
                Mobile App Development
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Ideas Into Powerful Mobile Applications
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  In today's mobile-first world, having a powerful mobile application is essential for business success. 
                  We create apps that not only look beautiful but also deliver exceptional performance and user experience.
                </p>
                <p>
                  Our team of expert developers and designers work closely with you to understand your vision and transform 
                  it into a mobile solution that engages users and drives business results.
                </p>
                <p>
                  From native iOS and Android apps to cross-platform solutions, we leverage the latest technologies and 
                  best practices to ensure your app stands out in the competitive mobile landscape.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Native Performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Intuitive Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">App Store Ready</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border shadow-2xl">
                <Image src={overviewImg} alt="Mobile app development" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Platform
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We specialize in native and cross-platform development, ensuring your app delivers the best possible experience on every device
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <div
                key={platform.key}
                onClick={() => setSelectedPlatform(platform)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${platform.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} text-white`}>
                      {platform.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {platform.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {platform.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {platform.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {platform.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Mobile Development Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end mobile development services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-card p-8 rounded-2xl ring-1 ring-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful app delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4 group-hover:scale-110">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-primary/20 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold mb-6">
            "The mobile app they developed exceeded our expectations. The user experience is incredible and our engagement rates have increased by 300%."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-white/80">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create a mobile solution that drives results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-muted px-8 py-4 font-semibold text-foreground ring-1 ring-border hover:bg-accent transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Platform Modal */}
      <PlatformModal 
        open={!!selectedPlatform} 
        onClose={() => setSelectedPlatform(null)} 
        platform={selectedPlatform} 
      />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}