import { ThemeProvider } from "@/lib/theme";
import { Toaster } from "@/components/ui/sonner";
import Watermark from "@/components/site/Watermark";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import BonusMarquee from "@/components/site/BonusMarquee";
import Arenas from "@/components/site/Arenas";
import TrustSection from "@/components/site/TrustSection";
import StatsBand from "@/components/site/StatsBand";
import LiveWins from "@/components/site/LiveWins";
import HowToJoin from "@/components/site/HowToJoin";
import Faq from "@/components/site/Faq";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import BottomNav from "@/components/site/BottomNav";
import WhatsAppFab from "@/components/site/WhatsAppFab";

export default function App() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen overflow-x-hidden bg-background pb-24 text-foreground md:pb-0">
        <Watermark />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <BonusMarquee />
          <Arenas />
          <TrustSection />
          <StatsBand />
          <LiveWins />
          <HowToJoin />
          <Faq />
          <FinalCta />
        </div>
        <Footer />
        <BottomNav />
        <WhatsAppFab />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
