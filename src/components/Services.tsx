const Services = () => {
  const services = [
    {
      title: "Курсовые и дипломные"
    },
    {
      title: "Рефераты и эссе"
    },
    {
      title: "Контрольные и лабораторные"
    },
    {
      title: "Статьи, ВКР, магистерские и пр."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Какие работы мы делаем:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">{service.title}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-foreground">Контрольные и лабораторные</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-foreground">
            Также помогаем с презентациями, чертежами и расчетами!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;