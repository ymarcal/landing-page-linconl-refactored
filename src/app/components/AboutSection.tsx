export function AboutSection() {
  return (
    <section id="atuacoes" className="py-25 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="text-gray-900">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-medium-dark to-brand-medium mb-6"></div>
            <h2 className="mb-6 text-gray-900 text-3xl md:text-4xl">Sobre meu trabalho</h2>
            
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              Utilizo, de forma integrativa, a Terapia Cognitivo-Comportamental (TCC), uma abordagem focada em entender seus padrões de pensamento para desenvolver novas estratégias e alcançar seus objetivos, com ferramentas práticas e foco em metas claras e desafios atuais. Juntamente, com a Terapia de Aceitação e Compromisso (ACT), abordagem considerada uma "terceira onda" da TCC, e que aprofunda conceitos como aceitação, mindfulness e valores pessoais. 
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-light/50 to-brand-medium/30 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1766250533363-01b974b2ba32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMG5vdGVib29rfGVufDF8fHx8MTc2NjY4MDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sessão de terapia"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] ring-1 ring-brand-dark/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}