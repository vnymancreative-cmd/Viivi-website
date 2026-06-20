export default function Glow({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl bg-[radial-gradient(circle,theme(colors.bright)_0%,theme(colors.sky)_45%,transparent_72%)] ${className}`}
    />
  );
}
