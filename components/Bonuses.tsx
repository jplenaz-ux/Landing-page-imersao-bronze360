import React from 'react';
import { Gift, Play, MessageCircle, FileText } from 'lucide-react';

const bonuses = [
  {
    Icon: Play,
    title: "Acesso Estendido",
    desc: "Acesso às aulas gravadas por 1 ano para rever quando quiser."
  },
  {
    Icon: MessageCircle,
    title: "Grupo VIP",
    desc: "Networking, suporte e troca diária com outras profissionais."
  },
  {
    Icon: FileText,
    title: "Material de Apoio",
    desc: "Checklists, fichas de anamnese e protocolos prontos."
  }
];

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Gift className="text-bronze-400" />
          <h2 className="text-2xl font-serif tracking-wide uppercase">Bônus Especiais</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="text-center p-6 border border-white/10 rounded-xl hover:border-bronze-500 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-bronze-400 mb-4">
                <bonus.Icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-stone-400 text-sm">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;