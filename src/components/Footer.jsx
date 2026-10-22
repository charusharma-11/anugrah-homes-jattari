import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B3D3E] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-8">
          {/* BRAND */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9D8C8]/50 text-[#B9D8C8]">
                <span className="font-serif text-lg">J</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.25em]">
                  JATTARI
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  Premium Plots
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-6 text-white/65">
              A thoughtfully planned destination designed around contemporary
              living, connectivity and long-term value.
            </p>

            <div className="mt-4 h-px w-16 bg-[#B9D8C8]" />
          </div>

          {/* EXPLORE */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#B9D8C8]">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/65">
              <Link className="transition hover:translate-x-1 hover:text-white" to="/about">
                About
              </Link>
              <Link className="transition hover:translate-x-1 hover:text-white" to="/project">
                Project
              </Link>
              <Link className="transition hover:translate-x-1 hover:text-white" to="/amenities">
                Amenities
              </Link>
              <Link className="transition hover:translate-x-1 hover:text-white" to="/location">
                Location
              </Link>
            </div>
          </div>

          {/* DISCOVER */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#B9D8C8]">
              Discover
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/65">
              <Link className="transition hover:translate-x-1 hover:text-white" to="/gallery">
                Gallery
              </Link>
              <Link className="transition hover:translate-x-1 hover:text-white" to="/faq">
                FAQ
              </Link>
              <Link className="transition hover:translate-x-1 hover:text-white" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#B9D8C8]">
              Contact
            </p>

            <div className="space-y-3">
              <a
                href="tel:+917678279151"
                className="group flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-[#B9D8C8]" />
                <span>+91 76782 79151</span>
              </a>

              <a
                href="tel:+919115253545"
                className="group flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-[#B9D8C8]" />
                <span>+91 91152 53545</span>
              </a>

              <a
                href="mailto:info@anugrahhomes.com"
                className="flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-[#B9D8C8]" />
                <span className="break-all">info@anugrahhomes.com</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm text-[#B9D8C8] transition hover:text-white"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="mt-7 border-t border-white/15 pt-4">
          <div className="flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Anugrah Homes · Jattari, Aligarh, Palwal Road, Uttar Pradesh –
              202137
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#B9D8C8] transition hover:text-white"
            >
              Enquire now <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 flex flex-col justify-between gap-2 border-t border-white/15 pt-4 text-xs text-white/45 sm:flex-row">
          <p>© 2026 Jattari. All rights reserved.</p>
          <p>Premium plotted development</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
