const Testimonials = () => {
  const testimonials = [
    {
      text: "Спасибо! Курсовая сдана! для преподавателя покатыш!",
      author: "Женсшм, МГУ"
    },
    {
      text: "Спасли перед отчислением. Быстро и четко.",
      author: "Ирина К« отзыву Т"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <p className="text-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-muted-foreground text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;