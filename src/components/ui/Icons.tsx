type IconProps = {
  className?: string;
  /** Rendered size in pixels. Set as explicit SVG width/height attributes
   *  (not just CSS) so icons size correctly regardless of any CSS custom
   *  property inheritance quirks on <svg> in a given environment. */
  size?: number;
};

export function ArrowUpRight({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GithubIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.38 24 17.07 24 12 24 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LeetCodeIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.48 22.03c-1.5 0-2.93-.6-3.98-1.66l-4.4-4.5a5.44 5.44 0 0 1 0-7.6l4.75-4.86a5.5 5.5 0 0 1 3.98-1.67h.02c1.5 0 2.94.6 3.98 1.67l1.87 1.9a1.13 1.13 0 0 1-1.62 1.58l-1.87-1.9a3.27 3.27 0 0 0-2.36-1h-.01c-.9 0-1.75.36-2.37 1L6.72 9.83a3.24 3.24 0 0 0 0 4.52l4.4 4.5c.62.64 1.47 1 2.37 1 .9 0 1.74-.36 2.36-1l1.87-1.91a1.13 1.13 0 0 1 1.62 1.58l-1.87 1.91a5.5 5.5 0 0 1-3.99 1.6Zm7.15-8.48H9.9a1.13 1.13 0 0 1 0-2.26h10.73a1.13 1.13 0 0 1 0 2.26Z" />
    </svg>
  );
}

export function SunIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 1v1.4M8 13.6V15M15 8h-1.4M2.4 8H1M12.9 3.1l-1 1M4.1 11.9l-1 1M12.9 12.9l-1-1M4.1 4.1l-1-1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.8 9.9A6 6 0 0 1 6.1 2.2a6 6 0 1 0 7.7 7.7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="8" cy="8" rx="2.6" ry="6.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.8 6.1h12.4M1.8 9.9h12.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function CloudIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.2 8.1 4 4 0 0 1 17 16H7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 10.5H2.7a1.2 1.2 0 0 1-1.2-1.2V2.7A1.2 1.2 0 0 1 2.7 1.5h6.6a1.2 1.2 0 0 1 1.2 1.2V3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 1.2l1.98 4.2 4.62.55-3.4 3.18.9 4.6L8 11.5l-4.1 2.23.9-4.6-3.4-3.18 4.62-.55L8 1.2z" />
    </svg>
  );
}

export function ForkIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 1.5a1.75 1.75 0 1 0 0 3.5.75.75 0 0 1 0 1.5v.05A1.75 1.75 0 0 0 5.75 8.3h1a1.75 1.75 0 0 0 1.75-1.75v-.05a.75.75 0 0 1 0-1.5 1.75 1.75 0 1 0-1.5 0 .25.25 0 0 1 .25.25v.05c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-.05a.25.25 0 0 1 .25-.25 1.75 1.75 0 0 0-1.5-2.75Zm4.25 8.5a1.75 1.75 0 1 0 1.5 2.75.75.75 0 0 1 .5.71v.04a.75.75 0 1 1-1.5 0 1.75 1.75 0 0 0-1.5-.75Z" />
    </svg>
  );
}

export function MenuIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
