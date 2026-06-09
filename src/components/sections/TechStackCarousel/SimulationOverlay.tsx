'use client'

interface Props {
  isActive: boolean
}

export default function SimulationOverlay({ isActive }: Props) {
  if (!isActive) return null

  return (
    <svg
      viewBox="0 0 692 461"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <path id="mpath-blue-1" d="M 289.49 438.27 L 43.54 280.84 L 124.56 226.05 L 115.33 219.42"/>
        <path id="mpath-blue-2" d="M 213.66 220.58 L 94.29 306.22 L 57.67 282.86 L 14.42 312.85"/>
        <path id="mpath-green-1" d="M 14.13 295.83 L 262.10 130.04 L 267.86 135.23"/>
        <path id="mpath-green-2" d="M 277.95 438.27 L 201.83 389.83 L 215.96 378.01"/>
      </defs>

      {/* ── Trail lines ── */}
      <path d="M 289.49 438.27 L 43.54 280.84 L 124.56 226.05 L 115.33 219.42"
        fill="none" stroke="rgba(29,73,190,0.5)" strokeWidth="0.46" strokeDasharray="2.3 2.3"/>
      <path d="M 213.66 220.58 L 94.29 306.22 L 57.67 282.86 L 14.42 312.85"
        fill="none" stroke="rgba(29,73,190,0.5)" strokeWidth="0.46" strokeDasharray="2.3 2.3"/>
      <path d="M 14.13 295.83 L 262.10 130.04 L 267.86 135.23"
        fill="none" stroke="rgba(4,205,126,0.5)" strokeWidth="0.46" strokeDasharray="2.3 2.3"/>
      <path d="M 354.94 170.98 L 424.14 209.62"
        fill="none" stroke="rgba(4,205,126,0.5)" strokeWidth="0.46" strokeDasharray="2.3 2.3"/>
      <path d="M 277.95 438.27 L 201.83 389.83 L 215.96 378.01"
        fill="none" stroke="rgba(4,205,126,0.5)" strokeWidth="0.46" strokeDasharray="2.3 2.3"/>

      {/* ── Operation Room 10 — orange rhombus border ── */}
      <path
        d="M 262.67 193.47 L 373.10 114.18 L 509.77 185.11 L 399.34 271.61 Z"
        fill="rgba(255,140,42,0.08)"
        stroke="rgba(255,140,42,1)"
        strokeWidth="0.87"
        strokeDasharray="2.3 2.3"
      >
        <animate attributeName="stroke-opacity" values="0.45;1;0.45" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="fill-opacity" values="0.04;0.14;0.04" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <rect x="507.47" y="183.38" width="4.61" height="4.61" fill="rgba(255,140,42,1)" rx="0.5"/>
      <rect x="396.75" y="269.30" width="4.61" height="4.61" fill="rgba(255,140,42,1)" rx="0.5"/>
      <rect x="260.65" y="190.88" width="4.61" height="4.61" fill="rgba(255,140,42,1)" rx="0.5"/>
      <rect x="370.80" y="111.87" width="4.61" height="4.61" fill="rgba(255,140,42,1)" rx="0.5"/>

      {/* ── Robot scan rings (orange squares + pulse) ── */}
      <rect x="216.32" y="91.19" width="5.61" height="5.61" fill="none" stroke="rgba(255,184,74,1)" strokeWidth="0.69"/>
      <rect x="260.15" y="343.77" width="5.61" height="5.61" fill="none" stroke="rgba(255,184,74,1)" strokeWidth="0.69"/>
      <circle cx="219.13" cy="94.00" r="1.73" fill="rgba(255,184,74,1)"/>
      <circle cx="262.96" cy="346.58" r="1.73" fill="rgba(255,184,74,1)"/>

      {/* ── Crosshair connectors (cyan) ── */}
      <line x1="87.08" y1="148.78" x2="95.15" y2="148.78" stroke="rgba(74,184,255,1)" strokeWidth="0.81"/>
      <line x1="331.58" y1="209.91" x2="339.65" y2="209.91" stroke="rgba(74,184,255,1)" strokeWidth="0.81"/>
      <line x1="530.53" y1="294.10" x2="530.53" y2="302.17" stroke="rgba(74,184,255,1)" strokeWidth="0.81"/>

      {/* ── pulse-1: cx:317.71 cy:307.91 ── */}
      <g>
        <circle cx="317.71" cy="307.91" r="11.5" fill="none" stroke="rgba(74,184,255,0.2)" strokeWidth="0.58">
          <animate attributeName="r" values="11.5;15;11.5" dur="3.5s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0.2;0.05;0.2" dur="3.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="317.71" cy="307.91" r="6.2" fill="none" stroke="rgba(74,184,255,0.8)" strokeWidth="0.87">
          <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="317.71" cy="307.91" r="2.7" fill="rgba(74,184,255,1)">
          <animate attributeName="r" values="2.7;3.4;2.7" dur="3.5s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* ── pulse-2: cx:490.13 cy:266.96 ── */}
      <g>
        <circle cx="490.13" cy="266.96" r="11.5" fill="none" stroke="rgba(74,184,255,0.2)" strokeWidth="0.58">
          <animate attributeName="r" values="11.5;15;11.5" dur="3.5s" begin="1.2s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0.2;0.05;0.2" dur="3.5s" begin="1.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="490.13" cy="266.96" r="6.2" fill="none" stroke="rgba(74,184,255,0.8)" strokeWidth="0.87">
          <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3.5s" begin="1.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="490.13" cy="266.96" r="2.7" fill="rgba(74,184,255,1)">
          <animate attributeName="r" values="2.7;3.4;2.7" dur="3.5s" begin="1.2s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* ── dot-1: blue, рухається по blue trail 1 ── */}
      <g>
        <circle r="6.9" fill="rgba(41,99,232,0.2)">
          <animateMotion dur="55s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-blue-1"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="rgba(41,99,232,1)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.58">
          <animateMotion dur="55s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-blue-1"/>
          </animateMotion>
        </circle>
      </g>

      {/* ── dot-2: blue, рухається по blue trail 2 ── */}
      <g>
        <circle r="6.9" fill="rgba(41,99,232,0.2)">
          <animateMotion dur="44s" begin="15s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-blue-2"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="rgba(41,99,232,1)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.58">
          <animateMotion dur="44s" begin="15s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-blue-2"/>
          </animateMotion>
        </circle>
      </g>

      {/* ── dot-3: green, рухається по green trail 2 ── */}
      <g>
        <circle r="6.9" fill="rgba(4,205,126,0.2)">
          <animateMotion dur="40s" begin="8s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-green-2"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="rgba(4,205,126,1)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.58">
          <animateMotion dur="40s" begin="8s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-green-2"/>
          </animateMotion>
        </circle>
      </g>

      {/* ── dot-4: green, рухається по green trail 1 ── */}
      <g>
        <circle r="6.9" fill="rgba(4,205,126,0.2)">
          <animateMotion dur="62s" begin="22s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-green-1"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="rgba(4,205,126,1)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.58">
          <animateMotion dur="62s" begin="22s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
            <mpath href="#mpath-green-1"/>
          </animateMotion>
        </circle>
      </g>

      {/* ── Room label panels ── */}
      <RoomPanel x={58.82} y={116.49} title="PATIENT ROOM 240" value="1/1 PATIENT" lineY={175} dotX={103} dotY={233} dotColor="rgba(4,205,126,1)"/>
      <RoomPanel x={412.89} y={116.49} title="OPERATION ROOM 10" value="2/3 STAFF" lineY={175} dotX={457} dotY={357} dotColor="rgba(4,205,126,1)"/>
      <RoomPanel x={184.53} y={259.50} title="OPERATION ROOM 9"  value="1/2 STAFF" lineY={318} dotX={229} dotY={392} dotColor="rgba(4,205,126,1)"/>
      <RoomPanel x={503.43} y={171.85} title="MRI ROOM 1"        value="2/2 STAFF" lineY={230} dotX={548} dotY={457} dotColor="rgba(4,205,126,1)"/>
      <RoomPanel x={22.49}  y={307.94} title="ICU ROOM 1"        value="1/1 PATIENT" lineY={366} dotX={67}  dotY={391} dotColor="rgba(4,205,126,1)"/>
      <RoomPanel x={114.76} y={363.30} title="ICU ROOM 2"        value="1/1 PATIENT" lineY={422} dotX={159} dotY={438} dotColor="rgba(4,205,126,1)"/>

      {/* ── ui-panel-1: FPS/GPU stats ── */}
      <g>
        <rect x="34.60" y="384.64" width="96.88" height="40.37" fill="rgba(1,4,4,0.75)" stroke="rgba(251,251,251,0.15)" strokeWidth="0.29" rx="1"/>
        <text x="38" y="394" fill="rgba(219,229,252,0.5)" fontSize="4" fontFamily="monospace" letterSpacing="0.5">RTX REAL-TIME</text>
        <text x="38" y="403" fill="rgba(219,229,252,0.5)" fontSize="3.8" fontFamily="monospace">FPS</text>
        <text x="54" y="403" fill="rgba(255,184,74,1)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">120.5</text>
        <text x="38" y="411" fill="rgba(219,229,252,0.5)" fontSize="3.8" fontFamily="monospace">GPU</text>
        <text x="51" y="411" fill="#DBE5FC" fontSize="3.8" fontFamily="monospace">RTX 6000 · 47%</text>
        <text x="38" y="419" fill="rgba(219,229,252,0.5)" fontSize="3.8" fontFamily="monospace">VRAM</text>
        <text x="55" y="419" fill="#DBE5FC" fontSize="3.8" fontFamily="monospace">14.2 / 48 GB</text>
      </g>

      {/* ── ui-panel-2: legend ── */}
      <g>
        <rect x="457.30" y="384.64" width="109.57" height="42.67" fill="rgba(1,4,4,0.75)" stroke="rgba(251,251,251,0.15)" strokeWidth="0.29" rx="1"/>
        <text x="461" y="394" fill="rgba(219,229,252,0.6)" fontSize="4" fontFamily="monospace" letterSpacing="0.5">PHYSICAL AI · LAYERS</text>
        <circle cx="463" cy="401" r="2" fill="rgba(74,184,255,1)"/>
        <text x="468" y="404" fill="#DBE5FC" fontSize="4" fontFamily="monospace">Patient flow</text>
        <circle cx="463" cy="409" r="2" fill="rgba(4,205,126,1)"/>
        <text x="468" y="412" fill="#DBE5FC" fontSize="4" fontFamily="monospace">Clinical staff</text>
        <rect x="461" y="416" width="4" height="4" fill="rgba(255,184,74,1)" rx="0.3"/>
        <text x="468" y="421" fill="#DBE5FC" fontSize="4" fontFamily="monospace">Mobile robot</text>
      </g>

      {/* ── Bottom status bar ── */}
      <rect x="0" y="448" width="692" height="13" fill="rgba(1,4,4,0.8)"/>
      <circle cx="8" cy="454" r="2.5" fill="rgba(4,205,126,1)"/>
      <text x="14" y="457" fill="rgba(219,229,252,0.6)" fontSize="4" fontFamily="monospace">
        Nucleus connected · nucleus.meridian.health · meridian_health.usd · 312 prims · 14 sensors · 9 agents · Sim At: 16.6 ms
      </text>
      <circle cx="650" cy="454" r="2.5" fill="rgba(255,68,68,1)"/>
      <text x="655" y="457" fill="rgba(255,68,68,0.9)" fontSize="4" fontFamily="monospace">2 anomalies</text>
    </svg>
  )
}

function RoomPanel({ x, y, title, value, lineY, dotX, dotY, dotColor }: {
  x: number; y: number; title: string; value: string
  lineY: number; dotX: number; dotY: number; dotColor: string
}) {
  return (
    <g>
      <rect x={x} y={y} width="88.81" height="12.61" fill="rgba(219,229,252,0.08)" rx="1"/>
      <text x={x + 3} y={y + 9} fill="rgba(219,229,252,0.9)" fontSize="5" fontFamily="monospace" letterSpacing="0.3">{title}</text>
      <text x={x + 3} y={y + 22} fill={dotColor} fontSize="4.5" fontFamily="monospace">{value}</text>
      <line x1={dotX} y1={lineY} x2={dotX} y2={dotY} stroke={dotColor} strokeWidth="0.46" strokeOpacity="0.6"/>
      <circle cx={dotX} cy={dotY} r="2.5" fill={dotColor}/>
    </g>
  )
}
