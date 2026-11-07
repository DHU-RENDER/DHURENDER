import SectionHeading from "@/components/site/SectionHeading";

const WINS = [
  { user: "User *4829", amount: "₹50,000", game: "Teen Patti" },
  { user: "User *7153", amount: "₹1,20,000", game: "Cricket" },
  { user: "User *2094", amount: "₹35,000", game: "Andar Bahar" },
  { user: "User *8841", amount: "₹2,50,000", game: "Casino" },
  { user: "User *3307", amount: "₹15,000", game: "Dragon Tiger" },
  { user: "User *6192", amount: "₹75,000", game: "Roulette" },
  { user: "User *4456", amount: "₹3,00,000", game: "Football" },
  { user: "User *9981", amount: "₹60,000", game: "Tennis" },
];

function Row({ items, reverse }) {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="flex w-full overflow-hidden">
      <div
        className={`flex w-max items-center hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((win, i) => (
          <div
            key={`${win.user}-${i}`}
            className="mx-2 inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-[10px] font-extrabold text-brand">
              {win.user.slice(-2)}
            </span>
            <span className="text-xs font-semibold text-muted-foreground">{win.user}</span>
            <span className="text-xs font-medium text-muted-foreground/70">won</span>
            <span className="text-sm font-extrabold text-brand">{win.amount}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/70">
              {win.game}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveWins() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="mx-auto mb-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live wins"
          align="center"
          title={
            <>
              Wins landing
              <br className="sm:hidden" /> every minute.
            </>
          }
          description="A snapshot of recent payouts credited to players across our arenas."
        />
      </div>

      <div className="relative flex flex-col gap-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={WINS} />
        <Row items={[...WINS].reverse()} reverse />
      </div>
    </section>
  );
}