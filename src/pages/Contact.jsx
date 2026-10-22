// import { useState } from "react";
// import {
//   ArrowUpRight,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   CheckCircle2,
//   Clock3,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import Button from "../components/Button";
// import ScrollReveal from "../components/ScrollReveal";

// function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 4000);
//   };

//   return (
//     <main className="overflow-hidden bg-[#f8f6f2] text-[#171614]">

//       {/* =========================
//           HERO
//       ========================= */}
//       <section className="relative min-h-[75vh] overflow-hidden bg-[#171614] text-white">

//         <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#d7b77a]/20 animate-rotate-slow" />

//         <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10" />

//         <div className="absolute right-[12%] top-[28%] h-3 w-3 rounded-full bg-[#d7b77a] animate-float" />

//         <div className="absolute left-[18%] top-[40%] h-2 w-2 rounded-full bg-white/40 animate-float delay-300" />

//         <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-24">

//           <ScrollReveal direction="left" duration={1000}>

//             <div className="max-w-4xl">

//               <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#d7b77a]">
//                 Get in touch
//               </p>

//               <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
//                 Let&apos;s talk about
//                 <span className="block text-[#d7b77a]">
//                   what comes next.
//                 </span>
//               </h1>

//               <ScrollReveal direction="up" delay={180} duration={850}>

//                 <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
//                   Whether you want to understand the project, explore the
//                   location, or simply ask a question, our team is here to help.
//                 </p>

//               </ScrollReveal>

//             </div>

//           </ScrollReveal>

//         </div>

//       </section>


//       {/* =========================
//           CONTACT INTRO
//       ========================= */}
//       <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//         <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">

//           <ScrollReveal direction="left">

//             <div>

//               <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9b7a43]">
//                 Contact details
//               </p>

//               <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
//                 Start with a conversation.
//               </h2>

//               <p className="mt-6 max-w-lg text-sm leading-7 text-[#171614]/55 sm:text-base">
//                 Connect with Anugrah Homes to learn more about the Jattari
//                 development, its location, planning and the next steps for
//                 exploring the project.
//               </p>

//             </div>

//           </ScrollReveal>


//           {/* CONTACT CARDS */}
//           <div className="grid gap-4 sm:grid-cols-2">

//             {/* PHONE CARD */}
//             <ScrollReveal direction="up" delay={100} duration={800}>

//               <a
//                 href="tel:+917678279151"
//                 className="premium-card group block rounded-3xl border border-black/10 bg-white p-7"
//               >

//                 <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a] transition group-hover:scale-110">
//                   <Phone size={20} />
//                 </div>

//                 <p className="text-xs uppercase tracking-[0.18em] text-black/40">
//                   Call us
//                 </p>

//                 <p className="mt-3 text-lg font-medium">
//                   +91 76782 79151
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#9b7a43]">
//                   Call now

//                   <ArrowUpRight
//                     size={15}
//                     className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </div>

//               </a>

//             </ScrollReveal>


//             {/* ALTERNATE PHONE */}
//             <ScrollReveal direction="up" delay={200} duration={800}>

//               <a
//                 href="tel:+919115253545"
//                 className="premium-card group block rounded-3xl border border-black/10 bg-white p-7"
//               >

//                 <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a] transition group-hover:scale-110">
//                   <Phone size={20} />
//                 </div>

//                 <p className="text-xs uppercase tracking-[0.18em] text-black/40">
//                   Alternate number
//                 </p>

//                 <p className="mt-3 text-lg font-medium">
//                   +91 91152 53545
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#9b7a43]">
//                   Call now

//                   <ArrowUpRight
//                     size={15}
//                     className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </div>

//               </a>

//             </ScrollReveal>


//             {/* EMAIL */}
//             <ScrollReveal direction="up" delay={300} duration={800}>

//               <a
//                 href="mailto:info@anugrahhomes.com"
//                 className="premium-card group block rounded-3xl border border-black/10 bg-white p-7"
//               >

//                 <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a] transition group-hover:scale-110">
//                   <Mail size={20} />
//                 </div>

//                 <p className="text-xs uppercase tracking-[0.18em] text-black/40">
//                   Email
//                 </p>

//                 <p className="mt-3 break-all text-lg font-medium">
//                   info@anugrahhomes.com
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#9b7a43]">
//                   Send email

//                   <ArrowUpRight
//                     size={15}
//                     className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </div>

