import React from 'react';
import Button from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://pagamento.pagbank.com.br/pagamento?code=8f7d7d90-701f-402a-be90-8ae07f3ee85a&t=787b60a6-e93c-45d8-9b0c-0805eca3b0ed', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-bronze-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-bronze-100 text-center relative z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-bronze-400 px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase whitespace-nowrap shadow-lg">
              Vagas Limitadas
            </div>

            <h3 className="text-2xl font-serif text-stone-600 mb-2">Investimento no seu futuro</h3>
            <p className="text-stone-400 text-sm mb-8">Tudo o que você precisa para faturar alto</p>

            <div className="mb-8">
              <p className="text-stone-400 line-through text-lg">De R$ 1.597,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl lg:text-6xl font-bold text-stone-900">R$ 997</span>
                <div className="text-left text-xs text-stone-500 font-semibold">
                  <p>,00</p>
                  <p>à vista</p>
                </div>
              </div>
              <p className="text-bronze-600 text-sm mt-2 font-medium">ou 12x no cartão de crédito</p>
            </div>

            <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
              {['Acesso às 3 Técnicas', 'Módulo de Gestão', 'Certificado Incluso', 'Suporte Exclusivo'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600">
                  <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                  {item}
                </li>
              ))}
            </ul>

            <Button fullWidth onClick={handleCheckout}>
              GARANTIR MINHA VAGA AGORA
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-stone-400 text-xs">
              <ShieldCheck size={16} />
              <span>Pagamento 100% Seguro</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;