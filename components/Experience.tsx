import React from 'react';
import { Sun, Users, DollarSign, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Três Técnicas Completas",
    description: "Domine o Bronze Natural, Artificial e Jet Bronze com perfeição."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Gestão & Lucratividade",
    description: "Aprenda a precificar e gerir seu negócio para lucrar de verdade."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experiência Premium",
    description: "Fidelize clientes entregando mais que um serviço, uma experiência."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Atração de Clientes",
    description: "Estratégias para atrair o público que paga bem e não pede desconto."
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-6"
          >
            Uma experiência prática, <br/>objetiva e transformadora.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 text-lg leading-relaxed"
          >
            A <span className="font-semibold text-bronze-600">Imersão Bronze 360°</span> vai além da técnica. Ela reúne tudo o que te faz faturar com bronzeamento: conhecimento, segurança, experiência da cliente e estratégia de vendas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bronze-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-bronze-100 group"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-bronze-500 mb-6 shadow-sm group-hover:bg-bronze-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-stone-900 text-bronze-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-6">O que mais você vai aprender?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 mt-1" />
                  <span>Como começar do zero com segurança e estrutura</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 mt-1" />
                  <span>Como refinar técnica e posicionamento para quem já trabalha</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 mt-1" />
                  <span>Protocolos exclusivos de personalização</span>
                </li>
              </ul>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="italic text-stone-300 text-sm">
                  "Não é apenas sobre ficar morena. É sobre autoestima, cuidado e entrega de valor. É isso que vende."
                </p>
              </div>
            </div>
            
            {/* Lifestyle Image */}
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://i.postimg.cc/gJQGMVzH/Design-sem-nome-(8).png" 
                alt="Experiência Premium" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs uppercase tracking-wider font-bold bg-bronze-600/80 inline-block px-2 py-1 rounded backdrop-blur-sm">Lifestyle & Resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;