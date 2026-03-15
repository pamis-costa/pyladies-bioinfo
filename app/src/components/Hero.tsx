// src/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 gap-10 bg-gray-50">
      
      {/* Lado Esquerdo - Textos */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          <spam className="text-amber-900">Mulheres</spam>,<span className="text-amber-300">Python</span> <br /> e <span className="text-blue-600">Bioinformática</span>.
        </h1>
        
        <p className="text-gray-800 text-lg md:text-xl max-w-lg leading-relaxed">
          Uma comunidade segura e acolhedora dedicada a incluir, capacitar e conectar pessoas que se autodeclaram mulheres. Juntas, desvendamos os dados da vida através da programação.
        </p>
        
        <a
          href="/"
          rel="noopener noreferrer"
          className="bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-sm hover:bg-[#085692]/80 transition-transform duration-75 hover:scale-105 cursor-pointer inline-block"
        >
          Junte-se a nós
        </a>
      </div>
      
      {/* Lado Direito - Imagem */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image 
          src="/art2.png" 
          alt="Ilustração de Cientista Bioinfo" 
          width={600} 
          height={100} 
          className="object-contain"
          priority 
        />
      </div>
      
    </section>
  );
}