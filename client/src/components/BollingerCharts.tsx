/**
 * BollingerCharts.tsx — 10 composants Recharts pour le Dashboard CI Bollinger
 * Design: Art Déco Prestige Noir & Or
 *
 * 1.  MarketVolumeChart   — AreaChart — Expéditions 2019–2025
 * 2.  TopMarketsChart     — BarChart horizontal — Top 10 marchés export
 * 3.  PriceComparisonChart — BarChart groupé — Entrée gamme vs Prestige
 * 4.  MostAdmiredChart    — BarChart horizontal — Most Admired 2026
 * 5.  InstagramChart      — BarChart — Abonnés Instagram comparatif
 * 6.  DistributionPieChart — PieChart — Canaux distribution
 * 7.  MarketSegmentPieChart — PieChart — Segments marché
 * 8.  RiskMatrixChart     — ScatterChart — Matrice risques
 * 9.  RecoChart           — BarChart groupé — Impact vs Effort
 * 10. PortfolioScatterChart — ScatterChart — Prix × Score
 */

import {
  AreaChart, Area, BarChart, Bar, ScatterChart, Scatter,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Legend, ZAxis,
} from "recharts";
import {
  marketVolumeData, topMarketsData, priceComparisonData, mostAdmiredData,
  instagramData, distributionChannels, marketSegments, riskSignals,
  recommendations, portfolioData,
} from "@/lib/bollingerData";

// ─── Couleurs Art Déco ────────────────────────────────────────────────────────
const GOLD = "#b8960c";
const GOLD_LIGHT = "#d4af37";
const DARK_BG = "#1a1610";
const MUTED = "#6b6050";
const SUCCESS = "#4a7c59";
const DANGER = "#8b2020";
const WARNING = "#8b6914";
const BLUE = "#3a5a8a";

// ─── Tooltip custom Art Déco ──────────────────────────────────────────────────
const CustomTooltipStyle = {
  background: "#1e1a14",
  border: "1px solid rgba(184, 150, 12, 0.30)",
  borderRadius: "0.15rem",
  padding: "0.6rem 0.9rem",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontSize: "0.78rem",
  color: "#e8dcc8",
};

