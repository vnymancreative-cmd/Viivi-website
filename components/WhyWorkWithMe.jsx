import { Eye, Brain, Globe, Target } from "lucide-react";
import Reveal from "./Reveal";

const WHY = [
  {
    icon: Eye,
    title: "Trained to see",
    text: "A visual arts background means every layout, color, and typeface choice is deliberate, not decorative.",
  },
  {
    icon: Brain,
    title: "Trained to understand why",
    text: "A psychology degree means the work is built around how people actually notice, trust, and decide.",
  },
  {
    icon: Globe,
    title: "An international lens",
    text: "Experience across European markets shapes work that holds up outside any single local context.",
  },
  {
    icon: Target,
    title: "Built like a business owner",
    text: "Entrepreneurial experience means every recommendation is judged by one thing: does it grow your business.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-mono tracking-wide text-xs text-deep">WHY WORK WITH ME</p>
            <h2
              className="font-display mt-3 leading-tight text-ink"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Design that sees, strategy that understands
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Most designers can make something look good. Fewer can explain why a customer
              clicks, hesitates, or leaves. That gap is where the work happens.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-line">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="p-7 h-full bg-paper">
                <w.icon size={20} className="text-deep" strokeWidth={1.6} />
                <h3 className="font-display text-lg mt-4 text-ink">{w.title}</h3>
                <p className="text-sm leading-relaxed mt-2 text-ink-soft">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
