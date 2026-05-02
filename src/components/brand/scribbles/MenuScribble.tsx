import { cn } from "@/lib/utils";

type ScribbleProps = {
  className?: string;
  ariaLabel?: string;
};

export function MenuScribble({ className, ariaLabel }: ScribbleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel ?? "Abrir menu"}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn("inline-block", className)}
    >
      <path
        d="M3.5 7.2 C 7 6.7, 13 7.4, 20.5 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 12 C 8.5 11.6, 14 12.4, 21 11.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.5 16.9 C 7.5 16.5, 13.5 17.2, 19.5 16.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MenuScribble;
