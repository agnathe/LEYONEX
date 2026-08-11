import type { BlogCategory } from "@/data/blog";

interface Props {
  category: BlogCategory;
}

function ChecklistSVG() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Grid lines */}
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={i*96} y1="0" x2={i*96} y2="320" stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="0" y1={i*80} x2="480" y2={i*80} stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
      ))}
      {/* Timeline vertical line */}
      <line x1="100" y1="40" x2="100" y2="295" stroke="#CB3234" strokeWidth="2" strokeOpacity="0.6"/>
      {/* Step 1 - done */}
      <circle cx="100" cy="70" r="14" fill="#CB3234"/>
      <path d="M93 70 l5 5 l9 -9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="130" y="58" width="220" height="10" rx="3" fill="white" fillOpacity="0.15"/>
      <rect x="130" y="74" width="140" height="7" rx="2" fill="white" fillOpacity="0.08"/>
      {/* Step 2 - done */}
      <circle cx="100" cy="140" r="14" fill="#CB3234"/>
      <path d="M93 140 l5 5 l9 -9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="130" y="128" width="190" height="10" rx="3" fill="white" fillOpacity="0.15"/>
      <rect x="130" y="144" width="110" height="7" rx="2" fill="white" fillOpacity="0.08"/>
      {/* Step 3 - done */}
      <circle cx="100" cy="210" r="14" fill="#CB3234"/>
      <path d="M93 210 l5 5 l9 -9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="130" y="198" width="240" height="10" rx="3" fill="white" fillOpacity="0.15"/>
      <rect x="130" y="214" width="160" height="7" rx="2" fill="white" fillOpacity="0.08"/>
      {/* Step 4 - pending */}
      <circle cx="100" cy="278" r="14" fill="none" stroke="#CB3234" strokeWidth="2" strokeOpacity="0.5"/>
      <rect x="130" y="267" width="170" height="10" rx="3" fill="white" fillOpacity="0.06"/>
      <rect x="130" y="283" width="100" height="7" rx="2" fill="white" fillOpacity="0.04"/>
      {/* Right decorative bars */}
      <rect x="380" y="50" width="60" height="40" rx="3" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
      <rect x="384" y="56" width="40" height="5" rx="1" fill="white" fillOpacity="0.12"/>
      <rect x="384" y="65" width="28" height="4" rx="1" fill="white" fillOpacity="0.07"/>
      <rect x="384" y="73" width="34" height="4" rx="1" fill="white" fillOpacity="0.07"/>
      <rect x="380" y="120" width="60" height="40" rx="3" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
      <rect x="384" y="126" width="52" height="5" rx="1" fill="white" fillOpacity="0.12"/>
      <rect x="384" y="135" width="32" height="4" rx="1" fill="white" fillOpacity="0.07"/>
      <rect x="384" y="143" width="44" height="4" rx="1" fill="white" fillOpacity="0.07"/>
    </svg>
  );
}

function DocumentSVG() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background grid */}
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={i*96} y1="0" x2={i*96} y2="320" stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
      ))}
      {/* Main document */}
      <rect x="100" y="30" width="200" height="260" rx="4" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
      {/* Doc header red bar */}
      <rect x="100" y="30" width="200" height="40" rx="4" fill="#CB3234" fillOpacity="0.3"/>
      <rect x="116" y="44" width="100" height="8" rx="2" fill="white" fillOpacity="0.5"/>
      {/* Doc lines */}
      {[88, 108, 124, 140, 156, 172, 188].map((y, i) => (
        <rect key={y} x="120" y={y} width={i % 3 === 0 ? 140 : i % 3 === 1 ? 100 : 120} height="6" rx="2" fill="white" fillOpacity="0.08"/>
      ))}
      {/* Divider */}
      <line x1="120" y1="210" x2="280" y2="210" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
      {/* TL symbol */}
      <text x="170" y="255" fill="#CB3234" fillOpacity="0.8" fontSize="28" fontWeight="700" fontFamily="serif">₺</text>
      {/* Big checkmark circle */}
      <circle cx="350" cy="120" r="60" fill="none" stroke="#CB3234" strokeOpacity="0.2" strokeWidth="1.5"/>
      <circle cx="350" cy="120" r="46" fill="#CB3234" fillOpacity="0.1"/>
      <path d="M328 120 l14 14 l28 -28" stroke="#CB3234" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8"/>
      {/* Small data chips */}
      <rect x="310" y="200" width="80" height="24" rx="3" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
      <rect x="318" y="208" width="48" height="7" rx="2" fill="white" fillOpacity="0.12"/>
      <rect x="330" y="240" width="54" height="20" rx="3" fill="#CB3234" fillOpacity="0.15" stroke="#CB3234" strokeOpacity="0.3" strokeWidth="1"/>
      <rect x="340" y="247" width="34" height="7" rx="2" fill="#CB3234" fillOpacity="0.5"/>
    </svg>
  );
}

