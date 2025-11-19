import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-bronze-100/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Perfeita para iniciantes e profissionais
          </h2>
          <div className="w-24 h-1 bg-bronze-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-bronze-400 relative overflow-hidden">
               <div className="absolute right-0 top-0 w-24 h-24 bg-bronze-50 rounded-bl-full -mr-4 -mt-4 z-0" />
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="bg-stone-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
                    Para quem quer começar
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Comece do zero seguindo um método seguro, testado e direto ao ponto. Evite erros comuns e economize tempo e dinheiro iniciando da maneira certa.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-bronze-500"/> Sem experiência prévia</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-bronze-500"/> Baixo investimento inicial</li>
                  </ul>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-stone-800 relative overflow-hidden">
               <div className="absolute right-0 top-0 w-24 h-24 bg-stone-100 rounded-bl-full -mr-4 -mt-4 z-0" />
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="bg-bronze-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
                    Para quem já bronzeia
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Evolua, profissionalize e eleve seu ticket. Aprenda a se posicionar no topo do mercado e transforme clientes comuns em fãs da sua marca.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-bronze-500"/> Refinamento técnico</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-bronze-500"/> Estratégias de escala</li>
                  </ul>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
             {/* Team/Group Image */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
               <img 
                src="https://i.postimg.cc/BbHFCcWL/image00003.jpg" 
                alt="Equipe Any Caroliny" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";
                }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
                 <p className="text-white font-serif text-2xl italic leading-tight">"O sucesso deixa rastros. Venha trilhar o caminho de quem já chegou lá."</p>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;