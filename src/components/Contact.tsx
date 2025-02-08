import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Contato</h2>
          <div className="w-20 h-1 bg-rose-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato para agendar seu ensaio ou tirar dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="wedding">Casamento</option>
                  <option value="portrait">Ensaio Individual</option>
                  <option value="family">Ensaio Familiar</option>
                  <option value="event">Evento</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="Sua mensagem..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-rose-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-serif mb-4">Informações de Contato</h3>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@clarasilva.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-gray-600">São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774948833!2d-46.6520皇!3d-23.5505952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9d5d52c6bf3f!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647891234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;