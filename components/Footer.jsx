import Mark from "./Mark";
import UnderlineLink from "./UnderlineLink";

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 text-deep">
          <Mark size={18} />
          <span className="font-display text-sm text-ink">Viivi Nyman</span>
        </div>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} Viivi Nyman. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-ink-soft">
          <UnderlineLink href="#work">Work</UnderlineLink>
          <UnderlineLink href="#services">Services</UnderlineLink>
          <UnderlineLink href="#contact">Contact</UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
