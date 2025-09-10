import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import GuaranteesSimple from "@/components/GuaranteesSimple";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhyChooseUs />
      <Services />
      <GuaranteesSimple />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Index;
