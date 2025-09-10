import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Готов к заказу?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Оставь заявку — мы всё сделаем!<br />
            Быстро, качественно, с гарантией результата
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="accent" size="lg" className="px-10 py-6 text-xl">
              <MessageSquare className="w-6 h-6" />
              Заказать работу сейчас
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-6 text-xl bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
            >
              <Phone className="w-6 h-6" />
              Получить консультацию
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-primary-foreground/80 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Поддержка 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Бесплатная консультация</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Расчет за 15 минут</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;