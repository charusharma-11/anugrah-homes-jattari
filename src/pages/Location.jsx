import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Car,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  Route,
  Activity,
  LocateFixed,
  Radio,
} from "lucide-react";
import { Link } from "react-router-dom";

import gallery8 from "../assets/gallery8.png";
import gallery1 from "../assets/gallery.png";
import gallery6 from "../assets/gallery6.png";

import ScrollReveal from "../components/ScrollReveal";

const connections = [
  {
    number: "01",
    title: "Everyday Connectivity",
    text: "A location planned around practical access and smoother everyday movement.",
    icon: Route,
  },
  {
    number: "02",
    title: "Road Access",
    text: "Convenient road connectivity helps keep important destinations within reach.",
    icon: Car,
  },
  {
    number: "03",
    title: "Growing Surroundings",
    text: "A developing environment creates opportunities for the destination to evolve.",
    icon: Navigation,
  },
  {
    number: "04",
    title: "Future Perspective",
    text: "Think beyond today's address and consider the possibilities around it.",
    icon: Compass,
  },
];

const points = [
  "Accessible approach",
  "Connected surroundings",
  "Everyday conveniences",
  "Developing neighbourhood",
];

const networkNodes = [
  { id: "jattari", label: "JATTARI", x: 50, y: 46, active: true },
  { id: "north", label: "NORTH", x: 29, y: 21 },
  { id: "east", label: "EAST", x: 76, y: 23 },
  { id: "west", label: "WEST", x: 17, y: 62 },
  { id: "south", label: "SOUTH", x: 72, y: 76 },
  { id: "nearby", label: "CONNECT", x: 35, y: 83 },
];

