
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gold/10 rounded-tr-[50px] rounded-bl-[50px]"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[url('https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=2066')] bg-cover bg-center rounded-tr-[50px] rounded-bl-[50px] shadow-xl"></div>
          </div>
          <div className="space-y-8">
            <h5 className="text-gold font-medium">About Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-green">
              We bring harmony between nature and design
            </h2>
            <p className="text-bark">
              With over 15 years of experience, we've pioneered sustainable design solutions that respect the environment while creating beautiful, functional spaces. Our approach combines traditional wisdom with modern innovation.
            </p>
            <ul className="space-y-3">
              {[
                "Sustainable materials and practices",
                "Expert designers and craftspeople",
                "Award-winning projects worldwide",
                "Commitment to environmental responsibility"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-forest h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#services" className="btn-secondary inline-block">Explore Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