//               </a>

//             </ScrollReveal>


//             {/* ENQUIRIES */}
//             <ScrollReveal direction="up" delay={400} duration={800}>

//               <div className="premium-card rounded-3xl border border-black/10 bg-[#ebe7df] p-7">

//                 <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a]">
//                   <Clock3 size={20} />
//                 </div>

//                 <p className="text-xs uppercase tracking-[0.18em] text-black/40">
//                   Enquiries
//                 </p>

//                 <p className="mt-3 text-lg font-medium">
//                   Speak with our team
//                 </p>

//                 <p className="mt-3 text-sm leading-6 text-black/50">
//                   Reach out to discuss your requirements and learn more about
//                   the project.
//                 </p>

//               </div>

//             </ScrollReveal>

//           </div>

//         </div>

//       </section>


//       {/* =========================
//           ADDRESS + FORM
//       ========================= */}
//       <section className="bg-[#ebe7df] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//         <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">

//           {/* ADDRESS */}
//           <ScrollReveal direction="left">

//             <div>

//               <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9b7a43]">
//                 Visit us
//               </p>

//               <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
//                 Find us at Jattari.
//               </h2>

//               <ScrollReveal direction="up" delay={180} duration={850}>

//                 <div className="mt-10 rounded-3xl bg-[#171614] p-8 text-white sm:p-10">

//                   <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7b77a]/40 text-[#d7b77a]">
//                     <MapPin size={22} />
//                   </div>

//                   <p className="text-xs uppercase tracking-[0.2em] text-[#d7b77a]">
//                     Anugrah Homes
//                   </p>

//                   <p className="mt-5 text-xl leading-8 text-white/80">
//                     Jattari, Aligarh,
//                     <br />
//                     Palwal Road,
//                     <br />
//                     Uttar Pradesh – 202137
//                   </p>

//                   <div className="mt-10 border-t border-white/10 pt-6">

//                     <p className="text-xs uppercase tracking-[0.18em] text-white/35">
//                       Location
//                     </p>

//                     <p className="mt-2 text-sm text-white/55">
//                       Jattari · Aligarh · Uttar Pradesh
//                     </p>

//                   </div>

//                 </div>

//               </ScrollReveal>

//             </div>

//           </ScrollReveal>


//           {/* FORM */}
//           <ScrollReveal direction="right" delay={150} duration={1000}>

//             <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.07)] sm:p-10 lg:p-12">

//               <div className="mb-10">

//                 <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9b7a43]">
//                   Enquiry
//                 </p>

//                 <h2 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
//                   Tell us what you&apos;re looking for.
//                 </h2>

//                 <p className="mt-4 text-sm leading-6 text-black/50">
//                   Fill in your details and our team can get in touch with you.
//                 </p>

//               </div>


//               {submitted ? (

//                 <ScrollReveal direction="scale" duration={700}>

//                   <div className="flex min-h-[360px] flex-col items-center justify-center text-center">

//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a]">
//                       <CheckCircle2 size={34} />
//                     </div>

//                     <h3 className="mt-7 text-2xl font-medium">
//                       Thank you for your enquiry.
//                     </h3>

//                     <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
//                       Your details have been recorded on this page. Our team
//                       can connect with you using the contact information
//                       provided.
//                     </p>

//                   </div>

//                 </ScrollReveal>

//               ) : (

//                 <form onSubmit={handleSubmit} className="space-y-6">

//                   <div className="grid gap-6 sm:grid-cols-2">

//                     <div>

//                       <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/50">
//                         Your name
//                       </label>

//                       <input
//                         type="text"
//                         required
//                         placeholder="Enter your name"
//                         className="w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-sm outline-none transition focus:border-[#9b7a43] focus:ring-2 focus:ring-[#d7b77a]/20"
//                       />

//                     </div>


//                     <div>

//                       <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/50">
//                         Phone number
//                       </label>

//                       <input
//                         type="tel"
//                         required
//                         placeholder="Enter phone number"
//                         className="w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-sm outline-none transition focus:border-[#9b7a43] focus:ring-2 focus:ring-[#d7b77a]/20"
//                       />

//                     </div>

//                   </div>


//                   <div>

//                     <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/50">
//                       Email address
//                     </label>

//                     <input
//                       type="email"
//                       placeholder="Enter email address"
//                       className="w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-sm outline-none transition focus:border-[#9b7a43] focus:ring-2 focus:ring-[#d7b77a]/20"
//                     />

