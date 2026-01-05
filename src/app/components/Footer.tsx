export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-brand-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-medium to-brand-medium-dark rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">LM</span>
              </div>
              <div>
                <div className="font-semibold">Linconl Marçal</div>
                <div className="text-sm text-gray-400">Psicólogo Clínico</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © 2025 Linconl Marçal - Psicólogo
              </p>
              <p className="text-gray-400 text-sm mt-1">
                CRP 04/72628 | Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}