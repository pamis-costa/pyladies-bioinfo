import Image from "next/image";

interface ProjetoProps {
  tituloL1: string;
  tituloL2: string;
  descricao: string;
  corFundo: string;
  corTexto: string;
  bgTitulo: string;
  corTextoTitulo: string;
  iconeCor: string;
  corSeta: string;
  imagem: string;
}

export default function Projetos() {
  const projetos: ProjetoProps[] = [
    { 
      tituloL1: "Minicurso", 
      tituloL2: "Biopython", 
      descricao: "Saiba mais", 
      corFundo: "bg-[#FAFAFA] border border-gray-300", 
      corTexto: "text-black", 
      bgTitulo: "bg-secondary", 
      corTextoTitulo: "text-black", // Mantive o texto escuro igual ao seu design
      iconeCor: "bg-primary", 
      corSeta: "text-white",
      imagem: "/biopython.png" // Nome da imagem que você vai salvar na pasta public
    },
    { 
      tituloL1: "Análise de Dados", 
      tituloL2: "Genômicos", 
      descricao: "Saiba mais", 
      corFundo: "bg-secondary", 
      corTexto: "text-white", 
      bgTitulo: "bg-white", 
      corTextoTitulo: "text-black", 
      iconeCor: "bg-primary", 
      corSeta: "text-white",
      imagem: "/dados-gene1.jpg" 
    },
    { 
      tituloL1: "Minicurso", 
      tituloL2: "Biopython", 
      descricao: "Saiba mais", 
      corFundo: "bg-secondary", 
      corTexto: "text-white", 
      bgTitulo: "bg-white", 
      corTextoTitulo: "text-black", 
      iconeCor: "bg-primary", 
      corSeta: "text-white",
      imagem: "/biopython.png" 
    },
    { 
      tituloL1: "Análise de Dados", 
      tituloL2: "Genômicos", 
      descricao: "Saiba mais", 
      corFundo: "bg-primary", 
      corTexto: "text-white", 
      bgTitulo: "bg-secondary", 
      corTextoTitulo: "text-white", 
      iconeCor: "bg-white", 
      corSeta: "text-black",
      imagem: "/dados-gene1.jpg" 
    },
  ];

  return (
    <section id="projetos" className="px-8 md:px-24 py-16 flex flex-col gap-10  bg-gray-50">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <h2 className="bg-secondary text-white text-2xl font-bold px-6 py-2 rounded-xl">Projetos</h2>
        <p className="text-gray-700 max-w-xl">
          Descubra as nossas iniciativas, grupos de estudo e códigos desenvolvidos para aplicar a linguagem Python na resolução de desafios reais da biologia e tecnologia.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projetos.map((projeto, index) => (
          <div 
            key={index} 
            className={`${projeto.corFundo} ${projeto.corTexto} rounded-4xl p-8 flex flex-col justify-between h-72 shadow-[0_6px_0_0_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
          >
            
            {/* Lado Esquerdo: Textos e Botão (Com z-10 para ficar em cima da imagem) */}
            <div className="z-10 flex flex-col justify-between h-full w-3/5">
              
              {/* Título com efeito Marca-Texto */}
              <h3 className="text-xl md:text-2xl font-bold leading-relaxed tracking-wide">
                <span className={`${projeto.bgTitulo} ${projeto.corTextoTitulo} px-3 py-1 rounded-md`}>
                  {projeto.tituloL1}
                </span>
                <br />
                <span className={`${projeto.bgTitulo} ${projeto.corTextoTitulo} px-3 py-1 rounded-md inline-block mt-1`}>
                  {projeto.tituloL2}
                </span>
              </h3>

              {/* Botão Saiba Mais */}
              <div className="flex items-center gap-3 mt-auto">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-sm ${projeto.iconeCor} ${projeto.corSeta}`}>
                  ↗
                </span>
                <span className="font-semibold text-sm md:text-base">{projeto.descricao}</span>
              </div>
            </div>

            {/* Lado Direito: Imagem da Ilustração */}
            <div className="absolute right-0 bottom-0 w-2/5 md:w-1/2 h-full flex items-center justify-end p-4 z-0">
              <Image 
                src={projeto.imagem} 
                alt={projeto.tituloL1} 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}