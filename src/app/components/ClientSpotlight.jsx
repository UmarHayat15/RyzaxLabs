// app/components/ClientSpotlight.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ClientSpotlight({
  clickable = false,
  speed = 28,            // animation speed in seconds
  gap = 48,              // space between logos
  railBg = "#0F172A",    // dark rail for white icons (slate-900)
}) {
  const items = useMemo(
    () => projects.map(p => ({ slug: p.slug, name: p.name, icon: p.icon })),
    []
  );

  const [paused, setPaused] = useState(false);



  // pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const Tile = ({ item }) => {
    const Node = clickable ? Link : "div";
    const href = `/projects/${item.slug}`;
    return (
      <li className="mx-0 flex items-center justify-center" style={{ minWidth: 180, paddingInline: 8 }}>
        <Node href={clickable ? href : undefined} aria-label={item.name} className="block">
          {/* Subtle dark plate to guarantee contrast for white logos */}
          <div className="relative h-12 w-40 sm:h-12 sm:w-44 rounded-md"
               style={{
                 background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.12))",
                 boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), 0 6px 16px rgba(0,0,0,0.15)",
               }}>
            <div className="absolute inset-0 opacity-80 hover:opacity-100 transition">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                sizes="176px"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </Node>
      </li>
    );
  };

  return (
    <section className="py-10">
      <div className="relative mx-auto w-full max-w-5xl px-4">
        {/* DARK rail so white icons pop */}
        <div
          className="relative overflow-hidden rounded-xl border shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          style={{ background: railBg, borderColor: "rgba(255,255,255,0.08)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Client logos carousel"
        >
          {/* edge fades that match the rail background */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
            style={{ background: `linear-gradient(90deg, ${railBg} 0%, rgba(15,23,42,0) 100%)` }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
            style={{ background: `linear-gradient(270deg, ${railBg} 0%, rgba(15,23,42,0) 100%)` }}
          />

          {/* scrolling rail with CSS animation */}
          <div className="relative overflow-hidden py-7">
            <div 
              className={`flex items-center ${paused ? '' : 'animate-scroll'}`}
              style={{
                gap: `${gap}px`,
                animationDuration: `${speed}s`,
                width: 'max-content'
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...items, ...items].map((item, i) => (
                <Tile key={`${item.slug}-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
