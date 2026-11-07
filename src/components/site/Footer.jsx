import { MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import { waLink } from "@/lib/whatsapp";

const LOGO =
  "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/d76852005_generated_2a3d0a8f.png";

const PLAY_LINKS = [
  { label: "Cricket", href: "#arenas" },
  { label: "Casino", href: "#arenas" },
  { label: "Teen Patti", href: "#arenas" },
  { label: "Andar Bahar", href: "#arenas" },
];

const HELP_LINKS = [
  { label: "Why Dhurander", href: "#trust" },
  { label: "How to join", href: "#join" },
  { label: "FAQ", href: "#faq" },
  { label: "Support desk", href: waLink("Hi DHURANDER! I need help with my account.") },
];

export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-brand/30 bg-ink">
                <Image
                  src={LOGO}
                  alt="Dhurander logo"
                  fittingType="fill"
                  className="h-full w-full"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg uppercase tracking-[0.16em] text-foreground">
                  Dhurander
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Gaming Exchange
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              India&apos;s fastest gaming exchange. One ID for cricket, casino and card games —
              with payouts in ten minutes and support that actually replies.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/70">
              <ShieldCheck className="h-3.5 w-3.5 text-brand" />
              Verified payouts
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-brand">
              Play
            </h4>
            <ul className="mt-4 space-y-2.5">
              {PLAY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-brand">
              Help
            </h4>
            <ul className="mt-4 space-y-2.5">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-brand">
              Talk to us
            </h4>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors duration-300 hover:border-brand/60"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-brand" />
                <span className="text-sm font-bold text-foreground">Chat on WhatsApp</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>
            <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
              WhatsApp only · replies in minutes · open 24/7
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Dhurander Gaming Exchange. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-muted-foreground/80">
            18+ only. Gaming involves financial risk — play responsibly and only with what you can
            afford to lose. Availability of games may vary by state.
          </p>
        </div>
      </div>
    </footer>
  );
}