import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-serif">Clara Silva</span>
            </div>
            <p className="text-gray-400">
              Capturando momentos únicos e transformando-os em memórias eternas através da arte da fotografia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-rose-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-rose-500 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-rose-500 transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-rose-500 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-rose-500 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services#weddings" className="text-gray-400 hover:text-rose-500 transition-colors">Casamentos</a>
              </li>
              <li>
                <a href="/services#portraits" className="text-gray-400 hover:text-rose-500 transition-colors">Retratos</a>
              </li>
              <li>
                <a href="/services#events" className="text-gray-400 hover:text-rose-500 transition-colors">Eventos</a>
              </li>
              <li>
                <a href="/services#family" className="text-gray-400 hover:text-rose-500 transition-colors">Família</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e dicas de fotografia
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-white"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Clara Silva Fotografia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-rose-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="/terms" className="text-gray-400 hover:text-rose-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;