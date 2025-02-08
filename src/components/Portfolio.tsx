import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'weddings', label: 'Casamentos' },
  { id: 'portraits', label: 'Retratos' },
  { id: 'events', label: 'Eventos' },
  { id: 'family', label: 'Família' },
];

const portfolioItems = [
  {
    id: 1,
    category: 'weddings',
    image: 'https://i.pinimg.com/736x/ef/e3/6e/efe36e6c9e3f5bd00c11bc5907c20bef.jpg',
    title: 'Casamento na Praia',
    description: 'Um lindo casamento ao pôr do sol',
  },
  {
    id: 2,
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80',
    title: 'Retrato Artístico',
    description: 'Sessão de moda urbana',
  },
  {
    id: 3,
    category: 'events',
    image: 'https://i.pinimg.com/736x/1f/f4/62/1ff462d14da2b9e7502c778556eba091.jpg',
    title: 'Evento Corporativo',
    description: 'Conferência anual',
  },
  {
    id: 4,
    category: 'family',
    image: 'https://i.pinimg.com/736x/01/8e/4b/018e4bca382a929fc83cf870ee4cead9.jpg',
    title: 'Ensaio Familiar',
    description: 'Momentos em família',
  },
  {
    id: 5,
    category: 'weddings',
    image: 'https://i.pinimg.com/736x/99/04/a6/9904a6621d412cb43848b26217c3f72e.jpg',
    title: 'Casamento Tradicional',
    description: 'Cerimônia elegante',
  },
  {
    id: 6,
    category: 'portraits',
    image: 'https://i.pinimg.com/736x/cf/23/a1/cf23a1a8c667c4d6cc17a3efacfad3e8.jpg',
    title: 'Retrato Profissional',
    description: 'Sessão executiva',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(prev => 
      prev === 0 ? portfolioItems.length - 1 : (prev - 1)
    );
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(prev => 
      prev === portfolioItems.length - 1 ? 0 : (prev + 1)
    );
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Portfólio</h2>
          <div className="w-20 h-1 bg-rose-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore uma seleção dos meus melhores trabalhos em fotografia
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-rose-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-rose-400"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 text-white hover:text-rose-400"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 text-white hover:text-rose-400"
            >
              <ChevronRight size={48} />
            </button>
            <img
              src={portfolioItems[selectedImage].image}
              alt={portfolioItems[selectedImage].title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;