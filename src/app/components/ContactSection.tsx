import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import doctoraliaLogo from '../../assets/doctoralia-logo.svg';


export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-medium-dark to-brand-medium mb-6"></div>
            <h2 className="mb-4 text-gray-900 text-3xl md:text-4xl">Marque sua consulta</h2>
            <p className="text-gray-600 text-lg">Entre em contato e dê o primeiro passo para o seu bem-estar</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="group">
                <h3 className="text-brand-dark mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Telefone
                </h3>
                <a href="tel:+5534991687617" className="flex items-center gap-3 text-gray-700 hover:text-brand-medium-dark transition-colors text-lg p-4 rounded-xl hover:bg-brand-light/20">
                  <span>(34) 99168-7617</span>
                </a>
              </div>
              
              <div className="group">
                <h3 className="text-brand-dark mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </h3>
                <a href="mailto:linconl.marcal@hotmail.com" className="flex items-center gap-3 text-gray-700 hover:text-brand-medium-dark transition-colors text-lg p-4 rounded-xl hover:bg-brand-light/20 break-all">
                  <span>linconl.marcal@hotmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-brand-dark mb-6 text-center">Redes Sociais</h3>
              <div className="flex justify-center gap-4 mb-10">
                {/* <a href="#" className="bg-gradient-to-br from-brand-medium-dark to-brand-medium text-white p-4 rounded-xl hover:from-brand-dark hover:to-brand-medium-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-gradient-to-br from-brand-medium-dark to-brand-medium text-white p-4 rounded-xl hover:from-brand-dark hover:to-brand-medium-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                  <Twitter size={24} />
                </a> */}
                <a href="https://www.instagram.com/psi.linconl/" className="bg-gradient-to-br from-brand-medium-dark to-brand-medium text-white p-4 rounded-xl hover:from-brand-dark hover:to-brand-medium-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                  <Instagram size={24} />
                </a>
                <a href="https://www.doctoralia.com.br/linconl-marcal" className="bg-gradient-to-br from-brand-medium-dark to-brand-medium text-white p-4 rounded-xl hover:from-brand-dark hover:to-brand-medium-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 flex items-center justify-center">
                  <img 
                    src={doctoraliaLogo} 
                    alt="Doctoralia" 
                    className="w-6 h-6 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://api.whatsapp.com/send/?phone=5534991687617&text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+a+psicoterapia+que+voc%C3%AA+oferece.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-brand-medium-dark to-brand-medium text-white px-12 py-5 rounded-xl hover:from-brand-dark hover:to-brand-medium-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 text-lg font-medium inline-block">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}