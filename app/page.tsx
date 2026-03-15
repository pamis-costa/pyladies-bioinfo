// src/app/page.tsx

import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import SobreNos from './src/components/SobreNos';
import Projetos from './src/components/Projetos';
import Eventos from './src/components/Eventos';
import Equipe from './src/components/Equipe';
import Depoimentos from './src/components/Depoimentos';
import ContatoFooter from './src/components/ContatoFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SobreNos />
      <Projetos />
      <Eventos />
      <Equipe />
      <Depoimentos />
      <ContatoFooter />
    </main>
  );
}