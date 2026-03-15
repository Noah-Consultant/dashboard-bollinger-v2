/**
 * Home.tsx — Dashboard CI Bollinger — Page principale
 * Design: Art Déco Prestige Noir & Or
 * 10 sections CI + Sidebar desktop + Bottom nav mobile + Lead Magnet
 *
 * RÈGLE: JAMAIS de classes lg: ou xl: dans ce fichier — utiliser uniquement les classes b-*
 */

import { useState, useEffect, useRef, useCallback } from "react";
import {
  LayoutDashboard, Target, Package, DollarSign, Globe,
  Megaphone, Instagram, AlertTriangle, Lightbulb, BookOpen,
  Lock, Unlock, ChevronRight, ExternalLink, Search, ArrowUpDown,
  TrendingUp, TrendingDown, Minus, Filter, Eye,
} from "lucide-react";
import { useAccess } from "@/contexts/AccessContext";
import { LockedSection, PasswordModal } from "@/components/LockedSection";
import {
  MarketVolumeChart, TopMarketsChart, PriceComparisonChart, MostAdmiredChart,
  InstagramChart, DistributionPieChart, MarketSegmentPieChart, RiskMatrixChart,
  RecoChart, PortfolioScatterChart,
} from "@/components/BollingerCharts";
import {
  kpiData, insightCards, competitiveSet, portfolioData, riskSignals,
  recommendations, sources, bollingerCampaigns,
} from "@/lib/bollingerData";

// ─── Image assets (CDN URLs) ──────────────────────────────────────────────────
const IMG_CAVE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032620985/9nKC6ZxHe8EwW6GgPnJTKq/bollinger-hero-cave-7abcmBMNXB8cgQYfZmoe92.webp";
const IMG_VINEYARD = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032620985/9nKC6ZxHe8EwW6GgPnJTKq/bollinger-hero-vineyard-gdnGFZ8wYerVUbUwHTqKu6.webp";
const IMG_BOTTLE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032620985/9nKC6ZxHe8EwW6GgPnJTKq/bollinger-hero-bottle-HpiV8xv4XSM87pXJUaFyDT.webp";
const IMG_DECO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032620985/9nKC6ZxHe8EwW6GgPnJTKq/bollinger-hero-deco-5CsGMq4L4UcPt29RSRPW32.webp";

// ─── Section definitions ──────────────────────────────────────────────────────
const SECTIONS = [
  { id: "executive",      label: "Executive Snapshot",     shortLabel: "Snapshot",   icon: LayoutDashboard, premium: false },
  { id: "positioning",    label: "Positionnement",          shortLabel: "Position",   icon: Target,          premium: false },
  { id: "portfolio",      label: "Portefeuille Produits",   shortLabel: "Produits",   icon: Package,         premium: true  },
  { id: "pricing",        label: "Prix",                    shortLabel: "Prix",       icon: DollarSign,      premium: true  },
  { id: "distribution",   label: "Distribution",            shortLabel: "Distrib.",   icon: Globe,           premium: true  },
  { id: "media",          label: "Part de Voix & Médias",   shortLabel: "Médias",     icon: Megaphone,       premium: true  },
  { id: "social",         label: "Social & Digital",        shortLabel: "Social",     icon: Instagram,       premium: true  },
  { id: "risks",          label: "Signaux Faibles & Risques", shortLabel: "Risques",  icon: AlertTriangle,   premium: true  },
  { id: "recommendations", label: "Recommandations",        shortLabel: "Recos",      icon: Lightbulb,       premium: true  },
  { id: "sources",        label: "Sources Log",             shortLabel: "Sources",    icon: BookOpen,        premium: false },
];

// ─── KPI Counter Hook ─────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(target);
    };
    requestAnimationFrame(animate);
  }, [target, duration, started]);

  return { value, start };
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({ kpi }: { kpi: typeof kpiData[0] }) {
  const { value, start } = useCounter(kpi.value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) start(); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [start]);

  const TrendIcon = kpi.trend === "up" ? TrendingUp : kpi.trend === "down" ? TrendingDown : Minus;
  const trendColor = kpi.trend === "up" ? "oklch(0.65 0.15 145)" : kpi.trend === "down" ? "oklch(0.60 0.20 25)" : "oklch(0.60 0.010 75)";

  const displayValue = kpi.value % 1 !== 0
    ? value.toFixed(1)
    : Math.round(value).toString();

  return (
    <div className="kpi-card" ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div className="kpi-value">
          {displayValue}{kpi.unit}
        </div>
        <TrendIcon size={14} style={{ color: trendColor, marginTop: "4px" }} />
      </div>
      <div className="kpi-label">{kpi.label}</div>
      <div className="kpi-sub">{kpi.sub}</div>
    </div>
  );
}

