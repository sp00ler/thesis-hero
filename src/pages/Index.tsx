import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <HowItWorks />
      <Guarantees />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Index;
