"use client";

import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";
import Reveal from "./Reveal";
import UnderlineLink from "./UnderlineLink";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", project: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.project) return;

    setStatus("sending");

    // TODO: wire this up to your form handler of choice (Formspree, Resend, a
    // Next.js Route Handler at app/api/contact/route.js, etc). This just
    // simulates a network request so the success state can be previewed.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  const inputClasses =
    "w-full mt-2 px-4 py-3 rounded-lg text-sm bg-white border border-line text-ink";

  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-mono tracking-wide text-xs text-deep">GET IN TOUCH</p>
            <h2
              className="font-display mt-3 mb-6 text-ink"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Tell me about your project
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Share a few details and I&apos;ll reply within one business day with next steps —
              or to schedule a short call.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Mail size={18} className="text-deep" />
              <UnderlineLink href="mailto:hello@viivinyman.com" className="text-sm text-ink">
                hello@viivinyman.com
              </UnderlineLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            {status === "sent" ? (
              <div className="bg-white border border-line rounded-2xl p-10 text-center">
                <Check size={28} className="text-deep mx-auto" />
                <h3 className="font-display text-xl mt-4 text-ink">Message sent</h3>
                <p className="text-sm mt-2 text-ink-soft">
                  Thanks, {form.name.split(" ")[0] || "there"} — I&apos;ll be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label htmlFor="vn-name" className="text-xs font-mono tracking-wide text-ink-soft">
                    NAME
                  </label>
                  <input
                    id="vn-name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="vn-email" className="text-xs font-mono tracking-wide text-ink-soft">
                    EMAIL
                  </label>
                  <input
                    id="vn-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="vn-business" className="text-xs font-mono tracking-wide text-ink-soft">
                    BUSINESS NAME
                  </label>
                  <input
                    id="vn-business"
                    value={form.business}
                    onChange={update("business")}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="vn-project" className="text-xs font-mono tracking-wide text-ink-soft">
                    PROJECT DESCRIPTION
                  </label>
                  <textarea
                    id="vn-project"
                    required
                    rows={5}
                    value={form.project}
                    onChange={update("project")}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-deep hover:bg-deep-2 transition-colors text-white px-7 py-3.5 rounded-full text-sm font-medium disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                    {status !== "sending" && <ArrowRight size={16} />}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
