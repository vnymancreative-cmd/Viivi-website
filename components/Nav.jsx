"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Mark from "./Mark";
import UnderlineLink from "./UnderlineLink";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-line" : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 text-deep">
          <Mark size={22} />
          <span className="font-display text-lg text-ink tracking-tight">Viivi Nyman</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <UnderlineLink key={l.href} href={l.href} className="text-sm text-ink">
              {l.label}
            </UnderlineLink>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-deep hover:bg-deep-2 transition-colors text-white text-sm px-5 py-2.5 rounded-full"
        >
          Book a Call <ArrowRight size={15} />
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-paper border-t border-line">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base pt-2 text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-deep text-white text-sm px-5 py-3 rounded-full text-center mt-1"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
