// A / Primary wordmark — thin uppercase with generous tracking on "STUDIO".
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`} aria-label="NYCH VISION STUDIO">
      <span className="wordmark__main">NYCH VISION</span>
      <span className="wordmark__sub">STUDIO</span>
    </span>
  );
}

// C / Monogram — "NV" used for end cards, watermarks and avatars.
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path
        d="M8 74V6l40 68V6M66 6l23 68 23-68"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
