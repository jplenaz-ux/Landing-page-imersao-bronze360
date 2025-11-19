import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <div className="w-16 h-16 mx-auto bg-bronze-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-bronze-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Garantia de Satisfação</h3>
        <p className="text-stone-600 leading-relaxed">
          A <strong>Imersão Bronze 360°</strong> é um treinamento pensado para quem quer resultado real. Se você aplicar o que aprender aqui, você sai com segurança, técnica e direcionamento para faturar com bronzeamento.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;