import { cn } from "@/lib/utils";

type ScribbleProps = {
  className?: string;
  ariaLabel?: string;
};

export function DotsScribble({ className, ariaLabel }: ScribbleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel ?? "Mais opções"}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn("inline-block", className)}
    >
      <circle cx="11.8" cy="5.2" r="1.7" fill="currentColor" />
      <circle cx="12.2" cy="12" r="1.7" fill="currentColor" />
      <circle cx="11.7" cy="18.8" r="1.7" fill="currentColor" />
    </svg>
  );
}

export default DotsScribble;
