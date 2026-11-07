import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { waLink } from "@/lib/whatsapp";

const FAQS = [
  {
    q: "How do I get my Dhurander ID?",
    a: "Tap any “Get ID” button on this page — it opens WhatsApp with a ready message. Our team replies within minutes, verifies you, and sends your personal ID and password.",
  },
  {
    q: "What is the minimum deposit?",
    a: "You can start with ₹300. Deposits are accepted through UPI, Paytm, Google Pay, PhonePe, bank transfer and USDT, and are credited instantly.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Most withdrawals reach your UPI or bank account in about ten minutes. Our average payout time is under nine minutes, 24 hours a day.",
  },
  {
    q: "Is my money and data safe?",
    a: "Yes. Every transaction is encrypted end to end and handled by a verified payout desk. We never ask for your banking password or OTP anywhere else.",
  },
  {
    q: "Can I play on my phone?",
    a: "Dhurander runs fully in your mobile browser — no app to download. IDs also work on desktop whenever you want a bigger screen.",
  },
  {
    q: "Who can join?",
    a: "Players aged 18 and above. Play responsibly and only with funds you can afford to spend on entertainment.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-12 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Everything
                <br />
                you asked.
              </>
            }
            description="Still unsure? Our WhatsApp desk answers in minutes, any time of day."
          />
          <a
            href={waLink("Hi DHURANDER! I have a question before joining.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-brand transition-colors duration-300 hover:bg-brand hover:text-ink"
          >
            Ask us on WhatsApp
          </a>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-4 text-left"
                >
                  <span
                    className={`text-sm font-bold transition-colors duration-300 sm:text-base ${
                      isOpen ? "text-brand" : "text-foreground group-hover:text-brand"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-silk ${
                      isOpen
                        ? "rotate-45 border-brand bg-brand text-ink"
                        : "border-border text-foreground/60 group-hover:border-brand/60"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}