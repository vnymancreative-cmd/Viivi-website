import Reveal from "./Reveal";

const RESULTS = [
  { value: "+186%", label: "Avg. increase in inquiries" },
  { value: "3.2×", label: "Avg. conversion rate lift" },
  { value: "92%", label: "Client retention rate" },
  { value: "4–6", label: "Weeks, avg. turnaround" },
];

export default function Results() {
  return (
    <section className="px-6 py-20 bg-deep">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono tracking-wide text-xs mb-12 text-sky">RESULTS, NOT JUST VISUALS</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {RESULTS.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <div>
                <p className="font-mono text-white" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  {r.value}
                </p>
                <p className="text-sm mt-2 text-sky">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="text-xs mt-12 text-white/55">
            Placeholder figures shown for layout — replace with verified client results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
