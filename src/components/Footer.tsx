
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Natura</h3>
            <p className="text-white/80 mb-6">
              Creating harmony between design and nature, 
              building sustainable spaces for a better future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gold transition-colors">Sustainable Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Interior Harmony</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Natural Lighting</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Water Conservation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md text-deep-green focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Natura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
