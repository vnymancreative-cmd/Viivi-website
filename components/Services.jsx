import { Layout, Palette, RefreshCw, TrendingUp, PenTool, Compass } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Layout,
    title: "Website Design",
    text: "A site that builds trust in the first five seconds and gives visitors a clear reason to stay.",
  },
  {
    icon: Palette,
    title: "Branding & Visual Identity",
    text: "A visual identity that makes your business instantly recognizable and easy to take seriously.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    text: "Outdated sites rebuilt around how customers actually browse, decide, and buy today.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    text: "Layout, copy, and flow refined so more of your existing traffic turns into inquiries.",
  },
  {
    icon: PenTool,
    title: "UX/UI Design",
    text: "Interfaces shaped around real user behavior, so every screen feels obvious to use.",
  },
  {
    icon: Compass,
    title: "Strategy & Consultation",
    text: "A clear plan for what to fix first, grounded in your customers and your business goals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="font-mono tracking-wide text-xs text-deep">SERVICES</p>
              <h2
                className="font-display mt-3 text-ink"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Everything your business needs to look as good as it performs
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="bg-white p-7 h-full flex flex-col gap-4">
                <s.icon size={22} className="text-deep" strokeWidth={1.6} />
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
