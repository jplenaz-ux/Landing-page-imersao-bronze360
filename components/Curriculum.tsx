import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { title: "Técnica Natural", desc: "Ângulo, tempo, segurança e marquinha impecável ao sol." },
  { title: "Técnica Artificial", desc: "Uso de cabine, cuidados específicos e protocolos seguros." },
  { title: "Técnica Jet Bronze", desc: "Acabamento perfeito, vaporização e diferenciação no mercado." },
  { title: "Psicologia da Cliente", desc: "Entenda o desejo da cliente e gere encantamento imediato." },
  { title: "Vendas Zero Descontos", desc: "Como comunicar valor e cobrar o preço justo sem medo." },
  { title: "Gestão & Organização", desc: "Estruture seu negócio para crescer de forma sustentável." },
];

const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-4">
            O que você vai dominar
          </h2>
          <p className="text-stone-500">Um conteúdo denso, estruturado e focado em resultado.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Modules Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-2 border-bronze-300"
              >
                <h3 className="font-serif font-bold text-lg text-stone-800 mb-2">{mod.title}</h3>
                <p className="text-stone-600 text-sm">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Element - Tanning Gun or Equipment */}
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className="relative bg-bronze-100 rounded-2xl p-8 w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
               
               {/* Any Caroliny holding Gun */}
               <img 
                 src="https://i.postimg.cc/XqfbNTWX/Design-sem-nome-(13).jpg" 
                 alt="Equipamento Profissional" 
                 className="relative z-10 w-full h-auto object-contain shadow-xl rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800";
                 }}
               />
               
               <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg">
                 <p className="font-serif text-xl font-bold text-stone-800">360°</p>
                 <p className="text-[10px] uppercase tracking-widest text-stone-600">Dominância Total</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;