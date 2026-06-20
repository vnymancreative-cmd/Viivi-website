"use client";

import { useCallback, useRef, useState } from "react";

function BeforeMock() {
  const chip = (bg, txt, color) => (
    <span
      className="px-2 py-1 rounded text-xs font-bold"
      style={{ background: bg, color, border: "2px dashed rgba(0,0,0,0.25)" }}
    >
      {txt}
    </span>
  );

  return (
    <div
      className="w-full h-full flex flex-col gap-2 p-4"
      style={{ background: "#FFF7CC", fontFamily: "'Comic Sans MS', cursive" }}
    >
      <div
        className="flex items-center justify-between p-2 rounded animate-pulse"
        style={{ background: "#FACC15", border: "3px dashed #DC2626" }}
      >
        <span className="text-xs font-bold" style={{ color: "#B91C1C" }}>
          ★ WELCOME TO OUR WEBSITE ★
        </span>
        <span className="text-xs font-bold" style={{ color: "#7C3AED" }}>
          CLICK HERE!
        </span>
      </div>
      <div className="flex gap-2 flex-1 min-h-0">
        <div className="flex-1 rounded p-2" style={{ background: "#BBF7D0" }}>
          <div className="h-2 rounded mb-1" style={{ background: "#16A34A", width: "80%" }} />
          <div className="h-2 rounded mb-1" style={{ background: "#86EFAC", width: "100%" }} />
          <div className="h-2 rounded mb-1" style={{ background: "#86EFAC", width: "92%" }} />
          <div className="h-2 rounded mb-2" style={{ background: "#86EFAC", width: "60%" }} />
          <div className="flex gap-1 flex-wrap">
            {chip("#F87171", "BUY NOW", "#fff")}
            {chip("#60A5FA", "SUBSCRIBE", "#fff")}
          </div>
        </div>
        <div
          className="rounded p-2 flex flex-col items-center justify-center gap-1"
          style={{ background: "#FBCFE8", width: "38%" }}
        >
          <div className="rounded-full" style={{ width: 30, height: 30, background: "#DB2777" }} />
          <div className="h-2 rounded" style={{ background: "#F9A8D4", width: "90%" }} />
          <div className="h-2 rounded" style={{ background: "#F9A8D4", width: "70%" }} />
        </div>
      </div>
      <div className="flex gap-1">
        {chip("#FB923C", "SALE!!", "#fff")}
        {chip("#34D399", "NEW", "#fff")}
        {chip("#A78BFA", "HOT", "#fff")}
      </div>
    </div>
  );
}

function AfterMock() {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-deep" style={{ width: 22, height: 8 }} />
        <div className="flex gap-3">
          <div className="rounded-full bg-line" style={{ width: 20, height: 6 }} />
          <div className="rounded-full bg-line" style={{ width: 20, height: 6 }} />
          <div className="rounded-full bg-line" style={{ width: 20, height: 6 }} />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-3" style={{ maxWidth: "78%" }}>
        <div className="rounded-full bg-ink" style={{ height: 10, width: "92%" }} />
        <div className="rounded-full bg-ink" style={{ height: 10, width: "65%" }} />
        <div className="rounded-full bg-line mt-2" style={{ height: 6, width: "95%" }} />
        <div className="rounded-full bg-line" style={{ height: 6, width: "80%" }} />
        <div
          className="rounded-full bg-deep mt-3 flex items-center justify-center"
          style={{ width: 132, height: 32 }}
        >
          <span className="text-xs text-white">Get Started</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-paper-2" style={{ height: 44 }} />
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(56);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.min(100, Math.max(0, pct));
    setPos(pct);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    if (e.target.setPointerCapture && e.pointerId !== undefined) {
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch (err) {
        /* noop */
      }
    }
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden border border-line"
        style={{ aspectRatio: "16 / 12", touchAction: "none", userSelect: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="absolute inset-0">
          <AfterMock />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <BeforeMock />
        </div>

        <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-mono tracking-wide bg-black/60 text-white">
          BEFORE
        </span>
        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-mono tracking-wide bg-deep text-white">
          AFTER
        </span>

        <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="w-px h-full bg-white" style={{ marginLeft: "50%" }} />
          <div
            role="slider"
            tabIndex={0}
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Drag to compare before and after website design"
            onKeyDown={onKeyDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full flex items-center justify-center cursor-ew-resize bg-white shadow-lg"
            style={{ width: 40, height: 40, left: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14 6L8 12L14 18" stroke="#173A66" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginLeft: -4 }}>
              <path d="M10 6L16 12L10 18" stroke="#173A66" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-mono tracking-wide text-xs mt-3 text-ink-soft">
        DRAG TO COMPARE — A REAL CLIENT REBUILD, SIMPLIFIED
      </p>
    </div>
  );
}
