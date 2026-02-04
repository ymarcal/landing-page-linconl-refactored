import { Brain, Heart, Users } from 'lucide-react';

export function PillarsSection() {
  const pillars = [
    {
      icon: Brain,
      title: 'Autoconhecimento e Clareza',
      description: 'Entenda a origem de seus pensamentos e comportamentos. A terapia é uma jornada de descoberta que ilumina seus padrões e te dá clareza para tomar decisões mais conscientes e alinhadas com quem você é.'
    },
    {
      icon: Heart,
      title: 'Equilíbrio Emocional',
      description: 'Aprenda a navegar por emoções difíceis, como o estresse e a ansiedade. Desenvolva ferramentas práticas para regular seus sentimentos e construir uma base emocional sólida para enfrentar os desafios da vida com mais resiliência.'
    },
    {
      icon: Users,
      title: 'Relacionamentos Saudáveis',
      description: 'A forma como nos relacionamos com os outros é um reflexo de como estamos por dentro. Melhore sua comunicação, estabeleça limites e construa conexões mais fortes, autênticas e significativas com as pessoas ao seu redor.'
    }
  ];

  return (
    <section id="beneficios" className="h-full bg-gradient-to-br from-gray-50 to-brand-light/20 relative overflow-hidden flex items-center">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-medium/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-light/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-medium-dark to-brand-medium mb-6"></div>
          <h2 className="mb-4 text-gray-900 text-3xl md:text-4xl">Pilares para o seu Bem-Estar</h2>
          <p className="text-gray-600 text-lg">Descubra como a terapia pode transformar sua vida através destes três pilares fundamentais</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-medium group hover:-translate-y-1">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-brand-light to-brand-light/50 p-5 rounded-2xl group-hover:from-brand-medium-dark group-hover:to-brand-medium transition-all duration-300">
                  <pillar.icon className="w-10 h-10 text-brand-medium-dark group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-center mb-4 text-gray-900 text-xl">{pillar.title}</h3>
              
              <p className="text-center text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}