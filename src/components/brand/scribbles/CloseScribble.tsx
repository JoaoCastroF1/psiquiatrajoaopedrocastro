import { cn } from "@/lib/utils";

type ScribbleProps = {
  className?: string;
  ariaLabel?: string;
};

export function CloseScribble({ className, ariaLabel }: ScribbleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel ?? "Fechar menu"}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn("inline-block", className)}
    >
      <path
        d="M5.5 5.5 C 9 8.5, 14 12.5, 18.5 18.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.5 5.5 C 14 9, 9 13.5, 5.5 18.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CloseScribble;