function Location() {
  const [selectedNode, setSelectedNode] = useState("jattari");
  const [simulateRoute, setSimulateRoute] = useState(false);
  const [localTime, setLocalTime] = useState(new Date());
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(true);
  const networkRef = useRef(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Date());

    updateTime();

    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!simulateRoute) return undefined;

    const timer = window.setInterval(() => {
      setSelectedNode((current) => {
        const index = networkNodes.findIndex(
          (node) => node.id === current
        );

        return networkNodes[(index + 1) % networkNodes.length].id;
      });
    }, 2200);

    return () => window.clearInterval(timer);
  }, [simulateRoute]);

  const handleSpotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMagnetic = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    setMagnetic({
      x: Math.max(-7, Math.min(7, x * 0.12)),
      y: Math.max(-7, Math.min(7, y * 0.12)),
    });
  };

  const resetMagnetic = () => setMagnetic({ x: 0, y: 0 });

  const selected = networkNodes.find(
    (node) => node.id === selectedNode
  );

  const timeText = localTime.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <main className="location-page w-full overflow-hidden bg-[#F7F8F5] text-[#0B3D3E]">
      {/* HERO */}
      <section className="location-hero relative isolate overflow-hidden bg-[#0B3D3E] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />

        <div className="hero-aura pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#287A6D]/40 blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="hero-aura hero-aura-delay pointer-events-none absolute -bottom-40 left-[15%] -z-10 h-80 w-80 rounded-full bg-[#B9D8C8]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <ScrollReveal direction="left" duration={950}>
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#B9D8C8] sm:text-xs">
                <span className="h-px w-10 bg-[#B9D8C8]" />
    
              </div>

              <h1 className="location-glitch text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
                Connected to
                <span className="location-title-accent mt-2 block font-serif italic font-normal text-[#B9D8C8] sm:mt-3">
                  what matters.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                A destination is defined not only by its surroundings, but by
                how naturally it connects you to the places and experiences
                that matter.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jattari%2C%20Uttar%20Pradesh%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                  style={{
                    transform: `translate(${magnetic.x}px, ${magnetic.y}px)`,
                  }}
                  className="inline-flex items-center gap-3 rounded-full bg-[#B9D8C8] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B3D3E] shadow-[0_0_30px_rgba(185,216,200,0.12)] transition-transform duration-300 hover:bg-white sm:px-6 sm:text-xs"
                >
                  Explore Location

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3D3E]/10">
                    <ArrowUpRight size={15} />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setSimulateRoute((value) => !value)}
                  className={`inline-flex items-center gap-3 rounded-full border px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-6 sm:text-xs ${
                    simulateRoute
                      ? "border-[#B9D8C8]/70 bg-[#287A6D]/35 text-[#B9D8C8]"
                      : "border-white/20 bg-white/[0.04] text-white/80 hover:border-[#B9D8C8]/50"
                  }`}
                >
                  <Activity size={15} />
                  {simulateRoute ? "Stop Route" : "Simulate Route"}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-medium">Jattari</p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Local Time · IST
                  </p>
                  <p className="mt-2 font-mono text-sm tabular-nums text-[#B9D8C8]">
                    {timeText}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* INTERACTIVE SVG NETWORK */}
          <ScrollReveal direction="right" delay={150} duration={1000}>
            <div
              ref={networkRef}
              className="location-panel relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/[0.045] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6 lg:p-7"
              onMouseMove={handleSpotlight}
              style={{
                background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(185,216,200,.13), transparent 42%), rgba(255,255,255,.035)`,
              }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#B9D8C8] sm:text-[10px]">
                    Connectivity Matrix
                  </p>
                  <p className="mt-2 text-lg font-medium sm:text-xl">
                    Jattari Network
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#B9D8C8]/20 bg-[#287A6D]/15 px-3 py-2">
                  <span className="live-ring h-2 w-2 rounded-full bg-[#B9D8C8]" />
                  <span className="text-[9px] uppercase tracking-[0.13em] text-[#B9D8C8]">
                    {simulateRoute ? "Routing" : "Connected"}
                  </span>
                </div>
              </div>

              <div className="relative mt-4 h-[310px] w-full sm:h-[390px]">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    {Array.from({ length: 9 }, (_, index) => (
                      <g key={index}>
                        <line
                          x1={index * 12.5}
                          y1="0"
                          x2={index * 12.5}
                          y2="100"
                          stroke="#B9D8C8"
                          strokeWidth=".15"
                        />
                        <line
                          x1="0"
                          y1={index * 12.5}
                          x2="100"
                          y2={index * 12.5}
                          stroke="#B9D8C8"
                          strokeWidth=".15"
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  aria-label="Interactive Jattari connectivity diagram"
                >
                  <defs>
                    <linearGradient
                      id="routeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#B9D8C8" />
                      <stop offset="100%" stopColor="#287A6D" />
                    </linearGradient>

                    <filter id="nodeGlow">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {networkNodes
                    .filter((node) => node.id !== "jattari")
                    .map((node) => (
                      <g key={node.id}>
                        <line
                          x1="50"
                          y1="46"
                          x2={node.x}
                          y2={node.y}
                          stroke="#B9D8C8"
                          strokeOpacity=".35"
                          strokeWidth=".25"
                          strokeDasharray="1.5 2"
                        />

                        <line
                          x1="50"
                          y1="46"
                          x2={node.x}
                          y2={node.y}
                          stroke="url(#routeGradient)"
                          strokeWidth=".45"
                          strokeDasharray="2 7"
                          className={simulateRoute ? "energy-line" : ""}
                        />
                      </g>
                    ))}

                  {simulateRoute && (
                    <polyline
                      points={`${networkNodes
                        .map((node) => `${node.x},${node.y}`)
                        .join(" ")} ${networkNodes[0].x},${networkNodes[0].y}`}
                      fill="none"
                      stroke="#B9D8C8"
                      strokeWidth=".65"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 3"
                      className="route-draw"
                    />
                  )}

                  {networkNodes.map((node) => {
                    const active = selectedNode === node.id;

                    return (
                      <g
                        key={node.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${node.label}`}
                        onClick={() => {
                          setSelectedNode(node.id);
                          setIsOpen(true);
                        }}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Enter" ||
                            event.key === " "
                          ) {
                            event.preventDefault();
                            setSelectedNode(node.id);
                            setIsOpen(true);
                          }
                        }}
                        className="network-node"
                        style={{ cursor: "pointer" }}
                      >
                        {active && (
                          <>
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r="7"
                              fill="none"
                              stroke="#B9D8C8"
                              strokeWidth=".35"
                              className="node-pulse"
                            />

                            <circle
                              cx={node.x}
                              cy={node.y}
                              r="4.5"
                              fill="#B9D8C8"
                              fillOpacity=".1"
                            />
                          </>
                        )}

                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={active ? "2" : "1.25"}
                          fill={active ? "#B9D8C8" : "#287A6D"}
                          stroke="#B9D8C8"
                          strokeWidth=".35"
                          filter="url(#nodeGlow)"
                        />

                        <text
                          x={node.x}
                          y={node.y + 7}
                          textAnchor="middle"
                          fill={active ? "#B9D8C8" : "#FFFFFF"}
                          fillOpacity={active ? "1" : ".65"}
                          fontSize={active ? "3.1" : "2.5"}
                          letterSpacing=".45"
                          className="pointer-events-none"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B9D8C8]/20 bg-[#287A6D]/15 text-[#B9D8C8]">
                    <LocateFixed size={15} />
                  </span>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.17em] text-white/40">
                      Selected Node
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/90">
                      {selected?.label || "JATTARI"}
                    </p>
                  </div>
                </div>

                <p className="text-[10px] leading-5 text-white/45 sm:max-w-[190px] sm:text-right">
                  Interactive visualisation of location connections
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOCATION INTRO */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <ScrollReveal direction="left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#287A6D] sm:text-xs">
                The Address
              </p>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0F5257] to-[#287A6D] text-white shadow-[0_12px_30px_rgba(15,82,87,0.2)]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xl font-medium sm:text-2xl">Jattari</p>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-[#0B3D3E]/55">
                    A thoughtfully positioned plotted destination designed
                    for easy access and future possibilities.
                  </p>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0B3D3E]/10 bg-white/70 px-4 py-3">
                <span className="live-ring h-2 w-2 rounded-full bg-[#287A6D]" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#0B3D3E]/65">
                  Jattari · Uttar Pradesh
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                The value of a place
                <span className="block font-serif italic font-normal text-[#287A6D]">
                  begins with its position.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#0B3D3E]/60 sm:mt-7 sm:text-lg sm:leading-9">
                Jattari brings together accessibility and a developing
                environment, creating a setting where present-day convenience
                meets a longer-term perspective.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REAL JATTARI GOOGLE MAP */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <ScrollReveal direction="scale" duration={1000}>
          <div
            className="location-canvas relative mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] border border-[#0B3D3E]/10 bg-[#0B3D3E] p-5 text-white shadow-[0_25px_70px_rgba(11,61,62,0.14)] sm:rounded-[2rem] sm:p-8 lg:p-10"
            onMouseMove={handleSpotlight}
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(185,216,200,.12), transparent 35%), #0B3D3E`,
            }}
          >
            <div className="relative z-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#B9D8C8] sm:text-xs">
                  Project Location
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Find your bearings.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                  Explore Jattari, Uttar Pradesh, on Google Maps and view the
                  surrounding roads and nearby places.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jattari%2C%20Uttar%20Pradesh%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#B9D8C8] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0B3D3E] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-xs"
              >
                Open in Google Maps
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* GOOGLE MAP EMBED */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#EAF0EB] sm:mt-10">
              <iframe
                title="Google Map of Jattari, Uttar Pradesh"
                src="https://maps.google.com/maps?q=Jattari%2C%20Uttar%20Pradesh%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B9D8C8]/25 bg-[#287A6D]/20 text-[#B9D8C8]">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-sm font-medium text-white">
                    Jattari, Uttar Pradesh
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Interactive Google Map
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Jattari%2C%20Uttar%20Pradesh%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#B9D8C8] transition hover:text-white sm:text-xs"
              >
                Get Directions
                <Navigation size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CONNECTIONS */}
      <section className="bg-[#0B3D3E] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#B9D8C8] sm:text-xs">
                The Connection
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                More connected.
                <span className="block font-serif italic font-normal text-[#B9D8C8]">
                  More possibilities.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid border-t border-white/10 md:grid-cols-2">
            {connections.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                  duration={800}
                >
                  <article
                    onMouseMove={handleSpotlight}
                    className="location-card group relative min-h-[265px] overflow-hidden border-b border-white/10 p-6 transition-all duration-500 sm:min-h-[280px] sm:p-10"
                    style={{
                      background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(185,216,200,.10), transparent 42%)`,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-[#B9D8C8] sm:text-xs">
                        {item.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-[#B9D8C8]/50 group-hover:bg-[#287A6D]/30 group-hover:text-[#B9D8C8] sm:h-12 sm:w-12">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="mt-14 sm:mt-20">
                      <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-white/50 transition group-hover:text-white/75">
                        {item.text}
                      </p>
                    </div>

                    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#B9D8C8] transition-all duration-700 group-hover:w-full" />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE STORY */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal direction="left" duration={950}>
            <div className="flex h-full flex-col justify-between rounded-[1.7rem] bg-gradient-to-br from-[#EAF0EB] via-[#DCE8E0] to-[#B9D8C8] p-6 sm:rounded-[2rem] sm:p-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#287A6D] sm:text-xs">
                  Why Location Matters
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl">
                  Position today.
                  <span className="block font-serif italic font-normal text-[#287A6D]">
                    Perspective tomorrow.
                  </span>
                </h2>
              </div>

              <div className="mt-14 sm:mt-16">
                {points.map((point, index) => (
                  <ScrollReveal
                    key={point}
                    direction="right"
                    delay={150 + index * 100}
                    duration={700}
                  >
                    <div className="flex items-center gap-4 border-t border-[#0B3D3E]/15 py-4 sm:py-5">
                      <span className="text-[10px] tracking-[0.15em] text-[#287A6D]/70 sm:text-xs">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150} duration={1000}>
            <div className="image-hover group relative min-h-[420px] overflow-hidden rounded-[1.7rem] bg-[#0B3D3E] sm:min-h-[520px] sm:rounded-[2rem] lg:min-h-[620px]">
              <img
                src={gallery1}
                alt="Jattari surroundings"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/90 via-[#0B3D3E]/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10 sm:right-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md sm:h-12 sm:w-12">
                  <Clock3 size={18} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#B9D8C8] sm:text-xs">
                  Everyday movement
                </p>

                <p className="mt-2 max-w-md text-2xl font-medium leading-tight sm:text-4xl">
                  Stay connected without losing the feeling of space.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="relative overflow-hidden bg-[#EAF0EB] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#287A6D] sm:text-xs">
                Explore Jattari
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                A location is more than
                <span className="block font-serif italic font-normal text-[#287A6D]">
                  a point on a map.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#0B3D3E]/60 sm:text-base sm:leading-8">
                It is the relationship between your everyday routine, your
                surroundings and the opportunities that lie ahead.
              </p>

              <Link
                to="/contact"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                style={{
                  transform: `translate(${magnetic.x}px, ${magnetic.y}px)`,
                }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F5257] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white shadow-[0_15px_35px_rgba(15,82,87,0.18)] transition-transform duration-300 hover:bg-[#287A6D] sm:mt-9 sm:px-7 sm:py-4 sm:text-xs"
              >
                Enquire About Jattari

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150} duration={1000}>
            <div
              onMouseMove={handleSpotlight}
              className="image-hover group relative h-[380px] w-full overflow-hidden rounded-[1.7rem] bg-[#0B3D3E] sm:h-[480px] sm:rounded-[2rem] lg:h-[560px]"
            >
              <img
                src={gallery6}
                alt="Jattari project"
                className="absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/50 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0B3D3E]/40 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-md sm:left-8 sm:top-8">
                Jattari · Location
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .location-page {
          --location-teal: #0F5257;
          --location-green: #287A6D;
          --location-deep: #0B3D3E;
          --location-mint: #B9D8C8;
        }

        .location-hero {
          isolation: isolate;
        }

        .hero-grid,
        .location-grid {
          background-image:
            linear-gradient(rgba(185,216,200,.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,216,200,.09) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .hero-aura {
          animation: locationAura 8s ease-in-out infinite alternate;
        }

        .hero-aura-delay {
          animation-delay: -4s;
        }

        .location-title-accent {
          animation: locationTextReveal 1.1s cubic-bezier(.16,1,.3,1) both;
          animation-delay: 160ms;
        }

        .location-glitch {
          transition: text-shadow 250ms ease;
        }

        .location-glitch:hover {
          text-shadow: 2px 0 rgba(185,216,200,.3), -2px 0 rgba(40,122,109,.5);
        }

        .location-panel,
        .location-canvas,
        .location-card {
          transition:
            background 450ms cubic-bezier(.16,1,.3,1),
            border-color 450ms cubic-bezier(.16,1,.3,1),
            transform 450ms cubic-bezier(.16,1,.3,1);
        }

        .location-card:hover {
          transform: translateY(-3px);
          border-color: rgba(185,216,200,.22);
        }

        .live-ring {
          position: relative;
          flex: 0 0 auto;
          box-shadow: 0 0 12px rgba(185,216,200,.55);
        }

        .live-ring::after {
          position: absolute;
          inset: -5px;
          content: "";
          border: 1px solid rgba(185,216,200,.55);
          border-radius: 9999px;
          animation: locationPulse 2s ease-out infinite;
        }

        .network-node {
          outline: none;
          transition: opacity 300ms ease;
        }

        .network-node:focus-visible circle:first-child {
          stroke: white;
          stroke-width: .8;
        }

        .network-node:hover circle {
          filter: drop-shadow(0 0 4px rgba(185,216,200,.8));
        }

        .energy-line {
          animation: energyTravel 1.1s linear infinite;
        }

        .route-draw {
          stroke-dasharray: 6 4;
          animation:
            routeAppear 850ms cubic-bezier(.16,1,.3,1) both,
            energyTravel 1.2s linear infinite;
        }

        .node-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: locationPulse 2s ease-out infinite;
        }

        .center-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: centerPulse 2s ease-in-out infinite;
        }

        .image-hover {
          isolation: isolate;
        }

        .image-hover img {
          will-change: transform;
        }

        @keyframes locationAura {
          from {
            opacity: .45;
            transform: scale(.94);
          }
          to {
            opacity: .95;
            transform: scale(1.08);
          }
        }

        @keyframes locationTextReveal {
          from {
            opacity: 0;
            clip-path: inset(0 0 100% 0);
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
            transform: translateY(0);
          }
        }

        @keyframes locationPulse {
          0% {
            opacity: .9;
            transform: scale(.8);
          }
          100% {
            opacity: 0;
            transform: scale(1.8);
          }
        }

        @keyframes energyTravel {
          to {
            stroke-dashoffset: -36;
          }
        }

        @keyframes routeAppear {
          from {
            stroke-dashoffset: 1600;
            opacity: .25;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes centerPulse {
          0%, 100% {
            opacity: .7;
            transform: scale(.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @media (max-width: 640px) {
          .hero-grid,
          .location-grid {
            background-size: 28px 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .location-page *,
          .location-page *::before,
          .location-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Location;