// ─── Insight Card ─────────────────────────────────────────────────────────────
function InsightCard({ card }: { card: typeof insightCards[0] }) {
  const colorMap: Record<string, string> = {
    danger: "oklch(0.60 0.20 25)",
    warning: "oklch(0.75 0.15 60)",
    success: "oklch(0.65 0.15 145)",
    gold: "oklch(0.72 0.12 75)",
  };
  const color = colorMap[card.color] || colorMap.gold;

  return (
    <div className="insight-card">
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
        <div style={{
          width: "36px", height: "36px", flexShrink: 0,
          background: `${color}18`,
          border: `1px solid ${color}30`,
          borderRadius: "0.15rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1rem",
        }}>
          {card.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "oklch(0.92 0.008 80)",
            marginBottom: "0.35rem",
          }}>
            {card.title}
          </h4>
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.78rem",
            color: "oklch(0.60 0.010 75)",
            lineHeight: 1.5,
            marginBottom: "0.5rem",
          }}>
            {card.body}
          </p>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            padding: "0.35rem 0.6rem",
            background: `${color}10`,
            borderLeft: `2px solid ${color}`,
            borderRadius: "0 0.1rem 0.1rem 0",
          }}>
            <ChevronRight size={11} style={{ color, flexShrink: 0 }} />
            <span style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "0.72rem",
              color,
              fontWeight: 500,
            }}>
              {card.impact}
            </span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-badge">
              <ExternalLink size={9} />
              {card.source}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const { isFullAccess, openModal, lock } = useAccess();
  const [activeSection, setActiveSection] = useState("executive");
  const [competitorFilter, setCompetitorFilter] = useState<"Tous" | "Indépendants" | "Groupes">("Tous");
  const [portfolioSearch, setPortfolioSearch] = useState("");
  const [portfolioSort, setPortfolioSort] = useState<"price" | "score" | "range">("price");
  const [pricingView, setPricingView] = useState<"chart" | "table">("chart");
  const [riskFilter, setRiskFilter] = useState<"Tous" | "CRITIQUE" | "MODÉRÉ" | "FAIBLE">("Tous");
  const [sourceFilter, setSourceFilter] = useState<string>("Tous");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to section
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intersection observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Filtered data
  const filteredCompetitors = competitiveSet.filter(c => {
    if (competitorFilter === "Indépendants") return c.type === "Indépendant";
    if (competitorFilter === "Groupes") return c.type === "Groupe";
    return true;
  });

  const filteredPortfolio = portfolioData
    .filter(c => c.name.toLowerCase().includes(portfolioSearch.toLowerCase()))
    .sort((a, b) => {
      if (portfolioSort === "price") return a.priceMid - b.priceMid;
      if (portfolioSort === "score") return b.score - a.score;
      return a.range.localeCompare(b.range);
    });

  const filteredRisks = riskSignals.filter(r =>
    riskFilter === "Tous" ? true : r.level === riskFilter
  );

  const filteredSources = sources.filter(s =>
    sourceFilter === "Tous" ? true : s.category === sourceFilter
  );

  // ─── Sidebar ───────────────────────────────────────────────────────────────
  const Sidebar = () => (
    <nav className="b-sidebar">
      {/* Logo */}
      <div style={{
        padding: "1.5rem 1rem 1rem",
        borderBottom: "1px solid oklch(0.72 0.12 75 / 0.12)",
      }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.85 0.10 80))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1.2,
        }}>
          BOLLINGER
        </div>
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "0.6rem",
          textTransform: "uppercase",
          letterSpacing: "0.10em",
          color: "oklch(0.45 0.008 75)",
          marginTop: "0.2rem",
        }}>
          Competitive Intelligence · 2026
        </div>
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, padding: "0.75rem 0", overflowY: "auto" }}>
        {SECTIONS.map(({ id, label, icon: Icon, premium }) => (
          <button
            key={id}
            className={`nav-item ${activeSection === id ? "active" : ""}`}
            onClick={() => scrollToSection(id)}
            style={{ width: "100%", background: "none", border: "none", textAlign: "left" }}
          >
            <Icon size={14} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1 }}>{label}</span>
            {premium && !isFullAccess && (
              <Lock size={10} style={{ color: "oklch(0.45 0.008 75)", flexShrink: 0 }} />
            )}
          </button>
        ))}
      </div>

      {/* Access Toggle */}
      <div style={{
        padding: "1rem",
        borderTop: "1px solid oklch(0.72 0.12 75 / 0.12)",
      }}>
        {isFullAccess ? (
          <button
            className="btn-outline-gold"
            onClick={lock}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}
          >
            <Unlock size={12} />
            Accès complet actif
          </button>
        ) : (
          <button
            className="btn-gold"
            onClick={openModal}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}
          >
            <Lock size={12} />
            Déverrouiller
          </button>
        )}
        <p style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "0.62rem",
          color: "oklch(0.35 0.008 75)",
          textAlign: "center",
          marginTop: "0.5rem",
        }}>
          © 2026 Dashboard CI Bollinger
        </p>
      </div>
    </nav>
  );

  // ─── Mobile Header ─────────────────────────────────────────────────────────
  const MobileHeader = () => (
    <div className="b-mobile-header" style={{
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "oklch(0.12 0.010 65)",
      borderBottom: "1px solid oklch(0.72 0.12 75 / 0.15)",
      padding: "0.75rem 1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1rem",
          background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.85 0.10 80))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          BOLLINGER CI
        </div>
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "0.58rem",
          color: "oklch(0.40 0.008 75)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}>
          Competitive Intelligence 2026
        </div>
      </div>
      <button
        onClick={isFullAccess ? lock : openModal}
        style={{
          background: "oklch(0.72 0.12 75 / 0.12)",
          border: "1px solid oklch(0.72 0.12 75 / 0.30)",
          borderRadius: "0.15rem",
          padding: "0.4rem 0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          color: "oklch(0.72 0.12 75)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {isFullAccess ? <Unlock size={12} /> : <Lock size={12} />}
        {isFullAccess ? "Actif" : "Accès"}
      </button>
    </div>
  );

  // ─── Bottom Nav Mobile ─────────────────────────────────────────────────────
  const BottomNav = () => (
    <div className="b-bottom-nav-wrap">
      <div className="b-bottom-nav">
        <div className="b-bottom-nav-inner">
          {SECTIONS.map(({ id, shortLabel, icon: Icon, premium }) => (
            <button
              key={id}
              className={`b-bottom-nav-item ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
              style={{ background: "none", border: "none", position: "relative" }}
            >
              <div style={{ position: "relative" }}>
                <Icon size={16} />
                {premium && !isFullAccess && (
                  <Lock size={7} style={{
                    position: "absolute",
                    top: -3, right: -5,
                    color: "oklch(0.72 0.12 75)",
                  }} />
                )}
              </div>
              <span>{shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ─── Section Header ────────────────────────────────────────────────────────
  const SectionHeader = ({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) => (
    <div className="section-header">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "0.62rem",
          color: "oklch(0.72 0.12 75)",
          textTransform: "uppercase",
          letterSpacing: "0.10em",
        }}>
          {number}
        </span>
        <h2 className="section-title">{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );

  // ─── SECTION 1: Executive Snapshot ────────────────────────────────────────
  const SectionExecutive = () => (
    <div ref={el => { sectionRefs.current["executive"] = el; }} id="executive" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="01"
        title="Executive Snapshot"
        subtitle="Vue d'ensemble du marché champagne et positionnement Bollinger — Mars 2026"
      />

      {/* Hero Image */}
      <div className="b-hero" style={{ marginBottom: "1.5rem" }}>
        <div className="b-hero-bg" style={{ backgroundImage: `url(${IMG_CAVE})` }} />
        <div className="b-hero-overlay" />
        <div className="b-hero-deco-lines" />
        <div className="b-hero-content">
          <div style={{
            display: "inline-block",
            background: "oklch(0.72 0.12 75 / 0.12)",
            border: "1px solid oklch(0.72 0.12 75 / 0.30)",
            borderRadius: "0.1rem",
            padding: "0.2rem 0.6rem",
            marginBottom: "0.75rem",
          }}>
            <span style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.10em",
              color: "oklch(0.72 0.12 75)",
            }}>
              Maison fondée en 1829 · Aÿ, Marne
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            color: "oklch(0.95 0.008 80)",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}>
            Dashboard Competitive Intelligence
            <br />
            <span style={{
              background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.85 0.10 80))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Champagne Bollinger
            </span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.85rem",
            color: "oklch(0.70 0.008 75)",
            maxWidth: "520px",
            lineHeight: 1.6,
          }}>
            Analyse stratégique complète — Marché, Positionnement, Portefeuille, Distribution, Médias, Risques et Recommandations. Données validées mars 2026.
          </p>

          {/* CTA Lead Magnet */}
          {!isFullAccess && (
            <button
              className="btn-gold"
              onClick={openModal}
              style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Eye size={14} />
              Accéder au rapport complet
            </button>
          )}
        </div>
      </div>

      {/* KPI Grid */}
      <div className="b-grid-kpi" style={{ marginBottom: "1.5rem" }}>
        {kpiData.map(kpi => <KpiCard key={kpi.id} kpi={kpi} />)}
      </div>

      {/* Market Volume Chart */}
      <div className="b-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 600,
          fontSize: "0.95rem",
          color: "oklch(0.85 0.008 75)",
          marginBottom: "0.25rem",
        }}>
          Expéditions mondiales champagne 2019–2025
        </h3>
        <p style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "0.72rem",
          color: "oklch(0.50 0.008 75)",
          marginBottom: "1rem",
        }}>
          En millions de bouteilles · Source : Comité Champagne / The Finest Bubble, jan. 2026
        </p>
        <MarketVolumeChart />
      </div>

      {/* Insight Cards */}
      <div className="b-grid-2">
        {insightCards.map(card => <InsightCard key={card.id} card={card} />)}
      </div>
    </div>
  );

  // ─── SECTION 2: Positionnement ─────────────────────────────────────────────
  const SectionPositioning = () => (
    <div ref={el => { sectionRefs.current["positioning"] = el; }} id="positioning" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="02"
        title="Positionnement"
        subtitle="ADN Bollinger et competitive set — 10 maisons comparées"
      />

      {/* ADN Bollinger */}
      <div className="b-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "200px" }}>
            <img
              src={IMG_BOTTLE}
              alt="Champagne Bollinger"
              style={{
                width: "100%",
                maxWidth: "160px",
                borderRadius: "0.15rem",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
          <div style={{ flex: "3", minWidth: "240px" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "oklch(0.92 0.008 80)",
              marginBottom: "0.75rem",
            }}>
              ADN Bollinger
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
              {[
                { label: "Fondée", value: "1829 · Aÿ, Marne" },
                { label: "Statut", value: "Maison familiale indépendante" },
                { label: "Vignoble", value: "~180 ha propres" },
                { label: "Cépage dominant", value: "Pinot Noir ~60%" },
                { label: "Vinification", value: "Fûts de chêne" },
                { label: "B Corp", value: "Score 83,9 (sept. 2023)" },
                { label: "Royal Warrant", value: "Charles III (renouvelé déc. 2024)" },
                { label: "James Bond", value: "Partenariat depuis 1979 (45+ ans)" },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.08)", paddingBottom: "0.5rem" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "oklch(0.50 0.008 75)", marginBottom: "0.15rem" }}>{label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.85 0.008 75)" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        {(["Tous", "Indépendants", "Groupes"] as const).map(f => (
          <button
            key={f}
            className={`btn-filter ${competitorFilter === f ? "active" : ""}`}
            onClick={() => setCompetitorFilter(f)}
          >
            {f}
          </button>
        ))}
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.45 0.008 75)", alignSelf: "center", marginLeft: "0.5rem" }}>
          {filteredCompetitors.length} maison{filteredCompetitors.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Competitive Set Table */}
      <div className="b-table-wrap b-card" style={{ padding: 0 }}>
        <table className="b-table">
          <thead>
            <tr>
              <th>Maison</th>
              <th>Statut</th>
              <th>Entrée</th>
              <th>Prestige</th>
              <th>Flagship</th>
              <th>Most Admired</th>
              <th>Instagram</th>
              <th>Distinctions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompetitors.map(c => (
              <tr key={c.name} className={c.name === "Bollinger" ? "bollinger-row" : ""}>
                <td style={{ fontFamily: "'Playfair Display', serif", fontWeight: c.name === "Bollinger" ? 700 : 400 }}>
                  {c.name}
                </td>
                <td>
                  <span className={c.type === "Indépendant" ? "badge-independent" : "badge-group"}>
                    {c.type === "Indépendant" ? "Indépendant" : `Groupe ${c.group}`}
                  </span>
                </td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem" }}>{c.entryPrice}€</td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem" }}>{c.prestigePrice}€</td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.65 0.008 75)" }}>{c.flagship}</td>
                <td style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "oklch(0.72 0.12 75)" }}>
                  #{c.admiredRank}
                </td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem" }}>
                  {c.instagram > 0 ? `${c.instagram}K` : "N/D"}
                </td>
                <td>
                  <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                    {c.bcorp && <span className="badge-bcorp">B Corp</span>}
                    {c.royalWarrant && <span className="badge-warrant">Royal Warrant</span>}
                    {c.jamesBond && <span className="badge-bond">James Bond</span>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Most Admired Chart */}
      <div className="b-card" style={{ padding: "1.25rem", marginTop: "1.5rem" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
          Most Admired Champagne Brands 2025–2026
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
          Bollinger en or · Source : Drinks International / Wine Intelligence, mars 2026
        </p>
        <MostAdmiredChart />
      </div>
    </div>
  );

  // ─── SECTION 3: Portefeuille (PREMIUM) ────────────────────────────────────
  const SectionPortfolio = () => (
    <div ref={el => { sectionRefs.current["portfolio"] = el; }} id="portfolio" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="03"
        title="Portefeuille Produits"
        subtitle="7 cuvées Bollinger — Prix, scores critiques et positionnement"
      />
      <LockedSection
        title="Portefeuille Produits"
        description="Accédez à l'analyse complète des 7 cuvées Bollinger : prix, scores Wine Advocate, alertes et ScatterChart Prix × Score."
        ctaText="Accéder au portefeuille complet"
      >
        {/* Search + Sort */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "180px" }}>
            <Search size={13} style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", color: "oklch(0.45 0.008 75)" }} />
            <input
              className="b-search"
              placeholder="Rechercher une cuvée..."
              value={portfolioSearch}
              onChange={e => setPortfolioSearch(e.target.value)}
              style={{ paddingLeft: "2rem" }}
            />
          </div>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {(["price", "score", "range"] as const).map(s => (
              <button
                key={s}
                className={`btn-filter ${portfolioSort === s ? "active" : ""}`}
                onClick={() => setPortfolioSort(s)}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <ArrowUpDown size={10} />
                {s === "price" ? "Prix" : s === "score" ? "Score" : "Gamme"}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Table */}
        <div className="b-table-wrap b-card" style={{ padding: 0, marginBottom: "1.5rem" }}>
          <table className="b-table">
            <thead>
              <tr>
                <th>Cuvée</th>
                <th>Gamme</th>
                <th>Prix</th>
                <th>Score WA</th>
                <th>Alerte</th>
              </tr>
            </thead>
            <tbody>
              {filteredPortfolio.map(c => (
                <tr key={c.name}>
                  <td style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>{c.name}</td>
                  <td><span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.60 0.008 75)" }}>{c.range}</span></td>
                  <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem" }}>{c.priceMin}–{c.priceMax}€</td>
                  <td>
                    <span style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.9rem" }}>
                      {c.scoreLabel}
                    </span>
                  </td>
                  <td>
                    {c.alert ? (
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.70 0.15 25)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <AlertTriangle size={11} /> {c.alert}
                      </span>
                    ) : (
                      <span style={{ color: "oklch(0.45 0.008 75)", fontSize: "0.72rem" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scatter Chart */}
        <div className="b-card" style={{ padding: "1.25rem" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
            Prix moyen × Score critique — Portefeuille Bollinger
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
            Source : Wine Advocate / Wine Spectator · Bollinger Official
          </p>
          <PortfolioScatterChart />
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 4: Prix (PREMIUM) ────────────────────────────────────────────
  const SectionPricing = () => (
    <div ref={el => { sectionRefs.current["pricing"] = el; }} id="pricing" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="04"
        title="Prix"
        subtitle="Comparatif entrée de gamme vs prestige — 10 maisons"
      />
      <LockedSection
        title="Analyse Prix"
        description="Comparatif complet des prix d'entrée de gamme et de prestige pour les 10 maisons du competitive set."
        ctaText="Accéder à l'analyse prix"
      >
        {/* Toggle */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <button className={`btn-filter ${pricingView === "chart" ? "active" : ""}`} onClick={() => setPricingView("chart")}>
            Graphique
          </button>
          <button className={`btn-filter ${pricingView === "table" ? "active" : ""}`} onClick={() => setPricingView("table")}>
            Tableau
          </button>
        </div>

        {pricingView === "chart" ? (
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Entrée de gamme vs Cuvée Prestige
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
              En euros · Prix indicatifs boutique · Source : Bollinger Official + sites maisons, mars 2026
            </p>
            <PriceComparisonChart />
          </div>
        ) : (
          <div className="b-table-wrap b-card" style={{ padding: 0 }}>
            <table className="b-table">
              <thead>
                <tr>
                  <th>Maison</th>
                  <th>Entrée de gamme</th>
                  <th>Cuvée prestige</th>
                  <th>Ratio prestige/entrée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Bollinger", entry: "55€ (Special Cuvée)", prestige: "600€ (VVF)", ratio: "10,9x", bold: true },
                  { name: "Louis Roederer", entry: "45€ (Brut Premier)", prestige: "500€ (Cristal)", ratio: "11,1x", bold: false },
                  { name: "Krug", entry: "180€ (Grande Cuvée)", prestige: "2 000€ (Clos du Mesnil)", ratio: "11,1x", bold: false },
                  { name: "Pol Roger", entry: "45€ (Brut Réserve)", prestige: "300€ (Sir Winston Churchill)", ratio: "6,7x", bold: false },
                  { name: "Billecart-Salmon", entry: "55€ (Brut Réserve)", prestige: "400€ (Blanc de Blancs)", ratio: "7,3x", bold: false },
                  { name: "Dom Pérignon", entry: "180€ (Vintage)", prestige: "5 000€ (P3 Plénitude)", ratio: "27,8x", bold: false },
                  { name: "Ruinart", entry: "65€ (Blanc de Blancs)", prestige: "500€ (Dom Ruinart)", ratio: "7,7x", bold: false },
                  { name: "Taittinger", entry: "45€ (Brut Réserve)", prestige: "300€ (Comtes de Champagne)", ratio: "6,7x", bold: false },
                  { name: "Laurent-Perrier", entry: "50€ (Brut L-P)", prestige: "400€ (Grand Siècle)", ratio: "8,0x", bold: false },
                  { name: "Gosset", entry: "45€ (Grande Réserve)", prestige: "350€ (Grand Millésime)", ratio: "7,8x", bold: false },
                ].map(row => (
                  <tr key={row.name} className={row.bold ? "bollinger-row" : ""}>
                    <td style={{ fontFamily: "'Playfair Display', serif", fontWeight: row.bold ? 700 : 400 }}>{row.name}</td>
                    <td>{row.entry}</td>
                    <td>{row.prestige}</td>
                    <td style={{ color: "oklch(0.72 0.12 75)", fontWeight: 600 }}>{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </LockedSection>
    </div>
  );

  // ─── SECTION 5: Distribution (PREMIUM) ───────────────────────────────────
  const SectionDistribution = () => (
    <div ref={el => { sectionRefs.current["distribution"] = el; }} id="distribution" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="05"
        title="Distribution"
        subtitle="Top 10 marchés export + canaux de distribution + segments marché"
      />
      <LockedSection
        title="Distribution & Marchés"
        description="Analyse complète des marchés export champagne 2024, canaux de distribution Bollinger et segments de marché."
        ctaText="Accéder à l'analyse distribution"
      >
        {/* Top Markets Chart */}
        <div className="b-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
            Top 10 marchés export champagne 2024
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
            En millions d'euros · Or = croissance, Rouge = recul · Source : Comité Champagne / The Drinks Business, mars 2025
          </p>
          <TopMarketsChart />
        </div>

        {/* Pie Charts */}
        <div className="b-grid-2">
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.9rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Canaux de distribution
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "oklch(0.50 0.008 75)", marginBottom: "0.75rem" }}>
              Estimation Bollinger · Source : N/D (données propriétaires)
            </p>
            <DistributionPieChart />
          </div>
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.9rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Segments marché
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "oklch(0.50 0.008 75)", marginBottom: "0.75rem" }}>
              Estimation marché champagne prestige · Source : N/D (IWSR — abonnement requis)
            </p>
            <MarketSegmentPieChart />
          </div>
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 6: Part de Voix & Médias (PREMIUM) ──────────────────────────
  const SectionMedia = () => (
    <div ref={el => { sectionRefs.current["media"] = el; }} id="media" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="06"
        title="Part de Voix & Médias"
        subtitle="Classement Most Admired et actifs médiatiques Bollinger"
      />
      <LockedSection
        title="Part de Voix & Médias"
        description="Analyse du classement Most Admired 2026 et inventaire des actifs médiatiques différenciants de Bollinger."
        ctaText="Accéder à l'analyse médias"
      >
        <div className="b-grid-2">
          {/* Most Admired */}
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Most Admired 2025–2026
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
              Source : Drinks International / Wine Intelligence, mars 2026
            </p>
            <MostAdmiredChart />
          </div>

          {/* Actifs médiatiques */}
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "1rem" }}>
              Actifs médiatiques Bollinger
            </h3>
            {[
              { icon: "🎬", title: "James Bond", sub: "45+ ans · Special Cuvée 007 oct. 2025", color: "oklch(0.60 0.20 25)" },
              { icon: "🚗", title: "Aston Martin", sub: "Partenariat mondial · annoncé sept. 2025", color: "oklch(0.72 0.12 75)" },
              { icon: "👑", title: "Royal Warrant", sub: "Charles III · 140 ans de fourniture · déc. 2024", color: "oklch(0.55 0.15 300)" },
              { icon: "🌿", title: "B Corp 83,9", sub: "Seule grande maison certifiée · sept. 2023", color: "oklch(0.65 0.15 145)" },
              { icon: "🏰", title: "Bicentenaire 2029", sub: "Hôtel 20 chambres + centre touristique · Aÿ", color: "oklch(0.72 0.12 75)" },
            ].map(({ icon, title, sub, color }) => (
              <div key={title} style={{
                display: "flex", gap: "0.75rem", alignItems: "center",
                padding: "0.6rem 0",
                borderBottom: "1px solid oklch(0.72 0.12 75 / 0.06)",
              }}>
                <div style={{
                  width: "32px", height: "32px", flexShrink: 0,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  borderRadius: "0.1rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9rem",
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "oklch(0.85 0.008 75)" }}>{title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "oklch(0.50 0.008 75)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 7: Social & Digital (PREMIUM) ───────────────────────────────
  const SectionSocial = () => (
    <div ref={el => { sectionRefs.current["social"] = el; }} id="social" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="07"
        title="Social & Digital"
        subtitle="Présence Instagram comparée + campagnes notables Bollinger"
      />
      <LockedSection
        title="Social & Digital"
        description="Analyse comparative Instagram (11 maisons) et inventaire des 4 campagnes notables Bollinger 2023–2025."
        ctaText="Accéder à l'analyse social"
      >
        <div className="b-grid-2">
          {/* Instagram Chart */}
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Abonnés Instagram — Comparatif
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
              En milliers · Bollinger en or · Source : Instagram, mars 2026
            </p>
            <InstagramChart />
          </div>

          {/* Campagnes */}
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "1rem" }}>
              Campagnes notables Bollinger
            </h3>
            {bollingerCampaigns.map(c => (
              <div key={c.name} style={{
                padding: "0.75rem",
                background: "oklch(0.12 0.010 65)",
                border: "1px solid oklch(0.72 0.12 75 / 0.10)",
                borderRadius: "0.15rem",
                marginBottom: "0.6rem",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.88rem", color: "oklch(0.88 0.008 80)" }}>{c.name}</span>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "oklch(0.72 0.12 75)", background: "oklch(0.72 0.12 75 / 0.10)", padding: "0.1rem 0.4rem", borderRadius: "0.1rem" }}>{c.date}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "oklch(0.55 0.10 240)", background: "oklch(0.55 0.10 240 / 0.10)", padding: "0.1rem 0.4rem", borderRadius: "0.1rem" }}>{c.type}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.008 75)", lineHeight: 1.4 }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vineyard image */}
        <div style={{ marginTop: "1.5rem", borderRadius: "0.25rem", overflow: "hidden", position: "relative", height: "160px" }}>
          <img src={IMG_VINEYARD} alt="Vignoble Bollinger" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem", color: "oklch(0.95 0.008 80)", textAlign: "center", padding: "0 1rem" }}>
              "Made of More" — L'authenticité comme différenciateur de marque
            </p>
          </div>
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 8: Signaux Faibles & Risques (PREMIUM) ──────────────────────
  const SectionRisks = () => (
    <div ref={el => { sectionRefs.current["risks"] = el; }} id="risks" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="08"
        title="Signaux Faibles & Risques"
        subtitle="Matrice Impact × Probabilité — 6 signaux identifiés"
      />
      <LockedSection
        title="Signaux Faibles & Risques"
        description="Matrice de risques complète avec 6 signaux analysés : tarifs USA, phylloxéra VVF, contraction marché, réglementation alcool, changement climatique, contrefaçon."
        ctaText="Accéder à l'analyse risques"
      >
        {/* Filter */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          {(["Tous", "CRITIQUE", "MODÉRÉ", "FAIBLE"] as const).map(f => (
            <button
              key={f}
              className={`btn-filter ${riskFilter === f ? "active" : ""}`}
              onClick={() => setRiskFilter(f)}
            >
              {f === "Tous" ? "Tous" : f}
            </button>
          ))}
        </div>

        <div className="b-grid-2">
          {/* Risk Matrix */}
          <div className="b-card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
              Matrice Impact × Probabilité
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
              Rouge = Critique · Ambre = Modéré · Bleu = Faible
            </p>
            <RiskMatrixChart />
          </div>

          {/* Risk Cards */}
          <div>
            {filteredRisks.map(r => (
              <div key={r.signal} style={{
                padding: "0.75rem",
                background: "oklch(0.14 0.012 65)",
                border: "1px solid oklch(0.72 0.12 75 / 0.10)",
                borderRadius: "0.15rem",
                marginBottom: "0.6rem",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.85rem", color: "oklch(0.88 0.008 80)", flex: 1, paddingRight: "0.5rem" }}>{r.signal}</span>
                  <span className={r.level === "CRITIQUE" ? "badge-critique" : r.level === "MODÉRÉ" ? "badge-modere" : "badge-faible"}>
                    {r.level}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.008 75)", lineHeight: 1.4, marginBottom: "0.35rem" }}>{r.description}</p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.008 75)" }}>
                    Impact: <strong style={{ color: "oklch(0.72 0.12 75)" }}>{r.impact}</strong>
                  </span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.008 75)" }}>
                    Probabilité: <strong style={{ color: "oklch(0.72 0.12 75)" }}>{r.probability}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 9: Recommandations (PREMIUM) ────────────────────────────────
  const SectionRecommendations = () => (
    <div ref={el => { sectionRefs.current["recommendations"] = el; }} id="recommendations" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="09"
        title="Recommandations"
        subtitle="5 actions priorisées — Impact, effort et horizon temporel"
      />
      <LockedSection
        title="Recommandations Stratégiques"
        description="5 recommandations priorisées avec analyse Impact/Effort, KPIs cibles et horizons temporels. Actionnable immédiatement."
        ctaText="Accéder aux recommandations"
      >
        {/* Reco Chart */}
        <div className="b-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "oklch(0.85 0.008 75)", marginBottom: "0.25rem" }}>
            Impact vs Effort — 5 recommandations
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 75)", marginBottom: "1rem" }}>
            Or = Impact · Gris = Effort requis · Score /5
          </p>
          <RecoChart />
        </div>

        {/* Reco Cards */}
        <div className="b-grid-reco">
          {recommendations.map(r => {
            const horizonColor = r.horizonType === "court" ? "oklch(0.65 0.15 145)" : r.horizonType === "moyen" ? "oklch(0.75 0.15 60)" : "oklch(0.55 0.10 240)";
            return (
              <div key={r.id} className="b-card" style={{ padding: "1.1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "oklch(0.72 0.12 75 / 0.25)",
                    lineHeight: 1,
                  }}>
                    {String(r.id).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: horizonColor,
                    background: `${horizonColor}15`,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "0.1rem",
                  }}>
                    {r.horizon}
                  </span>
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.9rem", color: "oklch(0.92 0.008 80)", marginBottom: "0.4rem", lineHeight: 1.3 }}>
                  {r.title}
                </h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.008 75)", lineHeight: 1.5, marginBottom: "0.6rem" }}>
                  {r.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <div style={{
                    background: "oklch(0.72 0.12 75 / 0.08)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.20)",
                    borderRadius: "0.1rem",
                    padding: "0.25rem 0.6rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.68rem",
                    color: "oklch(0.72 0.12 75)",
                  }}>
                    KPI: {r.kpi}
                  </div>
                  <div style={{
                    background: "oklch(0.14 0.012 65)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.10)",
                    borderRadius: "0.1rem",
                    padding: "0.25rem 0.6rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.68rem",
                    color: "oklch(0.55 0.008 75)",
                  }}>
                    Impact: {r.impact} · Effort: {r.effort}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Lead Magnet */}
        <div style={{
          marginTop: "1.5rem",
          padding: "1.5rem",
          background: "linear-gradient(135deg, oklch(0.14 0.012 65), oklch(0.16 0.015 70))",
          border: "1px solid oklch(0.72 0.12 75 / 0.25)",
          borderRadius: "0.25rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, oklch(0.72 0.12 75), oklch(0.85 0.10 80), oklch(0.72 0.12 75))",
          }} />
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.92 0.008 80)", marginBottom: "0.5rem" }}>
            Besoin d'un dashboard CI sur mesure ?
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.55 0.008 75)", marginBottom: "1rem", maxWidth: "400px", margin: "0 auto 1rem" }}>
            Ce dashboard a été conçu spécifiquement pour Champagne Bollinger. Nous créons des dashboards CI personnalisés pour votre marque.
          </p>
          <a
            href="mailto:contact@agence.com"
            className="btn-gold"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <ExternalLink size={13} />
            Contactez-nous →
          </a>
        </div>
      </LockedSection>
    </div>
  );

  // ─── SECTION 10: Sources Log ───────────────────────────────────────────────
  const SectionSources = () => (
    <div ref={el => { sectionRefs.current["sources"] = el; }} id="sources" style={{ marginBottom: "3rem" }}>
      <SectionHeader
        number="10"
        title="Sources Log"
        subtitle="18 sources validées avec liens et dates — Données mars 2026"
      />

      {/* Filter */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        <Filter size={12} style={{ color: "oklch(0.50 0.008 75)" }} />
        {(["Tous", "Institutionnel", "Presse", "Digital", "ESG", "N/D"] as const).map(f => (
          <button
            key={f}
            className={`btn-filter ${sourceFilter === f ? "active" : ""}`}
            onClick={() => setSourceFilter(f)}
          >
            {f}
          </button>
        ))}
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.45 0.008 75)" }}>
          {filteredSources.length} source{filteredSources.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="b-table-wrap b-card" style={{ padding: 0 }}>
        <table className="b-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Éditeur</th>
              <th>Date</th>
              <th>Catégorie</th>
              <th>Lien</th>
            </tr>
          </thead>
          <tbody>
            {filteredSources.map(s => (
              <tr key={s.id}>
                <td style={{ color: "oklch(0.45 0.008 75)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem" }}>{s.id}</td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", maxWidth: "280px" }}>{s.title}</td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.008 75)", whiteSpace: "nowrap" }}>{s.publisher}</td>
                <td style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.55 0.008 75)", whiteSpace: "nowrap" }}>{s.date}</td>
                <td>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "0.1rem",
                    background: s.category === "N/D" ? "oklch(0.45 0.008 75 / 0.15)" : "oklch(0.55 0.10 240 / 0.12)",
                    color: s.category === "N/D" ? "oklch(0.55 0.008 75)" : "oklch(0.65 0.10 240)",
                    border: `1px solid ${s.category === "N/D" ? "oklch(0.45 0.008 75 / 0.20)" : "oklch(0.55 0.10 240 / 0.20)"}`,
                  }}>
                    {s.category}
                  </span>
                </td>
                <td>
                  {s.url !== "#" ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="source-badge">
                      <ExternalLink size={9} />
                      Voir →
                    </a>
                  ) : (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.40 0.008 75)" }}>
                      N/D — données propriétaires
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "2rem",
        padding: "1rem",
        borderTop: "1px solid oklch(0.72 0.12 75 / 0.10)",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.40 0.008 75)" }}>
          Dashboard CI Bollinger · Version 2.1 · Mars 2026 · Données validées et sourcées
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.35 0.008 75)", marginTop: "0.25rem" }}>
          Ce dashboard est fourni à titre informatif. Les données sont issues de sources publiques et estimations sectorielles.
        </p>
      </div>
    </div>
  );

  // ─── Main Layout ───────────────────────────────────────────────────────────
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "oklch(0.10 0.012 65)",
    }}>
      {/* Sidebar desktop */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* Mobile header */}
        <MobileHeader />

        {/* Content */}
        <main className="b-main">
          <SectionExecutive />
          <div className="deco-divider" />
          <SectionPositioning />
          <div className="deco-divider" />
          <SectionPortfolio />
          <div className="deco-divider" />
          <SectionPricing />
          <div className="deco-divider" />
          <SectionDistribution />
          <div className="deco-divider" />
          <SectionMedia />
          <div className="deco-divider" />
          <SectionSocial />
          <div className="deco-divider" />
          <SectionRisks />
          <div className="deco-divider" />
          <SectionRecommendations />
          <div className="deco-divider" />
          <SectionSources />
        </main>
      </div>

      {/* Bottom nav mobile */}
      <BottomNav />

      {/* Password Modal */}
      <PasswordModal />
    </div>
  );
}
