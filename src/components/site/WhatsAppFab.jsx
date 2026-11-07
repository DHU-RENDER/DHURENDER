import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dhurander on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full brand-gradient px-5 py-4 font-extrabold text-ink shadow-brand transition-all duration-300 ease-silk hover:-translate-y-1 md:flex"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-brand/50" />
      <MessageCircle className="h-5 w-5" strokeWidth={2.6} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-[0.16em] transition-all duration-500 ease-silk group-hover:max-w-[130px]">
        Chat with us
      </span>
    </a>
  );
}