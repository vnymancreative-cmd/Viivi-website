import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Our inquiries doubled within two months of launch. Viivi understood our customers better than we did.",
    name: "Elina Korhonen",
    role: "Founder, Nordic Table",
  },
  {
    quote:
      "She doesn't just design — she asks the right questions first. The new site finally looks like the firm we actually are.",
    name: "James Whitfield",
    role: "Partner, Atlas Legal",
  },
  {
    quote:
      "Sharp, strategic, and easy to work with. The brand finally feels cohesive across every touchpoint.",
    name: "Maria Lindqvist",
    role: "Owner, Form & Co",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono tracking-wide text-xs text-deep">CLIENT FEEDBACK</p>
          <h2
            className="font-display mt-3 mb-14 text-ink"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            What it's like to work together
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="bg-white border border-line rounded-2xl p-7 h-full flex flex-col">
                <Quote size={22} className="text-sky" fill="currentColor" strokeWidth={0} />
                <p className="font-display text-lg italic leading-relaxed mt-4 flex-1 text-ink">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-5 border-t border-line">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs mt-0.5 text-ink-soft">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
