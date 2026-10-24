"use client";

import React, { useState } from "react";
import type { GuideProcessStep, GuideCategory } from "@/types/guide";
import { Sparkles, Shield, CheckCircle2, Award, Zap } from "lucide-react";

interface ProcessVisualizerProps {
  step: GuideProcessStep;
  category: GuideCategory;
  accentColor?: string;
}

export default function ProcessVisualizer({
  step,
  category,
  accentColor = "var(--color-gold)",
}: ProcessVisualizerProps) {
  const { visualType, visualData } = step;

  // 1. PURITY & ALLOY COMPOSITION DONUT / BAR
  if (visualType === "purity_composition") {
    const pure = visualData?.purePercent || 75;
    const alloy = visualData?.alloyPercent || 25;
    const hallmark = visualData?.hallmark || "750";
    const circumference = 2 * Math.PI * 40;
    const pureOffset = circumference - (pure / 100) * circumference;

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background track (Alloy) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-stone-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Foreground arc (Pure Precious Metal) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke={accentColor}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={pureOffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition duration-1000 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center text-center">
            <span className="text-2xl font-bold font-display text-foreground tracking-tight">
              {pure}%
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold">
              Pure Metal
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-4 border-t border-black/5">
          <div className="flex items-center gap-2.5">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">
                {pure}% Pure
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wider">
                {category === "gold" ? "Elemental Gold" : "Fine Silver"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-stone-300 shrink-0" />
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">
                {alloy}% Alloy
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wider">
                Structural Matrix
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-[11px] font-bold tracking-wider flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5" />
          Assay Stamp: {hallmark}
        </div>
      </div>
    );
  }

  // 2. COLOR VARIANTS (Yellow Gold, White Gold, Rose Gold)
  if (visualType === "color_variants") {
    const variants = visualData?.variants || [
      { name: "Yellow Tone", color: "var(--color-gold)", composition: "Classic Ratio" },
      { name: "White Tone", color: "var(--color-cream)", composition: "Palladium Alloy" },
      { name: "Rose Tone", color: "#E8A38B", composition: "Copper Rich" },
    ];

    return (
      <div className="flex flex-col gap-3.5 p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] text-gold text-center mb-1">
          Metallurgical Color Spectrum
        </div>
        <div className="space-y-3">
          {variants.map((v: any, idx: number) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-3 rounded-xl border border-black/5 hover:border-gold/40 bg-stone-50/50 transition"
            >
              <div
                className="w-12 h-12 rounded-xl shadow-inner border border-black/10 shrink-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${v.color} 0%, #ffffff88 50%, ${v.color} 100%)`,
                }}
              >
                <div className="w-4 h-4 rounded-full bg-white/40 shadow-xs" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-foreground">
                  {v.name}
                </div>
                <div className="text-[11px] text-muted-foreground truncate">
                  {v.composition}
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. HARDNESS & SCRATCH RESISTANCE GAUGE
  if (visualType === "hardness_gauge") {
    const score = visualData?.score || "145 HV";
    const label = visualData?.label || "Everyday Resilience";
    const rating = visualData?.rating || 75;

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Vickers & Mohs Hardness Rating
        </div>

        <div className="relative w-full max-w-[280px] my-2">
          <div className="h-4 w-full bg-stone-100 rounded-full overflow-hidden p-0.5 border border-black/5">
            <div
              className="h-full w-full origin-left rounded-full transition-transform duration-700 ease-out"
              style={{
                transform: `scaleX(${rating / 100})`,
                background: `linear-gradient(90deg, var(--color-gold) 0%, var(--color-gold) 50%, #10B981 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-muted-foreground mt-2 font-mono">
            <span>Soft (Bullion)</span>
            <span>Balanced</span>
            <span>Ultra-Hard</span>
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="text-3xl font-bold font-display text-foreground tracking-tight">
            {score}
          </div>
          <div className="text-xs font-medium text-gold mt-0.5">
            {label}
          </div>
        </div>

        <div className="mt-5 w-full grid grid-cols-3 gap-2 text-center pt-4 border-t border-black/5 text-[11px]">
          <div className="p-2 rounded-lg bg-stone-50 border border-black/5">
            <div className="text-muted-foreground text-[10px]">Scratch</div>
            <div className="font-bold text-foreground">High</div>
          </div>
          <div className="p-2 rounded-lg bg-stone-50 border border-black/5">
            <div className="text-muted-foreground text-[10px]">Prong Hold</div>
            <div className="font-bold text-foreground">Secure</div>
          </div>
          <div className="p-2 rounded-lg bg-stone-50 border border-black/5">
            <div className="text-muted-foreground text-[10px]">Daily Wear</div>
            <div className="font-bold text-foreground">Lifetime</div>
          </div>
        </div>
      </div>
    );
  }

  // 4. HALLMARK LASER STAMP
  if (visualType === "hallmark_stamp") {
    const stampText = visualData?.stampText || "750";
    const standard = visualData?.standard || "BIS / Assay Certified";
    const purity = visualData?.purity || "18KT";

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto text-center">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Government Assay Hallmark Stamp
        </div>

        {/* Laser Inscription Badge */}
        <div className="theme-dark relative px-8 py-5 rounded-2xl bg-gradient-to-b from-ink to-espresso-deep text-white shadow-lg border border-gold/30 flex items-center justify-center gap-4">
          {/* Assay Logo Silhouette */}
          <div className="w-10 h-10 rounded-lg border border-gold/40 flex items-center justify-center text-gold font-bold text-sm font-mono">
            ✦
          </div>

          <div className="flex flex-col text-left">
            <div className="text-2xl font-bold font-mono tracking-widest text-gold">
              {stampText}
            </div>
            <div className="text-[10px] tracking-wider text-stone-400 font-mono">
              {purity} • LUXE CERTIFIED
            </div>
          </div>

          <Shield className="w-6 h-6 text-emerald-400 ml-2" />
        </div>

        <div className="mt-5 text-xs text-muted-foreground max-w-[260px] leading-relaxed">
          {standard}
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          100% Legally Authenticated Purity
        </div>
      </div>
    );
  }

  // 5. CRYSTAL STRUCTURE & GROWTH CHAMBER (For Diamond / CVD / HPHT / Moissanite)
  if (visualType === "crystal_structure") {
    const system = visualData?.system || "Face-Centered Cubic";
    const element = visualData?.element || "Pure Carbon (C)";

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Atomic Crystal Lattice
        </div>

        {/* SVG Crystal Model */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
            <polygon
              points="50,10 85,30 85,70 50,90 15,70 15,30"
              fill="rgba(197, 160, 89, 0.08)"
              stroke="var(--color-gold)"
              strokeWidth="1.5"
            />
            <line x1="50" y1="10" x2="50" y2="90" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="15" y1="30" x2="85" y2="70" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="15" y1="70" x2="85" y2="30" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="8" fill="var(--color-gold)" />
            <circle cx="50" cy="10" r="4" fill="var(--color-ink)" />
            <circle cx="85" cy="30" r="4" fill="var(--color-ink)" />
            <circle cx="85" cy="70" r="4" fill="var(--color-ink)" />
            <circle cx="50" cy="90" r="4" fill="var(--color-ink)" />
            <circle cx="15" cy="70" r="4" fill="var(--color-ink)" />
            <circle cx="15" cy="30" r="4" fill="var(--color-ink)" />
          </svg>
        </div>

        <div className="mt-4 text-center">
          <div className="text-base font-bold text-foreground">{system}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{element}</div>
        </div>

        <div className="mt-4 px-3.5 py-1 rounded-full bg-stone-100 text-foreground text-[10px] font-mono tracking-wider">
          Tetrahedral Covalent Bonding
        </div>
      </div>
    );
  }

  // 6. OPTICAL FIRE & REFRACTION PRISM
  if (visualType === "optical_fire") {
    const index = visualData?.index || "RI 2.417";
    const label = visualData?.label || "Brilliant Total Light Return";

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Light Physics & Spectral Dispersion
        </div>

        {/* Optical Ray Diagram */}
        <div className="relative w-44 h-28 flex items-center justify-center">
          <svg viewBox="0 0 160 100" className="w-full h-full">
            {/* White light entry ray */}
            <line x1="10" y1="20" x2="60" y2="50" stroke="var(--color-ink)" strokeWidth="2" />
            {/* Gem facet boundary */}
            <polygon points="60,20 110,20 135,50 85,90 35,50" fill="rgba(197, 160, 89, 0.1)" stroke="var(--color-gold)" strokeWidth="1.5" />
            {/* Spectral rainbow exit rays */}
            <line x1="85" y1="50" x2="150" y2="25" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="85" y1="50" x2="150" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="85" y1="50" x2="150" y2="45" stroke="#10B981" strokeWidth="1.5" />
            <line x1="85" y1="50" x2="150" y2="55" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="85" y1="50" x2="150" y2="65" stroke="#8B5CF6" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="mt-4 text-center">
          <div className="text-lg font-bold font-display text-foreground">{index}</div>
          <div className="text-xs text-gold font-medium mt-0.5">{label}</div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          Maximum Fire, Brilliance & Scintillation
        </div>
      </div>
    );
  }

  // 7. DIAMOND TESTER ELECTRONIC SIMULATION
  if (visualType === "diamond_tester") {
    const testerResponse = visualData?.testerResponse || "Diamond Positive";
    const thermal = visualData?.thermal || "High Heat Conductivity";

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto text-center">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Gemological Testing Response
        </div>

        {/* Diamond Tester Device Simulation */}
        <div className="w-full max-w-[280px] p-4 rounded-2xl bg-stone-900 text-white border border-stone-800 shadow-md">
          <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-stone-400">
            <span>Thermal Probe</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-8 gap-1 mb-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-6 rounded-xs ${ i < 6 ? "bg-emerald-500" : "bg-emerald-400 animate-pulse" }`}
              />
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            {testerResponse}
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
          {thermal}
        </div>
      </div>
    );
  }

  // 8. TARNISH BARRIER (For Silver / Argentium / Rhodium)
  if (visualType === "tarnish_barrier") {
    const coating = visualData?.coating || "Protective Nano-Shield";
    const protection = visualData?.protection || "Anti-Tarnish Barrier";

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 shadow-xs rounded-2xl w-full max-w-[440px] mx-auto text-center">
        <div className="text-xs font-bold tracking-[0.2em] text-gold mb-4">
          Chemical Surface Protection
        </div>

        {/* Micro-Layer Graphic */}
        <div className="w-full max-w-[280px] space-y-2 my-2">
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 border border-blue-400/40 text-blue-900 text-xs font-bold flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            {coating}
          </div>
          <div className="p-3.5 rounded-xl bg-stone-100 border border-black/5 text-xs font-bold text-foreground">
            Solid Precious Silver Matrix
          </div>
        </div>

        <div className="mt-4 text-sm font-bold text-foreground">
          {protection}
        </div>
        <div className="mt-1 text-xs text-muted-foreground max-w-[240px]">
          Shields against moisture, sweat, and airborne sulfur for lasting brilliance.
        </div>
      </div>
    );
  }

  // Default Fallback Note
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-cream text-center w-full max-w-[320px] mx-auto rounded-2xl">
      <div className="text-xl font-bold text-foreground">{step.title}</div>
      <div className="my-3 h-px w-12 bg-brand" />
      <p className="text-xs text-muted-foreground leading-relaxed">{step.copy}</p>
    </div>
  );
}
