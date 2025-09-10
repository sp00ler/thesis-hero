import { MessageCircle, Calculator, CreditCard, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Вы оставляете заявку",
      description: "Опишите задание, укажите требования и сроки выполнения"
    },
    {
      icon: Calculator,
      number: "02",
      title: "Мы оцениваем стоимость",
      description: "В течение 15 минут получите расчет стоимости и сроков"
    },
    {
      icon: CreditCard,
      number: "03",
      title: "Вы вносите предоплату",
      description: "Безопасная оплата любым удобным способом"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Мы сдаём работу в срок",
      description: "Получаете готовую работу с доработками и гарантией"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс — от заявки до получения готовой работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-4 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow group-hover:shadow-xl transition-all duration-300">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;