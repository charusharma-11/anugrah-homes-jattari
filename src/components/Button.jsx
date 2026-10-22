import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Button({
  children = "Explore Project",
  to = "/contact",
  dark = true,
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
        dark
          ? "bg-[#171614] text-white hover:bg-[#d7b77a] hover:text-[#171614]"
          : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#171614]"
      }`}
    >
      {children}

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-black/10">
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}

export default Button;