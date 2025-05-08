
import { Leaf, Sun, Droplets, Home } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-lg hover-scale">
      <div className="bg-mint/30 w-16 h-16 flex items-center justify-center rounded-full mb-6">
        <Icon className="text-deep-green h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-deep-green mb-4">{title}</h3>
      <p className="text-bark">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Creating beautiful spaces while minimizing environmental impact through innovative design practices."
    },
    {
      icon: Home,
      title: "Interior Harmony",
      description: "Crafting interior spaces that blend aesthetics, functionality, and natural elements for a balanced living environment."
    },
    {
      icon: Sun,
      title: "Natural Lighting",
      description: "Optimizing spaces to maximize natural light, reducing energy consumption while creating welcoming atmospheres."
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Implementing water-saving systems and designs that preserve this precious resource while enhancing beauty."
    }
  ];

  return (
    <section id="services" className="section-padding bg-mint/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h5 className="text-gold font-medium mb-3">Our Services</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            What We Offer
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Our comprehensive range of services combines aesthetic excellence with environmental responsibility,
            creating spaces that nurture both people and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
