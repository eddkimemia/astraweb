import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark" | "mono";
  showText?: boolean;
};

export function Logo({ className, variant = "dark", showText = true }: LogoProps) {
  const textColor =
    variant === "light" ? "text-white" : "text-[#0F1729]";
  const subColor =
    variant === "light" ? "text-white/60" : "text-[#5A6577]";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("text-[1.05rem] font-extrabold tracking-tight", textColor)}>
            Astra<span className="text-[#FF6B35]">Tech</span>
          </span>
          <span className={cn("text-[0.62rem] font-medium uppercase tracking-[0.18em]", subColor)}>
            Security &amp; IT Solutions
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="astra-shield" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5FD9" />
          <stop offset="1" stopColor="#0F1729" />
        </linearGradient>
        <linearGradient id="astra-bolt" x1="32" y1="18" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B35" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0F1729" />
      <path
        d="M32 8L52 16V30C52 42 43 50 32 56C21 50 12 42 12 30V16L32 8Z"
        fill="url(#astra-shield)"
        fillOpacity="0.18"
        stroke="url(#astra-shield)"
        strokeWidth="1.6"
      />
      <path d="M32 18L42 31H36V44H28V31H22L32 18Z" fill="url(#astra-bolt)" />
      <circle cx="32" cy="32" r="20" stroke="#2B5FD9" strokeWidth="0.5" strokeOpacity="0.25" />
    </svg>
  );
}
