export default function RotatedBadge({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center justify-center text-center rounded-full bg-deep text-white font-mono tracking-wide leading-tight ${className}`}
      style={{ width: 92, height: 92, fontSize: "0.6rem", padding: "0.5rem", transform: "rotate(-10deg)" }}
    >
      {children}
    </div>
  );
}
