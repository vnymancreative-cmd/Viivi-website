import { Compass, Target, PenTool, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const PROCESS = [
  {
    n: "01",
    icon: Compass,
    title: "Discovery",
    text: "We map your business, your customers, and what's quietly costing you inquiries today.",
  },
  {
    n: "02",
    icon: Target,
    title: "Strategy",
    text: "A clear plan for structure, message, and design priorities, built around your goals.",
  },
  {
    n: "03",
    icon: PenTool,
    title: "Design & Development",
    text: "Your site and brand take shape, reviewed with you at every key milestone.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & Growth",
    text: "We launch, measure what's working, and refine the experience as real traffic arrives.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-16 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono tracking-wide text-xs text-deep">HOW WE WORK TOGETHER</p>
          <h2
            className="font-display mt-3 mb-9 text-ink"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            A clear path from first call to launch
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-line">
                  <span className="font-display italic text-3xl text-deep">{p.n}</span>
                  <p.icon size={20} className="text-ink-soft" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed mt-2 text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
