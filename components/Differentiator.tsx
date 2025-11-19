import React from 'react';
import { motion } from 'framer-motion';

const Differentiator: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-bronze-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold-500 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-1/2"
          >
             <div className="relative">
               {/* Frame Element */}
               <div className="absolute inset-0 border-2 border-bronze-500 translate-x-4 translate-y-4 rounded-lg" />
               
               {/* Any Caroliny Sitting */}
               <img 
                src="https://i.postimg.cc/5N9sPZrv/image00014.jpg" 
                alt="Mentora Any Caroliny" 
                className="relative rounded-lg shadow-2xl w-full object-cover bg-stone-800"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800";
                }}
               />
               
               <div className="absolute -bottom-6 -right-6 bg-white text-stone-900 px-6 py-3 shadow-xl rounded-lg border-l-4 border-bronze-500">
                 <span className="font-serif font-bold text-lg">Método Validado</span>
               </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
              O mercado mudou. <br/>
              <span className="text-bronze-400 italic">E a forma de aprender também.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-stone-300 font-light">
              <p>
                Você aprende com quem vive o bronzeamento todos os dias, com agenda cheia, espaço estruturado, experiência premium e resultados reais.
              </p>
              <p>
                Nada de teoria vazia. Aqui você recebe técnica, visão de negócio e o caminho para fazer o que poucas profissionais fazem: <strong className="text-white font-bold">viver bem do bronzeamento.</strong>
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="h-12 w-1 bg-bronze-500"></div>
              <div>
                <h4 className="text-xl font-bold text-white">Any Caroliny</h4>
                <p className="text-bronze-400 text-sm">Mentora & Especialista em Estética</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;