
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
    console.log('Formulário enviado:', formData);
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-mint/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h5 className="text-gold font-medium mb-3">Contato</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            Entre em Contato
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Tem alguma dúvida ou quer trabalhar conosco? Entre em contato através do formulário abaixo ou pelos nossos canais de comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-6">Envie-nos uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-bark mb-2">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="João Silva"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-bark mb-2">Seu Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="joao@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-bark mb-2">Sua Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Enviar Mensagem</button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-deep-green">Informações de Contato</h3>
              <p className="text-bark">
                Sinta-se à vontade para entrar em contato através de qualquer um destes canais. Estamos aqui para responder suas perguntas e discutir como podemos trabalhar juntos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <Phone className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Telefone</h4>
                    <p className="text-bark">(11) 99365-8624</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <Mail className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Email</h4>
                    <p className="text-bark">contato@phosconsulting.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mint/30 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <MapPin className="text-deep-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">Localização</h4>
                    <p className="text-bark">São Bernardo do Campo</p>
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
