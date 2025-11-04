"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  X,
  Brain,
  Cpu,
  Zap,
  Shield,
  Globe,
  Star,
  Trophy,
  Clock,
  Target,
  Sparkles,
  Bot,
  Eye,
  Mic,
  Database,
  Settings,
  TrendingUp,
  Users,
  Heart,
  Award,
  Play,
  Download,
  Palette,
  BarChart3,
  Headphones,
  Code2,
  Layers,
  Network,
  Workflow,
  GitBranch,
  Server,
  CloudLightning,
  Atom,
  Lightbulb,
  Rocket
} from "lucide-react";

const heroBg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop";
const overviewImg = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop";

const aiServices = [
  {
    key: "llm",
    title: "Large Language Models",
    subtitle: "GPT, Claude & Custom LLMs",
    excerpt: "Build intelligent conversational AI, content generation, and reasoning systems with state-of-the-art language models.",
    banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    icon: <Bot className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    features: ["GPT-4 Integration", "Custom Fine-tuning", "RAG Systems", "Prompt Engineering", "Multi-modal AI"]
  },
  {
    key: "computer-vision",
    title: "Computer Vision",
    subtitle: "Image & Video Analysis",
    excerpt: "Advanced image recognition, object detection, and video analysis for automation and insights across industries.",
    banner: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",
    icon: <Eye className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    features: ["Object Detection", "Image Classification", "OCR & Document AI", "Video Analytics", "Real-time Processing"]
  },
  {
    key: "nlp",
    title: "Natural Language Processing",
    subtitle: "Text Analysis & Understanding",
    excerpt: "Extract insights from text, automate document processing, and build intelligent text-based applications.",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    icon: <Mic className="w-6 h-6" />,
    color: "from-green-600 to-emerald-700",
    features: ["Sentiment Analysis", "Entity Recognition", "Text Summarization", "Language Translation", "Speech-to-Text"]
  },
  {
    key: "machine-learning",
    title: "Machine Learning",
    subtitle: "Predictive Analytics & Automation",
    excerpt: "Custom ML models for prediction, classification, and automation tailored to your specific business needs.",
    banner: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop",
    icon: <Network className="w-6 h-6" />,
    color: "from-orange-600 to-red-600",
    features: ["Predictive Models", "Classification", "Regression Analysis", "Anomaly Detection", "Recommendation Systems"]
  },
  {
    key: "mlops",
    title: "MLOps & Deployment",
    subtitle: "Production AI Infrastructure",
    excerpt: "End-to-end ML pipeline management, model deployment, monitoring, and scaling for production environments.",
    banner: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    icon: <Server className="w-6 h-6" />,
    color: "from-cyan-600 to-blue-600",
    features: ["Model Deployment", "Pipeline Automation", "Performance Monitoring", "A/B Testing", "Scalable Infrastructure"]
  },
  {
    key: "data-science",
    title: "Data Science & Analytics",
    subtitle: "Insights & Intelligence",
    excerpt: "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence.",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-violet-600 to-purple-600",
    features: ["Data Mining", "Statistical Analysis", "Predictive Modeling", "Business Intelligence", "Data Visualization"]
  }
];

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Advanced AI Models",
    description: "State-of-the-art machine learning and deep learning models"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Processing",
    description: "Low-latency inference and real-time data processing"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with data privacy compliance"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Scalable Solutions",
    description: "Cloud-native architecture that scales with your needs"
  }
];