// ─── 1. MarketVolumeChart ─────────────────────────────────────────────────────
export function MarketVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={marketVolumeData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
            <stop offset="95%" stopColor={GOLD} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis dataKey="year" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} domain={[200, 340]} unit="M" />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`${v}M bouteilles`, "Expéditions"]}
        />
        <ReferenceLine y={266} stroke={GOLD} strokeDasharray="4 4" strokeOpacity={0.5}
          label={{ value: "2025: 266M", fill: GOLD, fontSize: 10, position: "right" }} />
        <Area
          type="monotone"
          dataKey="volume"
          stroke={GOLD}
          strokeWidth={2}
          fill="url(#goldGradient)"
          dot={{ fill: GOLD, r: 3, strokeWidth: 0 }}
          activeDot={{ r: 5, fill: GOLD_LIGHT }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ─── 2. TopMarketsChart ───────────────────────────────────────────────────────
export function TopMarketsChart() {
  const data = topMarketsData.map(d => ({
    ...d,
    fill: d.growth > 0 ? GOLD : d.growth < 0 ? DANGER : MUTED,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 60, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" horizontal={false} />
        <XAxis type="number" tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} unit="M€" />
        <YAxis type="category" dataKey="market" tick={{ fill: "#c8b896", fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, _n, props) => {
            const g = props.payload?.growth;
            const trend = g > 0 ? `↑ +${g}%` : g < 0 ? `↓ ${g}%` : "→ stable";
            return [`${v}M€ (${trend})`, "Valeur export"];
          }}
        />
        <Bar dataKey="value" radius={[0, 2, 2, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} fillOpacity={0.85} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── 3. PriceComparisonChart ──────────────────────────────────────────────────
export function PriceComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={priceComparisonData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis dataKey="name" tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} unit="€" />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, name: string) => [`${v}€`, name === "entry" ? "Entrée de gamme" : "Cuvée Prestige"]}
        />
        <Legend
          formatter={(v) => v === "entry" ? "Entrée de gamme" : "Cuvée Prestige"}
          wrapperStyle={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: MUTED }}
        />
        <Bar dataKey="entry" fill={MUTED} fillOpacity={0.7} radius={[2, 2, 0, 0]} />
        <Bar dataKey="prestige" fill={GOLD} fillOpacity={0.85} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── 4. MostAdmiredChart ──────────────────────────────────────────────────────
export function MostAdmiredChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={mostAdmiredData} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" horizontal={false} />
        <XAxis type="number" tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 110]} />
        <YAxis type="category" dataKey="name" tick={{ fill: "#c8b896", fontSize: 11 }} axisLine={false} tickLine={false} width={110} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, _n, props) => [`#${props.payload?.rank} — Score relatif: ${v}`, "Most Admired 2026"]}
        />
        <Bar dataKey="score" radius={[0, 2, 2, 0]}>
          {mostAdmiredData.map((entry, index) => (
            <Cell key={index} fill={entry.isBollinger ? GOLD : MUTED} fillOpacity={entry.isBollinger ? 1 : 0.65} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── 5. InstagramChart ────────────────────────────────────────────────────────
export function InstagramChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={instagramData} margin={{ top: 10, right: 10, left: -10, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis dataKey="name" tick={{ fill: MUTED, fontSize: 9 }} axisLine={false} tickLine={false} angle={-35} textAnchor="end" interval={0} />
        <YAxis tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} unit="K" />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`${v}K abonnés`, "Instagram"]}
        />
        <Bar dataKey="followers" radius={[2, 2, 0, 0]}>
          {instagramData.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.name === "Bollinger" ? GOLD : MUTED}
              fillOpacity={entry.name === "Bollinger" ? 1 : 0.55}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── 6. DistributionPieChart ──────────────────────────────────────────────────
const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: {
  cx: number; cy: number; midAngle: number; innerRadius: number; outerRadius: number; percent: number; name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#e8dcc8" textAnchor="middle" dominantBaseline="central"
      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600 }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function DistributionPieChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={distributionChannels}
          cx="50%"
          cy="50%"
          outerRadius={75}
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {distributionChannels.map((entry, index) => (
            <Cell key={index} fill={entry.color} stroke="rgba(184,150,12,0.15)" strokeWidth={1} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, name: string) => [`${v}%`, name]}
        />
        <Legend
          formatter={(v) => v}
          wrapperStyle={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#8a7a60" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ─── 7. MarketSegmentPieChart ─────────────────────────────────────────────────
export function MarketSegmentPieChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={marketSegments}
          cx="50%"
          cy="50%"
          outerRadius={75}
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {marketSegments.map((entry, index) => (
            <Cell key={index} fill={entry.color} stroke="rgba(184,150,12,0.15)" strokeWidth={1} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, name: string) => [`${v}%`, name]}
        />
        <Legend
          formatter={(v) => v}
          wrapperStyle={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#8a7a60" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ─── 8. RiskMatrixChart ───────────────────────────────────────────────────────
const riskScatterData = riskSignals.map(r => ({
  x: r.probabilityScore,
  y: r.impactScore,
  name: r.signal,
  level: r.level,
  z: 200,
}));

const riskColor = (level: string) => {
  if (level === "CRITIQUE") return DANGER;
  if (level === "MODÉRÉ") return WARNING;
  return BLUE;
};

const RiskTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: typeof riskScatterData[0] }[] }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div style={{ ...CustomTooltipStyle, maxWidth: "200px" }}>
        <p style={{ color: GOLD_LIGHT, fontWeight: 600, marginBottom: "0.25rem", fontSize: "0.75rem" }}>{d.name}</p>
        <p style={{ color: "#8a7a60", fontSize: "0.7rem" }}>Impact: {d.y}/5 · Probabilité: {d.x}/5</p>
        <p style={{ color: riskColor(d.level), fontSize: "0.7rem", marginTop: "0.15rem" }}>{d.level}</p>
      </div>
    );
  }
  return null;
};

export function RiskMatrixChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis
          type="number" dataKey="x" name="Probabilité" domain={[0, 5]}
          tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false}
          label={{ value: "Probabilité →", position: "insideBottom", offset: -10, fill: MUTED, fontSize: 10 }}
        />
        <YAxis
          type="number" dataKey="y" name="Impact" domain={[0, 5]}
          tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false}
          label={{ value: "Impact ↑", angle: -90, position: "insideLeft", fill: MUTED, fontSize: 10 }}
        />
        <ZAxis type="number" dataKey="z" range={[80, 80]} />
        <Tooltip content={<RiskTooltip />} />
        {/* Quadrant lines */}
        <ReferenceLine x={2.5} stroke="rgba(184,150,12,0.15)" strokeDasharray="4 4" />
        <ReferenceLine y={2.5} stroke="rgba(184,150,12,0.15)" strokeDasharray="4 4" />
        <Scatter data={riskScatterData} shape={(props: { cx?: number; cy?: number; payload?: typeof riskScatterData[0] }) => {
          const { cx = 0, cy = 0, payload } = props;
          const color = riskColor(payload?.level || "FAIBLE");
          return (
            <g>
              <circle cx={cx} cy={cy} r={8} fill={color} fillOpacity={0.75} stroke={color} strokeWidth={1.5} />
            </g>
          );
        }} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

