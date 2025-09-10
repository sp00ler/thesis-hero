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

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Точно в срок</span>
              <span className="text-xs text-muted-foreground">Даже если "вчера надо"</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">100% анонимно</span>
              <span className="text-xs text-muted-foreground">Данные не передаём</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Уникальность</span>
              <span className="text-xs text-muted-foreground">От 70%+ антиплагиат</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Экспертные авторы</span>
              <span className="text-xs text-muted-foreground">Преподаватели и профи</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;