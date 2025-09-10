const GuaranteesSimple = () => {
  const guarantees = [
    "Выполним в срок или вернём деньги",
    "Уникальность подтверждена", 
    "Бесплатные правки по методичке",
    "Полная конфиденциальность"
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Гарантии:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-foreground">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSimple;