"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Settings, 
  GitBranch, 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  Database, 
  Monitor, 
  Code, 
  Layers, 
  RefreshCw, 
  Play, 
  X,
  ChevronRight,
  Star,
  Award,
  Gauge,
  Sparkles,
  BadgeCheck,
  Download,
  Workflow,
  Network,
  CloudLightning,
  Cpu,
  HardDrive
} from "lucide-react";

const heroBg = "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2000&auto=format&fit=crop";
const overviewImg = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop";

export default function DevOpsPage() {
  const [activeService, setActiveService] = useState(null);
  const [activeProcess, setActiveProcess] = useState(0);

  // Auto-rotate process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const devopsServices = [
    {
      id: 1,
      title: "CI/CD Pipeline Automation",
      icon: GitBranch,
      description: "Automated build, test, and deployment pipelines for faster delivery",
      features: ["Jenkins/GitHub Actions", "Automated Testing", "Blue-Green Deployments", "Rollback Strategies"],
      useCases: ["E-commerce platforms with 50+ daily deployments", "SaaS applications with zero-downtime updates", "Mobile apps with automated app store releases"]
    },
    {
      id: 2,
      title: "Container Orchestration",
      icon: Layers,
      description: "Kubernetes and Docker containerization for scalable applications",
      features: ["Kubernetes Clusters", "Docker Containerization", "Auto-scaling", "Service Mesh"],
      useCases: ["Microservices architecture for fintech apps", "Multi-tenant SaaS platforms", "High-traffic e-commerce during peak seasons"]
    },
    {
      id: 3,
      title: "Infrastructure as Code",
      icon: Code,
      description: "Terraform and CloudFormation for reproducible infrastructure",
      features: ["Terraform Modules", "CloudFormation Templates", "Version Control", "Environment Parity"],
      useCases: ["Multi-cloud deployments for enterprise clients", "Disaster recovery automation", "Development environment provisioning"]
    },
    {
      id: 4,
      title: "Cloud Migration & Optimization",
      icon: Cloud,
      description: "Seamless migration to AWS, Azure, and Google Cloud platforms",
      features: ["Migration Strategy", "Cost Optimization", "Performance Tuning", "Security Hardening"],
      useCases: ["Legacy system modernization", "Hybrid cloud implementations", "Cost reduction initiatives (30-50% savings)"]
    },
    {
      id: 5,
      title: "Monitoring & Observability",
      icon: Monitor,
      description: "Comprehensive monitoring with Prometheus, Grafana, and ELK stack",
      features: ["Real-time Monitoring", "Log Aggregation", "Alert Management", "Performance Analytics"],
      useCases: ["24/7 system health monitoring", "Predictive failure detection", "Performance optimization insights"]
    },
    {
      id: 6,
      title: "Security & Compliance",
      icon: Shield,
      description: "DevSecOps practices with automated security scanning and compliance",
      features: ["Security Scanning", "Compliance Automation", "Vulnerability Management", "Access Control"],
      useCases: ["HIPAA compliance for healthcare apps", "PCI DSS for payment systems", "SOC 2 certification processes"]
    }
  ];

  const processSteps = [
    { title: "Assessment & Planning", description: "Infrastructure audit and DevOps roadmap creation", icon: Target },
    { title: "Pipeline Design", description: "CI/CD pipeline architecture and tool selection", icon: GitBranch },
    { title: "Implementation", description: "Automated deployment and infrastructure setup", icon: Settings },
    { title: "Optimization", description: "Performance tuning and continuous improvement", icon: TrendingUp }
  ];

  const stats = [
    { label: "Deployment Frequency", value: "10x Faster", icon: Rocket },
    { label: "Lead Time Reduction", value: "75%", icon: Clock },
    { label: "System Uptime", value: "99.9%", icon: Shield },
    { label: "Cost Savings", value: "40%", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "RyzaxLabs transformed our deployment process. We went from weekly releases to multiple daily deployments with zero downtime.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Lead at CloudScale",
      content: "Their infrastructure automation reduced our cloud costs by 45% while improving performance. Exceptional DevOps expertise.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Engineering Manager at DataSync",
      content: "The monitoring and alerting system they built has prevented countless outages. Our MTTR improved by 80%.",
      rating: 5
    }
  ];

  // Floating DevOps Elements Component
  const FloatingDevOpsElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Pipeline Nodes */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
          <GitBranch className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4 animate-float">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
          <Server className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="absolute top-1/3 right-10 animate-float-delayed">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
          <Zap className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-1/4 left-1/3 animate-float opacity-20">
        <div className="bg-slate-800 text-green-400 p-2 rounded text-xs font-mono">
          kubectl apply -f deployment.yaml
        </div>
      </div>

      <div className="absolute bottom-1/4 right-1/3 animate-float-delayed opacity-20">
        <div className="bg-slate-800 text-blue-400 p-2 rounded text-xs font-mono">
          terraform plan && terraform apply
        </div>
      </div>
    </div>
  );

  // Pipeline Animation Component
  const PipelineAnimation = () => (
    <div className="relative w-full h-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20"></div>
      
      {/* Pipeline Steps */}
      <div className="flex items-center justify-between h-full px-8">
        {['Code', 'Build', 'Test', 'Deploy'].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              activeProcess >= index 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110' 
                : 'bg-slate-700'
            }`}>
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <span className="text-white text-xs mt-2">{step}</span>
          </div>
        ))}
      </div>

      {/* Animated Progress Line */}
      <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-700 -translate-y-0.5">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
          style={{ width: `${(activeProcess / 3) * 100}%` }}
        ></div>
      </div>

      {/* Flowing Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: '50%',
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="DevOps and Cloud Infrastructure" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        {/* Animated DevOps Network Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-60 right-32 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '3s'}} />
          
          {/* DevOps Pipeline Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g stroke="url(#devopsGrad)" strokeWidth="2" fill="none">
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

        {/* Floating DevOps Elements */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-6 shadow-2xl transform rotate-12 animate-float">
              <div className="flex flex-col items-center justify-center h-full">
                <GitBranch className="w-16 h-16 text-white/70 mb-4" />
                <div className="text-white/60 text-sm font-semibold">CI/CD Pipeline</div>
              </div>
            </div>
            <div className="absolute -left-20 top-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4 shadow-xl transform -rotate-6 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex flex-col items-center justify-center h-full">
                <Cloud className="w-12 h-12 text-white/70 mb-2" />
                <div className="text-white/60 text-xs font-semibold">Cloud Native</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">DevOps & Cloud Solutions</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Accelerate
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Journey
              </span>
              <br />
              <span className="text-white">To Success</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10">
              Transform your software delivery with cutting-edge DevOps practices, automated CI/CD pipelines, 
              and cloud-native infrastructure that scales with your business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Explore DevOps Services <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                View Process
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <stat.icon className="w-5 h-5" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Automated Pipeline
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch your code flow seamlessly from development to production
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PipelineAnimation />
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                activeProcess === index 
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 scale-105' 
                  : 'bg-white/50 dark:bg-slate-800/50'
              }`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeProcess === index 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                    : 'bg-slate-200 dark:bg-slate-700'
                }`}>
                  <step.icon className={`w-8 h-8 ${activeProcess === index ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World DevOps Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how DevOps transforms business operations across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Continuous Integration",
                description: "Automated code integration and testing for faster development cycles",
                benefits: ["Faster Releases", "Reduced Bugs", "Team Collaboration", "Code Quality"]
              },
              {
                icon: <CloudLightning className="w-8 h-8" />,
                title: "Cloud Migration",
                description: "Seamless migration to cloud infrastructure with zero downtime",
                benefits: ["Cost Reduction", "Scalability", "High Availability", "Global Reach"]
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Infrastructure Monitoring",
                description: "24/7 monitoring and alerting for proactive issue resolution",
                benefits: ["Real-time Alerts", "Performance Insights", "Predictive Analysis", "Cost Optimization"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security Automation",
                description: "Automated security scanning and compliance in CI/CD pipelines",
                benefits: ["Vulnerability Detection", "Compliance Automation", "Risk Mitigation", "Secure Deployment"]
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Database DevOps",
                description: "Automated database deployments and schema management",
                benefits: ["Schema Versioning", "Automated Backups", "Data Migration", "Performance Tuning"]
              },
              {
                icon: <Workflow className="w-8 h-8" />,
                title: "Microservices Orchestration",
                description: "Container orchestration and microservices management at scale",
                benefits: ["Service Discovery", "Load Balancing", "Auto Scaling", "Fault Tolerance"]
              }
            ].map((useCase, index) => (
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

      {/* DEVOPS TOOLS & TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DevOps Tools & Technologies We Master
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and platforms for complete DevOps transformation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                category: "CI/CD Platforms",
                icon: <GitBranch className="w-6 h-6" />,
                tools: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "CircleCI"]
              },
              {
                category: "Cloud Platforms",
                icon: <Cloud className="w-6 h-6" />,
                tools: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Kubernetes"]
              },
              {
                category: "Infrastructure as Code",
                icon: <Code className="w-6 h-6" />,
                tools: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "Chef"]
              },
              {
                category: "Monitoring & Logging",
                icon: <Monitor className="w-6 h-6" />,
                tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
              }
            ].map((category, index) => (
              <div key={index} className="group bg-card p-6 rounded-2xl ring-1 ring-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOPS BENEFITS */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Impact of DevOps Transformation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable results that drive business growth and operational excellence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                metric: "75%",
                title: "Faster Time to Market",
                description: "Reduce deployment cycles from weeks to hours with automated pipelines",
                icon: <Rocket className="w-8 h-8" />
              },
              {
                metric: "99.9%",
                title: "System Uptime",
                description: "Achieve enterprise-grade reliability with proactive monitoring",
                icon: <Shield className="w-8 h-8" />
              },
              {
                metric: "60%",
                title: "Cost Reduction",
                description: "Optimize infrastructure costs through automation and cloud efficiency",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                metric: "10x",
                title: "Deployment Frequency",
                description: "Enable multiple daily deployments with confidence and reliability",
                icon: <Zap className="w-8 h-8" />
              },
              {
                metric: "90%",
                title: "Issue Resolution Speed",
                description: "Faster incident response with automated monitoring and alerting",
                icon: <Clock className="w-8 h-8" />
              },
              {
                metric: "50%",
                title: "Developer Productivity",
                description: "Free developers from manual tasks to focus on innovation",
                icon: <Users className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center bg-card p-8 rounded-2xl ring-1 ring-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                  {benefit.icon}
                </div>
                <div className="text-4xl font-black text-primary mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              Comprehensive DevOps Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                DevOps Services That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform Businesses
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From CI/CD automation to cloud migration, we provide end-to-end DevOps solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setActiveService(service)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <activeService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeService.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{activeService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Real-World Use Cases</h4>
                  <ul className="space-y-3">
                    {activeService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/contact" className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* TESTIMONIAL */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold mb-6">
            "Their DevOps transformation reduced our deployment time from hours to minutes. Our team productivity increased by 300% and system reliability is now 99.9%."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold">David Martinez</div>
              <div className="text-white/80">CTO, TechScale Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Accelerate Your DevOps Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how DevOps can transform your software delivery and infrastructure management
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Start DevOps Project <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-muted px-8 py-4 font-semibold text-foreground ring-1 ring-border hover:bg-accent transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Get DevOps Guide
            </a>
          </div>
        </div>
      </section>



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