
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold text-deep-green">Natura</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-deep-green hover:text-gold transition-colors">Home</a>
          <a href="#about" className="text-deep-green hover:text-gold transition-colors">About</a>
          <a href="#services" className="text-deep-green hover:text-gold transition-colors">Services</a>
          <a href="#testimonials" className="text-deep-green hover:text-gold transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-deep-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-deep-green hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-deep-green hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="text-deep-green hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="text-deep-green hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
