import onlineImage from "./figma/lincoln-desenho(1).png";

export function ServicesSection() {
  return (
    <section id = 'terapia-online' className="py-25 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="relative order-2 md:order-1 max-w-[30rem] mx-auto md:mx-7">
            <img
              src={onlineImage}
              alt="Bem-estar e equilíbrio"
              className="relative rounded-3xl shadow-2xl w-full h-auto ring-1 ring-brand-dark/5"
            />
          </div>
          
          <div className="text-gray-900 order-1 md:order-2">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-medium-dark to-brand-medium mb-6"></div>
            <h2 className="mb-6 text-gray-900 text-3xl md:text-4xl">Terapia Online</h2>
            
            <p className="mb-8 text-gray-700 text-lg leading-relaxed">
            As sessões online tem suas peculiaridades se comparadas com as presenciais, com a vantagem de você poder realizar de onde estiver, com total conforto e segurança.
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