import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-pink-500 shadow-sm ring-1 ring-border",
        className,
      )}
    >
      {children}
    </span>
  );
}
