import { motion } from "framer-motion";
import { Clock, Lock, Headphones, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/site/SectionHeading";
import { waLink } from "@/lib/whatsapp";

const FEATURES = [
  {
    icon: Clock,
    title: "10-minute withdrawals",
    copy: "Payouts land in your UPI, Paytm or bank account in about ten minutes — no pending queues, no excuses.",
    meta: "Avg. 8 min 42 sec",
  },
  {
    icon: Lock,
    title: "Encrypted end to end",
    copy: "Bank-grade encryption on every transaction and login. Your details never leave our secured infrastructure.",
    meta: "256-bit security",
  },
  {
    icon: Headphones,
    title: "Real humans on WhatsApp",
    copy: "One chat for IDs, deposits, withdrawals and doubts. Our desk answers in minutes, around the clock.",
    meta: "24/7 · Avg. 2 min reply",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative scroll-mt-20 overflow-hidden border-y border-border py-12 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 noise opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="The vault"
            title={
              <>
                Built to
                <br />
                protect.
              </>
            }
            description="Every deposit tracked, every payout guaranteed, every conversation private. Dhurander runs on infrastructure trusted by thousands of Indian players."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-4 overflow-hidden rounded-2xl border border-border sm:mt-6 sm:rounded-3xl"
          >
            <Image
              src="https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/213537eb4_generated_image.png"
              alt="Golden energy swirl representing secured payouts"
              fittingType="fill"
              className="h-24 w-full object-cover sm:h-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand">
                  Payout desk
                </p>
                <p className="mt-1 font-display text-xl uppercase text-white">
                  Verified every hour
                </p>
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full brand-gradient text-ink transition-transform duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-3.5 transition-colors duration-500 hover:border-brand/60 sm:rounded-3xl sm:p-6"
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
                <div className="relative flex flex-row items-start gap-3 sm:gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl brand-gradient text-ink sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-base uppercase leading-tight tracking-wide text-foreground sm:text-2xl">
                        {feature.title}
                      </h3>
                      <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.12em] text-brand sm:px-2.5 sm:py-1 sm:text-[9px] sm:tracking-[0.16em]">
                        {feature.meta}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-lg text-[11px] leading-snug text-muted-foreground sm:mt-3 sm:text-sm sm:leading-relaxed">
                      {feature.copy}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}