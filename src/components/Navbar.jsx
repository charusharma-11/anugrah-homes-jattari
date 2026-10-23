import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Home,
  Building2,
  Sparkles,
  MapPin,
  Images,
  CircleHelp,
  Info,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Project", path: "/project", icon: Building2 },
  { name: "Amenities", path: "/amenities", icon: Sparkles },
  { name: "Location", path: "/location", icon: MapPin },
  { name: "Gallery", path: "/gallery", icon: Images },
  { name: "FAQ", path: "/faq", icon: CircleHelp },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* TOP FLOATING GLASS NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
        <nav
          className={`mx-auto w-full max-w-7xl rounded-2xl border border-[#B9D8C8]/25 bg-[#0B3D3E]/90 shadow-[0_12px_45px_rgba(11,61,62,0.20)] backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "shadow-[0_16px_45px_rgba(11,61,62,0.30)]"
              : ""
          }`}
        >
          {/* MAIN HEADER */}
          <div className="flex items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-5 lg:gap-6">
            {/* LOGO - LEFT */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex shrink-0 items-center gap-2 sm:gap-3"
              aria-label="Jattari Home"
            >
              <div
                className={`relative flex shrink-0 items-center justify-center rounded-full border border-[#B9D8C8]/45 bg-[#287A6D]/30 transition-all duration-300 group-hover:border-[#B9D8C8] group-hover:bg-[#287A6D]/50 ${
                  scrolled ? "h-9 w-9" : "h-10 w-10"
                }`}
              >
                <span className="font-serif text-lg text-[#B9D8C8]">
                  J
                </span>
                <span className="absolute inset-1 rounded-full border border-[#B9D8C8]/20" />
              </div>

              <div className="leading-none">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#F7F8F5] sm:text-sm">
                  JATTARI
                </p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#B9D8C8]/70">
                  Premium Plots
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - RIGHT */}
<div className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-1 md:flex lg:flex-nowrap lg:gap-1.5">              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `group flex shrink-0 items-center gap-1.5 rounded-full px-2 py-2.5 text-[10px] font-medium transition-all duration-300 lg:gap-2 lg:px-3 lg:text-[11px] ${
                        isActive
                          ? "bg-[#287A6D]/40 text-[#B9D8C8] shadow-[inset_0_0_0_1px_rgba(185,216,200,0.12)]"
                          : "text-[#F7F8F5]/75 hover:bg-[#287A6D]/25 hover:text-[#B9D8C8]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 transition-transform duration-300 group-hover:scale-110 lg:h-4 lg:w-4"
                        />
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="ml-0.5 h-1 w-1 rounded-full bg-[#B9D8C8]" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}

              {/* ENQUIRE BUTTON */}
              <Link
                to="/contact"
                className="group ml-1 flex shrink-0 items-center gap-1.5 rounded-full bg-[#B9D8C8] py-2 pl-3 pr-2 text-[10px] font-semibold uppercase tracking-wide text-[#0B3D3E] transition-all duration-300 hover:bg-[#F7F8F5] lg:gap-2 lg:pl-4 lg:text-[11px]"
              >
                <span>Enquire</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0F5257] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B9D8C8]/25 bg-white/5 text-[#B9D8C8] transition hover:bg-[#287A6D]/40 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-3 right-3 top-[5.5rem] z-40 overflow-hidden rounded-3xl border border-[#B9D8C8]/20 bg-[#0B3D3E]/95 shadow-[0_15px_50px_rgba(11,61,62,0.35)] backdrop-blur-2xl transition-all duration-300 sm:left-5 sm:right-5 sm:top-[6rem] md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="max-h-[75vh] overflow-y-auto p-4 sm:p-5">
          {/* MOBILE MENU HEADING */}
          <div className="mb-3 flex items-center justify-between border-b border-[#B9D8C8]/15 pb-3">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#F7F8F5]">
                JATTARI
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#B9D8C8]/65">
                Premium Plots
              </p>
            </div>

            <span className="rounded-full border border-[#B9D8C8]/20 bg-[#287A6D]/20 px-3 py-1 text-[9px] uppercase tracking-wider text-[#B9D8C8]">
              Navigation
            </span>
          </div>

          {/* MOBILE NAVIGATION LINKS */}
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                      isActive
                        ? "border-[#B9D8C8]/35 bg-[#287A6D]/35 text-[#B9D8C8]"
                        : "border-white/5 bg-white/[0.03] text-[#F7F8F5]/75 hover:border-[#B9D8C8]/20 hover:bg-[#287A6D]/20"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-[#287A6D]/60 text-[#B9D8C8]"
                            : "bg-white/5 text-[#B9D8C8]/80"
                        }`}
                      >
                        <Icon size={17} strokeWidth={1.7} />
                      </span>

                     
<span className="min-w-0">
  <span className="block break-words text-[11px] font-medium">
    {link.name}
  </span>
</span>

                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* MOBILE CONTACT ACTIONS */}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#B9D8C8] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#0B3D3E] transition hover:bg-[#F7F8F5]"
            >
              Enquire
              <ArrowUpRight size={15} />
            </Link>

            <a
              href="tel:+917678279151"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-[#B9D8C8]/25 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#F7F8F5] transition hover:bg-[#287A6D]/30"
            >
              <Phone size={14} />
              Call us
            </a>
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-white/35">
            <span>Anugrah Homes</span>
            <span>Jattari · Aligarh</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
