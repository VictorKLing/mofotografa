import React from 'react';
import { Camera, Users, Heart, Building, Star, Clock, Image, Video } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Ensaios Individuais',
    description: 'Sessões personalizadas para capturar sua essência única.',
    price: 'A partir de R$ 450',
    features: ['2 horas de sessão', '50 fotos editadas', 'Galeria digital'],
  },
  {
    icon: Users,
    title: 'Ensaios Familiares',
    description: 'Eternizando momentos especiais com quem você ama.',
    price: 'A partir de R$ 650',
    features: ['3 horas de sessão', '80 fotos editadas', 'Álbum físico 20x30'],
  },
  {
    icon: Heart,
    title: 'Casamentos',
    description: 'Documentando histórias de amor com sensibilidade.',
    price: 'A partir de R$ 3.500',
    features: ['Cobertura completa', '500+ fotos editadas', 'Álbum luxo'],
  },
  {
    icon: Building,
    title: 'Eventos Corporativos',
    description: 'Cobertura profissional para seus eventos empresariais.',
    price: 'A partir de R$ 1.200',
    features: ['4 horas de cobertura', '200 fotos editadas', 'Entrega em 48h'],
  },
];

const features = [
  { icon: Star, text: 'Equipamentos profissionais de última geração' },
  { icon: Clock, text: 'Entrega rápida e pontual' },
  { icon: Image, text: 'Edição profissional incluída' },
  { icon: Video, text: 'Making of em vídeo opcional' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Serviços</h2>
          <div className="w-20 h-1 bg-rose-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços fotográficos para atender suas necessidades,
            sempre com a máxima qualidade e dedicação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <service.icon className="w-12 h-12 mb-4 text-rose-600" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-rose-600 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-rose-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <a
                  href="/contact"
                  className="block text-center py-2 px-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md"
            >
              <Icon className="w-6 h-6 text-rose-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;