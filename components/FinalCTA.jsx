import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 bg-paper-2">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display leading-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3rem)" }}
          >
            Ready for a website that works as hard as you do?
          </h2>
          <p className="mt-5 text-base text-ink-soft">
            Book a free consultation and leave with a clear plan, whether or not we end up
            working together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-deep hover:bg-deep-2 hover:-translate-y-px transition-all text-white mt-9 px-7 py-4 rounded-full text-sm font-medium"
          >
            Book Your Free Consultation <ArrowRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
