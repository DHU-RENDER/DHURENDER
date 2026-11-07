import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const ITEMS = [
  { title: "Welcome bonus", value: "10% extra", note: "on your first deposit" },
  { title: "Every deposit", value: "3% bonus", note: "credited instantly" },
  { title: "Refer a friend", value: "₹500 cash", note: "after their first play" },
  { title: "10 min payouts", value: "withdraw fast", note: "UPI · Paytm · Bank" },
];

export default function BonusMarquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative border-y border-border bg-foreground/[0.03] py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] active:[animation-play-state:paused]"
        style={{ animationDuration: "62s" }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center" aria-hidden={group === 1}>
            {loop.map((item, i) => (
              <a
                key={`${group}-${i}`}
                href={waLink(`Hi DHURANDER! I want to claim the ${item.title} offer.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-6 inline-flex items-center gap-3 whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.title}
                </span>
                <span className="text-sm font-extrabold uppercase tracking-wide text-foreground">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-muted-foreground/70">
                  {item.note}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand transition-transform duration-300 group-hover:translate-x-1">
                  Claim <ArrowRight className="h-3 w-3" />
                </span>
                <span className="ml-4 text-brand/30">/</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}