import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import gallery from "../assets/gallery.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";

const highlights = [
  {
    number: "01",
    title: "Strategic Location",
    text: "A thoughtfully positioned address designed around accessibility and everyday convenience.",
    icon: MapPin,
    image: gallery3,
  },
  {
    number: "02",
    title: "Thoughtful Spaces",
    text: "A plotted environment where open surroundings and considered planning come together.",
    icon: Sparkles,
    image: gallery4,
  },
  {
    number: "03",
    title: "Built on Trust",
    text: "A straightforward approach focused on clarity, transparency and long-term relationships.",
    icon: ShieldCheck,
    image: gallery5,
  },
  {
    number: "04",
    title: "Future Focused",
    text: "A destination planned with an eye toward changing lifestyles and tomorrow's possibilities.",
    icon: Trees,
    image: gallery7,
  },
];

const movingGallery = [
  gallery,
  gallery9,
  gallery3,
  gallery6,
  gallery5,
  gallery2,
  gallery8,
  gallery4,
];

const heroImages = [gallery6, gallery2, gallery3, gallery8];

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.5em] sm:text-xs ${
        light ? "text-white/65" : "text-[#0F5257]"
      }`}
    >
      <span
        className={`h-px w-7 ${
          light ? "bg-white/60" : "bg-[#0F5257]"
        }`}
      />
      {children}
    </p>
  );
}

function ActionLink({ to, children, secondary = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 w-full items-center justify-between gap-5 rounded-full px-5 py-3 text-xs font-semibold tracking-wide transition duration-300 sm:w-auto sm:justify-center sm:px-6 ${
        secondary
          ? "border border-white/35 bg-white/5 text-white hover:bg-white hover:text-[#17473F]"
          : "bg-[#0F5257] text-white hover:bg-[#0A3D41]"
      }`}
    >
      <span>{children}</span>

      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/25 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={15} />
      </span>
    </Link>
  );
}

