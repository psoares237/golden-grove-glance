
import { 
  Briefcase, 
  AlertTriangle, 
  LightbulbIcon, 
  Award, 
  User, 
  MessageCircle 
} from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Finanças Estratégicas para PMEs: Alcance o Próximo Nível",
    subtitle: "Transformando números em resultados para o seu negócio",
    icon: <Briefcase size={64} className="text-gold mb-6" />,
    content: [
      "Por PHOS Consultoria",
      "Ao análisar seu caixa e não ficar tão contente, qual a primeira coisa a se fazer? Resposta: Rever o processo de gestão."
    ]
  },
  {
    id: 2,
    title: "PMEs Brasileiras: Desafios que Impactam seu Crescimento",
    icon: <AlertTriangle size={64} className="text-gold mb-6" />,
    content: [
      "Gestão de Fluxo de Caixa: Muitas PMEs lutam com a imprevisibilidade financeira, afetando pagamentos e investimentos.",
      "Planejamento e Orçamento: A ausência de um planejamento claro impede o acompanhamento de metas e a tomada de decisão estratégica.",
      "Otimização de Custos e Precificação: Dificuldades em identificar desperdícios e definir preços que garantam a lucratividade.",
      "Acesso a Crédito e Crescimento Sustentável: Obstáculos para obter financiamento e crescer de forma planejada e segura.",
      "Carga Tributária e Complexidade: O peso dos impostos e a burocracia consomem tempo e recursos."
    ],
    footer: "Dados mostram que 60% das PMEs brasileiras enfrentam dificuldades financeiras nos primeiros 5 anos."
  },
  {
    id: 3,
    title: "Nossa Abordagem: Soluções Financeiras Práticas e Personalizadas",
    icon: <LightbulbIcon size={64} className="text-gold mb-6" />,
    content: [
      "Diagnóstico Financeiro Express: Entenda a saúde da sua empresa rapidamente e identifique prioridades.",
      "Planejamento e Controle de Fluxo de Caixa: Ganhe previsibilidade e controle total sobre suas finanças diárias.",
      "Mentoria Financeira Estratégica: Capacite-se para tomar as melhores decisões financeiras para seu negócio.",
      "Otimização de Custos e Precificação Inteligente: Aumente sua lucratividade com custos sob controle e preços estratégicos.",
      "Preparação para Captação de Recursos: Esteja pronto para atrair investimentos e impulsionar seu crescimento."
    ]
  },
  {
    id: 4,
    title: "Nosso Compromisso: Experiência, Foco em Resultados e Parceria",
    icon: <Award size={64} className="text-gold mb-6" />,
    content: [
      "15 Anos de Experiência Prática: Vivência real em gestão financeira e liderança, entendendo suas dores.",
      "Resultados Rápidos e Aplicáveis: Soluções desenhadas para o dia a dia da PME, sem complicação.",
      "Abordagem Personalizada e Humanizada: Cada cliente é único. Combinamos técnica e escuta ativa.",
      "Uso Inteligente de Tecnologia: Ferramentas digitais para otimizar, sem perder o toque pessoal.",
      "Mentoria e Capacitação Contínua: Além de resolver, capacitamos você para o futuro."
    ]
  },
  {
    id: 5,
    title: "Conheça Pedro Soares - Seu Parceiro Estratégico em Finanças",
    icon: <User size={64} className="text-gold mb-6" />,
    content: [
      "Gestor Financeiro com +15 anos de experiência, liderando equipes e otimizando resultados em empresas prestadoras de serviços.",
      "Especialista em fluxo de caixa, planejamento estratégico e otimização de custos com paixão por ajudar PMEs a prosperarem.",
      "MBA em Finanças e Controladoria, com certificações em Gestão Financeira Estratégica.",
      "\"Minha missão é transformar conhecimento técnico em resultados práticos para o seu negócio.\""
    ]
  },
  {
    id: 6,
    title: "Vamos Conversar Sobre o Futuro Financeiro da Sua PME?",
    icon: <MessageCircle size={64} className="text-gold mb-6" />,
    content: [
      "Agende uma conversa inicial gratuita para um diagnóstico preliminar.",
      "Email: contato@phosconsultoria.com.br",
      "Telefone: (11) 99365-8624",
      "LinkedIn: linkedin.com/in/phosconsultoria",
      "O que esperar da conversa inicial: Entenderemos seus desafios e como podemos ajudar de forma prática."
    ],
    footer: "Obrigado pelo seu tempo e interesse!"
  }
];

const PitchDeck = () => {
  return (
    <section id="pitch-deck" className="min-h-screen bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-green mb-16">
            Consultoria Financeira para PMEs
          </h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="bg-gradient-to-b from-mint/10 to-white p-8 md:p-12 rounded-lg shadow-lg min-h-[500px] flex flex-col justify-between">
                    <div className="text-center mb-10 animate-fade-in">
                      <div className="flex justify-center">{slide.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-forest mb-4">
                        {slide.title}
                      </h3>
                      {slide.subtitle && (
                        <p className="text-lg md:text-xl text-bark mb-8">
                          {slide.subtitle}
                        </p>
                      )}
                      <div className="space-y-4 max-w-3xl mx-auto text-left">
                        {slide.content.map((item, idx) => (
                          <p key={idx} className="text-bark">
                            {item}
                          </p>
                        ))}
                      </div>
                      {slide.footer && (
                        <p className="text-sm italic text-gray-500 mt-8">
                          {slide.footer}
                        </p>
                      )}
                    </div>
                    
                    <div className="text-center text-bark">
                      Página {slide.id} de {slides.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="relative left-0" />
            <CarouselNext className="relative right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PitchDeck;
