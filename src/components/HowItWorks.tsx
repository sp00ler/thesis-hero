import { MessageCircle, Calculator, CreditCard, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    "Выполним в срок или вернём деньги",
    "Уникальность подтверждена",
    "Бесплатные правки по методичке", 
    "Полная конфиденциальность"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Как это работает:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-foreground">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;