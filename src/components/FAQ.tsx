import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Это законно?",
      answer: "Мы предоставляем образцы, вы сами решаете, как их использовать."
    },
    {
      question: "Какая уникальность?",
      answer: "От 70 до 50% по Antiplagiat.ru, проверяем перед сдачей."
    },
    {
      question: "Если не примут?",
      answer: "Доработаем бесплатно по методическим указаниям."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;