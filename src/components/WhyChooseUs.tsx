import { Clock, Shield, Users, CheckCircle, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Сдача точно в срок",
      description: "даже если \"вчера надо было\""
    },
    {
      icon: Shield,
      title: "100% анонимно",
      description: "никаких данных не передаём"
    },
    {
      icon: Users,
      title: "Экспертные авторы",
      description: "преподаватели и профи"
    },
    {
      icon: CheckCircle,
      title: "Гарантия уникальности",
      description: "антиплагиат от 78%"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "всегда на связи"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          Почему выбирают нас:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;