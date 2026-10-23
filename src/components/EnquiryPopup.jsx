import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Phone,
  UserRound,
  Mail,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    const cleanName = form.name.trim();
    const cleanPhone = form.phone.replace(/[\s()-]/g, "");
    const cleanEmail = form.email.trim();
    const cleanEnquiry = form.enquiry.trim();

    if (!cleanName) {
      newErrors.name = "Please enter your name.";
    } else if (cleanName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(cleanName)) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!cleanPhone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!cleanEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!cleanEnquiry) {
      newErrors.enquiry = "Please enter your enquiry.";
    } else if (cleanEnquiry.length < 10) {
      newErrors.enquiry = "Enquiry must be at least 10 characters.";
    } else if (cleanEnquiry.length > 500) {
      newErrors.enquiry = "Enquiry cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Validated data is not sent or saved yet.
    setIsOpen(false);
    navigate("/contact");
  };

  if (!isOpen) return null;

  const inputClass = (field) =>
    `w-full min-w-0 bg-transparent py-2.5 text-xs text-[#171614] outline-none ${
      errors[field] ? "placeholder:text-red-400" : ""
    }`;

  const wrapperClass = (field) =>
    `flex items-center gap-2 rounded-xl border bg-white px-2.5 ${
      errors[field]
        ? "border-red-500"
        : "border-[#e5e0d6] focus-within:border-[#0B3D3E]"
    }`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101b19]/55 px-3 py-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="relative mx-auto max-h-[90vh] w-[300px] max-w-[calc(100vw-24px)] overflow-y-auto rounded-[26px] border border-white/80 bg-[#f8f6f2] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
      >
        <div className="absolute left-8 right-8 top-0 h-[3px] rounded-b-full bg-[#0B3D3E]" />

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close enquiry popup"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#e7e1d5] bg-white text-gray-600 transition hover:bg-[#0B3D3E] hover:text-white"
        >
          <X size={14} />
        </button>

        <div className="mb-4 pr-6 pt-2">
          <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8a7555]">
            ANUGRAH HOMES · JATTARI
          </p>

          <h2
            id="enquiry-popup-title"
            className="font-serif text-xl font-semibold leading-tight text-[#171614]"
          >
            Let's Connect.
          </h2>

          <p className="mt-1.5 text-[11px] leading-4 text-gray-600">
            Tell us what you're looking for.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="popup-name" className="mb-1 block text-[11px] font-medium text-[#34332e]">
              Full Name
            </label>
            <div className={wrapperClass("name")}>
              <UserRound size={14} className="shrink-0 text-[#0B3D3E]" />
              <input
                id="popup-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                maxLength={80}
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "popup-name-error" : undefined}
                className={inputClass("name")}
              />
            </div>
            {errors.name && (
              <p id="popup-name-error" className="mt-1 text-[10px] text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="popup-phone" className="mb-1 block text-[11px] font-medium text-[#34332e]">
              Phone Number
            </label>
            <div className={wrapperClass("phone")}>
              <Phone size={14} className="shrink-0 text-[#0B3D3E]" />
              <input
                id="popup-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                maxLength={10}
                value={form.phone}
                onChange={(event) =>
                  handleChange({
                    target: {
                      name: "phone",
                      value: event.target.value.replace(/\D/g, "").slice(0, 10),
                    },
                  })
                }
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "popup-phone-error" : undefined}
                className={inputClass("phone")}
              />
            </div>
            {errors.phone && (
              <p id="popup-phone-error" className="mt-1 text-[10px] text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="popup-email" className="mb-1 block text-[11px] font-medium text-[#34332e]">
              Email Address
            </label>
            <div className={wrapperClass("email")}>
              <Mail size={14} className="shrink-0 text-[#0B3D3E]" />
              <input
                id="popup-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "popup-email-error" : undefined}
                className={inputClass("email")}
              />
            </div>
            {errors.email && (
              <p id="popup-email-error" className="mt-1 text-[10px] text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="popup-enquiry" className="mb-1 block text-[11px] font-medium text-[#34332e]">
              Your Enquiry
            </label>
            <div className={`flex items-start gap-2 rounded-xl border bg-white px-2.5 ${
              errors.enquiry ? "border-red-500" : "border-[#e5e0d6] focus-within:border-[#0B3D3E]"
            }`}>
              <MessageSquare size={14} className="mt-2.5 shrink-0 text-[#0B3D3E]" />
              <textarea
                id="popup-enquiry"
                name="enquiry"
                rows={2}
                maxLength={500}
                placeholder="How can we help?"
                value={form.enquiry}
                onChange={handleChange}
                aria-invalid={Boolean(errors.enquiry)}
                aria-describedby={errors.enquiry ? "popup-enquiry-error" : undefined}
                className="w-full min-w-0 resize-none bg-transparent py-2.5 text-xs text-[#171614] outline-none"
              />
            </div>
            {errors.enquiry && (
              <p id="popup-enquiry-error" className="mt-1 text-[10px] text-red-600">
                {errors.enquiry}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D3E] px-3 py-3 text-xs font-semibold text-white shadow-md shadow-[#0B3D3E]/15 transition hover:bg-[#145253] focus:outline-none focus:ring-2 focus:ring-[#0B3D3E] focus:ring-offset-2"
          >
            Submit Enquiry
            <ArrowRight size={14} />
          </button>
        </form>

        <p className="mt-3 text-center text-[9px] text-gray-500">
          Anugrah Homes · Jattari
        </p>
      </div>
    </div>
  );
}