//                   </div>


//                   <div>

//                     <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/50">
//                       I am interested in
//                     </label>

//                     <select
//                       required
//                       defaultValue=""
//                       className="w-full appearance-none rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-sm outline-none transition focus:border-[#9b7a43] focus:ring-2 focus:ring-[#d7b77a]/20"
//                     >

//                       <option value="" disabled>
//                         Select an option
//                       </option>

//                       <option value="project">
//                         Project Information
//                       </option>

//                       <option value="location">
//                         Location Information
//                       </option>

//                       <option value="visit">
//                         Site Visit
//                       </option>

//                       <option value="investment">
//                         Investment Enquiry
//                       </option>

//                     </select>

//                   </div>


//                   <div>

//                     <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/50">
//                       Message
//                     </label>

//                     <textarea
//                       rows="5"
//                       placeholder="Write your message..."
//                       className="w-full resize-none rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-sm outline-none transition focus:border-[#9b7a43] focus:ring-2 focus:ring-[#d7b77a]/20"
//                     />

//                   </div>


//                   <button
//                     type="submit"
//                     className="button-shine group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#171614] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#d7b77a] hover:text-[#171614]"
//                   >

//                     Send enquiry

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-black/10">

//                       <Send
//                         size={14}
//                         className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                       />

//                     </span>

//                   </button>

//                 </form>

//               )}

//             </div>

//           </ScrollReveal>

//         </div>

//       </section>


//       {/* =========================
//           FINAL CTA
//       ========================= */}
//       <section className="relative overflow-hidden bg-[#171614] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

//         <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-[#d7b77a]/20 animate-rotate-slow" />

//         <ScrollReveal direction="up" duration={1000}>

//           <div className="relative mx-auto max-w-7xl text-center">

//             <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d7b77a]">
//               Your next step
//             </p>

//             <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
//               Have a question?

//               <span className="block text-white/35">
//                 Let&apos;s start there.
//               </span>
//             </h2>

//             <ScrollReveal direction="up" delay={180} duration={800}>

//               <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
//                 Reach out directly and speak with the Anugrah Homes team about
//                 the Jattari project.
//               </p>

//             </ScrollReveal>


//             <div className="mt-9 flex flex-wrap justify-center gap-4">

//               <ScrollReveal direction="scale" delay={300} duration={750}>

//                 <Button to="/location">
//                   View Location
//                 </Button>

//               </ScrollReveal>


//               <ScrollReveal direction="scale" delay={400} duration={750}>

//                 <a
//                   href="tel:+917678279151"
//                   className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#171614]"
//                 >

//                   Call +91 76782 79151

//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-black/10">
//                     <Phone size={14} />
//                   </span>

//                 </a>

//               </ScrollReveal>

//             </div>

//           </div>

//         </ScrollReveal>

//       </section>

//     </main>
//   );
// }