function StandSVG() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Floor grid perspective */}
      {[0,1,2,3,4].map(i => (
        <line key={`h${i}`} x1="60" y1={220 + i*18} x2="420" y2={220 + i*18} stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`v${i}`} x1={60 + i*52} y1="220" x2={60 + i*52} y2="290" stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
      ))}
      {/* 3D stand - back wall left */}
      <polygon points="130,80 130,220 240,220 240,80" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
      {/* 3D stand - back wall right */}
      <polygon points="240,80 240,220 340,220 340,80" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"/>
      {/* 3D stand - top */}
      <polygon points="130,80 240,60 360,80 240,80" fill="#CB3234" fillOpacity="0.25" stroke="#CB3234" strokeOpacity="0.5" strokeWidth="1.5"/>
      {/* Columns */}
      <rect x="128" y="80" width="10" height="140" fill="white" fillOpacity="0.15"/>
      <rect x="338" y="80" width="10" height="140" fill="white" fillOpacity="0.1"/>
      <rect x="235" y="60" width="10" height="160" fill="white" fillOpacity="0.08"/>
      {/* Left panel graphic */}
      <rect x="145" y="110" width="75" height="50" rx="2" fill="#CB3234" fillOpacity="0.2" stroke="#CB3234" strokeOpacity="0.4" strokeWidth="1"/>
      <rect x="153" y="118" width="55" height="6" rx="1" fill="white" fillOpacity="0.2"/>
      <rect x="153" y="129" width="38" height="4" rx="1" fill="white" fillOpacity="0.12"/>
      <rect x="153" y="138" width="45" height="4" rx="1" fill="white" fillOpacity="0.12"/>
      {/* Right panel */}
      <rect x="260" y="100" width="65" height="80" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
      <rect x="268" y="110" width="48" height="6" rx="1" fill="white" fillOpacity="0.12"/>
      <rect x="268" y="122" width="32" height="4" rx="1" fill="white" fillOpacity="0.07"/>
      <rect x="268" y="132" width="40" height="4" rx="1" fill="white" fillOpacity="0.07"/>
      <rect x="268" y="160" width="48" height="12" rx="2" fill="#CB3234" fillOpacity="0.3"/>
      {/* Floor shadow */}
      <ellipse cx="235" cy="225" rx="120" ry="8" fill="black" fillOpacity="0.2"/>
      {/* Measurement lines */}
      <line x1="110" y1="80" x2="110" y2="220" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="106" y1="80" x2="114" y2="80" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
      <line x1="106" y1="220" x2="114" y2="220" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
    </svg>
  );
}

function GlobeSVG() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Globe circle */}
      <circle cx="240" cy="160" r="120" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5"/>
      <circle cx="240" cy="160" r="120" fill="white" fillOpacity="0.02"/>
      {/* Latitude lines */}
      {[-80, -50, -20, 20, 50, 80].map((offset, i) => {
        const y = 160 + offset;
        const hw = Math.sqrt(Math.max(0, 120*120 - offset*offset));
        return <ellipse key={i} cx="240" cy={y} rx={hw} ry={hw * 0.3} fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>;
      })}
      {/* Longitude lines */}
      {[0,1,2,3,4].map(i => (
        <ellipse key={i} cx="240" cy="160" rx={i === 2 ? 120 : 80} ry="120" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1"
          transform={`rotate(${i*36} 240 160)`}/>
      ))}
      {/* Connection dots - cities */}
      {[
        {x: 155, y: 110},  // Europe
        {x: 310, y: 130},  // Asia
        {x: 200, y: 200},  // Africa
        {x: 130, y: 170},  // Americas
        {x: 340, y: 190},  // SE Asia
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="5" fill="#CB3234" fillOpacity="0.9"/>
          <circle cx={pt.x} cy={pt.y} r="10" fill="#CB3234" fillOpacity="0.2"/>
        </g>
      ))}
      {/* Connection lines between cities */}
      <line x1="155" y1="110" x2="310" y2="130" stroke="#CB3234" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="310" y1="130" x2="340" y2="190" stroke="#CB3234" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="155" y1="110" x2="130" y2="170" stroke="#CB3234" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="155" y1="110" x2="200" y2="200" stroke="#CB3234" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 3"/>
      {/* Labels */}
      <rect x="142" y="88" width="26" height="14" rx="2" fill="#CB3234" fillOpacity="0.3"/>
      <rect x="146" y="92" width="18" height="6" rx="1" fill="white" fillOpacity="0.4"/>
      <rect x="296" y="108" width="26" height="14" rx="2" fill="#CB3234" fillOpacity="0.3"/>
      <rect x="300" y="112" width="18" height="6" rx="1" fill="white" fillOpacity="0.4"/>
      {/* Airplane icon simplified */}
      <path d="M360 60 L380 70 L370 75 L375 90 L365 85 L360 95 L355 75 L345 80 L360 60Z" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
    </svg>
  );
}

