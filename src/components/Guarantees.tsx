import { Clock, Shield, Edit, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Выполним в срок",
      description: "или вернём деньги",
      detail: "Строго соблюдаем все оговоренные сроки"
    },
    {
      icon: Shield,
      title: "Уникальность",
      description: "подтверждена",
      detail: "Проверяем каждую работу на антиплагиат"
    },
    {
      icon: Edit,
      title: "Бесплатные правки",
      description: "по методичке",
      detail: "Дорабатываем до полного соответствия требованиям"
    },
    {
      icon: Lock,
      title: "Полная",
      description: "конфиденциальность",
      detail: "Ваши данные под надёжной защитой"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наши гарантии
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы берём на себя ответственность за качество и несём реальные обязательства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-accent shadow-accent">
                    <guarantee.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-lg font-medium text-primary mb-3">
                  {guarantee.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {guarantee.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;