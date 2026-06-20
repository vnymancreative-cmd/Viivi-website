import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import UnderlineLink from "./UnderlineLink";

const TRUSTED_BY = ["Nordic Table", "Atlas Legal", "Form & Co", "Kaski Studio"];

export default function Hero() {
  return (
    <section id="top" className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="font-mono tracking-wide text-xs inline-block px-3 py-1.5 rounded-full bg-sky text-deep-2">
              WEB DESIGN &amp; BRAND STRATEGY
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="font-display mt-6 leading-tight text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.4rem)" }}
            >
              Websites &amp; brands designed to turn visitors into clients
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft" style={{ maxWidth: "34rem" }}>
              I help businesses grow with strategic branding, conversion-focused web design, and
              polished digital experiences.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
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
            <div className="mt-12 pt-8 border-t border-line">
              <p className="font-mono tracking-wide text-xs mb-4 text-ink-soft">
                WORKED WITH FOUNDERS AT
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {TRUSTED_BY.map((n) => (
                  <span key={n} className="font-display italic text-base text-ink-soft">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <BeforeAfterSlider />
        </Reveal>
      </div>
    </section>
  );
}
