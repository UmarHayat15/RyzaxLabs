'use client';

import React, { useState, useEffect } from 'react';

const TechnologyCard = ({ icon, label, delay, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isHovered
            ? 'bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/30 blur-xl scale-105'
            : 'bg-transparent'
        }`}
      />

      {/* Card */}
      <div
        className={`relative border-2 border-dashed transition-all duration-700 ease-out p-12 flex flex-col items-center justify-center gap-6 backdrop-blur-sm ${
          isHovered
            ? 'bg-white/95 border-blue-400 shadow-2xl shadow-blue-500/50 scale-105 -translate-y-2'
            : 'bg-white/5 border-gray-600/50 hover:border-gray-500'
        }`}
        style={{
          borderRadius: '16px',
          minHeight: '200px',
          minWidth: '240px',
        }}
      >
        {/* Animated corner accents */}
        <div
          className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-xl transition-all duration-500 ${
            isHovered ? 'border-blue-500 scale-125' : 'border-transparent'
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-xl transition-all duration-500 ${
            isHovered ? 'border-blue-500 scale-125' : 'border-transparent'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 rounded-bl-xl transition-all duration-500 ${
            isHovered ? 'border-blue-500 scale-125' : 'border-transparent'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-xl transition-all duration-500 ${
            isHovered ? 'border-blue-500 scale-125' : 'border-transparent'
          }`}
        />

        {/* Icon container with 3D effect */}
        <div className="relative">
          <div
            className={`transition-all duration-700 ${
              isHovered
                ? 'rotate-[360deg] scale-110'
                : 'rotate-0 scale-100'
            }`}
            style={{
              filter: isHovered ? 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.5))' : 'none',
            }}
          >
            {icon}
          </div>
          
          {/* Orbiting particles */}
          {isHovered && (
            <>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
              <div
                className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              />
            </>
          )}
        </div>

        {/* Label */}
        <div className="relative">
          <span
            className={`text-xl font-bold tracking-[0.2em] transition-all duration-500 relative ${
              isHovered ? 'text-gray-900' : 'text-white'
            }`}
          >
            {label}
            {/* Underline animation */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-500 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            />
          </span>
        </div>

        {/* Hover shine effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background:
              'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
};

const FloatingParticle = ({ delay, duration, x, y }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const TechIndexHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
  // ANGULAR
  {
    id: 'angular',
    label: 'Angular',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-angular" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <polygon points="45,14 68,26 68,54 45,76 22,54 22,26" stroke="url(#grad-angular)" strokeWidth="2.8" fill="none"/>
        <path d="M45 28l-12 28h6l2.8-7h7.4l2.8 7h6L45 28z" stroke="url(#grad-angular)" strokeWidth="2.8" fill="none" strokeLinejoin="round"/>
        <line x1="42.8" y1="44" x2="47.2" y2="44" stroke="url(#grad-angular)" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    ),
    delay: 0,
  },

  // SEO
  {
    id: 'seo',
    label: 'SEO',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-seo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="16" stroke="url(#grad-seo)" strokeWidth="2.8" />
        <line x1="51" y1="51" x2="66" y2="66" stroke="url(#grad-seo)" strokeWidth="3.2" strokeLinecap="round"/>
        <rect x="34" y="34" width="4" height="12" rx="1" fill="url(#grad-seo)"/>
        <rect x="41" y="30" width="4" height="16" rx="1" fill="url(#grad-seo)"/>
        <rect x="48" y="38" width="4" height="8"  rx="1" fill="url(#grad-seo)"/>
      </svg>
    ),
    delay: 100,
  },

  // ASP.NET
  {
    id: 'aspnet',
    label: 'ASP.NET',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-aspnet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M18 54c8-14 20-14 28 0s20 14 28 0" stroke="url(#grad-aspnet)" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="24" cy="28" r="3" fill="url(#grad-aspnet)"/>
        <circle cx="66" cy="28" r="3" fill="url(#grad-aspnet)"/>
        <rect x="26" y="60" width="38" height="6" rx="3" fill="url(#grad-aspnet)"/>
      </svg>
    ),
    delay: 200,
  },

  // DRUPAL
  {
    id: 'drupal',
    label: 'Drupal',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-drupal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M45 16c8 10 20 14 20 28a20 20 0 1 1-40 0c0-14 12-18 20-28z" stroke="url(#grad-drupal)" strokeWidth="2.8" fill="none"/>
        <circle cx="38" cy="44" r="2" fill="url(#grad-drupal)"/>
        <circle cx="52" cy="44" r="2" fill="url(#grad-drupal)"/>
        <path d="M36 52c3 3 15 3 18 0" stroke="url(#grad-drupal)" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    ),
    delay: 300,
  },

  // HTML5
  {
    id: 'html5',
    label: 'HTML 5',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-html5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path d="M24 24h42l-5 44-16 6-16-6-5-44z" stroke="url(#grad-html5)" strokeWidth="2.8" fill="none"/>
        <path d="M32 36h26l-1 10H36l1 8 8 3 8-3 1-6" stroke="url(#grad-html5)" strokeWidth="2.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    delay: 400,
  },

  // LARAVEL
  {
    id: 'laravel',
    label: 'Laravel',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-laravel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <rect x="26" y="44" width="12" height="12" rx="2" stroke="url(#grad-laravel)" strokeWidth="2.6"/>
        <rect x="48" y="46" width="12" height="12" rx="2" stroke="url(#grad-laravel)" strokeWidth="2.6"/>
        <rect x="40" y="28" width="12" height="12" rx="2" stroke="url(#grad-laravel)" strokeWidth="2.6"/>
        <path d="M32 50l14-8 10 6 12-8" stroke="url(#grad-laravel)" strokeWidth="2.6" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    delay: 500,
  },

  // MAGENTO
  {
    id: 'magento',
    label: 'Magento',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-magento" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <polygon points="45,22 66,34 66,58 45,70 24,58 24,34" stroke="url(#grad-magento)" strokeWidth="2.8" fill="none"/>
        <path d="M30 56V36l15-9 15 9v20" stroke="url(#grad-magento)" strokeWidth="2.8" fill="none"/>
      </svg>
    ),
    delay: 600,
  },

  // MONGODB
  {
    id: 'mongodb',
    label: 'MongoDB',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-mongo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path d="M45 14c8 12 10 20 10 32 0 10-4 18-10 30-6-12-10-20-10-30 0-12 2-20 10-32z" stroke="url(#grad-mongo)" strokeWidth="2.8" fill="none"/>
        <path d="M45 28v26" stroke="url(#grad-mongo)" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    ),
    delay: 700,
  },

  // MYSQL
  {
    id: 'mysql',
    label: 'MySQL',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-mysql" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <ellipse cx="45" cy="26" rx="18" ry="8" stroke="url(#grad-mysql)" strokeWidth="2.6" />
        <path d="M27 26v22c0 5 8 8 18 8s18-3 18-8V26" stroke="url(#grad-mysql)" strokeWidth="2.6" fill="none"/>
        <path d="M27 38c0 5 8 8 18 8s18-3 18-8" stroke="url(#grad-mysql)" strokeWidth="2.6" fill="none"/>
      </svg>
    ),
    delay: 800,
  },

  // NODE
  {
    id: 'node',
    label: 'Node',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-node" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <polygon points="45,20 65,32 65,58 45,70 25,58 25,32" stroke="url(#grad-node)" strokeWidth="2.8" fill="none"/>
        <path d="M35 54V36l20 12v18l-10 6-10-6" stroke="url(#grad-node)" strokeWidth="2.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    delay: 900,
  },

  // PHP
  {
    id: 'php',
    label: 'PHP',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-php" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="22" y="34" width="46" height="22" rx="11" stroke="url(#grad-php)" strokeWidth="2.8" fill="none"/>
        <path d="M32 45h6M31 40v10M38 40v10" stroke="url(#grad-php)" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M49 45h6M48 40v10M55 40v10" stroke="url(#grad-php)" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M43 42l4 6M47 42l-4 6" stroke="url(#grad-php)" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    ),
    delay: 1000,
  },

  // REACT
  {
    id: 'react',
    label: 'React',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-react" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <ellipse cx="45" cy="45" rx="18" ry="8" stroke="url(#grad-react)" strokeWidth="2.6"/>
        <ellipse cx="45" cy="45" rx="18" ry="8" transform="rotate(60 45 45)" stroke="url(#grad-react)" strokeWidth="2.6"/>
        <ellipse cx="45" cy="45" rx="18" ry="8" transform="rotate(-60 45 45)" stroke="url(#grad-react)" strokeWidth="2.6"/>
        <circle cx="45" cy="45" r="3.2" fill="url(#grad-react)"/>
      </svg>
    ),
    delay: 1100,
  },

  // WORDPRESS
  {
    id: 'wordpress',
    label: 'WordPress',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="grad-wp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <circle cx="45" cy="45" r="22" stroke="url(#grad-wp)" strokeWidth="2.8" />
        <path d="M31 45c0-7 6-13 14-13 8 0 14 6 14 13 0 6-5 12-11 13l-6-17c-1.5 3.5-3 8-4.5 12" stroke="url(#grad-wp)" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    delay: 1200,
  },
];


  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>

      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.03,
        }}
      />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <FloatingParticle key={i} {...particle} />
        ))}
      </div>

      {/* Enhanced Circuit Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side circuit */}
        <div 
          className="absolute left-0 top-0 w-1/3 h-full opacity-30"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%233b82f6;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%2306b6d4;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke=\'url(%23grad1)\' fill=\'none\' stroke-width=\'2\'%3E%3Cpath d=\'M0 50 L100 50 L120 70 L200 70\'/%3E%3Cpath d=\'M0 100 L80 100 L100 120 L250 120 L270 140 L400 140\'/%3E%3Cpath d=\'M50 150 L150 150 L170 170 L300 170\'/%3E%3Cpath d=\'M0 200 L120 200 L140 220 L280 220\'/%3E%3Cpath d=\'M100 250 L200 250 L220 270 L350 270\'/%3E%3Ccircle cx=\'100\' cy=\'50\' r=\'4\' fill=\'%2306b6d4\'/%3E%3Ccircle cx=\'200\' cy=\'70\' r=\'4\' fill=\'%233b82f6\'/%3E%3Ccircle cx=\'250\' cy=\'120\' r=\'4\' fill=\'%2306b6d4\'/%3E%3C/g%3E%3C/svg%3E") repeat-y',
            backgroundSize: 'contain',
          }}
        />
        
        {/* Right side circuit */}
        <div 
          className="absolute right-0 top-0 w-1/3 h-full opacity-30"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad2\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%238b5cf6;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23ec4899;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke=\'url(%23grad2)\' fill=\'none\' stroke-width=\'2\'%3E%3Cpath d=\'M400 50 L300 50 L280 70 L200 70\'/%3E%3Cpath d=\'M400 100 L320 100 L300 120 L150 120 L130 140 L0 140\'/%3E%3Cpath d=\'M350 150 L250 150 L230 170 L100 170\'/%3E%3Cpath d=\'M400 200 L280 200 L260 220 L120 220\'/%3E%3Ccircle cx=\'300\' cy=\'50\' r=\'4\' fill=\'%238b5cf6\'/%3E%3Ccircle cx=\'200\' cy=\'70\' r=\'4\' fill=\'%23ec4899\'/%3E%3Ccircle cx=\'150\' cy=\'120\' r=\'4\' fill=\'%238b5cf6\'/%3E%3C/g%3E%3C/svg%3E") repeat-y',
            backgroundSize: 'contain',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        {/* Header Section */}
        <div className={`text-center mb-24 max-w-4xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative inline-block mb-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-sm font-bold tracking-[0.4em] uppercase animate-pulse">
              TECHNOLOGY INDEX
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </div>
          
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight">
            <span className="inline-block animate-fade-in">We Deliver </span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Solutions
            </span>
            <br />
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>with the Goal of </span>
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Trusting
            </span>
            <br />
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.8s' }}>Workships</span>
          </h1>

          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Technology Cards Grid */}
        <div className="flex flex-col items-center gap-10">
          {/* Top Row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {technologies.slice(0, 6).map((tech, index) => (
              <TechnologyCard
                key={tech.id}
                icon={tech.icon}
                label={tech.label}
                delay={tech.delay}
                index={index}
              />
            ))}
          </div>

          {/* Bottom Row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {technologies.slice(7, 12).map((tech, index) => (
              <TechnologyCard
                key={tech.id}
                icon={tech.icon}
                label={tech.label}
                delay={tech.delay}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TechIndexHero;