// export default Contact;
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Clock3,
  ArrowLeft,
  Sparkles,
  UserRound,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      const name = formData.name.trim();

      if (!name) {
        newErrors.name = "Please enter your name.";
      } else if (name.length < 2) {
        newErrors.name = "Name must contain at least 2 characters.";
      } else if (!/^[\p{L}\p{M} .'-]+$/u.test(name)) {
        newErrors.name = "Please enter a valid name.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
      }

      if (
        formData.email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())
      ) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (currentStep === 2 && !formData.interest) {
      newErrors.interest = "Please select what you are interested in.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nextValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    setFormData((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleNext = () => {
    if (validateStep(1)) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep(2)) return;

    // Validate the contact details again before showing success.
    if (!validateStep(1)) {
      setStep(1);
      return;
    }

    setIsSubmitting(true);

    // Frontend-only submission: connect your enquiry API here.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData(initialForm);
    setErrors({});
    setStep(1);
    setSubmitted(false);
  };

  const inputClass = (field) =>
    `contact-input w-full rounded-2xl border ${
      errors[field] ? "border-red-400/80" : "border-white/10"
    } bg-[#0B3D3E]/70 px-5 pb-4 pt-5 text-sm text-[#F7F8F5] outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#B9D8C8]/70 focus:bg-[#0B3D3E] focus:ring-2 focus:ring-[#B9D8C8]/10`;

  const labelClass =
    "mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B9D8C8]/75";

  return (
    <main className="contact-page overflow-hidden bg-[#F7F8F5] text-[#0B3D3E]">
      <style>{`
        .contact-page {
          --contact-primary: #0F5257;
          --contact-green: #287A6D;
          --contact-deep: #0B3D3E;
          --contact-mint: #B9D8C8;
          --contact-white: #F7F8F5;
          --contact-light: #EAF0EB;
        }

        .contact-ambient {
          background:
            radial-gradient(ellipse at 15% 20%, rgba(40,122,109,.34), transparent 38%),
            radial-gradient(ellipse at 82% 15%, rgba(185,216,200,.14), transparent 32%),
            radial-gradient(ellipse at 70% 90%, rgba(15,82,87,.7), transparent 42%),
            #0B3D3E;
          background-size: 140% 140%;
          animation: contactAmbient 15s ease-in-out infinite alternate;
        }

        .contact-orb {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          filter: blur(1px);
          animation: contactFloat 9s ease-in-out infinite;
        }

        .contact-orb-one {
          width: 280px;
          height: 280px;
          top: 12%;
          right: 5%;
          background: radial-gradient(circle, rgba(185,216,200,.13), rgba(40,122,109,.04) 55%, transparent 72%);
        }

        .contact-orb-two {
          width: 230px;
          height: 230px;
          bottom: 4%;
          left: -4%;
          background: radial-gradient(circle, rgba(40,122,109,.24), rgba(15,82,87,.04) 60%, transparent 72%);
          animation-delay: -4s;
        }

        .contact-grid {
          background-image:
            linear-gradient(rgba(185,216,200,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,216,200,.035) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
        }

        .contact-glass {
          background: linear-gradient(145deg, rgba(255,255,255,.095), rgba(255,255,255,.025));
          border: 1px solid rgba(185,216,200,.17);
          box-shadow: 0 30px 100px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,.07);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .contact-card {
          transition: transform .4s ease, border-color .4s ease, background .4s ease, box-shadow .4s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(185,216,200,.48);
          background: rgba(255,255,255,.075);
          box-shadow: 0 20px 55px rgba(0,0,0,.13);
        }

        .contact-input:focus {
          box-shadow: 0 0 0 3px rgba(185,216,200,.07), 0 0 24px rgba(40,122,109,.12);
        }

        .contact-step-enter {
          animation: contactStepEnter .45s cubic-bezier(.2,.75,.25,1) both;
        }

        .contact-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: linear-gradient(110deg, #0F5257, #287A6D, #0B3D3E, #287A6D);
          background-size: 300% 300%;
          animation: contactGradient 6s ease infinite;
        }

        .contact-cta::before {
          content: "";
          position: absolute;
          inset: -2px;
          z-index: -1;
          border-radius: inherit;
          background: conic-gradient(from 0deg, #B9D8C8, #287A6D, #0F5257, #EAF0EB, #B9D8C8);
          animation: contactSpin 5s linear infinite;
        }

        .contact-cta::after {
          content: "";
          position: absolute;
          inset: 1px;
          z-index: -1;
          border-radius: inherit;
          background: #0B3D3E;
        }

        .contact-cta:hover::after {
          background: #0F5257;
        }

        .contact-pulse {
          animation: contactPulse 2.6s ease-in-out infinite;
        }

        .contact-success {
          animation: contactSuccess .65s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes contactAmbient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes contactFloat {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(0,-24px,0) scale(1.05); }
        }

        @keyframes contactGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes contactSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes contactPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(185,216,200,.12); }
          50% { box-shadow: 0 0 0 10px rgba(185,216,200,0); }
        }

        @keyframes contactStepEnter {
          from { opacity: 0; transform: translate3d(24px, 8px, 0) scale(.985); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes contactSuccess {
          0% { opacity: 0; transform: scale(.9) translateY(14px); }
          70% { opacity: 1; transform: scale(1.025) translateY(0); }
          100% { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* ========================= HERO ========================= */}
      <section className="contact-ambient relative isolate min-h-[72vh] overflow-hidden text-white sm:min-h-[78vh]">
        <div className="contact-grid absolute inset-0" />
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="absolute left-[12%] top-[30%] h-2 w-2 rounded-full bg-[#B9D8C8] shadow-[0_0_22px_rgba(185,216,200,.9)] contact-pulse" />
        <div className="absolute right-[20%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#B9D8C8]/80" />
        <div className="absolute bottom-[20%] right-[12%] h-2 w-2 rounded-full bg-[#287A6D] shadow-[0_0_20px_rgba(40,122,109,.9)]" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-16 pt-36 sm:min-h-[78vh] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_.55fr]">
            <ScrollReveal direction="left" duration={1000}>
              <div className="max-w-4xl">
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#B9D8C8]/20 bg-white/[0.045] px-4 py-2.5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#B9D8C8] shadow-[0_0_12px_rgba(185,216,200,.8)]" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#B9D8C8] sm:text-xs">
                    Get in touch
                  </p>
                </div>

                <h1 className="text-5xl font-medium leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                  Let&apos;s talk about
                  <span className="mt-2 block bg-gradient-to-r from-[#F7F8F5] via-[#B9D8C8] to-[#287A6D] bg-clip-text text-transparent">
                    what comes next.
                  </span>
                </h1>

                <ScrollReveal direction="up" delay={180} duration={850}>
                  <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg">
                    Whether you want to understand the project, explore the
                    location, or simply ask a question, our team is here to help.
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={220}>
              <div className="contact-glass relative hidden rounded-[2rem] p-6 lg:block">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B9D8C8]/65">
                    Your next step
                  </span>
                  <Sparkles size={17} className="text-[#B9D8C8]" />
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B9D8C8]/20 bg-[#287A6D]/20 text-[#B9D8C8]">
                    <MessageCircle size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Start a conversation
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Anugrah Homes · Jattari
                    </p>
                  </div>
                </div>

                <div className="mt-7 h-px bg-gradient-to-r from-[#B9D8C8]/35 via-white/10 to-transparent" />
                <p className="mt-5 text-xs leading-6 text-white/45">
                  Project information, location details and site visits — our
                  team is here to help you explore the possibilities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================= CONTACT INTRO ========================= */}
      <section className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#B9D8C8]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <ScrollReveal direction="left">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#287A6D] sm:text-xs">
                Contact details
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">
                Start with a conversation.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#0B3D3E]/65 sm:text-base">
                Connect with Anugrah Homes to learn more about the Jattari
                development, its location, planning and the next steps for
                exploring the project.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#287A6D]/20 bg-[#EAF0EB] text-[#287A6D]">
                  <CheckCircle2 size={17} />
                </div>
                <p className="text-xs text-[#0B3D3E]/60">
                  Personal assistance from our project team
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">
            <ScrollReveal direction="up" delay={100} duration={800}>
              <a
                href="tel:+917678279151"
                className="contact-card group block h-full rounded-3xl border border-[#0F5257]/10 bg-white p-7 shadow-[0_12px_45px_rgba(11,61,62,.045)]"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D3E] text-[#B9D8C8] transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
                  <Phone size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/45">
                  Call us
                </p>
                <p className="mt-3 text-lg font-medium">
                  +91 76782 79151
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#287A6D]">
                  Call now
                  <ArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={800}>
              <a
                href="tel:+919115253545"
                className="contact-card group block h-full rounded-3xl border border-[#0F5257]/10 bg-white p-7 shadow-[0_12px_45px_rgba(11,61,62,.045)]"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D3E] text-[#B9D8C8] transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
                  <Phone size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/45">
                  Alternate number
                </p>
                <p className="mt-3 text-lg font-medium">
                  +91 91152 53545
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#287A6D]">
                  Call now
                  <ArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={800}>
              <a
                href="mailto:info@anugrahhomes.com"
                className="contact-card group block h-full rounded-3xl border border-[#0F5257]/10 bg-white p-7 shadow-[0_12px_45px_rgba(11,61,62,.045)]"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D3E] text-[#B9D8C8] transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
                  <Mail size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/45">
                  Email
                </p>
                <p className="mt-3 break-all text-lg font-medium">
                  info@anugrahhomes.com
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#287A6D]">
                  Send email
                  <ArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} duration={800}>
              <div className="contact-card h-full rounded-3xl border border-[#0F5257]/10 bg-[#EAF0EB] p-7">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D3E] text-[#B9D8C8]">
                  <Clock3 size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#0B3D3E]/45">
                  Enquiries
                </p>
                <p className="mt-3 text-lg font-medium">
                  Speak with our team
                </p>
                <p className="mt-3 text-sm leading-6 text-[#0B3D3E]/60">
                  Reach out to discuss your requirements and learn more about
                  the project.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================= ADDRESS + FORM ========================= */}
      <section className="contact-ambient relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="contact-grid absolute inset-0" />
        <div className="contact-orb contact-orb-one" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
          {/* ADDRESS */}
          <ScrollReveal direction="left">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#B9D8C8] sm:text-xs">
                Visit us
              </p>

              <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">
                Find us at Jattari.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Connect with us to learn more about the project and arrange
                your visit.
              </p>

              <ScrollReveal direction="up" delay={180} duration={850}>
                <div className="contact-glass mt-9 rounded-[2rem] p-7 sm:p-9">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B9D8C8]/25 bg-[#287A6D]/20 text-[#B9D8C8]">
                    <MapPin size={22} />
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B9D8C8]">
                    Anugrah Homes
                  </p>

                  <p className="mt-5 text-xl leading-8 text-white/90">
                    Jattari, Aligarh,
                    <br />
                    Palwal Road,
                    <br />
                    Uttar Pradesh – 202137
                  </p>

                  <div className="mt-9 border-t border-white/10 pt-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-white/65">
                      Jattari · Aligarh · Uttar Pradesh
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jattari%2C+Aligarh%2C+Uttar+Pradesh"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B9D8C8] transition hover:text-white"
                  >
                    Open in Maps <ArrowUpRight size={15} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* CONVERSATIONAL ENQUIRY FORM */}
          <ScrollReveal direction="right" delay={150} duration={1000}>
            <div className="contact-glass relative overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#287A6D]/20 blur-[75px]" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#B9D8C8]">
                      Enquiry
                    </p>
                    <h2 className="text-2xl font-medium leading-tight tracking-[-.03em] sm:text-3xl">
                      Tell us what you&apos;re looking for.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      Fill in your details and our team can get in touch with you.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#B9D8C8]/20 bg-[#287A6D]/15 text-[#B9D8C8] sm:flex">
                    <Sparkles size={21} />
                  </div>
                </div>

                {!submitted ? (
                  <>
                    {/* STEP PROGRESS */}
                    <div className="mb-8">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                          Step 0{step} of 02
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#B9D8C8]">
                          {step === 1 ? "Your details" : "Your enquiry"}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <div
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            step >= 1 ? "bg-[#B9D8C8]" : "bg-white/10"
                          }`}
                        />
                        <div
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            step >= 2 ? "bg-[#B9D8C8]" : "bg-white/10"
                          }`}
                        />
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="relative"
                    >
                      {step === 1 ? (
                        <div key="contact-step-one" className="contact-step-enter space-y-5">
                          <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#287A6D]/20 text-[#B9D8C8]">
                              <UserRound size={18} />
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-white">
                                First, let&apos;s get to know you.
                              </h3>
                              <p className="mt-1 text-xs text-white/45">
                                Share your contact details below.
                              </p>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="contact-name" className={labelClass}>
                              Your name <span className="text-[#B9D8C8]">*</span>
                            </label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              aria-invalid={Boolean(errors.name)}
                              aria-describedby={errors.name ? "contact-name-error" : undefined}
                              className={inputClass("name")}
                            />
                            {errors.name && (
                              <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-300">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="contact-phone" className={labelClass}>
                              Phone number <span className="text-[#B9D8C8]">*</span>
                            </label>
                            <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-[#0B3D3E]/70 transition focus-within:border-[#B9D8C8]/70 focus-within:ring-2 focus-within:ring-[#B9D8C8]/10">
                              <span className="flex items-center border-r border-white/10 px-4 text-sm text-[#B9D8C8]">
                                +91
                              </span>
                              <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="10-digit mobile number"
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                                className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/30"
                              />
                            </div>
                            {errors.phone && (
                              <p id="contact-phone-error" role="alert" className="mt-2 text-xs text-red-300">
                                {errors.phone}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="contact-email" className={labelClass}>
                              Email address <span className="text-white/35">(Optional)</span>
                            </label>
                            <input
                              id="contact-email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter email address"
                              aria-invalid={Boolean(errors.email)}
                              aria-describedby={errors.email ? "contact-email-error" : undefined}
                              className={inputClass("email")}
                            />
                            {errors.email && (
                              <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-300">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={handleNext}
                            className="contact-cta group mt-3 flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5"
                          >
                            Continue
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
                              <ArrowUpRight size={15} />
                            </span>
                          </button>
                        </div>
                      ) : (
                        <div key="contact-step-two" className="contact-step-enter space-y-5">
                          <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#287A6D]/20 text-[#B9D8C8]">
                              <MessageCircle size={18} />
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-white">
                                How can we help you?
                              </h3>
                              <p className="mt-1 text-xs text-white/45">
                                Tell us a little about your enquiry.
                              </p>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="contact-interest" className={labelClass}>
                              I am interested in <span className="text-[#B9D8C8]">*</span>
                            </label>
                            <select
                              id="contact-interest"
                              name="interest"
                              value={formData.interest}
                              onChange={handleChange}
                              aria-invalid={Boolean(errors.interest)}
                              aria-describedby={errors.interest ? "contact-interest-error" : undefined}
                              className={`${inputClass("interest")} appearance-none`}
                            >
                              <option value="" disabled className="bg-[#0B3D3E]">
                                Select an option
                              </option>
                              <option value="project" className="bg-[#0B3D3E]">
                                Project Information
                              </option>
                              <option value="location" className="bg-[#0B3D3E]">
                                Location Information
                              </option>
                              <option value="visit" className="bg-[#0B3D3E]">
                                Site Visit
                              </option>
                              <option value="investment" className="bg-[#0B3D3E]">
                                Investment Enquiry
                              </option>
                            </select>
                            {errors.interest && (
                              <p id="contact-interest-error" role="alert" className="mt-2 text-xs text-red-300">
                                {errors.interest}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="contact-message" className={labelClass}>
                              Message
                            </label>
                            <textarea
                              id="contact-message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Write your message..."
                              className={`${inputClass("message")} resize-y`}
                            />
                          </div>

                          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/75 transition hover:border-[#B9D8C8]/50 hover:text-white sm:w-auto"
                            >
                              <ArrowLeft size={15} />
                              Back
                            </button>

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="contact-cta group flex flex-1 items-center justify-center gap-3 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
                            >
                              {isSubmitting ? "Sending..." : "Send enquiry"}
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
                                <Send
                                  size={14}
                                  className={isSubmitting ? "animate-pulse" : "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}
                                />
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </form>

                    <p className="mt-6 text-center text-[10px] leading-5 text-white/35">
                      Fields marked * are required. Your details are used to
                      respond to your enquiry.
                    </p>
                  </>
                ) : (
                  <div className="contact-success flex min-h-[350px] flex-col items-center justify-center py-8 text-center">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#B9D8C8]/30 bg-[#287A6D]/20 text-[#B9D8C8]">
                      <div className="absolute inset-[-8px] rounded-full border border-[#B9D8C8]/15" />
                      <CheckCircle2 size={34} />
                    </div>

                    <p className="mt-7 text-[10px] uppercase tracking-[0.22em] text-[#B9D8C8]">
                      Enquiry completed
                    </p>

                    <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
                      Thank you for your enquiry.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                      Your details have been recorded on this page. Our team
                      can connect with you using the contact information
                      provided.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#B9D8C8]/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#B9D8C8] transition hover:bg-[#B9D8C8]/10"
                    >
                      Send another enquiry <ArrowUpRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative isolate overflow-hidden bg-[#0B3D3E] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="contact-grid absolute inset-0 opacity-60" />
        <div className="contact-orb contact-orb-one" />

        <ScrollReveal direction="up" duration={1000}>
          <div className="relative mx-auto max-w-7xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#B9D8C8] sm:text-xs">
              Your next step
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl lg:text-7xl">
              Have a question?
              <span className="block bg-gradient-to-r from-white/35 via-[#B9D8C8] to-white/35 bg-clip-text text-transparent">
                Let&apos;s start there.
              </span>
            </h2>

            <ScrollReveal direction="up" delay={180} duration={800}>
              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Reach out directly and speak with the Anugrah Homes team about
                the Jattari project.
              </p>
            </ScrollReveal>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ScrollReveal direction="scale" delay={300} duration={750}>
                <Button to="/location">
                  View Location
                </Button>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={400} duration={750}>
                <a
                  href="tel:+917678279151"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#B9D8C8]/25 bg-white/[0.04] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:border-[#B9D8C8]/60 hover:bg-[#B9D8C8] hover:text-[#0B3D3E]"
                >
                  Call +91 76782 79151
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#0B3D3E]/10">
                    <Phone size={14} />
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default Contact;