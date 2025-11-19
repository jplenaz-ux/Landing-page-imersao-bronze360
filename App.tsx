import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TargetAudience from './components/TargetAudience';
import Differentiator from './components/Differentiator';
import Curriculum from './components/Curriculum';
import SocialProof from './components/SocialProof';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-bronze-200 selection:text-bronze-900 overflow-x-hidden">
      <Hero />
      <Experience />
      <TargetAudience />
      <Differentiator />
      <Curriculum />
      <SocialProof />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default App;