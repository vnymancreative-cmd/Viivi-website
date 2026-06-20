export default function Mark({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
    >
      <polygon points="50,53 53.83,102.41 75,145 71.17,97.59" fill="currentColor" />
      <polygon points="75,145 95.81,118.46 100,85 79.19,111.54" fill="currentColor" />
      <polygon points="100,85 104.19,118.46 125,145 120.81,111.54" fill="currentColor" />
      <polygon points="125,145 146.17,102.41 150,53 128.83,97.59" fill="currentColor" />
    </svg>
  );
}
