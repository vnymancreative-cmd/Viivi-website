import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import UnderlineLink from "./UnderlineLink";
import Glow from "./Glow";
import RotatedBadge from "./RotatedBadge";

const TRUSTED_BY = ["Nordic Table", "Atlas Legal", "Form & Co", "Kaski Studio"];

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-14 px-6 max-w-6xl mx-auto overflow-hidden">
      <Glow className="w-[34rem] h-[34rem] -top-40 -right-32 opacity-50 -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 font-mono tracking-wide text-xs px-3 py-1.5 rounded-full bg-sky text-deep-2">
              <Sparkles size={12} strokeWidth={2} />
              WEB DESIGN &amp; BRAND STRATEGY
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="font-display mt-5 leading-[1.05] text-ink"
              style={{ fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)" }}
            >
              Websites &amp; brands designed to turn visitors into{" "}
              <span className="italic text-deep">clients</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft" style={{ maxWidth: "34rem" }}>
              I help businesses grow with strategic branding, conversion-focused web design, and
              polished digital experiences.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-deep hover:bg-deep-2 hover:-translate-y-px transition-all text-white px-6 py-3.5 rounded-full text-sm font-medium"
              >
                Book a Free Consultation <ArrowRight size={16} />
              </a>
              <UnderlineLink
                href="#work"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink"
              >
                View My Work <ArrowUpRight size={16} className="inline" />
              </UnderlineLink>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 pt-6 border-t border-line">
              <p className="font-mono tracking-wide text-xs mb-3 text-ink-soft">
                WORKED WITH FOUNDERS AT
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {TRUSTED_BY.map((n) => (
                  <span key={n} className="font-display italic text-base text-ink-soft">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="hidden sm:flex absolute -top-7 -right-7 z-10">
            <RotatedBadge>FREE 30-MIN CONSULT</RotatedBadge>
          </div>
          <BeforeAfterSlider />
        </Reveal>
      </div>
    </section>
  );
}
