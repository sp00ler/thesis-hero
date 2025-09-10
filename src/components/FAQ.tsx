import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Это законно?",
      answer: "Мы предоставляем образцы академических работ для ознакомления. Как вы будете использовать эти материалы — решаете сами. Наша деятельность полностью легальна."
    },
    {
      question: "Какая уникальность работ?",
      answer: "От 70 до 90% по системе Antiplagiat.ru. Мы тщательно проверяем каждую работу перед сдачей и гарантируем соответствие требованиям по уникальности."
    },
    {
      question: "Что если работу не примут?",
      answer: "Мы бесплатно доработаем работу в соответствии с методическими указаниями и замечаниями преподавателя. Количество правок не ограничено."
    },
    {
      question: "Как происходит оплата?",
      answer: "Оплата производится в два этапа: предоплата 50% после согласования всех условий, и оставшиеся 50% после получения готовой работы."
    },
    {
      question: "Можно ли связаться с автором?",
      answer: "Да, вы можете общаться с автором через нашего менеджера для уточнения деталей работы и отслеживания процесса выполнения."
    },
    {
      question: "Какие сроки выполнения?",
      answer: "Сроки зависят от сложности и объёма работы. Минимальный срок — 24 часа для простых работ, максимальный — до 30 дней для сложных дипломных проектов."
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