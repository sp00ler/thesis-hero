import { BookOpen, FileText, Calculator, Presentation, Lightbulb, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Курсовые и дипломные",
      description: "Качественные исследовательские работы с соблюдением всех требований"
    },
    {
      icon: FileText,
      title: "Рефераты и эссе",
      description: "Быстро и профессионально напишем работы любой сложности"
    },
    {
      icon: Calculator,
      title: "Контрольные и лабораторные",
      description: "Решение задач и выполнение практических работ"
    },
    {
      icon: BookOpen,
      title: "Статьи, ВКР, магистерские",
      description: "Научные работы высокого уровня для любой специальности"
    },
    {
      icon: Presentation,
      title: "Презентации",
      description: "Создание эффектных презентаций к вашим работам"
    },
    {
      icon: Lightbulb,
      title: "Чертежи и расчеты",
      description: "Техническая документация и специализированные расчеты"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Какие работы мы делаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Помогаем студентам с любыми академическими задачами — от простых рефератов до сложных дипломных работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-hero">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;