export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ana',
      age: 28,
      text: 'As sessões com o Linconl me ajudaram muito a entender minhas emoções e a lidar melhor com a ansiedade. Me sinto mais confiante e em paz comigo mesma.'
    },
    {
      name: 'Roberto',
      age: 52,
      text: 'Procurei terapia depois de anos adiando. O acolhimento e a abordagem profissional do Linconl fizeram toda diferença. Hoje consigo ter mais qualidade de vida.'
    },
    {
      name: 'Mariana',
      age: 34,
      text: 'Recomendo muito! O Linconl me ajudou a melhorar meus relacionamentos e a estabelecer limites saudáveis. Sou muito grata pelo apoio recebido.'
    }
  ];

  return (
    <section className="py-25 md:py-32 bg-gradient-to-br from-brand-dark to-brand-medium-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block w-16 h-1 bg-white/30 mb-6"></div>
          <h2 className="mb-4 text-white text-3xl md:text-4xl">O que dizem meus pacientes</h2>
          <p className="text-brand-light text-lg">Depoimentos de quem já passou por aqui</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-brand-light">{testimonial.age} anos</div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-6xl text-white/10 font-serif">"</div>
                <p className="relative leading-relaxed text-white/90 text-lg">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}