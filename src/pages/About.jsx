import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  MapPin,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import gallery1 from "../assets/gallery.png";
import gallery3 from "../assets/gallery3.png";
import gallery7 from "../assets/gallery7.png";

function AboutButton({ children, to, secondary = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex w-full items-center justify-between gap-3 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:justify-center sm:px-6 ${
        secondary
          ? "border border-white/25 bg-white/5 text-white hover:bg-white hover:text-[#0F5257]"
          : "bg-gradient-to-r from-[#0F5257] via-[#287A6D] to-[#0B3D3E] text-white shadow-[0_12px_30px_rgba(15,82,87,0.18)] hover:shadow-[0_18px_35px_rgba(15,82,87,0.25)]"
      }`}
    >
      <span>{children}</span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45 group-hover:bg-white/10">
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${
        light ? "text-[#B9D8C8]" : "text-[#0F5257]"
      }`}
    >
      <span
        className={`h-px w-7 shrink-0 ${
          light ? "bg-[#B9D8C8]" : "bg-[#0F5257]"
        }`}
      />
      {children}
    </div>
  );
}

function About() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [timelineProgress, setTimelineProgress] = useState(0);

  const statsRef = useRef(null);
  const timelineRef = useRef(null);

  const principles = [
    {
      number: "01",
      icon: Compass,
      title: "Thoughtful Planning",
      text: "Every element begins with the idea of creating spaces that feel considered, practical and connected to everyday life.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Built on Trust",
      text: "We believe a property journey should feel transparent, comfortable and straightforward from the first conversation.",
    },
    {
      number: "03",
      icon: Heart,
      title: "Made for People",
      text: "The focus is not simply on plots, but on creating an environment where people can imagine their own future.",
    },
  ];

  const storyItems = [
    {
      number: "01",
      eyebrow: "The vision",
      title: "A place shaped around possibility.",
      description:
        "Jattari is envisioned as a destination where land becomes the beginning of something personal — a future home, a meaningful investment or a space to call your own.",
      image: gallery7,
      imageAlt: "Anugrah Homes Jattari development",
    },
    {
      number: "02",
      eyebrow: "The approach",
      title: "Thoughtful spaces. Clear intentions.",
      description:
        "Our approach focuses on the relationship between planned spaces and the people who will experience them. Clarity, accessibility and thoughtful planning guide the journey.",
      image: gallery1,
      imageAlt: "Jattari property surroundings",
    },
    {
      number: "03",
      eyebrow: "The purpose",
      title: "Room to imagine your future.",
      description:
        "A plot is more than a piece of land. It is an opportunity to imagine what comes next and create a place that reflects your own plans, priorities and aspirations.",
      image: gallery3,
      imageAlt: "Open landscape around Jattari",
    },
  ];

  const timelineItems = [
    {
      number: "01",
      title: "Start with the location",
      text: "Jattari provides the setting for a destination shaped around accessibility, space and future possibilities.",
      icon: MapPin,
    },
    {
      number: "02",
      title: "Think about the people",
      text: "A property journey should be clear and approachable. The experience matters just as much as the place itself.",
      icon: Heart,
    },
    {
      number: "03",
      title: "Keep the vision thoughtful",
      text: "Planning starts with the intention of making spaces practical, meaningful and connected to everyday life.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Make room for possibilities",
      text: "A plot can become the starting point for a future home, a personal goal or a new chapter.",
      icon: Sparkles,
    },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroComplete(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersStarted) return undefined;

    const targets = [3, 1, 3];
    const duration = 1000;
    const startTime = performance.now();
    let frameId;

    const animateCounters = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((target) => Math.round(target * eased)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateCounters);
      }
    };

    frameId = window.requestAnimationFrame(animateCounters);
    return () => window.cancelAnimationFrame(frameId);
  }, [countersStarted]);

  useEffect(() => {
    const updateTimeline = () => {
      const element = timelineRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height + viewportHeight * 0.4;
      const travelled = viewportHeight * 0.65 - rect.top;

      setTimelineProgress(Math.max(0, Math.min(1, travelled / total)));
    };

    updateTimeline();

    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -4;
    const rotateY = (x / rect.width - 0.5) * 4;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <main className="anugrah-about w-full overflow-hidden bg-[#F7F8F5] text-[#17473F]">
      <style>{`
        .anugrah-about {
          --ah-primary: #0F5257;
          --ah-emerald: #287A6D;
          --ah-forest: #0B3D3E;
          --ah-mint: #B9D8C8;
          --ah-paper: #F7F8F5;
        }

        .anugrah-about ::selection {
          background: #B9D8C8;
          color: #0B3D3E;
        }

        .anugrah-about .blueprint-grid {
          background-image:
            linear-gradient(rgba(185,216,200,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,216,200,.08) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .anugrah-about .floating-orbit {
          animation: ah-orbit 28s linear infinite;
          transform-origin: center;
        }

        .anugrah-about .floating-slow {
          animation: ah-float 7s ease-in-out infinite;
        }

        .anugrah-about .about-image img {
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .anugrah-about .about-image:hover img {
          transform: scale(1.035);
        }

        .anugrah-about .pillar-card {
          transform: perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          transition: transform .25s ease, background .4s ease, border-color .4s ease, box-shadow .4s ease;
          transform-style: preserve-3d;
        }

        .anugrah-about .pillar-card:hover {
          background: linear-gradient(145deg, #0F5257, #287A6D 65%, #0B3D3E);
          border-color: rgba(185,216,200,.5);
          box-shadow: 0 20px 50px rgba(15,82,87,.18);
          color: white;
        }

        .anugrah-about .pillar-card:hover .pillar-description {
          color: rgba(255,255,255,.78);
        }

        .anugrah-about .pillar-card:hover .pillar-icon {
          background: rgba(255,255,255,.12);
          color: #B9D8C8;
          transform: translateY(-3px) rotate(-6deg);
        }

        .anugrah-about .pillar-icon {
          transition: transform .35s ease, background .35s ease, color .35s ease;
        }

        .anugrah-about .story-image {
          transition: opacity .4s ease, transform .6s cubic-bezier(.2,.7,.2,1);
        }

        .anugrah-about .reveal-cover {
          position: absolute;
          inset: 0;
          z-index: 20;
          background: linear-gradient(135deg, #0F5257, #287A6D, #0B3D3E);
          transition: transform .85s cubic-bezier(.77,0,.18,1);
          pointer-events: none;
        }

        .anugrah-about .reveal-cover.left {
          clip-path: inset(0 50% 0 0);
        }

        .anugrah-about .reveal-cover.right {
          clip-path: inset(0 0 0 50%);
        }

        .anugrah-about .reveal-cover.left.open {
          transform: translateX(-105%);
        }

        .anugrah-about .reveal-cover.right.open {
          transform: translateX(105%);
        }

        .anugrah-about .hero-copy {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: none;
}

.anugrah-about .hero-copy.visible {
  opacity: 1;
  visibility: visible;
  transform: none;
}

        .anugrah-about .hero-visual {
          opacity: 0;
          transform: scale(1.025);
          transition: opacity .7s ease .1s, transform 1s cubic-bezier(.2,.7,.2,1) .1s;
        }

        .anugrah-about .hero-visual.visible {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes ah-orbit {
          to { transform: rotate(360deg); }
        }

        @keyframes ah-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes ah-pulse {
          0%, 100% { opacity: .35; transform: scale(.95); }
          50% { opacity: .85; transform: scale(1.05); }
        }

        .anugrah-about .blueprint-dot {
          animation: ah-pulse 4s ease-in-out infinite;
        }

        @media (max-width: 1023px) {
          .anugrah-about .reveal-cover {
            display: none;
          }

          .anugrah-about .hero-copy,
          .anugrah-about .hero-visual {
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .anugrah-about *,
          .anugrah-about *::before,
          .anugrah-about *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B3D3E] via-[#0F5257] to-[#287A6D] text-white">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#B9D8C8]/15 sm:h-[560px] sm:w-[560px]" />
        <div className="floating-orbit pointer-events-none absolute right-[8%] top-[10%] hidden h-64 w-64 rounded-full border border-dashed border-[#B9D8C8]/20 lg:block" />
        <div className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#B9D8C8] shadow-[0_0_20px_#B9D8C8]" />

        <div className="relative mx-auto max-w-[1500px] px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          {/* Updated: balanced columns and smaller gap to use available width */}
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
            {/* HERO IMAGE */}
            <div className="relative min-w-0">
              <div
                className={`hero-visual about-image group relative h-[350px] overflow-hidden rounded-[1.25rem] bg-[#0B3D3E] sm:h-[460px] sm:rounded-[1.75rem] lg:h-[590px] xl:h-[620px] ${
                  introComplete ? "visible" : ""
                }`}
              >
                <img
                  src={gallery7}
                  alt="Anugrah Homes Jattari development"
                  className="absolute inset-0 block h-full w-full object-cover object-center"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/85 via-[#0B3D3E]/10 to-[#0B3D3E]/10" />
                <div className="absolute inset-0 rounded-[inherit] border border-white/10" />

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0F5257]/40 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/90 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4">
                  Jattari · The Beginning
                </div>

                <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="min-w-0">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#B9D8C8]">
                      Thoughtfully imagined
                    </p>
                    <p className="max-w-xs break-words font-serif text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                      Space to shape your future.
                    </p>
                  </div>
                  <div className="floating-slow hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 text-[#B9D8C8] sm:flex">
                    <ArrowDownRight size={22} />
                  </div>
                </div>
              </div>

              <div className={`reveal-cover left rounded-[1.25rem] sm:rounded-[1.75rem] ${introComplete ? "open" : ""}`} />
              <div className={`reveal-cover right rounded-[1.25rem] sm:rounded-[1.75rem] ${introComplete ? "open" : ""}`} />
            </div>

            {/* HERO CONTENT: no fixed width; text wraps inside its own column */}
            <div className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-5 py-7 sm:rounded-[1.75rem] sm:px-8 sm:py-9 lg:min-h-[590px] lg:px-8 lg:py-8 xl:min-h-[620px] xl:px-10">
              <div className="floating-orbit pointer-events-none absolute right-8 top-20 hidden h-32 w-32 rounded-full border border-dashed border-[#B9D8C8]/20 lg:block" />

<div className="hero-copy relative z-10 w-full min-w-0 visible">                <Eyebrow light>About Anugrah Homes</Eyebrow>

                <p className="mb-3 break-words text-[10px] uppercase tracking-[0.13em] text-white/60 sm:text-xs">
                  Jattari · Aligarh · Uttar Pradesh
                </p>

                <h1 className="w-full max-w-full break-words [overflow-wrap:anywhere] font-serif text-[clamp(2rem,3.1vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                  Architecting Dreams,{" "}
                  <span className="text-[#B9D8C8]">
                    Delivering Reality.
                  </span>
                </h1>

                <p className="mt-5 w-full max-w-full break-words text-sm leading-7 text-white/70 sm:text-base sm:leading-7">
                  A thoughtfully imagined plotted destination shaped around
                  space, accessibility and the possibility of creating
                  something that feels truly your own.
                </p>

                <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                  <AboutButton to="/project">Explore the Project</AboutButton>
                  <AboutButton to="/contact" secondary>
                    Talk to Our Team
                  </AboutButton>
                </div>

                <div className="mt-7 flex min-w-0 items-start gap-3 border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.12em] text-white/55 sm:mt-8 sm:items-center sm:text-[10px]">
                  <span className="mt-1 h-px w-7 shrink-0 bg-[#B9D8C8] sm:mt-0" />
                  <span className="min-w-0 break-words">
                    Thoughtful spaces. Meaningful possibilities.
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#B9D8C8]/70 lg:flex">
                <span className="blueprint-dot h-1.5 w-1.5 rounded-full bg-[#B9D8C8]" />
                The Jattari vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full border border-[#0F5257]/10" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.55fr_1.45fr] lg:gap-14">
            <ScrollReveal direction="left">
              <div className="lg:pt-1">
                <Eyebrow>The Story</Eyebrow>
                <p className="hidden max-w-[210px] text-sm leading-6 text-[#17473F]/55 lg:block">
                  A place shaped around possibility, people and everyday life.
                </p>
                <div className="floating-slow mt-6 hidden h-16 w-16 items-center justify-center rounded-full border border-[#0F5257]/20 text-[#0F5257] lg:flex">
                  <Building2 size={24} strokeWidth={1.3} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="min-w-0">
                <h2 className="max-w-5xl break-words font-serif text-[clamp(2.2rem,4.8vw,4.5rem)] leading-[1.05] tracking-[-0.045em]">
                  A destination is more than coordinates on a map.
                </h2>
                <div className="mt-5 grid gap-5 text-sm leading-7 text-[#17473F]/70 sm:mt-6 sm:grid-cols-2 sm:gap-7">
                  <p>
                    Jattari is envisioned as a place where land becomes the
                    beginning of something personal — a future home, a meaningful
                    investment or simply a space to call your own.
                  </p>
                  <p>
                    Our approach focuses on creating a more thoughtful
                    relationship between planned spaces and the people who will
                    eventually experience them.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INTERACTIVE STORY */}
      <section className="bg-[#EAF0EB] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 max-w-3xl sm:mb-9">
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="font-serif text-[clamp(2.3rem,4.8vw,4.5rem)] leading-[1.05] tracking-[-0.045em]">
              From a vision to{" "}
              <span className="text-[#0F5257]">a place to belong.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div className="h-fit lg:sticky lg:top-24">
              <div className="about-image group relative h-[300px] overflow-hidden rounded-[1.25rem] bg-[#0B3D3E] sm:h-[420px] sm:rounded-[1.75rem] lg:h-[500px]">
                {storyItems.map((item, index) => (
                  <img
                    key={item.number}
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className={`story-image absolute inset-0 h-full w-full object-cover ${
                      activeStory === index
                        ? "scale-100 opacity-100"
                        : "scale-[1.03] opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#0F5257]/40 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                  {storyItems[activeStory].eyebrow}
                </div>
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#B9D8C8]">
                    Anugrah Homes · Jattari
                  </p>
                  <p className="mt-2 max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
                    {storyItems[activeStory].title}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                {storyItems.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveStory(index)}
                    aria-label={`Show story ${index + 1}`}
                    aria-pressed={activeStory === index}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      activeStory === index
                        ? "bg-[#0F5257]"
                        : "bg-[#0F5257]/15 hover:bg-[#0F5257]/35"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {storyItems.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  onMouseEnter={() => setActiveStory(index)}
                  aria-pressed={activeStory === index}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                    activeStory === index
                      ? "border-[#0F5257]/25 bg-white shadow-[0_12px_35px_rgba(15,82,87,.07)]"
                      : "border-[#0F5257]/10 bg-white/45 hover:border-[#0F5257]/25 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0F5257]">
                        {item.number} — {item.eyebrow}
                      </p>
                      <h3 className="mt-2 break-words font-serif text-xl leading-tight tracking-[-0.025em] sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        activeStory === index
                          ? "rotate-45 border-[#0F5257] bg-[#0F5257] text-white"
                          : "border-[#0F5257]/20 text-[#0F5257]"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      activeStory === index
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-sm leading-7 text-[#17473F]/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>Our Approach</Eyebrow>
                <h2 className="font-serif text-[clamp(2.3rem,4.8vw,4.5rem)] leading-[1.05] tracking-[-0.045em]">
                  The thinking behind{" "}
                  <span className="text-[#0F5257]">the place.</span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#17473F]/70">
                  Every meaningful destination starts with a clear idea. These
                  are the principles that guide the way we present and approach
                  Anugrah Homes Jattari.
                </p>
              </div>
            </ScrollReveal>

            <div ref={timelineRef} className="relative">
              <div className="absolute bottom-5 left-4 top-5 w-px bg-[#0F5257]/10 sm:left-5" />
              <div
                className="absolute left-4 top-5 w-px bg-gradient-to-b from-[#0F5257] via-[#287A6D] to-[#B9D8C8] sm:left-5"
                style={{ height: `${Math.min(100, timelineProgress * 100)}%` }}
              />

              {timelineItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.number}
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={index * 60}
                    duration={700}
                  >
                    <article className="relative pb-5 pl-11 sm:pb-7 sm:pl-14">
                      <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#0F5257]/20 bg-[#F7F8F5] text-[#0F5257] sm:h-10 sm:w-10">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      <div className="rounded-2xl border border-[#0F5257]/10 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F5257]/25 hover:shadow-[0_12px_30px_rgba(15,82,87,.06)] sm:p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0F5257]">
                          Principle {item.number}
                        </p>
                        <h3 className="mt-2 font-serif text-xl leading-tight tracking-[-0.025em] sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-[#17473F]/70">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F5257] via-[#287A6D] to-[#0B3D3E] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#B9D8C8]/15" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-7 grid gap-4 lg:mb-9 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <Eyebrow light>Our Core Pillars</Eyebrow>
                <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,4.8vw,4.7rem)] leading-[1.05] tracking-[-0.045em]">
                  What we stand{" "}
                  <span className="text-[#B9D8C8]">for.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/75 lg:ml-auto">
                Trust, thoughtful ideas and a people-first mindset form the
                foundation of the Anugrah Homes approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  direction="up"
                  delay={index * 80}
                  duration={750}
                >
                  <article
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                    className="pillar-card group h-full rounded-2xl border border-white/15 bg-white/[0.045] p-5 sm:min-h-[290px] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs tracking-[0.16em] text-white/50">
                        {item.number}
                      </span>
                      <span className="pillar-icon flex h-11 w-11 items-center justify-center rounded-full border border-[#B9D8C8]/25 bg-[#B9D8C8]/10 text-[#B9D8C8]">
                        <Icon size={21} strokeWidth={1.4} />
                      </span>
                    </div>
                    <h3 className="mt-8 font-serif text-2xl leading-tight tracking-[-0.03em] sm:mt-10 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="pillar-description mt-3 text-sm leading-7 text-white/70">
                      {item.text}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B9D8C8]">
                      <span className="h-px w-6 bg-[#B9D8C8]/60" />
                      A guiding principle
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE STORY */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          <ScrollReveal direction="left" duration={800}>
            <div className="about-image group relative min-h-[360px] overflow-hidden rounded-[1.25rem] bg-[#0B3D3E] shadow-[0_20px_50px_rgba(15,82,87,.10)] sm:min-h-[440px] sm:rounded-[1.75rem] lg:min-h-[500px]">
              <img
                src={gallery1}
                alt="Anugrah Homes Jattari project"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/85 via-[#0B3D3E]/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0F5257]/40 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                Jattari · The idea
              </div>
              <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#B9D8C8]">
                  The idea
                </p>
                <p className="max-w-lg font-serif text-2xl leading-[1.05] tracking-[-0.025em] sm:text-4xl">
                  Give people the space to imagine their own future.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100} duration={800}>
            <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-[#0F5257]/10 bg-[#EAF0EB] p-6 sm:min-h-[440px] sm:rounded-[1.75rem] sm:p-8 lg:min-h-[500px] lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#0F5257]/10" />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#0F5257]/15 bg-white text-[#0F5257]">
                  <Eye size={20} strokeWidth={1.5} />
                </div>
                <Eyebrow>Our Perspective</Eyebrow>
                <h3 className="font-serif text-3xl leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                  Simple ideas.
                  <br />
                  Considered deeply.
                </h3>
              </div>
              <div className="relative mt-8">
                <p className="text-sm leading-7 text-[#17473F]/70">
                  From the way spaces are experienced to the way a project is
                  presented, our intention is to keep the journey clear,
                  thoughtful and focused on what actually matters.
                </p>
                <div className="mt-5 h-px bg-[#0F5257]/15" />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[0.15em] text-[#17473F]/55">
                  <span>Jattari</span>
                  <span>Thoughtfully imagined</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LIVE COUNTERS */}
      <section
        ref={statsRef}
        className="bg-[#EAF0EB] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-7 max-w-3xl sm:mb-9">
              <Eyebrow>Our Focus</Eyebrow>
              <h2 className="font-serif text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1.05] tracking-[-0.045em]">
                Clear principles.{" "}
                <span className="text-[#0F5257]">One shared vision.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                number: counts[0],
                label: "Core Principles",
                detail: "Planning, trust and people.",
              },
              {
                number: counts[1],
                label: "Focused Location",
                detail: "Jattari, Aligarh, Uttar Pradesh.",
              },
              {
                number: counts[2],
                label: "Ways to Imagine",
                detail: "Space for your own aspirations.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.label} direction="up" delay={index * 70}>
                <div className="h-full rounded-2xl border border-[#0F5257]/10 bg-white p-5 sm:p-6">
                  <p className="font-serif text-4xl tracking-[-0.045em] text-[#0F5257] sm:text-5xl">
                    {String(item.number).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold">{item.label}</h3>
                  <p className="mt-1 text-xs leading-6 text-[#17473F]/60">
                    {item.detail}
                  </p>
                  <div className="mt-4 h-px bg-gradient-to-r from-[#0F5257]/40 via-[#287A6D]/20 to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-4 text-[10px] leading-5 text-[#17473F]/50">
            These counters represent the page's guiding principles and focus,
            not company sales or performance figures.
          </p>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <ScrollReveal direction="left" duration={800}>
            <div>
              <Eyebrow>A Lasting Thought</Eyebrow>
              <h2 className="font-serif text-[clamp(2.8rem,5.5vw,5.3rem)] leading-[1] tracking-[-0.05em]">
                Leave room
                <br />
                for <span className="text-[#0F5257]">life.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#17473F]/70">
                The best spaces allow people to bring their own stories,
                routines and aspirations into them. That idea remains central
                to the way we think about Jattari.
              </p>
              <div className="mt-6">
                <AboutButton to="/project">Explore the Project</AboutButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100} duration={800}>
            <div className="relative pl-2 sm:pl-5">
              <div className="floating-orbit pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full border border-[#0F5257]/20 sm:-left-6 sm:-top-6 sm:h-28 sm:w-28" />
              <div className="about-image group relative overflow-hidden rounded-[1.25rem] shadow-[0_20px_50px_rgba(15,82,87,.12)] sm:rounded-[1.75rem]">
                <img
                  src={gallery3}
                  alt="Jattari project landscape"
                  loading="lazy"
                  className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[470px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#0F5257]/50 px-3 py-2.5 text-white backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-4">
                  <span className="blueprint-dot h-2 w-2 rounded-full bg-[#B9D8C8]" />
                  <span className="text-[8px] uppercase tracking-[0.15em] sm:text-[9px]">
                    Designed with intent
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F5257] via-[#287A6D] to-[#0B3D3E] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#B9D8C8]/20 sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10 sm:h-80 sm:w-80" />

        <ScrollReveal direction="up" duration={800}>
          <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
            <div className="min-w-0">
              <Eyebrow light>Continue Exploring</Eyebrow>
              <h2 className="max-w-4xl break-words font-serif text-[clamp(2.5rem,5.5vw,5.2rem)] leading-[1] tracking-[-0.05em]">
                See what makes
                <br />
                Jattari <span className="text-[#B9D8C8]">different.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                Explore the project, understand the location and take the first
                step toward imagining your own space in Jattari.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <AboutButton to="/project">View Project</AboutButton>
              <AboutButton to="/contact" secondary>
                Get in Touch
              </AboutButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER STRIP */}
      <footer className="bg-[#0B3D3E] px-5 py-5 text-white sm:px-8 sm:py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[9px] font-medium uppercase tracking-[0.12em] text-white/65 sm:text-[10px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#B9D8C8]" />
            <span className="tracking-[0.16em] text-white">Anugrah Homes</span>
          </div>
          <div>Jattari · Aligarh · Uttar Pradesh</div>
          <div className="text-[#B9D8C8]">Space · Trust · Possibility</div>
        </div>
      </footer>
    </main>
  );
}

export default About;
