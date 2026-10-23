// import { useState } from "react";
// import {
//   ArrowUpRight,
//   MessageCircle,
//   Plus,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// import ScrollReveal from "../components/ScrollReveal";

// const faqs = [
//   {
//     category: "Project",
//     question: "What is the Jattari project?",
//     answer:
//       "Jattari is a thoughtfully planned plotted development designed around practical connectivity, open surroundings and contemporary lifestyle requirements.",
//   },
//   {
//     category: "Project",
//     question: "What type of development is being offered?",
//     answer:
//       "The project is focused on plotted development, giving buyers the flexibility to plan and use their space according to their requirements and future plans.",
//   },
//   {
//     category: "Location",
//     question: "Where is the Jattari project located?",
//     answer:
//       "The project is located in Jattari, Aligarh, along the Palwal Road in Uttar Pradesh. For the exact project location and directions, please contact the project team.",
//   },
//   {
//     category: "Location",
//     question: "How can I visit the project?",
//     answer:
//       "You can contact the project team to coordinate a site visit and get the latest directions and visit information.",
//   },
//   {
//     category: "Amenities",
//     question: "What amenities are planned for the project?",
//     answer:
//       "The development focuses on practical infrastructure, open surroundings, internal movement and lifestyle-oriented planning. The project team can provide the latest detailed amenity information.",
//   },
//   {
//     category: "Investment",
//     question: "Can I get information about plot availability?",
//     answer:
//       "Yes. Current availability, plot options and related details can be discussed directly with the project team.",
//   },
//   {
//     category: "Investment",
//     question: "How can I enquire about pricing?",
//     answer:
//       "For current pricing and availability, please contact the team directly. Pricing and availability may change over time.",
//   },
//   {
//     category: "Visit",
//     question: "Can I schedule a site visit?",
//     answer:
//       "Yes. You can contact the team by phone or email to discuss a suitable site-visit time.",
//   },
// ];

// const categories = [
//   "All",
//   "Project",
//   "Location",
//   "Amenities",
//   "Investment",
//   "Visit",
// ];

// function FAQ() {
//   const [active, setActive] = useState(null);
//   const [category, setCategory] = useState("All");

//   const filteredFaqs =
//     category === "All"
//       ? faqs
//       : faqs.filter((faq) => faq.category === category);

