import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Pointer as Pinterest, Facebook, Camera } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'Serviços', href: '/services' },
    { label: 'Depoimentos', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contact' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Pinterest, href: '#', label: 'Pinterest' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Camera className={`w-8 h-8 ${isScrolled ? 'text-rose-600' : 'text-white'}`} />
            <h1 className={`text-2xl font-serif font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Clara Silva
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${
                  isScrolled 
                    ? 'text-gray-700 hover:text-rose-600' 
                    : 'text-white hover:text-rose-300'
                } transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`${
                  isScrolled 
                    ? 'text-gray-600 hover:text-rose-600' 
                    : 'text-white hover:text-rose-300'
                } transition-colors duration-200`}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-4 px-3 py-2 border-t border-gray-100">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;