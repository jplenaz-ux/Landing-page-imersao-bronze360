import React from 'react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://pagamento.pagbank.com.br/pagamento?code=8f7d7d90-701f-402a-be90-8ae07f3ee85a&t=787b60a6-e93c-45d8-9b0c-0805eca3b0ed', '_blank');
  };

  return (
    <footer className="bg-stone-900 text-white pt-20 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Chegou a tua hora de <br/>
              <span className="text-gradient-gold">viver do bronzeamento.</span>
            </h2>
            <p className="text-stone-300 text-lg mb-8 max-w-md mx-auto">
              Uma profissão lucrativa, elegante e cheia de possibilidades começa com um passo. O teu passo é agora.
            </p>
            <Button className="shadow-bronze-500/20" onClick={handleCheckout}>
              QUERO ENTRAR PARA A IMERSÃO
            </Button>
          </div>

        </div>

        <div className="border-t border-white/10 py-8 text-center text-stone-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 bg-stone-950 px-6 -mx-6 lg:-mx-12">
          <p>&copy; {new Date().getFullYear()} Any Caroliny. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bronze-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-bronze-400 transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;