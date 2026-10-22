import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Compass,
  MapPin,
  Maximize2,
  Moon,
  Sun,
  Waves,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import gallery2 from "../assets/gallery2.png";
import gallery4 from "../assets/gallery4.png";
import gallery6 from "../assets/gallery6.png";
import gallery8 from "../assets/gallery8.png";

const COLORS = {
  deep: "#0B3D3E",
  primary: "#0F5257",
  green: "#287A6D",
  mint: "#B9D8C8",
  offWhite: "#F7F8F5",
  lightGreen: "#EAF0EB",
};

const plans = [
  {
    id: "elite",
    name: "3 BHK Elite",
    type: "Thoughtfully composed",
    description:
      "A considered layout concept designed around everyday comfort, adaptable spaces and a natural flow between living areas.",
    rooms: ["Living area", "3 bedrooms", "Kitchen concept", "Bathrooms"],
    note: "Illustrative layout — dimensions to be confirmed",
  },
  {
    id: "grande",
    name: "3 BHK Grande",
    type: "Room to grow",
    description:
      "A more expansive layout concept for people who value a sense of openness, practical zoning and flexible living.",
    rooms: ["Generous living zone", "3 bedrooms", "Kitchen concept", "Bathrooms"],
    note: "Illustrative layout — dimensions to be confirmed",
  },
  {
    id: "villa",
    name: "4 BHK Sky Villa",
    type: "Elevated living concept",
    description:
      "A premium multi-room concept exploring privacy, spacious common areas and a more distinctive residential experience.",
    rooms: ["Living zone", "4 bedrooms", "Kitchen concept", "Private retreat"],
    note: "Illustrative layout — dimensions to be confirmed",
  },
];

const highlights = [
  {
    number: "01",
    title: "Project updates",
    description:
      "A dedicated place for verified development and construction updates.",
  },
  {
    number: "02",
    title: "Material & detail",
    description:
      "A closer look at textures, finishes and the visual language of the project.",
  },
  {
    number: "03",
    title: "A sense of place",
    description:
      "Explore the atmosphere of the destination through an adjustable day-to-night scene.",
  },
];

