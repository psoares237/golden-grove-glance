
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Homeowner",
    text: "Working with the Natura team transformed our home into a sustainable paradise. The attention to detail and commitment to eco-friendly solutions exceeded our expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    text: "As a developer focused on sustainable buildings, partnering with this team has been invaluable. Their innovative approach and expertise have elevated our projects significantly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sofia Rodriguez",
    role: "Interior Designer",
    text: "The collaborative process was seamless and inspiring. Their knowledge of sustainable materials opened new possibilities for my design work that I hadn't considered before.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-lg">
      <div className="flex items-center gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-bark mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-deep-green">{testimonial.name}</h4>
          <p className="text-sm text-bark">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h5 className="text-gold font-medium mb-3">Testimonials</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            What Our Clients Say
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
