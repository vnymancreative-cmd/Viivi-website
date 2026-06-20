import Reveal from "./Reveal";
import Mark from "./Mark";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <div
            className="rounded-2xl w-full border border-line flex items-center justify-center bg-[radial-gradient(circle_at_50%_45%,theme(colors.sky)_0%,theme(colors.paper-2)_60%,theme(colors.paper)_100%)]"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Mark size={64} className="text-deep" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono tracking-wide text-xs text-deep">ABOUT</p>
            <h2
              className="font-display mt-3 mb-6 text-ink"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Designer. Strategist. Problem solver.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Viivi Nyman works at the intersection of design and behavior — trained in visual
                arts, grounded in psychology, and shaped by experience running her own business
                across European markets.
              </p>
              <p>
                That combination informs every project: a site isn&apos;t finished when it looks
                polished, it&apos;s finished when it changes how a visitor behaves. Fewer guesses,
                more decisions grounded in how people actually browse, read, and buy.
              </p>
              <p>
                Today she works with a focused roster of founders and service businesses who are
                ready to look as credible as the work they do.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
