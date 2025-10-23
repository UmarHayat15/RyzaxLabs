// app/components/ClientSpotlight.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ClientSpotlight({
  clickable = false,
  pixelsPerSecond = 90,  // auto-slide speed
  gap = 96,              // space between logos
  railBg = "#0F172A",    // dark rail for white icons (slate-900)
}) {
  const items = useMemo(
    () => projects.map(p => ({ slug: p.slug, name: p.name, icon: p.icon })),
    []
  );

  // triple buffer so the scroll loop is seamless
  const data = useMemo(() => [...items, ...items, ...items], [items]);

  const railRef = useRef(null);
  const measureRef = useRef(null); // single set
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const [setWidth, setSetWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  // measure one set width
  useEffect(() => {
    const measure = () => {
      if (measureRef.current) setSetWidth(measureRef.current.scrollWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (measureRef.current) ro.observe(measureRef.current);
    if (railRef.current) ro.observe(railRef.current);
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 1200);
    return () => {
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [gap, data.length]);

  // continuous auto-scroll loop
  useEffect(() => {
    if (!railRef.current || !setWidth) return;
    const el = railRef.current;

    const loop = (ts) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (paused || reduce) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      const dt = lastTsRef.current ? (ts - lastTsRef.current) / 1000 : 0;
      lastTsRef.current = ts;

      const dx = pixelsPerSecond * dt;
      el.scrollLeft += dx;

      // keep the viewport centered in the middle set for endless flow
      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pixelsPerSecond, setWidth, paused]);

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

          {/* scrolling rail */}
          <div
            ref={railRef}
            className="no-scrollbar relative mx-auto flex overflow-x-scroll scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              gap: `${gap}px`,
              padding: "28px 28px",
            }}
          >
            {/* SET A (measured) */}
            <ul ref={measureRef} className="flex items-center" style={{ gap: `${gap}px` }}>
              {items.map((it, i) => <Tile key={`a-${it.slug}-${i}`} item={it} />)}
            </ul>
            {/* SET B */}
            <ul className="flex items-center" style={{ gap: `${gap}px` }} aria-hidden="true">
              {items.map((it, i) => <Tile key={`b-${it.slug}-${i}`} item={it} />)}
            </ul>
            {/* SET C */}
            <ul className="flex items-center" style={{ gap: `${gap}px` }} aria-hidden="true">
              {items.map((it, i) => <Tile key={`c-${it.slug}-${i}`} item={it} />)}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
