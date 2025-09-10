import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Успевай всё — <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                мы напишем за тебя!
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Курсовые, дипломные, контрольные и другие студенческие работы под ключ: 
              <span className="font-semibold text-foreground"> быстро, анонимно, с гарантией</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-xl">
              <MessageSquare className="w-6 h-6" />
              Оформить заказ
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Узнать стоимость
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;