// ─── 9. RecoChart ─────────────────────────────────────────────────────────────
const recoChartData = recommendations.map(r => ({
  name: r.title.length > 25 ? r.title.substring(0, 25) + "…" : r.title,
  impact: r.impactScore,
  effort: r.effortScore,
  horizon: r.horizonType,
}));

export function RecoChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={recoChartData} margin={{ top: 10, right: 10, left: -10, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis dataKey="name" tick={{ fill: MUTED, fontSize: 9 }} axisLine={false} tickLine={false} angle={-30} textAnchor="end" interval={0} />
        <YAxis tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 5]} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, name: string) => [
            `${v}/5`,
            name === "impact" ? "Impact" : "Effort requis"
          ]}
        />
        <Legend
          formatter={(v) => v === "impact" ? "Impact" : "Effort requis"}
          wrapperStyle={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: MUTED }}
        />
        <Bar dataKey="impact" fill={GOLD} fillOpacity={0.85} radius={[2, 2, 0, 0]} />
        <Bar dataKey="effort" fill={MUTED} fillOpacity={0.65} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── 10. PortfolioScatterChart ────────────────────────────────────────────────
const portfolioScatterData = portfolioData.map(c => ({
  x: c.priceMid,
  y: c.score,
  name: c.name,
  range: c.range,
  z: 200,
}));

const PortfolioTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: typeof portfolioScatterData[0] }[] }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div style={{ ...CustomTooltipStyle, maxWidth: "200px" }}>
        <p style={{ color: GOLD_LIGHT, fontWeight: 600, marginBottom: "0.25rem", fontSize: "0.75rem" }}>{d.name}</p>
        <p style={{ color: "#8a7a60", fontSize: "0.7rem" }}>Prix moyen: {d.x}€</p>
        <p style={{ color: "#8a7a60", fontSize: "0.7rem" }}>Score critique: {d.y} pts</p>
        <p style={{ color: MUTED, fontSize: "0.68rem", marginTop: "0.15rem" }}>{d.range}</p>
      </div>
    );
  }
  return null;
};

export function PortfolioScatterChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(184,150,12,0.08)" />
        <XAxis
          type="number" dataKey="x" name="Prix moyen" unit="€"
          tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false}
          label={{ value: "Prix moyen (€) →", position: "insideBottom", offset: -10, fill: MUTED, fontSize: 10 }}
        />
        <YAxis
          type="number" dataKey="y" name="Score" domain={[88, 100]}
          tick={{ fill: MUTED, fontSize: 10 }} axisLine={false} tickLine={false}
          label={{ value: "Score ↑", angle: -90, position: "insideLeft", fill: MUTED, fontSize: 10 }}
        />
        <ZAxis type="number" dataKey="z" range={[60, 60]} />
        <Tooltip content={<PortfolioTooltip />} />
        <Scatter data={portfolioScatterData} shape={(props: { cx?: number; cy?: number }) => {
          const { cx = 0, cy = 0 } = props;
          return (
            <g>
              <circle cx={cx} cy={cy} r={7} fill={GOLD} fillOpacity={0.80} stroke={GOLD_LIGHT} strokeWidth={1} />
            </g>
          );
        }} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