const locations = [
  {
    id: "connectivity",
    number: "01",
    title: "Regional connectivity",
    description:
      "Explore road connections and travel routes around Jattari with the project team.",
    x: 24,
    y: 36,
  },
  {
    id: "essentials",
    number: "02",
    title: "Everyday essentials",
    description:
      "Ask the team about nearby daily needs, facilities and local amenities.",
    x: 58,
    y: 52,
  },
  {
    id: "destination",
    number: "03",
    title: "Jattari destination",
    description:
      "Connect with our team for the project's precise location and site visit details.",
    x: 76,
    y: 27,
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] sm:text-xs ${
        light ? "text-[#B9D8C8]" : "text-[#287A6D]"
      }`}
    >
      <span className="h-px w-8 bg-current sm:w-10" />
      <span>{children}</span>
    </div>
  );
}

function SectionNumber({ children, light = false }) {
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.2em] ${
        light ? "text-white/40" : "text-[#0F5257]/45"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`mt-5 font-serif text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[#0B3D3E]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
            light ? "text-white/60" : "text-[#0B3D3E]/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Project() {
  const [activePlan, setActivePlan] = useState("elite");
  const [lighting, setLighting] = useState(52);
  const [activeLocation, setActiveLocation] = useState("destination");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Project information",
  });

  const [tilt, setTilt] = useState({ x: 0, y: 0, z: 0 });
  const viewportRef = useRef(null);
  const heroTitleRef = useRef(null);

  const selectedPlan =
    plans.find((plan) => plan.id === activePlan) || plans[0];

  const selectedLocation =
    locations.find((location) => location.id === activeLocation) ||
    locations[2];

  const isNight = lighting < 42;

  useEffect(() => {
    const node = heroTitleRef.current;
    if (!node) return;

    const words = node.querySelectorAll("[data-reveal-word]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    words.forEach((word, index) => {
      word.style.animationDelay = prefersReducedMotion
        ? "0ms"
        : `${index * 130}ms`;

      word.classList.add("project-word-reveal");
    });
  }, []);

  const handleViewportMove = (event) => {
    const node = viewportRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - y) * 7,
      y: (x - 0.5) * 10,
      z: (x - 0.5) * 2.5,
    });
  };

  const resetViewportTilt = () => setTilt({ x: 0, y: 0, z: 0 });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="project-page w-full overflow-clip bg-[#F7F8F5] text-[#0B3D3E]">
      <style>{`
        .project-word-reveal {
          display: inline-block;
          animation: projectWordReveal 850ms cubic-bezier(.2,.7,.2,1) both;
        }

        @keyframes projectWordReveal {
          from {
            opacity: 0;
            transform: translateY(110%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectSoftPulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(248, 87, 87, .5);
          }
          50% {
            opacity: .78;
            box-shadow: 0 0 0 9px rgba(248, 87, 87, 0);
          }
        }

        @keyframes projectRadar {
          0% {
            transform: scale(.65);
            opacity: .85;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }

        @keyframes projectPlanFlip {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateY(-13deg) translateY(10px);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateY(0deg) translateY(0);
          }
        }

        @keyframes projectLiquid {
          from {
            transform: translateX(-110%) skewX(-18deg);
          }
          to {
            transform: translateX(110%) skewX(-18deg);
          }
        }

        @keyframes projectFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .project-pulse {
          animation: projectSoftPulse 1.8s ease-out infinite;
        }

        .project-radar {
          animation: projectRadar 2.5s ease-out infinite;
        }

        .project-plan-flip {
          animation: projectPlanFlip 650ms cubic-bezier(.2,.7,.2,1) both;
          transform-origin: center;
        }

        .project-liquid-button {
          isolation: isolate;
          overflow: hidden;
        }

        .project-liquid-button::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          background: #B9D8C8;
          transform: translateX(-110%) skewX(-18deg);
          transition: transform 650ms cubic-bezier(.2,.7,.2,1);
        }

        .project-liquid-button:hover::before,
        .project-liquid-button:focus-visible::before {
          transform: translateX(0) skewX(0);
        }

        .project-map-pin {
          transform: translate(-50%, -50%) scale(0);
          animation: projectPinEnter 650ms cubic-bezier(.2,.8,.2,1) forwards;
        }

        @keyframes projectPinEnter {
          to {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .project-input-label {
          transition: all 220ms ease;
          pointer-events: none;
        }

        .project-field input:focus + .project-input-label,
        .project-field input:not(:placeholder-shown) + .project-input-label,
        .project-field select:focus + .project-input-label,
        .project-field select:valid + .project-input-label {
          top: 8px;
          font-size: 9px;
          letter-spacing: .14em;
          color: #B9D8C8;
        }

        .project-field input:focus,
        .project-field select:focus {
          border-color: #B9D8C8;
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-word-reveal,
          .project-pulse,
          .project-radar,
          .project-plan-flip,
          .project-map-pin {
            animation: none !important;
          }

          .project-liquid-button::before {
            transition: none;
          }
        }
      `}</style>

      {/* =========================================================
          01. SCREEN-SPLIT HERO — ENTRY ZONE
      ========================================================= */}
      <section className="relative bg-[#0B3D3E] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#B9D8C8]/10 sm:h-[600px] sm:w-[600px]" />
          <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-[#B9D8C8]/10 sm:h-[480px] sm:w-[480px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(40,122,109,0.25),transparent_40%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[auto] max-w-[1600px] grid-cols-1 lg:min-h-[820px] lg:grid-cols-2">
          {/* LEFT: sticky story */}
          <div className="relative z-10 flex items-center px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:sticky lg:top-0 lg:h-screen lg:min-h-[720px] lg:px-12 lg:py-20 xl:px-20">
            <div className="w-full max-w-2xl">
            

              <div className="mt-8 overflow-hidden" ref={heroTitleRef}>
                <h1 className="font-serif text-[clamp(3.4rem,8.5vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                  <span className="block overflow-hidden pb-2">
                    <span data-reveal-word>Skyline</span>
                  </span>
                  <span className="block overflow-hidden pb-3 text-[#B9D8C8]">
                    <span data-reveal-word>Oasis</span>
                    <span className="align-top font-sans text-xl tracking-normal text-white/40 sm:text-3xl">
                      ®
                    </span>
                  </span>
                </h1>
              </div>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/65 sm:mt-9 sm:text-base sm:leading-8">
                A considered vision for space, connection and possibility in
                Jattari. Explore the project's character, its planned
                experience and the details that matter to you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#key-highlights"
                  className="group inline-flex min-h-12 items-center justify-between gap-5 rounded-full bg-[#B9D8C8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B3D3E] transition duration-300 hover:-translate-y-1 hover:bg-white sm:justify-center sm:px-6"
                >
                  Discover the project
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-[#B9D8C8]/60 hover:bg-white/5 sm:px-6"
                >
                  Speak to our team
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/40 sm:mt-14">
                <span className="h-px w-8 bg-[#B9D8C8]/50" />
                Jattari · Uttar Pradesh
              </div>
            </div>
          </div>

          {/* RIGHT: cinematic parallax viewport */}
          <div className="relative min-h-[440px] overflow-hidden px-4 pb-6 sm:min-h-[560px] sm:px-8 sm:pb-10 lg:min-h-[820px] lg:px-5 lg:py-5 xl:px-8 xl:py-8">
            <div
              ref={viewportRef}
              onMouseMove={handleViewportMove}
              onMouseLeave={resetViewportTilt}
              onBlur={resetViewportTilt}
              className="group relative h-full min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F5257] sm:min-h-[520px] sm:rounded-[2rem] lg:min-h-0"
              style={{ perspective: "1400px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.z}deg) scale(1.045)`,
                  transition: "transform 240ms ease-out",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={gallery6}
                  alt="An atmospheric view representing the Jattari project"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/95 via-[#0B3D3E]/10 to-[#0B3D3E]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D3E]/25 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#0B3D3E]/50 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="h-2 w-2 rounded-full bg-[#B9D8C8]" />
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/80 sm:text-[10px]">
                  Project visual
                </span>
              </div>

              <div className="absolute right-5 top-5 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0B3D3E]/30 text-white/70 backdrop-blur-md sm:flex sm:right-7 sm:top-7">
                <Maximize2 size={16} />
              </div>

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-9 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">
                <SectionNumber light>01 / THE VISION</SectionNumber>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  A new perspective on space.
                </h2>

                <p className="mt-4 max-w-md text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                  Discover a place shaped around the way you imagine the
                  future.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-[9px] uppercase tracking-[0.17em] text-white/50 sm:text-[10px]">
                    Move your cursor to explore
                  </span>
                  <Compass size={18} className="text-[#B9D8C8]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION — SPATIAL STORYTELLING
      ========================================================= */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full border border-[#0F5257]/10" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <Eyebrow>The idea behind the place</Eyebrow>
            <SectionNumber>02 / THE NARRATIVE</SectionNumber>
          </div>

          <div>
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              More than a location.
              <span className="block text-[#287A6D]">
                A space for what comes next.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#0B3D3E]/65 sm:text-base sm:leading-8">
              Every meaningful destination begins with a vision. This project
              page brings that vision to life through imagery, design
              exploration and clear ways to enquire about Anugrah Homes
              Jattari.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group border-t border-[#0F5257]/20 pt-5 transition-colors duration-300 hover:border-[#287A6D]"
                >
                  <span className="text-[10px] tracking-[0.18em] text-[#287A6D]">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#0B3D3E]/55">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02. CINEMATIC BENTO SHOWCASE — KEY HIGHLIGHTS
      ========================================================= */}
      <section
        id="key-highlights"
        className="bg-[#0B3D3E] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Key highlights"
              title={
                <>
                  Details worth
                  <span className="block text-[#B9D8C8]">looking closer at.</span>
                </>
              }
              description="Explore the project through its progress information, material-inspired imagery and changing ambient light."
              light
            />

            <SectionNumber light>03 / THE EXPERIENCE</SectionNumber>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {/* CARD 1 — CONSTRUCTION TRACKER */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F5257] p-6 sm:min-h-[390px] sm:rounded-[2rem] sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full border border-[#B9D8C8]/10 transition-transform duration-700 group-hover:scale-110" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <SectionNumber light>01 / DEVELOPMENT</SectionNumber>
                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl">
                    Construction tracker
                  </h3>
                </div>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-2">
                  <span className="project-pulse h-2 w-2 rounded-full bg-[#F85757]" />
                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/65">
                    Updates
                  </span>
                </span>
              </div>

              <p className="relative mt-4 max-w-md text-sm leading-7 text-white/60">
                A dedicated space for verified site progress, construction
                milestones and project announcements.
              </p>

              <div className="relative mt-9 border-t border-white/15 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                      Current project status
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#B9D8C8]">
                      Status to be confirmed
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9D8C8]/20 text-[#B9D8C8]">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <p className="mt-4 text-[10px] leading-5 text-white/40">
                  Verified progress data can be connected here when available.
                  No construction percentage is assumed.
                </p>
              </div>
            </article>

            {/* CARD 2 — MATERIAL TEXTURE */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F5257] sm:min-h-[390px] sm:rounded-[2rem]">
              <img
                src={gallery2}
                alt="Close-up visual representing the project's material and design language"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-125"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E] via-[#0B3D3E]/35 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#0B3D3E]/45 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-md sm:left-8 sm:top-8">
                Material study
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <SectionNumber light>02 / TEXTURE & DETAIL</SectionNumber>
                <h3 className="mt-3 max-w-sm font-serif text-2xl leading-tight sm:text-3xl">
                  Design is felt in the details.
                </h3>
                <p className="mt-3 max-w-md text-xs leading-6 text-white/65 sm:text-sm">
                  Hover over the image to explore the visual texture.
                </p>
              </div>

              <div className="pointer-events-none absolute inset-4 rounded-[1.1rem] border border-white/15 transition-all duration-700 group-hover:inset-6" />
            </article>

            {/* CARD 3 — DAY / NIGHT SIMULATOR */}
            <article className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F5257] sm:min-h-[510px] sm:rounded-[2rem]">
              <div className="absolute inset-0">
                <img
                  src={gallery4}
                  alt="Daytime scene representing the project environment"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div
                  className="absolute inset-0 bg-[#061B35] transition-opacity duration-300"
                  style={{ opacity: 0.08 + (lighting / 100) * 0.82 }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E] via-[#0B3D3E]/20 to-transparent transition-opacity duration-300"
                  style={{ opacity: 0.55 + (lighting / 100) * 0.3 }}
                />

                <div
                  className="absolute inset-0 bg-[#F3C58A] mix-blend-soft-light transition-opacity duration-300"
                  style={{ opacity: (100 - lighting) / 220 }}
                />
              </div>

              <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:min-h-[510px] sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionNumber light>03 / AMBIENT LIGHT</SectionNumber>
                    <h3 className="mt-4 max-w-lg font-serif text-3xl leading-[1.05] sm:text-4xl">
                      From first light
                      <span className="block text-[#B9D8C8]">
                        to quiet evenings.
                      </span>
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0B3D3E]/30 backdrop-blur-md sm:flex">
                    {isNight ? <Moon size={20} /> : <Sun size={20} />}
                  </div>
                </div>

                <div className="mt-10 rounded-[1.25rem] border border-white/15 bg-[#0B3D3E]/75 p-5 backdrop-blur-xl sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {isNight ? (
                        <Moon size={16} className="text-[#B9D8C8]" />
                      ) : (
                        <Sun size={16} className="text-[#B9D8C8]" />
                      )}
                      <span className="text-xs font-medium text-white">
                        Ambient light
                      </span>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#B9D8C8]">
                      {isNight ? "Evening mood" : "Daylight mood"}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={lighting}
                    onChange={(event) =>
                      setLighting(Number(event.target.value))
                    }
                    aria-label="Adjust ambient lighting from day to night"
                    className="mt-6 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-[#B9D8C8]"
                  />

                  <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-white/55">
                    <span className="flex items-center gap-2">
                      <Sun size={13} />
                      Day
                    </span>
                    <span>{lighting}%</span>
                    <span className="flex items-center gap-2">
                      <Moon size={13} />
                      Night
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* =========================================================
          04. MICRO-LOCATION INTELLIGENCE — INTERACTIVE MAP
      ========================================================= */}
      <section
        id="location"
        className="relative overflow-hidden bg-[white] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="Micro-location intelligence"
              title={
                <>
                  A closer look at
                  <span className="block text-[#B9D8C8]">your surroundings.</span>
                </>
              }
              description="Explore the location themes and contact our team for confirmed routes, nearby destinations and site directions."
              light
            />

            <div className="flex items-center gap-3 text-xs leading-6 text-white/50 lg:ml-auto">
              <MapPin size={18} className="shrink-0 text-[#B9D8C8]" />
              <span>Jattari · Aligarh region · Uttar Pradesh</span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Stylised interactive map */}
            <div className="relative min-h-[410px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102F31] sm:min-h-[520px] sm:rounded-[2rem]">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(185,216,200,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(185,216,200,.13) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <svg
                viewBox="0 0 800 560"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <g
                  fill="none"
                  stroke="#B9D8C8"
                  strokeWidth="2"
                  strokeOpacity=".2"
                >
                  <path d="M-30 120 C130 190 160 70 310 145 S540 200 830 80" />
                  <path d="M-30 350 C120 280 220 420 370 330 S590 290 830 400" />
                  <path d="M110 -30 C190 110 120 250 240 590" />
                  <path d="M440 -30 C360 140 520 280 430 590" />
                  <path d="M690 -30 C600 140 720 320 650 590" />
                  <path d="M-30 475 C180 420 310 490 480 440 S700 470 830 510" />
                </g>

                <g
                  fill="none"
                  stroke="#287A6D"
                  strokeWidth="10"
                  strokeOpacity=".8"
                >
                  <path d="M-40 255 C110 210 230 270 330 245 S570 150 840 245" />
                  <path d="M320 -40 C280 90 360 200 440 290 S520 440 600 600" />
                </g>

                <g
                  fill="none"
                  stroke="#B9D8C8"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  strokeOpacity=".6"
                >
                  <path d="M180 180 L460 290 L610 150" />
                </g>
              </svg>

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#0B3D3E]/80 px-4 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#B9D8C8]">
                  Location explorer
                </span>
              </div>

              {locations.map((location, index) => {
                const isActive = activeLocation === location.id;

                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setActiveLocation(location.id)}
                    aria-label={`Explore ${location.title}`}
                    aria-pressed={isActive}
                    className="project-map-pin absolute z-10 flex flex-col items-center"
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`,
                      animationDelay: `${index * 180}ms`,
                    }}
                  >
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#B9D8C8]/50 bg-[#0B3D3E]/90 text-[#B9D8C8] shadow-[0_0_25px_rgba(185,216,200,.12)] transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12">
                      <span
                        className={`project-radar absolute inset-0 rounded-full border border-[#B9D8C8]/60 ${
                          isActive ? "opacity-100" : "opacity-50"
                        }`}
                      />
                      <MapPin size={17} />
                    </span>

                    <span
                      className={`mt-2 max-w-[115px] rounded-full px-3 py-1.5 text-center text-[8px] uppercase tracking-[0.1em] backdrop-blur-md transition-colors sm:text-[9px] ${
                        isActive
                          ? "bg-[#B9D8C8] text-[#0B3D3E]"
                          : "border border-white/15 bg-[#0B3D3E]/80 text-white/75"
                      }`}
                    >
                      {location.title}
                    </span>
                  </button>
                );
              })}

              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/40 sm:bottom-7 sm:left-7">
                <Waves size={13} />
                <span>Stylised location illustration</span>
              </div>
            </div>

            {/* Sticky detail card */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div
                key={selectedLocation.id}
                className="project-plan-flip rounded-[1.5rem] border border-white/10 bg-[#0F5257] p-6 sm:rounded-[2rem] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <SectionNumber light>
                    {selectedLocation.number} / LOCATION DETAIL
                  </SectionNumber>
                  <Compass size={20} className="text-[#B9D8C8]" />
                </div>

                <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                  {selectedLocation.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  {selectedLocation.description}
                </p>

                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-white/40">
                    Need precise directions?
                  </p>

                  <p className="mt-3 text-xs leading-6 text-white/60">
                    Contact the project team for the confirmed site address,
                    nearby landmarks and route guidance.
                  </p>

                  <Link
                    to="/contact"
                    className="group mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full border border-[#B9D8C8]/35 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#B9D8C8] transition-all duration-300 hover:bg-[#B9D8C8] hover:text-[#0B3D3E]"
                  >
                    Request directions
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/35">
                This graphic is illustrative and is not a navigable or
                geographically accurate map. Confirm all location details
                before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT IMAGE STORY
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="group relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#0B3D3E] sm:min-h-[540px] sm:rounded-[2rem]">
            <img
              src={gallery8}
              alt="Visual representing the project surroundings"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9">
              <SectionNumber light>THE SURROUNDINGS</SectionNumber>
              <h3 className="mt-3 max-w-sm font-serif text-3xl text-white sm:text-4xl">
                A sense of place.
              </h3>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="group relative min-h-[250px] overflow-hidden rounded-[1.5rem] bg-[#0B3D3E] sm:min-h-[260px] sm:rounded-[2rem]">
              <img
                src={gallery4}
                alt="Atmospheric project imagery"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/80 via-[#0B3D3E]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <SectionNumber light>THE EXPERIENCE</SectionNumber>
                <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                  Space to imagine more.
                </h3>
              </div>
            </div>

            <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#EAF0EB] p-6 sm:min-h-[260px] sm:rounded-[2rem] sm:p-9">
              <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full border border-[#0F5257]/15" />
              <Eyebrow>Explore further</Eyebrow>

              <div className="relative flex items-end justify-between gap-4">
                <h3 className="max-w-sm font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                  Your next chapter starts with a conversation.
                </h3>
                <ArrowUpRight
                  size={24}
                  className="mb-1 shrink-0 text-[#287A6D]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05. TRUST METRICS & ACTION FOOTER
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0F5257] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <Eyebrow light>Begin the conversation</Eyebrow>

              <h2 className="mt-7 max-w-2xl font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                The right space
                <span className="block text-[#B9D8C8]">
                  begins with a question.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Tell us what you would like to know. Our team can help you
                explore project details, available configurations and a
                potential site visit.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:mt-16 sm:grid-cols-3">
              <div>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Project
                </span>
                <p className="mt-2 text-sm font-medium">Anugrah Homes</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Destination
                </span>
                <p className="mt-2 text-sm font-medium">Jattari</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Next step
                </span>
                <p className="mt-2 text-sm font-medium">Enquire with us</p>
              </div>
            </div>
          </div>

          {/* Lead capture form */}
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0B3D3E]/70 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[390px] flex-col items-start justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B9D8C8]/30 bg-[#B9D8C8]/10 text-[#B9D8C8]">
                  <CheckCircle2 size={26} />
                </span>

                <h3 className="mt-7 font-serif text-3xl leading-tight sm:text-4xl">
                  Thank you for your interest.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Your details have passed the form's front-end validation.
                  Connect this form to your lead API to deliver the enquiry
                  to your team.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#B9D8C8] transition hover:bg-white/5"
                >
                  Submit another enquiry
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <>
                <SectionNumber light>ENQUIRY FORM / 01</SectionNumber>

                <h3 className="mt-4 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
                  Let's connect.
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/50 sm:text-sm">
                  Share your details and area of interest.
                </p>

                <form
                  className="mt-8 space-y-5"
                  onSubmit={handleFormSubmit}
                >
                  <div className="project-field relative">
                    <input
                      id="project-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder=" "
                      autoComplete="name"
                      required
                      maxLength={100}
                      className="peer h-[62px] w-full rounded-xl border border-white/20 bg-white/[0.025] px-4 pb-2 pt-6 text-sm text-white transition-colors"
                    />
                    <label
                      htmlFor="project-name"
                      className="project-input-label absolute left-4 top-[23px] text-xs text-white/50"
                    >
                      Full name
                    </label>
                  </div>

                  <div className="project-field relative">
                    <input
                      id="project-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder=" "
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+() -]{8,20}"
                      title="Enter a valid phone number using 8 to 20 digits or phone characters."
                      required
                      className="peer h-[62px] w-full rounded-xl border border-white/20 bg-white/[0.025] px-4 pb-2 pt-6 text-sm text-white transition-colors"
                    />
                    <label
                      htmlFor="project-phone"
                      className="project-input-label absolute left-4 top-[23px] text-xs text-white/50"
                    >
                      Phone number
                    </label>
                  </div>

                  <div className="project-field relative">
                    <select
                      id="project-interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleFormChange}
                      required
                      className="peer h-[62px] w-full appearance-none rounded-xl border border-white/20 bg-[#0B3D3E] px-4 pb-2 pt-6 text-sm text-white transition-colors"
                    >
                      <option>Project information</option>
                      <option>Configuration details</option>
                      <option>Pricing and availability</option>
                      <option>Site visit</option>
                      <option>Location and connectivity</option>
                    </select>
                    <label
                      htmlFor="project-interest"
                      className="project-input-label absolute left-4 top-[8px] text-[9px] uppercase tracking-[0.14em] text-[#B9D8C8]"
                    >
                      I'm interested in
                    </label>
                    <span className="pointer-events-none absolute right-4 top-6 text-white/50">
                      <ArrowDownRight size={15} />
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="project-liquid-button relative z-0 mt-2 flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[#B9D8C8] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B3D3E] transition-colors duration-300 hover:text-[#0B3D3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9D8C8]"
                  >
                    <span>Send enquiry</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3D3E]/10">
                      <ArrowUpRight size={17} />
                    </span>
                  </button>

                  <p className="text-[10px] leading-5 text-white/35">
                    Submitting this form currently displays a local
                    confirmation only. Connect a secure backend before
                    collecting or processing real enquiries.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL FOOTER STRIP
      ========================================================= */}
      <footer className="bg-[#0B3D3E] px-5 py-6 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-serif text-lg tracking-[-0.025em] text-[#B9D8C8] transition hover:text-white"
          >
            Anugrah Homes
          </Link>

          <p className="text-[9px] uppercase tracking-[0.14em] text-white/40 sm:text-[10px]">
            Jattari · Uttar Pradesh
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/65 transition hover:text-[#B9D8C8]"
          >
            Contact the team
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default Project;
