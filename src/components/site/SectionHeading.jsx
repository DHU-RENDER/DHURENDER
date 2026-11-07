import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-brand" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-brand sm:text-[11px]">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}