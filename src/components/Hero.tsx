import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    title: 'Eternizando Emoções',
    subtitle: 'Cada click conta uma história especial',
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
    title: 'Arte em Cada Detalhe',
    subtitle: 'Fotografia com paixão e dedicação',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-serif mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delayed">
                {slide.subtitle}
              </p>
              <div className="animate-fade-in-delayed-more">
                <a
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-200"
                >
                  Veja o Portfólio
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-rose-600' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;