function Home() {
  const [heroImage, setHeroImage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);

  const heroRef = useRef(null);
  const headline = "A place to belong.";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedText(headline);
      return undefined;
    }

    let index = 0;
    let timeoutId;

    const typeNext = () => {
      index += 1;
      setTypedText(headline.slice(0, index));

      if (index < headline.length) {
        timeoutId = window.setTimeout(typeNext, 65);
      }
    };

    timeoutId = window.setTimeout(typeNext, 250);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!lightboxImage) return undefined;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxImage]);

  const openImage = (image) => setLightboxImage(image);

  return (
    <main className="anugrah-home w-full overflow-hidden bg-[#F7F8F5] text-[#17473F]">
      <style>{`
         
        .anugrah-home .circle-mark {
          animation: ah-rotate 24s linear infinite;
        }

        /* MOVING IMAGE GALLERY */
        .anugrah-home .gallery-track {
          display: flex;
          width: max-content;
          animation: ah-marquee 30s linear infinite;
          will-change: transform;
        }

        .anugrah-home .gallery-track:hover {
          animation-play-state: running;
        }

        /* MOVING TEXT STRIPS */
        .anugrah-home .gallery-text-track {
          display: block;
          position: relative;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(15, 82, 87, 0.35);
          border-bottom: 1px solid rgba(15, 82, 87, 0.35);
          background: #F7F8F5;
          color: #0F5257;
          padding: 10px 0;
        }

        .anugrah-home .gallery-strip {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          max-width: none;
          white-space: nowrap;
          animation: ah-text-marquee 35s linear infinite;
          will-change: transform;
        }

        .anugrah-home .gallery-strip > div {
          display: flex;
          flex: 0 0 auto;
          flex-wrap: nowrap;
          align-items: center;
          width: max-content;
          max-width: none;
          white-space: nowrap;
        }

        .anugrah-home .gallery-strip span {
          display: inline-block;
          flex: 0 0 auto;
          width: auto;
          max-width: none;
          white-space: nowrap;
          word-break: normal;
          overflow-wrap: normal;
          padding: 0 16px;
          font-size: 10px;
          line-height: 1.8;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .anugrah-home .gallery-strip-reverse {
          animation-direction: reverse;
        }

        @media (max-width: 430px) {
          .anugrah-home .gallery-strip span {
            padding-left: 12px;
            padding-right: 12px;
            font-size: 9px;
            letter-spacing: 0.04em;
            line-height: 1.8;
          }
        }


        @keyframes ah-drift {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.09);
          }
        }

        @keyframes ah-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ah-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ah-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .anugrah-home *,
          .anugrah-home *::before,
          .anugrah-home *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-[#F7F8F5] px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-16"
      >
        <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full border border-[#0F5257]/10 sm:h-[520px] sm:w-[520px]" />

        <div className="pointer-events-none absolute right-10 top-24 h-44 w-44 rounded-full bg-[#DDECE4]/70 blur-3xl sm:right-28 sm:top-32 sm:h-64 sm:w-64" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
          <div className="relative z-10 min-w-0 py-6 sm:py-10 lg:py-12">
            <ScrollReveal direction="left" duration={900}>
              

             

              <h1 className="max-w-[12ch] overflow-visible break-words text-[clamp(3.1rem,8vw,6.7rem)] font-medium leading-[1.02] tracking-[-0.065em]">
                <span className="block">
                  {typedText.slice(0, 10) || "\u00a0"}
                </span>

                <span className="block text-[#0F5257]">
                  {typedText.slice(10) || "\u00a0"}

                  <span className="ml-1 inline-block h-[0.72em] w-[2px] translate-y-[0.04em] animate-pulse bg-[#0F5257]" />
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#17473F]/65 sm:mt-6 sm:text-base sm:leading-8">
                Discover a thoughtfully planned plotted destination in
                Jattari, created for people looking beyond four walls and
                toward a place they can truly call their own.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <ActionLink to="/project">Explore Project</ActionLink>

                <ActionLink to="/contact" secondary>
                  Book a Visit
                </ActionLink>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.13em] text-[#17473F]/50 sm:mt-10 sm:text-xs">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F5257]/20 text-[#0F5257]">
                  <MapPin size={16} />
                </span>

                Jattari · Aligarh · Uttar Pradesh
              </div>
            </ScrollReveal>
          </div>

          <div className="relative mx-auto min-w-0 w-full max-w-[680px]">
            <div className="image-frame relative aspect-[1.12/1] overflow-hidden rounded-[1.5rem] bg-[#DDE7E0] sm:rounded-[2rem]">
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Anugrah Homes Jattari view ${index + 1}`}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className={`hero-photo absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    heroImage === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ aspectRatio: "1.12 / 1" }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3F40]/75 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#0F5257]/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:text-[10px]">
                A place to call your own
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                    The address
                  </p>

                  <p className="mt-1 text-3xl font-medium tracking-tight sm:text-4xl">
                    Jattari
                  </p>

                  <p className="mt-1 text-xs text-white/75">
                    Aligarh · Uttar Pradesh
                  </p>
                </div>

                <span className="circle-mark hidden h-16 w-16 items-center justify-center rounded-full border border-white/60 text-[9px] uppercase tracking-[0.18em] sm:flex">
                  Explore · AH
                </span>
              </div>
            </div>

            <div className="float-photo absolute -bottom-6 left-4 w-[34%] rounded-2xl border border-white bg-white p-2 shadow-[0_12px_35px_rgba(20,32,30,.14)] sm:-bottom-8 sm:left-8 sm:w-[31%] sm:p-3">
              <img
                src={gallery3}
                alt="Jattari landscape"
                className="h-20 w-full rounded-xl object-cover sm:h-28"
              />

              <p className="px-1 pb-1 pt-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#0F5257] sm:text-[9px]">
                Space to grow
              </p>
            </div>

            <div className="float-photo delay absolute -right-1 top-12 w-[30%] rounded-2xl border border-white bg-white p-2 shadow-[0_12px_35px_rgba(20,32,30,.14)] sm:-right-3 sm:top-16 sm:w-[27%] sm:p-3">
              <img
                src={gallery5}
                alt="Anugrah Homes surroundings"
                className="h-20 w-full rounded-xl object-cover sm:h-24"
              />

              <p className="px-1 pb-1 pt-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#0F5257] sm:text-[9px]">
                Future focused
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-[#0F5257]/15 pt-5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#17473F]/45 sm:mt-20 sm:text-[10px]">
          <span>Space · Light · Possibility</span>

          <a
            href="#intro"
            className="inline-flex items-center gap-2 transition hover:text-[#0F5257]"
          >
            Scroll to explore <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <ScrollReveal direction="left">
            <Eyebrow>The Jattari Address</Eyebrow>

            <p className="text-[10px] uppercase tracking-[0.16em] text-[#17473F]/45">
              01 — A new perspective
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,5.8rem)] font-medium leading-[1.03] tracking-[-0.06em]">
              More than just <span className="text-[#0F5257]">a plot.</span>
            </h2>

            <div className="mt-5 grid gap-5 sm:mt-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-sm leading-7 text-[#17473F]/65 sm:text-base sm:leading-8">
                Jattari is imagined as a destination where space, location
                and future possibilities come together. Every element is
                designed to make the experience feel considered from the
                moment you arrive.
              </p>

              <div className="hidden h-20 w-20 items-end justify-end border-b border-r border-[#0F5257]/35 pb-2 pr-2 lg:flex">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#0F5257]">
                  360°
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#EAF0EB] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-8 grid gap-5 sm:mb-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
              <div>
                <Eyebrow>What defines it</Eyebrow>

                <h2 className="max-w-3xl text-[clamp(2.7rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
                  Designed with <span className="text-[#0F5257]">intention.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#17473F]/60 lg:ml-auto">
                Four ideas shape the experience of this plotted destination —
                from where it sits to how it is envisioned for the future.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="min-w-0">
                  <ScrollReveal direction="up" delay={index * 80} duration={750}>
                    <article className="soft-card h-full overflow-hidden rounded-2xl border border-[#0F5257]/10 bg-white">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-52 w-full object-cover sm:h-56"
                        />

                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-[#0F5257]">
                          {item.number} / 04
                        </span>

                        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F5257]">
                          <Icon size={17} />
                        </span>
                      </div>

                      <div className="p-5 sm:p-6">
                        <h3 className="text-xl font-medium tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#17473F]/60">
                          {item.text}
                        </p>

                        <div className="mt-5 border-t border-[#0F5257]/15 pt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0F5257]">
                          Jattari · Aligarh
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <ScrollReveal direction="left" duration={850}>
            <button
              type="button"
              onClick={() => openImage(gallery2)}
              aria-label="Open project surroundings image"
              className="image-frame relative block w-full overflow-hidden rounded-[1.5rem] bg-[#DDE7E0] text-left"
            >
              <img
                src={gallery2}
                alt="Jattari project surroundings"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[570px]"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0F5257] sm:left-6 sm:top-6">
                Space · Light · Possibility
              </span>

              <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0F5257] sm:bottom-6 sm:right-6">
                <ArrowUpRight size={19} />
              </span>
            </button>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="min-w-0 lg:pl-2">
              <Eyebrow>A different perspective</Eyebrow>

              <h2 className="max-w-xl text-[clamp(2.7rem,5.4vw,5rem)] font-medium leading-[1.03] tracking-[-0.06em]">
                Space that feels <span className="text-[#0F5257]">truly yours.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#17473F]/65 sm:mt-6 sm:text-base sm:leading-8">
                A plotted property gives you something increasingly valuable:
                the freedom to imagine what comes next. Your home, your
                surroundings and your way of living can take shape on your
                terms.
              </p>

              <div className="mt-6">
                <ActionLink to="/about">Discover the Story</ActionLink>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-[#0F5257]/15 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF0EB] text-[#0F5257]">
                  <Sparkles size={18} />
                </span>

                <div>
                  <p className="text-sm font-semibold">A vision for tomorrow</p>
                  <p className="mt-1 text-xs text-[#17473F]/55">
                    Designed around possibilities.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEE THE POSSIBILITIES — FIXED IMAGE SPACING */}
      <section className="bg-[#F0F3EF] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Visual Journal</Eyebrow>

                <h2 className="max-w-3xl text-[clamp(2.7rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
                  See the <span className="text-[#0F5257]">possibilities.</span>
                </h2>
              </div>

              <ActionLink to="/gallery">View Gallery</ActionLink>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12">
            {/* LEFT LARGE IMAGE */}
            <div className="min-w-0 lg:col-span-7">
              <ScrollReveal direction="left" duration={850}>
                <button
                  type="button"
                  onClick={() => openImage(gallery3)}
                  aria-label="Open Jattari landscape image"
                  className="image-frame group relative block w-full overflow-hidden rounded-2xl text-left"
                >
                  <img
                    src={gallery3}
                    alt="Jattari landscape"
                    loading="lazy"
                    className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[510px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3F40]/50 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.15em] text-white sm:bottom-7 sm:left-7">
                    The landscape <ArrowUpRight className="ml-2 inline" size={15} />
                  </span>
                </button>
              </ScrollReveal>
            </div>

            {/* RIGHT IMAGES — FIXED ROW HEIGHTS TO REMOVE EMPTY SPACE */}
            <div className="grid min-w-0 grid-cols-2 items-start gap-4 lg:col-span-5 lg:grid-cols-2 lg:grid-rows-[285px_209px]">
              {/* TOP IMAGE */}
              <div className="col-span-2 min-w-0">
                <ScrollReveal direction="right" delay={80}>
                  <button
                    type="button"
                    onClick={() => openImage(gallery4)}
                    aria-label="Open Jattari development image"
                    className="image-frame group relative block h-full w-full overflow-hidden rounded-2xl text-left"
                  >
                    <img
                      src={gallery4}
                      alt="Jattari development"
                      loading="lazy"
                      className="h-[200px] w-full object-cover sm:h-[260px] lg:h-[285px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F3F40]/45 to-transparent" />

                    <span className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.15em] text-white sm:bottom-5 sm:left-5">
                      A place to grow
                    </span>
                  </button>
                </ScrollReveal>
              </div>

              {/* BOTTOM LEFT IMAGE */}
              <div className="min-w-0">
                <ScrollReveal direction="left" delay={120}>
                  <button
                    type="button"
                    onClick={() => openImage(gallery5)}
                    aria-label="Open Jattari surroundings image"
                    className="image-frame block h-full w-full overflow-hidden rounded-2xl"
                  >
                    <img
                      src={gallery5}
                      alt="Jattari surroundings"
                      loading="lazy"
                      className="h-[190px] w-full object-cover sm:h-[240px] lg:h-[209px]"
                    />
                  </button>
                </ScrollReveal>
              </div>

              {/* BOTTOM RIGHT IMAGE */}
              <div className="min-w-0">
                <ScrollReveal direction="right" delay={180}>
                  <button
                    type="button"
                    onClick={() => openImage(gallery7)}
                    aria-label="Open Jattari property view"
                    className="image-frame block h-full w-full overflow-hidden rounded-2xl"
                  >
                    <img
                      src={gallery7}
                      alt="Jattari property view"
                      loading="lazy"
                      className="h-[190px] w-full object-cover sm:h-[240px] lg:h-[209px]"
                    />
                  </button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <ScrollReveal direction="left">
            <div className="min-w-0">
              <Eyebrow>The Location</Eyebrow>

              <h2 className="text-[clamp(3rem,6.8vw,6.6rem)] font-medium leading-[1.02] tracking-[-0.065em]">
                Jattari, <span className="text-[#0F5257]">within reach.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#17473F]/65 sm:mt-6 sm:text-base sm:leading-8">
                Positioned on Palwal Road in Jattari, the project brings
                everyday accessibility together with the feeling of having
                your own space away from the rush.
              </p>

              <div className="mt-6">
                <ActionLink to="/location">Explore Location</ActionLink>
              </div>
            </div>
          </ScrollReveal>

          <div className="min-w-0">
            <ScrollReveal direction="scale" delay={120} duration={850}>
              <div className="relative pb-5 pl-2 sm:pl-6">
                <button
                  type="button"
                  onClick={() => openImage(gallery8)}
                  aria-label="Open Jattari location image"
                  className="image-frame block w-full overflow-hidden rounded-[1.5rem] text-left"
                >
                  <img
                    src={gallery8}
                    alt="Jattari location"
                    loading="lazy"
                    className="h-[330px] w-full object-cover sm:h-[440px] lg:h-[540px]"
                  />
                </button>

                <div className="absolute -bottom-1 left-0 rounded-2xl border border-[#0F5257]/10 bg-white p-4 shadow-[0_12px_35px_rgba(20,32,30,.10)] sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF0EB] text-[#0F5257]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Jattari</p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#17473F]/50 sm:text-[10px]">
                        Aligarh · Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

     
      {/* MOVING GALLERY */}
      <section className="overflow-hidden bg-[#F7F8F5] py-4 sm:py-5">

        {/* TOP MOVING TEXT STRIP */}
        <div className="gallery-text-track mb-3">
          <div className="gallery-strip flex w-max">
            {[1, 2].map((item) => (
              <div key={item} className="flex shrink-0 items-center">
                <span>Jattari Living</span>
                <span>✦</span>
                <span>Prime Location</span>
                <span>✦</span>
                <span>Anugrah Homes</span>
                <span>✦</span>
                <span>Your Dream Home</span>
                <span>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* MOVING IMAGE GALLERY */}
        <div className="gallery-track flex gap-3 py-2 sm:gap-4">
          {[...movingGallery, ...movingGallery].map((image, index) => (
            <div
              key={`${image}-${index}`}
              data-image-card
              className="gallery-frame image-frame image-hover w-[240px] shrink-0 overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_10px_24px_rgba(23,71,63,0.20)] sm:w-[300px] sm:rounded-2xl lg:w-[360px]"
            >
              <img
                src={image}
                alt={`Jattari gallery ${index + 1}`}
                loading="lazy"
                className="h-44 w-full sm:h-60 lg:h-72"
              />
            </div>
          ))}
        </div>

        {/* BOTTOM MOVING TEXT STRIP */}
        <div className="gallery-text-track mt-3">
          <div className="gallery-strip gallery-strip-reverse flex w-max">
            {[1, 2].map((item) => (
              <div key={item} className="flex shrink-0 items-center">
                <span>Space to Grow</span>
                <span>✦</span>
                <span>Comfort & Elegance</span>
                <span>✦</span>
                <span>Jattari · Aligarh</span>
                <span>✦</span>
                <span>A Place to Belong</span>
                <span>✦</span>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#0F5257] via-[#287A6D] to-[#0B3D3E] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-6 sm:rounded-[2rem] sm:p-10 lg:p-14">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <ScrollReveal direction="up">
              <Eyebrow light>Your next chapter</Eyebrow>

              <h2 className="max-w-5xl text-[clamp(2.7rem,6.3vw,6rem)] font-medium leading-[1.03] tracking-[-0.06em]">
                Your next address <span className="text-[#B9D8C8]">starts here.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8">
                Explore the project, understand the location and take the
                first step toward making your own space in Jattari.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={120}>
              <ActionLink to="/contact" secondary>
                Enquire Now
              </ActionLink>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <footer className="border-t border-white/10 bg-gradient-to-br from-[#0F5257] via-[#287A6D] to-[#0B3D3E] px-5 py-6 text-white sm:px-8 sm:py-7 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[9px] font-medium uppercase tracking-[0.15em] text-white/60 sm:text-[10px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#B9D8C8]" />

            <span className="tracking-[0.18em] text-white">
              Anugrah Homes
            </span>
          </div>

          <div>Jattari · Aligarh · Uttar Pradesh</div>

          <div className="text-[#B9D8C8]">
            Premium Plotted Development
          </div>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F5257]/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Property image preview"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white transition hover:bg-white hover:text-[#17473F]"
          >
            ×
          </button>

          <img
            src={lightboxImage}
            alt="Expanded Anugrah Homes property view"
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default Home;
