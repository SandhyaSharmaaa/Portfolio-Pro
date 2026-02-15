import { Heart } from "lucide-react";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1.5 px-6 text-center text-xs text-text-muted sm:text-sm">
        <span>Designed & Built by {name}</span>
        <Heart className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