const stats = [
  { number: "150+", label: "AI Models Deployed", icon: <Trophy className="w-5 h-5" /> },
  { number: "99.9%", label: "Model Accuracy", icon: <Star className="w-5 h-5" /> },
  { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-5 h-5" /> },
  { number: "50+", label: "Industries Served", icon: <Target className="w-5 h-5" /> }
];

const process = [
  {
    step: "01",
    title: "Data Assessment",
    description: "We analyze your data quality, volume, and structure to design the optimal AI solution.",
    icon: <Database className="w-6 h-6" />
  },
  {
    step: "02",
    title: "Model Development",
    description: "Our AI experts build and train custom models tailored to your specific use case.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Testing & Validation",
    description: "Rigorous testing ensures model accuracy, reliability, and performance before deployment.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Deployment & Monitoring",
    description: "We deploy your AI solution and provide continuous monitoring and optimization.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const useCases = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Intelligent Chatbots",
    description: "AI-powered conversational agents for customer support and engagement",
    benefits: ["24/7 Availability", "Natural Conversations", "Multi-language Support", "Integration Ready"]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Visual Quality Control",
    description: "Automated defect detection and quality assurance in manufacturing",
    benefits: ["Real-time Detection", "Reduced Errors", "Cost Savings", "Scalable Inspection"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Forecast trends, demand, and outcomes to make data-driven decisions",
    benefits: ["Future Insights", "Risk Mitigation", "Optimized Operations", "Competitive Advantage"]
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Recommendation Systems",
    description: "Personalized content and product recommendations for better engagement",
    benefits: ["Increased Sales", "User Engagement", "Personalization", "Customer Retention"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fraud Detection",
    description: "Advanced anomaly detection to identify and prevent fraudulent activities",
    benefits: ["Real-time Alerts", "Pattern Recognition", "Risk Reduction", "Automated Response"]
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Process Automation",
    description: "Intelligent automation of complex business processes and workflows",
    benefits: ["Efficiency Gains", "Error Reduction", "Cost Optimization", "Scalable Operations"]
  }
];

function ServiceModal({ open, onClose, service }) {
  if (!open || !service) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card shadow-2xl ring-1 ring-border">
          <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
            <Image src={service.banner} alt={service.title} fill className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`} />
            <div className="relative z-10 h-full p-6 sm:p-10 text-white flex items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <span className="text-sm opacity-90">{service.subtitle}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black leading-tight">{service.title}</h3>
                <p className="mt-2 text-white/90 max-w-2xl">{service.excerpt}</p>
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
            <h4 className="text-xl font-bold text-foreground mb-4">Key Capabilities & Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.features.map((feature, index) => (
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

export default function AIServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="AI and Machine Learning" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-60 right-32 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '3s'}} />
          
          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g stroke="url(#neuralGrad)" strokeWidth="2" fill="none">
              <path d="M100,200 Q300,100 500,200 T900,200" className="animate-pulse" />
              <path d="M150,400 Q350,300 550,400 T950,400" className="animate-pulse" style={{animationDelay: '1s'}} />
              <path d="M50,600 Q250,500 450,600 T850,600" className="animate-pulse" style={{animationDelay: '2s'}} />
            </g>
            <g fill="#3b82f6" opacity="0.6">
              <circle cx="100" cy="200" r="4" className="animate-ping" />
              <circle cx="500" cy="200" r="4" className="animate-ping" style={{animationDelay: '0.5s'}} />
              <circle cx="900" cy="200" r="4" className="animate-ping" style={{animationDelay: '1s'}} />
            </g>
          </svg>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-6 shadow-2xl transform rotate-12 animate-float">
              <div className="flex flex-col items-center justify-center h-full">
                <Brain className="w-16 h-16 text-white/70 mb-4" />
                <div className="text-white/60 text-sm font-semibold">Neural Networks</div>
              </div>
            </div>
            <div className="absolute -left-20 top-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4 shadow-xl transform -rotate-6 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex flex-col items-center justify-center h-full">
                <Cpu className="w-12 h-12 text-white/70 mb-2" />
                <div className="text-white/60 text-xs font-semibold">Deep Learning</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Artificial Intelligence Solutions</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              <span className="text-white">For Tomorrow</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10">
              Harness the power of artificial intelligence to transform your business. From machine learning to natural language processing, 
              we build AI solutions that drive innovation and competitive advantage.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Explore AI Services <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                View Use Cases
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
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge AI research with practical business applications to deliver measurable results
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
                AI & Machine Learning
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Business With Intelligent Automation
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Artificial Intelligence is reshaping industries and creating new possibilities for business growth. 
                  Our AI solutions help you automate complex processes, gain deeper insights, and make smarter decisions.
                </p>
                <p>
                  From computer vision and natural language processing to predictive analytics and recommendation systems, 
                  we develop custom AI solutions that address your specific challenges and opportunities.
                </p>
                <p>
                  Our team of AI experts combines deep technical knowledge with business acumen to ensure your AI 
                  initiatives deliver real value and competitive advantage.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Custom AI Models</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Real-time Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Scalable Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Enterprise Security</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border shadow-2xl">
                <Image src={overviewImg} alt="AI and machine learning" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* AI SERVICES */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions covering the full spectrum of artificial intelligence and machine learning technologies
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service, index) => (
              <div
                key={service.key}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                      {service.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {service.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World AI Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how AI can transform your business operations and drive innovation across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-card p-8 rounded-2xl ring-1 ring-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{benefit}</span>
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
              Our AI Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to AI development that ensures successful implementation and measurable results
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
            "Their AI solution transformed our customer service operations. We've seen a 400% improvement in response times and 95% customer satisfaction."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Michael Chen</div>
              <div className="text-white/80">CTO, InnovateTech Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI can transform your business and create new opportunities for growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Start AI Project <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-muted px-8 py-4 font-semibold text-foreground ring-1 ring-border hover:bg-accent transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Get AI Quote
            </a>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        open={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
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