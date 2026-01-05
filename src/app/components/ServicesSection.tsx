export function ServicesSection() {
  return (
    <section id = 'terapia-online' className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-light/50 to-brand-medium/30 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjY2NDg5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bem-estar e equilíbrio"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] ring-1 ring-brand-dark/5"
            />
          </div>
          
          <div className="text-gray-900 order-1 md:order-2">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-medium-dark to-brand-medium mb-6"></div>
            <h2 className="mb-6 text-gray-900 text-3xl md:text-4xl">Terapia Online</h2>
            
            <p className="mb-8 text-gray-700 text-lg leading-relaxed">
              As sessões online oferecem a mesma qualidade e eficácia das sessões presenciais, 
              com a vantagem de você poder realizar de onde estiver, com total conforto e segurança.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light/20 transition-colors group">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-medium-dark text-white rounded-lg flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 text-lg">Sessões de 50 minutos via videoconferência</span>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light/20 transition-colors group">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-medium-dark text-white rounded-lg flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 text-lg">Agendamento flexível conforme sua disponibilidade</span>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light/20 transition-colors group">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-medium-dark text-white rounded-lg flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 text-lg">Ambiente seguro e sigiloso</span>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light/20 transition-colors group">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-medium-dark text-white rounded-lg flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 text-lg">Abordagem humanizada e personalizada</span>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light/20 transition-colors group">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-medium-dark text-white rounded-lg flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 text-lg">Suporte entre sessões quando necessário</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}