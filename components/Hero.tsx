import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-bronze-50 overflow-hidden pt-10 lg:pt-0">
      {/* Background Texture Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bronze-100/50 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 border border-bronze-300 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-bronze-700 text-xs font-bold tracking-[0.2em] uppercase">Imersão Bronze 360°</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-medium leading-tight text-stone-900">
              O treinamento completo para transformar <span className="text-gradient-gold italic">bronzeamento</span> em profissão lucrativa.
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Aprenda as três técnicas, domine o atendimento premium e conquiste clientes que pagam bem e voltam sempre.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToPricing}>
                Quero Garantir Minha Vaga
              </Button>
              <div className="text-center sm:text-left">
                 <p className="text-sm text-stone-500 line-through">De R$ 1.597,00</p>
                 <p className="text-xl font-serif font-bold text-bronze-600">Por R$ 997,00</p>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 uppercase tracking-wide">
              Condição especial por tempo limitado
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] flex items-end justify-center">
               {/* Decorative Circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-bronze-200 rounded-full opacity-50 animate-pulse" />
               
               {/* Any Caroliny Image */}
               <img 
                src="https://i.postimg.cc/9QWJnsNy/193A0671.jpg" 
                alt="Any Caroliny - Especialista em Bronzeamento" 
                className="relative w-auto h-[110%] object-cover object-top z-10 drop-shadow-2xl mask-image-bottom"
                style={{ marginBottom: '-10%' }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
               />
               
               {/* Floating Badge */}
               <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-20 -left-4 lg:-left-10 z-20 bg-white p-4 rounded-lg shadow-xl border-l-4 border-bronze-500 max-w-[200px]"
               >
                 <p className="font-serif text-stone-900 font-bold text-lg">100% Prático</p>
                 <p className="text-xs text-stone-500">Método validado com resultados reais</p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-bronze-400 hidden lg:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;