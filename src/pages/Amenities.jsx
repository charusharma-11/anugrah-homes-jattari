import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Car,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import gallery3 from "../assets/gallery3.png";
import gallery5 from "../assets/gallery5.png";
import gallery7 from "../assets/gallery7.png";

import ScrollReveal from "../components/ScrollReveal";

const amenities = [
  {
    number: "01",
    title: "Thoughtful Planning",
    intro:
      "The development is planned to create a more organized, practical and comfortable environment for everyday living.",
    text: "A layout designed with practical movement, usable spaces and a clear sense of organization.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Open Surroundings",
    intro:
      "Open surroundings create a feeling of space and make the overall environment feel lighter, calmer and more comfortable.",
    text: "A more open environment that gives the development a spacious and comfortable character.",
    icon: Sun,
  },
  {
    number: "03",
    title: "Green Spaces",
    intro:
      "Landscape-led spaces add a natural touch to the development and create a softer atmosphere around the surroundings.",
    text: "Landscape-led areas that introduce a softer visual character and moments of calm.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Security Focus",
    intro:
      "Safety remains an important part of the planning, helping create a more secure and peaceful everyday environment.",
    text: "Planning that keeps safety and peace of mind at the centre of the everyday experience.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Easy Movement",
    intro:
      "Thoughtful internal movement makes it easier to navigate the development and keeps everyday access simple and convenient.",
    text: "Internal circulation planned to make getting around the development convenient.",
    icon: Car,
  },
  {
    number: "06",
    title: "Future Ready",
    intro:
      "The development is planned with changing lifestyles in mind, focusing on long-term usability and practical value.",
    text: "A destination designed with changing lifestyles and long-term usability in mind.",
    icon: Zap,
  },
];

const miniFeatures = [
  { icon: Sparkles, title: "Planning", text: "Organized spaces" },
  { icon: Sun, title: "Comfort", text: "Open surroundings" },
  { icon: Car, title: "Movement", text: "Easy circulation" },
  { icon: Waves, title: "Space", text: "Balanced environment" },
];

