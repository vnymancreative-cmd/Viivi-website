import { PenTool, Search, RefreshCw, Mail, Image as ImageIcon, LifeBuoy } from "lucide-react";
import Reveal from "./Reveal";

const ADDONS = [
  { icon: PenTool, label: "Copywriting" },
  { icon: Search, label: "SEO Setup" },
  { icon: RefreshCw, label: "Logo Refresh" },
  { icon: Mail, label: "Email Templates" },
  { icon: ImageIcon, label: "Social Media Kit" },
  { icon: LifeBuoy, label: "Maintenance Plan" },
];

export default function BonusServices() {
  return (
    <section className="px-6 py-14 max-w-6xl mx-auto">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-7">
          <div>
            <p className="font-mono tracking-wide text-xs text-deep">BONUS SERVICES</p>
            <h2 className="font-display mt-2 text-xl text-ink">Add-ons to round things out</h2>
          </div>
          <p className="text-xs text-ink-soft max-w-xs">
            Shown for layout — to be finalized and priced individually.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {ADDONS.map((a, i) => (
          <Reveal key={a.label} delay={i * 50}>
            <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-line bg-white px-3 py-6 h-full">
              <a.icon size={18} className="text-deep" strokeWidth={1.6} />
              <span className="text-xs text-ink-soft">{a.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