//   return (
//     <main className="overflow-hidden bg-[#f8f6f2] text-[#171614]">

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-[#171614] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-12 lg:pb-32 lg:pt-44">

//         <div className="absolute right-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full border border-[#d7b77a]/15" />

//         <div className="animate-rotate-slow absolute right-[-40px] top-[-60px] h-[260px] w-[260px] rounded-full border border-[#d7b77a]/10" />

//         <div className="relative mx-auto max-w-7xl">

//           <ScrollReveal direction="left" duration={1000}>

//             <div className="max-w-4xl">

//               <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d7b77a]">

//                 <span className="h-px w-10 bg-[#d7b77a]" />

//                 FAQ

//               </div>

//               <h1 className="text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[100px]">

//                 Questions,

//                 <span className="block text-[#d7b77a]">
//                   answered.
//                 </span>

//               </h1>

//               <ScrollReveal direction="up" delay={180} duration={800}>

//                 <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
//                   Find answers to some of the common questions about the project,
//                   location, amenities, visits and enquiries.
//                 </p>

//               </ScrollReveal>

//             </div>

//           </ScrollReveal>

//         </div>

//       </section>


//       {/* ================= INTRO ================= */}
//       <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//         <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

//           <ScrollReveal direction="left">

//             <div>

//               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171614] text-[#d7b77a]">
//                 <MessageCircle size={21} />
//               </div>

//               <p className="mt-7 text-xs uppercase tracking-[0.22em] text-[#9b7a43]">
//                 Need More Information?
//               </p>

//               <h2 className="mt-4 max-w-md text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
//                 Everything you need to know,
//                 <span className="block text-[#9b7a43]">
//                   before you decide.
//                 </span>
//               </h2>

//             </div>

//           </ScrollReveal>


//           <ScrollReveal direction="right" delay={180}>

//             <div>

//               <p className="max-w-2xl text-lg leading-8 text-[#171614]/55">
//                 We have grouped the most useful information into simple
//                 categories so you can quickly find what you are looking for.
//                 If you need project-specific information, the team can assist
//                 you directly.
//               </p>

//             </div>

//           </ScrollReveal>

//         </div>

//       </section>


//       {/* ================= FAQ CONTENT ================= */}
//       <section className="bg-[#ebe7df] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//         <div className="mx-auto max-w-7xl">

//           {/* CATEGORY FILTER */}
//           <div className="mb-12 flex gap-2 overflow-x-auto pb-3">

//             {categories.map((item, index) => (

//               <ScrollReveal
//                 key={item}
//                 direction="up"
//                 delay={index * 70}
//                 duration={650}
//               >

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setCategory(item);
//                     setActive(null);
//                   }}
//                   className={`whitespace-nowrap rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
//                     category === item
//                       ? "border-[#171614] bg-[#171614] text-white"
//                       : "border-[#171614]/15 bg-[#f8f6f2] text-[#171614]/55 hover:border-[#d7b77a] hover:text-[#171614]"
//                   }`}
//                 >
//                   {item}
//                 </button>

//               </ScrollReveal>

//             ))}

//           </div>


//           {/* QUESTIONS */}
//           <div className="border-t border-[#171614]/15">

//             {filteredFaqs.map((faq, index) => {

//               const isOpen = active === index;

//               return (

//                 <ScrollReveal
//                   key={`${category}-${faq.question}`}
//                   direction={index % 2 === 0 ? "left" : "right"}
//                   delay={index * 90}
//                   duration={750}
//                 >

//                   <div
//                     className={`gold-line border-b border-[#171614]/15 transition-colors duration-500 ${
//                       isOpen ? "bg-[#f8f6f2]" : ""
//                     }`}
//                   >

//                     <button
//                       type="button"
//                       onClick={() => setActive(isOpen ? null : index)}
//                       className="flex w-full items-center justify-between gap-6 px-2 py-7 text-left sm:px-5 sm:py-8"
//                     >

//                       <div className="flex items-start gap-5">

//                         <span className="mt-1 text-xs text-[#9b7a43]">
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         <div>

//                           <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#171614]/35">
//                             {faq.category}
//                           </p>

//                           <h3 className="max-w-3xl text-lg font-medium leading-7 sm:text-xl">
//                             {faq.question}
//                           </h3>

//                         </div>

//                       </div>


//                       <span
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#171614]/15 transition-all duration-500 ${
//                           isOpen
//                             ? "rotate-45 border-[#d7b77a] bg-[#d7b77a]"
//                             : "bg-transparent"
//                         }`}
//                       >
//                         <Plus size={17} />
//                       </span>

//                     </button>


//                     <div
//                       className={`grid transition-all duration-500 ease-in-out ${
//                         isOpen
//                           ? "grid-rows-[1fr] opacity-100"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >

//                       <div className="overflow-hidden">

//                         <p className="max-w-3xl pb-8 pl-12 pr-12 text-sm leading-7 text-[#171614]/55 sm:pl-16">
//                           {faq.answer}
//                         </p>

//                       </div>

//                     </div>

//                   </div>

//                 </ScrollReveal>

//               );
//             })}

//           </div>

//         </div>

//       </section>


//       {/* ================= QUICK CONTACT ================= */}
//       <section className="bg-[#171614] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">

//             <ScrollReveal direction="left">

//               <div>

//                 <p className="text-xs uppercase tracking-[0.22em] text-[#d7b77a]">
//                   Still Have Questions?
//                 </p>

//                 <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">

//                   Sometimes the best answer

//                   <span className="block text-[#d7b77a]">
//                     is a conversation.
//                   </span>

//                 </h2>

//               </div>

//             </ScrollReveal>


//             <ScrollReveal direction="right" delay={180}>

//               <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">

//                 <p className="text-sm leading-6 text-white/45">
//                   Speak with the Jattari project team for current information
//                   about availability, pricing, site visits and project details.
//                 </p>

//                 <Link
//                   to="/contact"
//                   className="button-shine mt-7 inline-flex items-center gap-3 rounded-full bg-[#d7b77a] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171614]"
//                 >
//                   Contact Team

//                   <ArrowUpRight size={15} />

//                 </Link>

//               </div>

//             </ScrollReveal>

//           </div>

//         </div>

//       </section>


//       {/* ================= FINAL CTA ================= */}
//       <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//         <ScrollReveal direction="up" duration={1000}>

//           <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#d7b77a] px-7 py-14 sm:px-12 sm:py-20">

//             <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

//               <div>

//                 <p className="text-xs uppercase tracking-[0.22em] text-[#171614]/50">
//                   Jattari
//                 </p>

//                 <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
//                   Ready to explore the project?
//                 </h2>

//               </div>


//               <ScrollReveal direction="scale" delay={200} duration={800}>

//                 <Link
//                   to="/contact"
//                   className="button-shine group inline-flex w-fit items-center gap-4 rounded-full bg-[#171614] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#171614]"
//                 >

//                   Enquire Now

//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-black/10">

//                     <ArrowUpRight
//                       size={16}
//                       className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />

//                   </span>

//                 </Link>

//               </ScrollReveal>

//             </div>

//           </div>

//         </ScrollReveal>

//       </section>

//     </main>
//   );
// }

// export default FAQ;
import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Plus,
  Sparkles,
  MapPin,
  Building2,
  Wallet,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

import ScrollReveal from "../components/ScrollReveal";

const faqs = [
  {
    category: "Project",
    question: "What is the Jattari project?",
    answer:
      "Jattari is a thoughtfully planned plotted development designed around practical connectivity, open surroundings and contemporary lifestyle requirements.",
  },
  {
    category: "Project",
    question: "What type of development is being offered?",
    answer:
      "The project is focused on plotted development, giving buyers the flexibility to plan and use their space according to their requirements and future plans.",
  },
  {
    category: "Location",
    question: "Where is the Jattari project located?",
    answer:
      "The project is located in Jattari, Aligarh, along the Palwal Road in Uttar Pradesh. For the exact project location and directions, please contact the project team.",
  },
  {
    category: "Location",
    question: "How can I visit the project?",
    answer:
      "You can contact the project team to coordinate a site visit and get the latest directions and visit information.",
  },
  {
    category: "Amenities",
    question: "What amenities are planned for the project?",
    answer:
      "The development focuses on practical infrastructure, open surroundings, internal movement and lifestyle-oriented planning. The project team can provide the latest detailed amenity information.",
  },
  {
    category: "Investment",
    question: "Can I get information about plot availability?",
    answer:
      "Yes. Current availability, plot options and related details can be discussed directly with the project team.",
  },
  {
    category: "Investment",
    question: "How can I enquire about pricing?",
    answer:
      "For current pricing and availability, please contact the team directly. Pricing and availability may change over time.",
  },
  {
    category: "Visit",
    question: "Can I schedule a site visit?",
    answer:
      "Yes. You can contact the team by phone or email to discuss a suitable site-visit time.",
  },
];

const categories = [
  "All",
  "Project",
  "Location",
  "Amenities",
  "Investment",
  "Visit",
];

const categoryIcons = {
  Project: Building2,
  Location: MapPin,
  Amenities: Sparkles,
  Investment: Wallet,
  Visit: CalendarDays,
};

function FAQ() {
  const [active, setActive] = useState(null);
  const [category, setCategory] = useState("All");

  const filteredFaqs =
    category === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === category);

  return (
    <main className="faq-page w-full overflow-hidden bg-[#F7F8F5] text-[#0B3D3E]">
      {/* HERO */}
<section className="faq-hero relative isolate overflow-hidden bg-[#0B3D3E] px-5 pb-16 pt-20 text-white sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">        <div className="faq-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />

        <div className="faq-orb faq-orb-one pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full bg-[#287A6D]/40 blur-3xl sm:h-[480px] sm:w-[480px]" />

        <div className="faq-orb faq-orb-two pointer-events-none absolute -bottom-32 left-[25%] -z-10 h-64 w-64 rounded-full bg-[#B9D8C8]/15 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal direction="up" duration={900}>
            <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#B9D8C8] sm:text-xs">
              <span className="h-px w-10 bg-[#B9D8C8]" />
             
            </div>
          </ScrollReveal>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <ScrollReveal direction="left" duration={950}>
              <div>
                <h1 className="faq-heading text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[94px]">
                  Questions,
                  <span className="faq-heading-accent mt-2 block font-serif font-normal italic text-[#B9D8C8] sm:mt-3">
                    answered.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Find answers to common questions about the project,
                  location, amenities, visits and enquiries.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} duration={900}>
              <div className="faq-glass relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/[0.055] p-6 backdrop-blur-xl sm:rounded-[2rem] sm:p-8 lg:p-9">
                <div className="faq-orb faq-card-orb pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#287A6D]/35 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B9D8C8]/20 bg-[#287A6D]/20 text-[#B9D8C8]">
                      <MessageCircle size={21} />
                    </span>

                    <span className="rounded-full border border-[#B9D8C8]/20 bg-[#287A6D]/15 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#B9D8C8]">
                      Quick Help
                    </span>
                  </div>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Need more information?
                  </p>

                  <h2 className="mt-3 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                    Let’s make things
                    <span className="block font-serif italic font-normal text-[#B9D8C8]">
                      a little clearer.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                    Explore the answers below or connect directly with the
                    Jattari project team.
                  </p>

                  <Link
                    to="/contact"
                    className="faq-button-shine mt-7 inline-flex items-center gap-3 rounded-full bg-[#B9D8C8] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0B3D3E] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-xs"
                  >
                    Contact Team
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3D3E]/10">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
            {[
              { number: "01", label: "The Project", icon: Building2 },
              { number: "02", label: "The Location", icon: MapPin },
              { number: "03", label: "Investment", icon: Wallet },
              { number: "04", label: "Site Visits", icon: CalendarDays },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  direction="up"
                  delay={index * 90}
                  duration={700}
                >
                  <div className="faq-stat group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#B9D8C8]/30 hover:bg-white/[0.07] sm:gap-4 sm:p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#287A6D]/20 text-[#B9D8C8]">
                      <Icon size={17} />
                    </span>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.12em] text-white/35">
                        {item.number}
                      </p>
                      <p className="mt-1 text-xs font-medium text-white/85 sm:text-sm">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ScrollReveal direction="left">
            <div className="faq-intro-card relative overflow-hidden rounded-[1.7rem] border border-[#0B3D3E]/10 bg-[#EAF0EB] p-6 sm:rounded-[2rem] sm:p-9 lg:p-10">
              <div className="faq-intro-orb pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#B9D8C8]/80 blur-2xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5257] text-[#B9D8C8] shadow-lg shadow-[#0F5257]/15">
                  <MessageCircle size={20} />
                </div>

                <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#287A6D] sm:text-xs">
                  Need More Information?
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Everything you need to know,
                  <span className="mt-1 block font-serif font-normal italic text-[#287A6D]">
                    before you decide.
                  </span>
                </h2>

                <div className="mt-8 flex items-center gap-3 border-t border-[#0B3D3E]/10 pt-5">
                  <span className="h-2 w-2 rounded-full bg-[#287A6D]" />
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#0B3D3E]/55">
                    Your questions, all in one place
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="flex h-full flex-col justify-center rounded-[1.7rem] border border-[#0B3D3E]/10 bg-white p-6 sm:rounded-[2rem] sm:p-9 lg:p-12">
              <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF0EB] text-[#287A6D]">
                <Sparkles size={18} />
              </span>

              <p className="max-w-2xl text-base leading-8 text-[#0B3D3E]/65 sm:text-lg sm:leading-9">
                We have grouped the most useful information into simple
                categories so you can quickly find what you are looking for.
                If you need project-specific information, the team can assist
                you directly.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-[#0B3D3E]/10 bg-[#F7F8F5] p-4 sm:p-5">
                  <p className="text-2xl font-medium text-[#0F5257]">
                    {String(faqs.length).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-[#0B3D3E]/50 sm:text-[10px]">
                    Common Questions
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0B3D3E]/10 bg-[#F7F8F5] p-4 sm:p-5">
                  <p className="text-2xl font-medium text-[#0F5257]">
                    {categories.length - 1}
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-[#0B3D3E]/50 sm:text-[10px]">
                    Help Categories
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ BENTO GRID */}
      <section className="faq-content-section relative overflow-hidden bg-[#EAF0EB] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="faq-grid faq-grid-light pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#287A6D] sm:text-xs">
                  Find Your Answer
                </p>

                <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Frequently asked
                  <span className="block font-serif font-normal italic text-[#287A6D]">
                    questions.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#0B3D3E]/55">
                Select a category and open any question to read its answer.
              </p>
            </div>
          </ScrollReveal>

          {/* CATEGORY FILTER */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((item, index) => (
              <ScrollReveal
                key={item}
                direction="up"
                delay={index * 50}
                duration={550}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCategory(item);
                    setActive(null);
                  }}
                  className={`whitespace-nowrap rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:text-xs ${
                    category === item
                      ? "border-[#0B3D3E] bg-[#0B3D3E] text-white shadow-lg shadow-[#0B3D3E]/10"
                      : "border-[#0B3D3E]/15 bg-white/75 text-[#0B3D3E]/65 hover:border-[#287A6D]/50 hover:bg-white hover:text-[#0B3D3E]"
                  }`}
                >
                  {item}
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* QUESTIONS */}
          <div className="grid items-start gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-6">
            <ScrollReveal direction="left">
              <div className="faq-aside relative overflow-hidden rounded-[1.7rem] bg-[#0B3D3E] p-6 text-white sm:rounded-[2rem] sm:p-8 lg:sticky lg:top-24">
                <div className="faq-aside-orb pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#287A6D]/40 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#B9D8C8]/20 bg-[#287A6D]/20 text-[#B9D8C8]">
                      <MessageCircle size={19} />
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#B9D8C8]">
                      FAQ / 01
                    </span>
                  </div>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Browse by topic
                  </p>

                  <h3 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                    What would you like to know?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Choose a topic to find relevant answers about Jattari.
                  </p>

                  <div className="mt-7 space-y-2">
                    {categories.slice(1).map((item) => {
                      const Icon = categoryIcons[item];
                      const isSelected = category === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setCategory(isSelected ? "All" : item);
                            setActive(null);
                          }}
                          className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                            isSelected
                              ? "border-[#B9D8C8]/40 bg-[#287A6D]/30 text-[#B9D8C8]"
                              : "border-white/10 bg-white/[0.025] text-white/70 hover:border-[#B9D8C8]/30 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <Icon size={16} />
                            <span className="text-xs font-medium">{item}</span>
                          </span>

                          <ArrowUpRight size={14} />
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                      Showing
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#B9D8C8]">
                      {filteredFaqs.length}{" "}
                      {filteredFaqs.length === 1 ? "question" : "questions"}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="min-w-0 space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = active === index;
                const Icon = categoryIcons[faq.category] || MessageCircle;

                return (
                  <ScrollReveal
                    key={`${category}-${faq.question}`}
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={index * 55}
                    duration={650}
                  >
                    <article
                      className={`faq-item relative overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-[1.5rem] ${
                        isOpen
                          ? "border-[#287A6D]/30 bg-white shadow-[0_18px_45px_rgba(11,61,62,0.07)]"
                          : "border-[#0B3D3E]/10 bg-white/75 hover:border-[#287A6D]/30 hover:bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setActive(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-6 sm:p-6 lg:p-7"
                      >
                        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                          <span
                            className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                              isOpen
                                ? "bg-[#0F5257] text-[#B9D8C8]"
                                : "bg-[#EAF0EB] text-[#287A6D]"
                            }`}
                          >
                            <Icon size={17} />
                          </span>

                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#287A6D]">
                                {faq.category}
                              </span>

                              <span className="text-[9px] text-[#0B3D3E]/30">
                                / {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <h3 className="text-base font-medium leading-6 tracking-[-0.02em] text-[#0B3D3E] sm:text-lg sm:leading-7">
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                            isOpen
                              ? "rotate-45 border-[#0F5257] bg-[#0F5257] text-[#B9D8C8]"
                              : "border-[#0B3D3E]/15 bg-[#F7F8F5] text-[#0B3D3E] hover:border-[#287A6D]/50"
                          }`}
                        >
                          <Plus size={17} />
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-400 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-[4.5rem] mr-5 border-t border-[#0B3D3E]/10 py-5 sm:ml-[5.5rem] sm:mr-7 sm:py-6">
                            <p className="max-w-2xl text-sm leading-7 text-[#0B3D3E]/65">
                              {faq.answer}
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.13em] text-[#287A6D]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#287A6D]" />
                              Jattari Project Information
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="relative overflow-hidden bg-[#0B3D3E] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="faq-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="faq-orb faq-orb-one pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#287A6D]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-14">
            <ScrollReveal direction="left">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#B9D8C8] sm:text-xs">
                  Still Have Questions?
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Sometimes the best answer
                  <span className="mt-1 block font-serif font-normal italic text-[#B9D8C8]">
                    is a conversation.
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="faq-glass rounded-[1.7rem] border border-white/15 bg-white/[0.055] p-6 backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#287A6D]/25 text-[#B9D8C8]">
                  <MessageCircle size={19} />
                </div>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Speak with the Jattari project team for current information
                  about availability, pricing, site visits and project details.
                </p>

                <Link
                  to="/contact"
                  className="faq-button-shine mt-6 inline-flex items-center gap-3 rounded-full bg-[#B9D8C8] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0B3D3E] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-xs"
                >
                  Contact Team
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <ScrollReveal direction="up" duration={900}>
          <div className="faq-final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] bg-[#B9D8C8] p-6 sm:rounded-[2rem] sm:p-10 lg:p-14">
            <div className="faq-final-orb pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/35 blur-3xl sm:h-80 sm:w-80" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#0F5257]/70 sm:text-xs">
                  Jattari
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.045em] text-[#0B3D3E] sm:text-5xl lg:text-6xl">
                  Ready to explore the project?
                </h2>
              </div>

              <Link
                to="/contact"
                className="faq-button-shine group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#0B3D3E] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5257] sm:text-xs"
              >
                Enquire Now
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PAGE STYLES */}
      <style>{`
        .faq-page {
          --faq-primary: #0F5257;
          --faq-green: #287A6D;
          --faq-deep: #0B3D3E;
          --faq-mint: #B9D8C8;
          --faq-offwhite: #F7F8F5;
          --faq-light: #EAF0EB;
        }

        .faq-hero {
          isolation: isolate;
        }

        .faq-grid {
          background-image:
            linear-gradient(rgba(185,216,200,.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,216,200,.075) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .faq-grid-light {
          background-image:
            linear-gradient(rgba(11,61,62,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,61,62,.045) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black, transparent 75%);
        }

        .faq-orb {
          pointer-events: none;
          animation: faqFloat 9s ease-in-out infinite alternate;
        }

        .faq-orb-two {
          animation-delay: -4s;
        }

        .faq-card-orb,
        .faq-intro-orb,
        .faq-aside-orb,
        .faq-final-orb {
          animation: faqFloat 8s ease-in-out infinite alternate;
        }

        .faq-heading-accent {
          animation: faqReveal 1.1s cubic-bezier(.16,1,.3,1) both;
          animation-delay: 120ms;
        }

        .faq-glass {
          box-shadow: 0 25px 80px rgba(0,0,0,.12);
          transition: border-color 350ms ease, background 350ms ease;
        }

        .faq-glass:hover {
          border-color: rgba(185,216,200,.35);
        }

        .faq-stat {
          backdrop-filter: blur(14px);
        }

        .faq-item {
          box-shadow: 0 5px 20px rgba(11,61,62,.025);
        }

        .faq-button-shine {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .faq-button-shine::after {
          position: absolute;
          top: -100%;
          left: -40%;
          width: 25%;
          height: 300%;
          content: "";
          background: rgba(255,255,255,.3);
          transform: rotate(25deg);
          transition: left 550ms ease;
          z-index: -1;
        }

        .faq-button-shine:hover::after {
          left: 130%;
        }

        @keyframes faqFloat {
          from {
            transform: translate3d(0, 0, 0) scale(.96);
          }
          to {
            transform: translate3d(-12px, 14px, 0) scale(1.06);
          }
        }

        @keyframes faqReveal {
          from {
            opacity: 0;
            clip-path: inset(0 0 100% 0);
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .faq-grid {
            background-size: 27px 27px;
          }

          .faq-button-shine::after {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-page *,
          .faq-page *::before,
          .faq-page *::after {
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

export default FAQ;