export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon - stylized "n" shapes */}
      <path
        d="M4 32V12C4 8 6 6 9 6C12 6 14 8 14 12V32"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M16 32V16C16 12 18 10 21 10C24 10 26 12 26 16V32"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {/* Text */}
      <text
        x="34"
        y="31"
        fontFamily="'Satoshi', sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        saru apps
      </text>
    </svg>
  );
}
