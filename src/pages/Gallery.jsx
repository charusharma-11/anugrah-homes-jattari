import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";

import ScrollReveal from "../components/ScrollReveal";

const images = [
  { src: gallery1, title: "The Setting", category: "Overview", size: "large" },
  { src: gallery2, title: "Project Perspective", category: "Project", size: "tall" },
  { src: gallery3, title: "Open Surroundings", category: "Lifestyle", size: "normal" },
  { src: gallery4, title: "A Closer Look", category: "Project", size: "normal" },
  { src: gallery5, title: "The Environment", category: "Lifestyle", size: "wide" },
  { src: gallery6, title: "Jattari", category: "Featured", size: "tall" },
  { src: gallery7, title: "Designed Around You", category: "Lifestyle", size: "normal" },
  { src: gallery8, title: "Location", category: "Location", size: "wide" },
  { src: gallery9, title: "The Bigger Picture", category: "Overview", size: "normal" },
];

function Gallery() {
  return (
    <main className="gallery-page w-full overflow-hidden bg-[#F7F8F5] text-[#0B3D3E]">
      {/* UNIQUE ANIMATED HERO */}
      <section className="gallery-hero relative isolate overflow-hidden bg-[#0B3D3E] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="hero-glow hero-glow-one pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#287A6D]/30 blur-3xl sm:h-[460px] sm:w-[460px]" />
        <div className="hero-glow hero-glow-two pointer-events-none absolute -bottom-32 left-[20%] -z-10 h-72 w-72 rounded-full bg-[#B9D8C8]/10 blur-3xl" />

        <div className="hero-orbit hero-orbit-one pointer-events-none absolute -right-20 top-16 -z-10 h-[300px] w-[300px] rounded-full border border-[#B9D8C8]/20 sm:right-0 sm:h-[480px] sm:w-[480px] lg:right-[8%] lg:h-[580px] lg:w-[580px]">
          <span className="hero-orbit-dot absolute left-[18%] top-[12%] h-3 w-3 rounded-full bg-[#B9D8C8] shadow-[0_0_25px_rgba(185,216,200,0.8)]" />
        </div>

        <div className="hero-orbit hero-orbit-two pointer-events-none absolute -right-4 top-28 -z-10 h-[220px] w-[220px] rounded-full border border-[#287A6D]/50 sm:right-12 sm:h-[370px] sm:w-[370px] lg:right-[12%] lg:h-[460px] lg:w-[460px]" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#B9D8C8]/50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="hero-copy relative z-10">
            <div className="hero-entrance mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B9D8C8] sm:text-xs">
              <span className="h-px w-10 bg-[#B9D8C8]" />
             
            </div>

            <h1 className="hero-title text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
              <span className="hero-title-line block">See the</span>
              <span className="hero-title-line hero-title-accent mt-2 block font-serif italic font-normal text-[#B9D8C8] sm:mt-3">
                possibility.
              </span>
            </h1>

            <div className="hero-entrance mt-8 flex items-center gap-4 sm:mt-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B9D8C8]/40 text-[#B9D8C8]">
                <ArrowUpRight size={17} />
              </span>
              <p className="max-w-xs text-[10px] uppercase leading-6 tracking-[0.2em] text-white/60 sm:text-xs">
                A closer look at Jattari
              </p>
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-[460px] lg:ml-auto">
            <div className="hero-visual-frame relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#16494A] shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:rounded-[2rem]">
              <img
                src={gallery1}
                alt="Anugrah Homes Jattari gallery"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/85 via-[#0B3D3E]/10 to-transparent" />

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#B9D8C8] sm:text-[10px]">
                    Visual Archive
                  </p>
                  <p className="mt-2 font-serif text-2xl italic text-white sm:text-3xl">
                    Jattari.
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl">
                  <Maximize2 size={15} />
                </span>
              </div>
            </div>

            <div className="hero-floating-tag absolute -bottom-5 -left-2 rounded-xl border border-white/20 bg-[#16494A]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B9D8C8] shadow-[0_0_12px_rgba(185,216,200,0.7)]" />
                <span className="text-[9px] uppercase tracking-[0.18em] text-white/85 sm:text-[10px]">
                  09 Visual Stories
                </span>
              </div>
            </div>

            <span className="hero-side-number pointer-events-none absolute -right-1 -top-8 font-serif text-6xl italic text-[#B9D8C8]/20 sm:-right-5 sm:-top-10 sm:text-8xl">
              J.
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-7xl items-center justify-between gap-4 border-t border-white/15 pt-5 sm:mt-20 sm:pt-7">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/50 sm:text-[10px]">
            Explore the collection
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#B9D8C8]" />
            <span className="h-px w-4 bg-white/25" />
            <span className="h-px w-4 bg-white/25" />
          </div>
        </div>
      </section>

      {/* GALLERY INTRO */}
      <section className="px-5 pb-7 pt-14 sm:px-8 sm:pb-9 sm:pt-20 lg:px-12 lg:pt-24">
        <ScrollReveal direction="up" duration={850}>
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-b border-[#0B3D3E]/15 pb-7 sm:gap-6 sm:pb-9 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#287A6D] sm:text-xs">
                Visual Archive
              </p>
              <h2 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                Moments of Jattari.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#0B3D3E]/70">
              Browse the collection and explore the project from different
              perspectives.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* HORIZONTAL GALLERY */}
      <section className="w-full pb-16 pt-5 sm:pb-20 sm:pt-7 lg:pb-24">
        <div
          className="gallery-scroll flex w-full items-start gap-4 overflow-x-auto overflow-y-hidden px-5 pb-8 pt-3 sm:gap-5 sm:px-8 sm:pb-10 lg:gap-6 lg:px-12"
          aria-label="Jattari visual gallery"
          tabIndex={0}
        >
          {images.map((image, index) => {
            const sizeClass =
              image.size === "large"
                ? "h-[390px] w-[82vw] sm:h-[490px] sm:w-[520px] lg:h-[540px] lg:w-[570px]"
                : image.size === "tall"
                  ? "h-[430px] w-[72vw] sm:h-[510px] sm:w-[350px] lg:h-[550px] lg:w-[380px]"
                  : image.size === "wide"
                    ? "h-[340px] w-[82vw] sm:h-[400px] sm:w-[470px] lg:h-[440px] lg:w-[500px]"
                    : "h-[350px] w-[72vw] sm:h-[390px] sm:w-[350px] lg:h-[420px] lg:w-[380px]";

            return (
              <div
                key={image.src}
                className={`gallery-card relative mt-0 shrink-0 snap-start ${sizeClass} ${
                  index % 3 === 1 ? "sm:mt-8 lg:mt-12" : ""
                }`}
              >
                <ScrollReveal
                  direction={index % 2 === 0 ? "up" : "scale"}
                  delay={Math.min(index * 65, 360)}
                  duration={800}
                  className="h-full w-full"
                >
                  <button
                    type="button"
                    data-image-card
                    className="image-hover group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-[1.4rem] border border-[#0B3D3E]/10 bg-[#EAF0EB] p-0 text-left shadow-[0_12px_35px_rgba(11,61,62,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,61,62,0.17)] sm:rounded-[1.7rem]"
                    aria-label={`Open ${image.title} fullscreen`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading={index > 2 ? "lazy" : "eager"}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B3D3E]/25 via-transparent to-[#0B3D3E]/90 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#0B3D3E]/30 text-[10px] text-white backdrop-blur-xl sm:h-10 sm:w-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="inline-flex max-w-[75%] items-center gap-2 rounded-full border border-white/25 bg-[#0B3D3E]/35 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-xl sm:px-4 sm:text-[10px]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B9D8C8]" />
                        <span className="truncate">{image.category}</span>
                      </span>
                    </div>

                    <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="min-w-0 max-w-[calc(100%-52px)] rounded-2xl border border-white/20 bg-[#0B3D3E]/45 px-4 py-3 text-white shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:bg-[#0B3D3E]/65 sm:px-5 sm:py-4">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#B9D8C8] sm:text-[10px]">
                          {image.category}
                        </p>
                        <h3 className="mt-1 break-words text-lg font-medium leading-snug sm:text-xl">
                          {image.title}
                        </h3>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-[#B9D8C8] group-hover:bg-[#B9D8C8] group-hover:text-[#0B3D3E] sm:h-11 sm:w-11">
                        <Maximize2 size={15} />
                      </span>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] border border-white/0 transition-all duration-500 group-hover:border-white/30 sm:rounded-[1.7rem]" />
                  </button>
                </ScrollReveal>
              </div>
            );
          })}

          <div
            aria-hidden="true"
            className="gallery-end-space h-px w-8 shrink-0 sm:w-12 lg:w-16"
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/55 sm:text-xs">
            Explore the collection
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#287A6D]" />
            <span className="h-px w-4 bg-[#0B3D3E]/20" />
            <span className="h-px w-4 bg-[#0B3D3E]/20" />
          </div>
        </div>
      </section>

      {/* FEATURED VISUAL */}
      <section className="relative overflow-hidden bg-[#EAF0EB] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#B9D8C8]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal direction="up" duration={850}>
            <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#287A6D] sm:text-xs">
                  Featured View
                </p>
                <h2 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.04em] sm:mt-4 sm:text-5xl lg:text-6xl">
                  One destination.
                  <span className="mt-1 block font-serif italic font-normal text-[#287A6D] sm:mt-2">
                    Many perspectives.
                  </span>
                </h2>
              </div>

              <span className="w-fit rounded-full border border-[#0B3D3E]/15 bg-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/65 backdrop-blur-lg sm:text-xs">
                Jattari / 2026
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={120} duration={1000}>
            <button
              type="button"
              data-image-card
              className="image-hover group relative block h-[420px] w-full cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#0B3D3E] p-0 text-left shadow-[0_20px_55px_rgba(11,61,62,0.15)] sm:h-[550px] sm:rounded-[2rem] lg:h-[680px]"
              aria-label="Open featured Jattari image fullscreen"
            >
              <img
                src={gallery6}
                alt="Jattari featured view"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B3D3E]/90 via-[#0B3D3E]/10 to-[#0B3D3E]/10" />

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-5 text-white sm:bottom-9 sm:left-9 sm:right-9 lg:bottom-12 lg:left-12 lg:right-12 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#B9D8C8] backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B9D8C8]" />
                    Featured
                  </span>
                  <h3 className="mt-4 break-words text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:mt-5 sm:text-5xl lg:text-6xl">
                    A place where your next chapter can take shape.
                  </h3>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-[#B9D8C8] group-hover:bg-[#B9D8C8] group-hover:text-[#0B3D3E] sm:h-14 sm:w-14 lg:self-end">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <ScrollReveal direction="up" duration={900}>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#0B3D3E] px-6 py-10 text-white sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#B9D8C8]/20 sm:h-80 sm:w-80">
              <div className="absolute inset-8 rounded-full border border-[#287A6D]/50" />
              <div className="absolute inset-16 rounded-full bg-[#287A6D]/20 blur-3xl" />
            </div>

            <div className="relative flex flex-col justify-between gap-7 sm:gap-9 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B9D8C8] sm:text-xs">
                  See It For Yourself
                </p>
                <h2 className="mt-4 break-words text-3xl font-medium leading-tight tracking-[-0.04em] sm:mt-5 sm:text-5xl lg:text-6xl">
                  Ready to explore
                  <span className="mt-1 block font-serif italic font-normal text-[#B9D8C8] sm:mt-2">
                    Jattari in person?
                  </span>
                </h2>
              </div>

              <ScrollReveal direction="scale" delay={180} duration={750}>
                <Link
                  to="/contact"
                  className="group inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-[#B9D8C8]/50 bg-[#B9D8C8] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0B3D3E] shadow-[0_8px_28px_rgba(185,216,200,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:gap-4 sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.15em]"
                >
                  <span>Get in Touch</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B3D3E]/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#0B3D3E]/15">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <style>{`
        .gallery-page {
          --gallery-teal: #0F5257;
          --gallery-green: #287A6D;
          --gallery-deep: #0B3D3E;
          --gallery-mint: #B9D8C8;
        }

        /* Hero animations */
        .hero-entrance {
          animation: galleryFadeUp 850ms cubic-bezier(.2,.7,.2,1) both;
        }

        .hero-title-line {
          animation: galleryTitleIn 950ms cubic-bezier(.2,.7,.2,1) both;
        }

        .hero-title-line:nth-child(2) {
          animation-delay: 180ms;
        }

        .hero-visual {
          animation: galleryVisualIn 1100ms cubic-bezier(.2,.7,.2,1) 150ms both;
        }

        .hero-visual-frame {
          transform-origin: center;
          transition: border-color 350ms ease, box-shadow 350ms ease;
        }

        .hero-visual-frame:hover {
          border-color: rgba(185,216,200,.55);
          box-shadow: 0 35px 90px rgba(0,0,0,.3);
        }

        .hero-floating-tag {
          animation: galleryFloat 5s ease-in-out infinite;
        }

        .hero-orbit-one {
          animation: galleryOrbit 30s linear infinite;
        }

        .hero-orbit-two {
          animation: galleryOrbitReverse 36s linear infinite;
        }

        .hero-glow-one {
          animation: galleryGlow 7s ease-in-out infinite alternate;
        }

        .hero-glow-two {
          animation: galleryGlow 9s ease-in-out infinite alternate-reverse;
        }

        .hero-side-number {
          animation: galleryFadeUp 1.2s ease 350ms both;
        }

        /* Horizontal gallery */
        .gallery-scroll {
          display: flex;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: thin;
          scrollbar-color: #287A6D transparent;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
          scroll-snap-type: x mandatory;
          scroll-padding-left: 20px;
          scroll-padding-right: 20px;
        }

        .gallery-card {
          box-sizing: border-box;
          flex: 0 0 auto;
          min-width: 0;
        }

        .gallery-card > * {
          width: 100%;
          height: 100%;
        }

        .gallery-card button {
          box-sizing: border-box;
          min-width: 0;
        }

        .gallery-card img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
        }

        .gallery-end-space {
          pointer-events: none;
        }

        .gallery-scroll::-webkit-scrollbar {
          height: 5px;
        }

        .gallery-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .gallery-scroll::-webkit-scrollbar-thumb {
          background: #287A6D;
          border-radius: 999px;
        }

        .gallery-scroll::-webkit-scrollbar-thumb:hover {
          background: #0B3D3E;
        }

        @keyframes galleryFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes galleryTitleIn {
          from {
            opacity: 0;
            transform: translateY(35px);
            clip-path: inset(0 0 100% 0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes galleryVisualIn {
          from {
            opacity: 0;
            transform: translate(24px, 18px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes galleryFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes galleryOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes galleryOrbitReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes galleryGlow {
          from {
            opacity: .45;
            transform: scale(.95);
          }
          to {
            opacity: .9;
            transform: scale(1.08);
          }
        }

        @media (max-width: 640px) {
          .gallery-scroll {
            scroll-padding-left: 20px;
            scroll-padding-right: 20px;
          }

          .hero-orbit-one {
            opacity: .55;
          }

          .hero-orbit-two {
            opacity: .45;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-page *,
          .gallery-page *::before,
          .gallery-page *::after {
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

export default Gallery;