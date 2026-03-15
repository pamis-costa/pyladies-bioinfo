// src/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    // Reduzi um pouco o padding (espaçamento) no celular de px-8 para px-6 e py-20 para py-12
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 md:py-20 gap-10 bg-gray-50">
      
      {/* Lado Esquerdo - Textos */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 md:gap-8">
        {/* Ajustado: text-4xl para celular, md:text-6xl para PC. Espaço adicionado após a vírgula! */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          <span className="text-amber-900">Mulheres</span>, <span className="text-amber-300">Python</span> 
          {/* Escondi a quebra de linha forçada no celular para o texto fluir melhor */}
          <br className="hidden md:block" /> e <span className="text-blue-600">Bioinformática</span>.
        </h1>
        
        <p className="text-gray-800 text-base md:text-xl max-w-lg leading-relaxed">
          Uma comunidade segura e acolhedora dedicada a incluir, capacitar e conectar pessoas que se autodeclaram mulheres. Juntas, desvendamos os dados da vida através da programação.
        </p>
        
        <a
          href="/"
          rel="noopener noreferrer"
          // Adicionado: w-full no celular e md:w-auto no PC, com text-center
          className="w-full md:w-auto text-center bg-amber-300 text-black font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-sm hover:bg-[#085692]/80 transition-transform duration-75 hover:scale-105 cursor-pointer inline-block"
        >
          Junte-se a nós
        </a>
      </div>
      
      {/* Lado Direito - Imagem */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
        <Image 
          src="/art2.png" 
          alt="Ilustração de Cientista Bioinfo" 
          width={600} 
          height={100} 
          // Limitei o tamanho máximo da imagem no celular para garantir que não dê scroll horizontal
          className="object-contain w-full max-w-[320px] md:max-w-none"
          priority 
        />
      </div>
      
    </section>
  );
}