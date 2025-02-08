import React from 'react';
import { Camera, Heart, Award, Users } from 'lucide-react';

const stats = [
  { icon: Camera, value: '2.5K+', label: 'Ensaios Realizados' },
  { icon: Heart, value: '180+', label: 'Casamentos' },
  { icon: Award, value: '15+', label: 'Prêmios' },
  { icon: Users, value: '1.8K+', label: 'Clientes Felizes' },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="Photographer"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-rose-100 rounded-lg -z-0" />
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-gray-100 rounded-lg -z-0" />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif mb-4">Sobre Mim</h2>
              <div className="w-20 h-1 bg-rose-600 rounded-full mb-6" />
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Sou uma fotógrafa apaixonada por capturar a essência dos momentos mais especiais, transformando instantes fugazes em lembranças eternas. Com mais de 8 anos de experiência no mundo da fotografia, desenvolvi um estilo único que combina técnica refinada, olhar sensível e criatividade para registrar cada detalhe com autenticidade.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Acredito que cada sessão fotográfica é uma oportunidade de contar uma história única, transmitindo emoções genuínas e criando memórias inesquecíveis. Meu objetivo é fazer com que cada imagem reflita a beleza e a singularidade de cada momento, seja em eventos, ensaios ou ocasiões especiais. Afinal, a fotografia é mais do que um simples clique – é uma forma de arte que imortaliza sentimentos e conecta pessoas ao longo do tempo.
            </p>
            
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Conheça Mais Sobre Mim
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-rose-600" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;