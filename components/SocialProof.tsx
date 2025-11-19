import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Minha agenda nunca mais ficou vazia. O método da Any mudou a forma como eu vejo meu negócio.",
    author: "Fernanda S.",
    role: "Aluna Imersão 360"
  },
  {
    text: "Comecei do zero e já fecho sessões toda semana. O suporte e a clareza das aulas são incríveis.",
    author: "Juliana M.",
    authorImg: "",
    role: "Iniciante"
  },
  {
    text: "Depois da Imersão, consegui triplicar meu ticket. Hoje minhas clientes pagam sem reclamar.",
    author: "Carla R.",
    role: "Profissional Bronze"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl text-center font-serif font-bold text-stone-900 mb-16">
          Resultados reais de quem já passou pela imersão.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-stone-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bronze-200 rounded-full flex items-center justify-center text-bronze-700 font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-stone-900">{t.author}</p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;