export default function UnderlineLink({ href, children, className = "", ...rest }) {
  return (
    <a
      href={href}
      className={`relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-deep after:transition-all after:duration-300 hover:after:w-full ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
