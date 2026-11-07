import SectionHeading from "@/components/site/SectionHeading";
import ArenaCarousel from "@/components/site/ArenaCarousel";
import { waLink } from "@/lib/whatsapp";

const GAMES = [
  {
    name: "Cricket",
    meta: "IPL · International",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/51036aa0e_generated_image.png",
  },
  {
    name: "Casino",
    meta: "Live dealer tables",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/2b1f18b8d_generated_image.png",
  },
  {
    name: "Teen Patti",
    meta: "Real players · 24/7",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/0759b7522_generated_image.png",
  },
  {
    name: "Andar Bahar",
    meta: "Classic · Fast deal",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/29170b186_generated_image.png",
  },
  {
    name: "Dragon Tiger",
    meta: "Quickest card game",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/711d56a86_generated_image.png",
  },
  {
    name: "Roulette",
    meta: "European · American",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/ece68d679_generated_image.png",
  },
  {
    name: "Football",
    meta: "EPL · La Liga · UCL",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/924c58253_generated_image.png",
  },
  {
    name: "Tennis",
    meta: "Grand Slam · ATP",
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/7ba761923_generated_image.png",
  },
];

export default function Arenas() {
  return (
    <section id="arenas" className="relative scroll-mt-20 overflow-hidden py-12 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[80%] -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live exchange"
          title={
            <>
              Pick your <span className="text-brand-gradient">arena</span>
            </>
          }
          description="Swipe through the arenas — the one in the middle is ready to open. One ID plays them all."
        />
      </div>

      <div className="relative mt-7">
        <ArenaCarousel games={GAMES} />
      </div>

      <div className="relative mx-auto mt-7 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand transition-colors duration-300 hover:bg-brand hover:text-ink"
        >
          Not sure? Ask us on WhatsApp
        </a>
      </div>
    </section>
  );
}