function ChartSVG() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Grid */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="80" y1={60 + i*52} x2="420" y2={60 + i*52} stroke="white" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {/* Y-axis */}
      <line x1="100" y1="40" x2="100" y2="280" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"/>
      {/* X-axis */}
      <line x1="100" y1="265" x2="420" y2="265" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"/>
      {/* Bars */}
      {[
        { x: 130, h: 100, label: "Q1" },
        { x: 185, h: 140, label: "Q2" },
        { x: 240, h: 120, label: "Q3" },
        { x: 295, h: 180, label: "Q4" },
        { x: 350, h: 220, label: "Q1'26" },
      ].map((bar, i) => (
        <g key={i}>
          <rect
            x={bar.x}
            y={265 - bar.h}
            width="36"
            height={bar.h}
            rx="2"
            fill={i === 4 ? "#CB3234" : "white"}
            fillOpacity={i === 4 ? 0.7 : 0.08}
            stroke={i === 4 ? "#CB3234" : "white"}
            strokeOpacity={i === 4 ? 0.8 : 0.12}
            strokeWidth="1"
          />
          {i === 4 && (
            <rect x={bar.x} y={265 - bar.h} width="36" height={bar.h} rx="2" fill="url(#barGrad)"/>
          )}
          <rect x={bar.x + 6} y={275} width={24} height="6" rx="1" fill="white" fillOpacity="0.08"/>
        </g>
      ))}
      {/* Trend line */}
      <polyline
        points="148,195 203,165 258,175 313,125 368,75"
        fill="none"
        stroke="#CB3234"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />
      {/* Trend dots */}
      {[[148,195],[203,165],[258,175],[313,125],[368,75]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 6 : 4} fill={i === 4 ? "#CB3234" : "white"} fillOpacity={i === 4 ? 1 : 0.5}/>
      ))}
      {/* Highlight box on last value */}
      <rect x="340" y="50" width="60" height="22" rx="3" fill="#CB3234" fillOpacity="0.2" stroke="#CB3234" strokeOpacity="0.5" strokeWidth="1"/>
      <rect x="350" y="57" width="40" height="7" rx="2" fill="white" fillOpacity="0.35"/>
      {/* Y-axis labels */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="58" y={57 + i*52} width="34" height="7" rx="2" fill="white" fillOpacity="0.06"/>
      ))}
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CB3234" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#CB3234" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const bgColors: Record<BlogCategory, string> = {
  "devlet-destekleri": "#0a1628",
  "stand-tasarimi": "#1a0a0a",
  "fuar-hazirligi": "#0a1a10",
  "uluslararasi-fuarlar": "#0f0a1e",
  "roi-olcum": "#1a1206",
};

export default function BlogCoverIllustration({ category }: Props) {
  return (
    <div
      className="absolute inset-0"
      style={{ background: bgColors[category] }}
    >
      <div className="absolute inset-0 opacity-80">
        {category === "fuar-hazirligi" && <ChecklistSVG />}
        {category === "devlet-destekleri" && <DocumentSVG />}
        {category === "stand-tasarimi" && <StandSVG />}
        {category === "uluslararasi-fuarlar" && <GlobeSVG />}
        {category === "roi-olcum" && <ChartSVG />}
      </div>
    </div>
  );
}