function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  useEffect(() => {
    if (!selectedAmenity) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedAmenity(null);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAmenity]);

  return (
    <main className="amenities-page overflow-hidden bg-[#F7F8F5] text-[#0B3D3E]">
      <style>{`
        .amenities-page {
          --brand: #0F5257;
          --brand-green: #287A6D;
          --brand-deep: #0B3D3E;
          --brand-mint: #B9D8C8;
          --surface: #F7F8F5;
          --surface-mint: #EAF0EB;
        }

        .amenities-page section {
          position: relative;
          scroll-margin-top: 90px;
        }

        @keyframes amenityFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes amenityImageReveal {
          from { opacity: .5; transform: scale(1.06); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes amenityFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes amenityShine {
          from { transform: translateX(-140%) skewX(-18deg); }
          to { transform: translateX(240%) skewX(-18deg); }
        }

        @keyframes amenityLine {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }

        .amenity-hero-image {
          animation: amenityImageReveal 1.3s cubic-bezier(.2,.7,.2,1) both;
          transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
        }

        .amenity-hero:hover .amenity-hero-image {
          transform: scale(1.035);
        }

        .amenity-heading {
          text-wrap: balance;
        }

        .amenity-feature-card {
          position: relative;
          isolation: isolate;
          transition:
            transform .45s cubic-bezier(.2,.7,.2,1),
            box-shadow .45s ease,
            border-color .35s ease,
            background-color .35s ease;
        }

        .amenity-feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(185,216,200,.2), transparent 65%);
          opacity: 0;
          transition: opacity .4s ease;
        }

        .amenity-feature-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 55px rgba(11,61,62,.10);
        }

        .amenity-feature-card:hover::before {
          opacity: 1;
        }

        .amenity-feature-icon {
          transition: transform .45s cubic-bezier(.2,.7,.2,1);
        }

        .amenity-feature-card:hover .amenity-feature-icon {
          transform: rotate(-7deg) scale(1.09);
        }

        .amenity-image-card {
          isolation: isolate;
          transform: translateZ(0);
        }

        .amenity-image-card img {
          transition:
            transform 1s cubic-bezier(.2,.7,.2,1),
            filter .6s ease;
        }

        .amenity-image-card:hover img {
          transform: scale(1.065);
          filter: saturate(1.08);
        }

        .amenity-image-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 15%,
            rgba(255,255,255,.12) 45%,
            transparent 70%
          );
          transform: translateX(-140%);
        }

        .amenity-image-card:hover::after {
          animation: amenityShine .9s ease;
        }

        .amenity-accent-line {
          animation: amenityLine .8s cubic-bezier(.2,.7,.2,1) both;
        }

        .amenity-cta-button {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition: color .3s ease, transform .3s ease, box-shadow .3s ease;
        }

        .amenity-cta-button::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: #0B3D3E;
          transform: translateY(105%);
          transition: transform .4s cubic-bezier(.2,.7,.2,1);
        }

        .amenity-cta-button:hover::before {
          transform: translateY(0);
        }

        .amenity-cta-button:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(11,61,62,.18);
        }

        .amenity-modal-panel {
          animation: amenityFadeUp .35s cubic-bezier(.2,.7,.2,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .amenities-page *,
          .amenities-page *::before,
          .amenities-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="amenity-hero relative isolate flex min-h-[600px] items-end overflow-hidden bg-[#0B3D3E] sm:min-h-[690px] lg:min-h-[760px]">
        <div
          className="amenity-hero-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gallery7})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D3E]/95 via-[#0B3D3E]/65 to-[#0B3D3E]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/85 via-transparent to-[#0B3D3E]/15" />

        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#B9D8C8]/15 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
          <div className="max-w-5xl">
            <ScrollReveal direction="up" duration={1000}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#B9D8C8] shadow-[0_0_14px_rgba(185,216,200,.8)]" />
                <span className="text-[10px] uppercase tracking-[.25em] text-white/80">
                  Amenities & Experience
                </span>
              </div>

              <h1 className="amenity-heading text-5xl font-medium leading-[.98] tracking-[-.055em] text-white sm:text-7xl lg:text-[88px]">
                Everyday comfort,
                <span className="mt-2 block text-[#B9D8C8]">
                  thoughtfully created.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8">
                Discover the details that shape a more comfortable,
                organized and future-ready living experience at Jattari.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[.22em] text-white/60">
            <span className="h-px w-12 bg-[#B9D8C8]" />
            <span>Designed for everyday living</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F8F5]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-16">
            <ScrollReveal direction="left">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#0F5257]">
                  The Experience
                </p>

                <h2 className="amenity-heading mt-5 text-4xl font-medium leading-[1.02] tracking-[-.05em] text-[#0B3D3E] sm:text-5xl lg:text-6xl">
                  More than amenities.
                  <span className="mt-1 block text-[#287A6D]">
                    A better everyday.
                  </span>
                </h2>

                <div className="amenity-accent-line mt-6 h-1 w-16 rounded-full bg-[#287A6D]" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="max-w-3xl">
                <p className="text-base leading-8 text-[#0B3D3E]/70 sm:text-lg sm:leading-9">
                  Every element has been considered to make the development
                  feel balanced, practical and easy to experience. From the way
                  spaces are planned to the movement within them, the focus
                  remains on creating an environment that feels comfortable
                  today and relevant for tomorrow.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* MINI FEATURE CARDS */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-5">
            {miniFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  delay={index * 80}
                >
                  <div className="amenity-feature-card group h-full rounded-2xl border border-[#0B3D3E]/10 bg-white p-5 sm:rounded-[1.5rem] sm:p-6">
                    <div className="amenity-feature-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F5257] text-white shadow-lg shadow-[#0F5257]/15 sm:h-12 sm:w-12">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-[#0B3D3E] sm:mt-6 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#0B3D3E]/60 sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="bg-[#EAF0EB]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
            <ScrollReveal direction="left">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#0F5257]">
                  What makes it different
                </p>

                <h2 className="amenity-heading mt-5 text-4xl font-medium leading-[1.02] tracking-[-.05em] text-[#0B3D3E] sm:text-5xl lg:text-6xl">
                  Designed around
                  <span className="mt-1 block text-[#287A6D]">
                    real everyday needs.
                  </span>
                </h2>

                <div className="amenity-accent-line mt-6 h-1 w-16 rounded-full bg-[#287A6D]" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <p className="max-w-xl text-sm leading-7 text-[#0B3D3E]/70 sm:text-base sm:leading-8">
                Explore the thoughtful details that bring together movement,
                comfort, space, safety and long-term usability.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              const isDark = index === 1 || index === 4;

              return (
                <ScrollReveal
                  key={item.number}
                  direction="up"
                  delay={index * 70}
                  duration={800}
                >
                  <article
                    className={`amenity-feature-card group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.6rem] border p-6 sm:min-h-[350px] sm:rounded-[1.8rem] sm:p-8 ${
                      isDark
                        ? "border-[#0B3D3E] bg-[#0B3D3E] text-white"
                        : "border-white/80 bg-white text-[#0B3D3E]"
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#B9D8C8]/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                    <div className="relative flex items-start justify-between">
                      <div
                        className={`amenity-feature-icon flex h-12 w-12 items-center justify-center rounded-2xl ${
                          isDark
                            ? "bg-[#B9D8C8] text-[#0B3D3E]"
                            : "bg-[#0F5257] text-white"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <span
                        className={`text-xs font-medium tracking-[.2em] ${
                          isDark ? "text-white/45" : "text-[#0B3D3E]/35"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <div className="relative mt-auto pt-10">
                      <h3
                        className={`text-2xl font-medium leading-tight tracking-[-.035em] sm:text-3xl ${
                          isDark ? "text-white" : "text-[#0B3D3E]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-4 text-sm leading-7 ${
                          isDark ? "text-white/75" : "text-[#0B3D3E]/70"
                        }`}
                      >
                        {item.text}
                      </p>

                      <div
                        className={`mt-6 h-px w-12 transition-all duration-500 group-hover:w-24 ${
                          isDark ? "bg-[#B9D8C8]" : "bg-[#287A6D]"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => setSelectedAmenity(item)}
                        className={`group/discover mt-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] ${
                          isDark ? "text-[#B9D8C8]" : "text-[#0F5257]"
                        }`}
                      >
                        <span>Discover</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current/30 transition-all duration-300 group-hover/discover:translate-x-1 group-hover/discover:bg-[#287A6D] group-hover/discover:text-white">
                          <ArrowUpRight size={14} />
                        </span>
                      </button>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE */}
      <section className="bg-[#F7F8F5]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-4 lg:grid-cols-[1.12fr_.88fr]">
            <ScrollReveal direction="left" duration={950}>
              <article className="amenity-image-card group relative min-h-[420px] overflow-hidden rounded-[1.7rem] bg-[#0B3D3E] sm:min-h-[560px] lg:min-h-[660px]">
                <img
                  src={gallery3}
                  alt="Project surroundings"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/95 via-[#0B3D3E]/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#0B3D3E]/35 px-4 py-2.5 text-[9px] uppercase tracking-[.22em] text-white/90 backdrop-blur-xl sm:left-8 sm:top-8">
                  Designed for living
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 lg:p-10">
                  <div className="mb-4 h-1 w-12 rounded-full bg-[#B9D8C8] transition-all duration-500 group-hover:w-20" />

                  <p className="max-w-xl text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-4xl lg:text-5xl">
                    A setting that feels calm, open and considered.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <div className="grid gap-4">
              <ScrollReveal direction="right" delay={100}>
                <article className="amenity-image-card group relative min-h-[300px] overflow-hidden rounded-[1.7rem] bg-[#0B3D3E] sm:min-h-[340px] lg:min-h-[390px]">
                  <img
                    src={gallery5}
                    alt="Open surroundings"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/95 via-[#0B3D3E]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-[10px] font-medium uppercase tracking-[.22em] text-[#B9D8C8]">
                      Open surroundings
                    </p>

                    <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-3xl">
                      Space to enjoy a more balanced lifestyle.
                    </h3>
                  </div>
                </article>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={180}>
                <article className="amenity-feature-card relative flex h-full min-h-[280px] flex-col justify-center overflow-hidden rounded-[1.7rem] border border-[#0B3D3E]/10 bg-[#EAF0EB] p-6 sm:p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#B9D8C8]/60 blur-3xl" />

                  <div className="relative">
                    <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#0F5257]">
                      Small details. Big difference.
                    </p>

                    <h3 className="mt-4 max-w-lg text-2xl font-medium leading-tight tracking-[-.04em] text-[#0B3D3E] sm:text-3xl">
                      Thoughtful features that make everyday life feel easier.
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#0B3D3E]/70">
                      From movement and planning to comfort and security, every
                      part of the experience has been considered with practical
                      everyday use in mind.
                    </p>

                    <Link
                      to="/project"
                      className="group mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#0F5257]"
                    >
                      <span>View Project</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F5257]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#0F5257] group-hover:text-white">
                        <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative overflow-hidden bg-[#0B3D3E]">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#287A6D]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B9D8C8]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
          <ScrollReveal direction="scale" duration={950}>
            <div className="mx-auto max-w-5xl text-center">
              <div className="amenity-feature-icon mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B9D8C8]/30 bg-[#B9D8C8]/10 text-[#B9D8C8]">
                <Sparkles size={23} strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#B9D8C8]">
                The Jattari Difference
              </p>

              <h2 className="amenity-heading mt-6 text-4xl font-medium leading-[1.03] tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">
                Designed not just to
                <span className="mt-2 block text-[#B9D8C8]">
                  look better, but live better.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                A thoughtfully planned environment can change how a place
                feels every day. That is the idea behind every detail here.
              </p>

              <div className="mx-auto mt-8 h-px w-20 bg-[#B9D8C8]/70" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F8F5]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <ScrollReveal direction="up" duration={850}>
            <div className="relative isolate overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#287A6D] via-[#0F5257] to-[#0B3D3E] p-7 shadow-[0_25px_70px_rgba(11,61,62,.16)] sm:rounded-[2rem] sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B9D8C8]/15 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-black/10 blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#B9D8C8]">
                    Explore Jattari
                  </p>

                  <h2 className="amenity-heading mt-5 text-3xl font-medium leading-[1.04] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
                    See how the complete project comes together.
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                    Explore the project details, location and overall vision
                    before taking the next step.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="amenity-cta-button inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#B9D8C8] px-6 py-3.5 text-xs font-semibold uppercase tracking-[.15em] text-[#0B3D3E] shadow-lg shadow-black/10"
                >
                  <span>Get in touch</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3D3E]/10 transition-all duration-300">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AMENITY INTRO MODAL */}
      {selectedAmenity && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061f20]/75 p-4 backdrop-blur-md"
          onClick={() => setSelectedAmenity(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenity-modal-title"
            className="amenity-modal-panel relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[1.7rem] border border-[#0B3D3E]/10 bg-[#F7F8F5] p-6 shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAmenity(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#0B3D3E]/15 bg-white text-[#0B3D3E] transition-all duration-300 hover:rotate-90 hover:bg-[#0B3D3E] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5257] text-white shadow-lg shadow-[#0F5257]/15">
              {(() => {
                const Icon = selectedAmenity.icon;
                return <Icon size={22} strokeWidth={1.6} />;
              })()}
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.25em] text-[#0F5257]">
              Amenity {selectedAmenity.number}
            </p>

            <h3
              id="amenity-modal-title"
              className="mt-3 pr-10 text-3xl font-medium leading-tight tracking-[-.04em] text-[#0B3D3E] sm:text-4xl"
            >
              {selectedAmenity.title}
            </h3>

            <div className="mt-6 rounded-2xl border border-[#0B3D3E]/10 bg-white p-5">
              <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#287A6D]">
                Brief Introduction
              </p>

              <p className="mt-3 text-sm leading-7 text-[#0B3D3E]/75 sm:text-base">
                {selectedAmenity.intro}
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#0B3D3E]/65">
              {selectedAmenity.text}
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-[#0F5257] via-[#B9D8C8] to-transparent" />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[9px] font-medium uppercase tracking-[.2em] text-[#0B3D3E]/45">
              <span>Jattari</span>
              <span>Premium Development</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Amenities;
