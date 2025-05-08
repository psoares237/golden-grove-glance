
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-mint/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h5 className="text-gold font-medium mb-3">Contact Us</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            Get In Touch
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Have a question or want to work together? Reach out to us using the form below or through our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-bark mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-bark mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-bark mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-deep-green">Contact Information</h3>
              <p className="text-bark">
                Feel free to reach out to us through any of these channels. We're here to answer your questions and discuss how we can work together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <Phone className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Phone</h4>
                    <p className="text-bark">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <Mail className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Email</h4>
                    <p className="text-bark">hello@natura-design.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <MapPin className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Location</h4>
                    <p className="text-bark">123 Nature Way, Green City, CA 94123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
