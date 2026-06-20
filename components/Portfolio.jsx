import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const CASES = [
  {
    name: "Nordic Table",
    type: "Restaurant Group · Rebrand & Website",
    goal: "Three locations, three inconsistent looks, and a booking process customers kept abandoning.",
    solution: "One unified identity, a redesigned site built around the reservation flow, and clearer menus.",
    result: "+74% online reservations",
  },
  {
    name: "Atlas Legal",
    type: "Law Firm · Website Redesign",
    goal: "A dated site that made an established firm look smaller and less credible than it was.",
    solution: "A premium, content-led redesign that leads with case results and partner expertise.",
    result: "2.1× more consultation requests",
  },
  {
    name: "Form & Co",
    type: "Furniture Studio · Brand & UX",
    goal: "Beautiful products, confusing site structure, and almost no repeat customers.",
    solution: "Simplified navigation, a stronger visual identity, and a streamlined product story.",
    result: "+38% average session time",
  },
];

function CaseCard({ c, i }) {
  return (
    <Reveal delay={i * 90}>
      <div className="bg-white border border-line rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="p-6 grid grid-cols-2 gap-px bg-line">
          <div className="aspect-square" style={{ background: "#FFF7CC" }} />
          <div className="aspect-square flex items-center justify-center bg-paper-2">
            <div className="rounded-full bg-deep" style={{ width: "55%", height: 8 }} />
          </div>
        </div>
        <div className="p-7 flex flex-col gap-4 flex-1">
          <div>
            <h3 className="font-display text-xl text-ink">{c.name}</h3>
            <p className="font-mono tracking-wide text-xs mt-1 text-ink-soft">{c.type.toUpperCase()}</p>
          </div>
          <div className="text-sm leading-relaxed text-ink-soft">
            <p>
              <span className="text-ink">Goal — </span>
              {c.goal}
            </p>
            <p className="mt-2">
              <span className="text-ink">Solution — </span>
              {c.solution}
            </p>
          </div>
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-line">
            <span className="font-display italic text-lg text-deep">{c.result}</span>
            <ArrowUpRight size={18} className="text-ink-soft" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono tracking-wide text-xs text-deep">SELECTED WORK</p>
        <h2
          className="font-display mt-3 mb-3 text-ink"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
        >
          Real businesses, redesigned with intent
        </h2>
        <p className="text-sm mb-14 text-ink-soft">
          Placeholder case studies shown for layout — swap in live project details and screenshots.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-7">
        {CASES.map((c, i) => (
          <CaseCard key={c.name} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
