import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "group relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-card/60 text-foreground/80",
        "transition-colors duration-300 hover:border-brand/60 hover:text-brand",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-silk",
          isDark ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        )}
      >
        <Moon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-silk",
          isDark ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <Sun className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
    </button>
  );
}