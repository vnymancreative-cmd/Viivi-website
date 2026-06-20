import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const TIERS = [
  {
    name: "Brand Refresh",
    price: "—",
    note: "starting from",
    description: "For businesses with a working site that needs sharper positioning and a visual reset.",
    features: ["Visual identity refresh", "Messaging & positioning", "1 round of revisions"],
    highlighted: false,
  },
  {
    name: "Website Sprint",
    price: "—",
    note: "starting from",
    description: "A full website redesign, built around conversion from the ground up.",
    features: [
      "Strategy & UX mapping",
      "Custom website design & build",
      "Mobile-first, SEO-ready",
      "2 rounds of revisions",
    ],
    highlighted: true,
  },
  {
    name: "Full Partnership",
    price: "—",
    note: "starting from",
    description: "Brand and website together, plus ongoing support as your business grows.",
    features: ["Everything in Website Sprint", "Full brand identity", "30 days of post-launch support"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono tracking-wide text-xs text-deep">PRICING</p>
          <h2
            className="font-display mt-3 mb-2 text-ink"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            Investment, not guesswork
          </h2>
          <p className="text-sm mb-10 text-ink-soft">
            Packages shown for layout — final rates and inclusions to be added.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div
                className={`h-full flex flex-col rounded-2xl p-7 ${
                  t.highlighted
                    ? "bg-deep text-white shadow-xl shadow-deep/20 sm:-translate-y-2"
                    : "bg-white border border-line text-ink"
                }`}
              >
                {t.highlighted && (
                  <span className="self-start mb-4 font-mono tracking-wide text-xs px-2.5 py-1 rounded-full bg-white/15 text-sky">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-display text-xl ${t.highlighted ? "text-white" : "text-ink"}`}>
                  {t.name}
                </h3>
                <p className={`text-sm mt-2 leading-relaxed ${t.highlighted ? "text-white/75" : "text-ink-soft"}`}>
                  {t.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl">{t.price}</span>
                  <span className={`text-xs font-mono tracking-wide ${t.highlighted ? "text-white/60" : "text-ink-soft"}`}>
                    {t.note}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-2.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className={`mt-0.5 shrink-0 ${t.highlighted ? "text-sky" : "text-deep"}`} />
                      <span className={t.highlighted ? "text-white/90" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                    t.highlighted
                      ? "bg-white text-deep hover:bg-sky"
                      : "bg-paper-2 text-ink hover:bg-line"
                  }`}
                >
                  Get Started <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
