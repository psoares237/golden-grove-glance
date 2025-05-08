
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mint/20 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h5 className="text-gold font-medium">Connecting with nature</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-green leading-tight">
              Discover the beauty <br/>
              <span className="text-forest">of natural harmony</span>
            </h1>
            <p className="text-bark text-lg md:text-xl max-w-lg">
              Experience the perfect balance between luxury and sustainability, 
              creating spaces that nurture both people and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-[500px] relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 right-0 w-full h-full bg-forest/10 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
              <div className="absolute inset-4 bg-[url('https://images.unsplash.com/photo-1520262389826-d559a9aca921?q=80&w=2062')] bg-cover bg-center rounded-tr-[80px] rounded-bl-[80px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
