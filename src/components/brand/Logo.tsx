import { cn } from "@/lib/utils";

type LogoVariant = "light" | "dark" | "forest" | "lime";
type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  highlightDr?: boolean;
  className?: string;
  ariaLabel?: string;
};

const sizeClasses: Record<LogoSize, string> = {
  sm: "text-sm",
  md: "text-lg md:text-xl",
  lg: "text-2xl md:text-3xl",
};

const barWidth: Record<LogoSize, string> = {
  sm: "w-2.5",
  md: "w-3.5",
  lg: "w-5",
};

// `body` colors "João Pedro Castro". `dr` colors "Dr." and the closing bar;
// they are a visual pair in the manual and travel together.
const variantStyle: Record<
  LogoVariant,
  { body: string; drDefault: string; drAccent: string; barDefault: string; barAccent: string }
> = {
  light: {
    body: "text-graphite",
    drDefault: "text-graphite",
    drAccent: "text-deep-green",
    barDefault: "bg-graphite",
    barAccent: "bg-deep-green",
  },
  dark: {
    body: "text-cream",
    drDefault: "text-cream",
    drAccent: "text-cream",
    barDefault: "bg-cream",
    barAccent: "bg-cream",
  },
  forest: {
    body: "text-cream",
    drDefault: "text-cream",
    drAccent: "text-cream",
    barDefault: "bg-cream",
    barAccent: "bg-cream",
  },
  lime: {
    body: "text-deep-green",
    drDefault: "text-deep-green",
    drAccent: "text-deep-green",
    barDefault: "bg-deep-green",
    barAccent: "bg-deep-green",
  },
};

export function Logo({
  variant = "light",
  size = "md",
  highlightDr = false,
  className,
  ariaLabel = "Dr. João Pedro Castro",
}: LogoProps) {
  const v = variantStyle[variant];
  const drClass = highlightDr ? v.drAccent : v.drDefault;
  const barClass = highlightDr ? v.barAccent : v.barDefault;

  return (
    <span
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center whitespace-nowrap font-display font-normal leading-none tracking-[-0.01em]",
        sizeClasses[size],
        className,
      )}
    >
      <span className={drClass}>Dr.</span>
      <span className={cn("ml-[0.28em]", v.body)}>João Pedro Castro</span>
      <span
        aria-hidden="true"
        className={cn("ml-[0.45em] h-px shrink-0", barWidth[size], barClass)}
      />
    </span>
  );
}

export default Logo;
