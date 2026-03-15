import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface MembroProps {
  nome: string;
  cargo: string;
  bio: string;
  linkedin: string;
  instagram: string;
}

export default function Equipe() {
  const membros: MembroProps[] = [
    {
      nome: "Ana Silva",
      cargo: "Líder de Comunidade",
      bio: "Bióloga apaixonada por dados e desenvolvedora em formação. Acredita que a tecnologia deve ser acessível a todas.",
      linkedin: "https://linkedin.com/in/anasilva-exemplo",
      instagram: "https://instagram.com/anasilva.exemplo"
    },
    {
      nome: "Beatriz Souza",
      cargo: "Cientista de Dados",
      bio: "Especialista em análise de dados genômicos com Python. Ajuda a guiar os grupos de estudo avançados da comunidade.",
      linkedin: "https://linkedin.com/in/beatrizsouza-exemplo",
      instagram: "https://instagram.com/beatrizsouza.exemplo"
    },
    {
      nome: "Camila Rocha",
      cargo: "Pesquisadora",
      bio: "Mestranda em Genética, utiliza programação para desvendar mistérios do DNA. Mentora de iniciantes na área.",
      linkedin: "https://linkedin.com/in/camilarocha-exemplo",
      instagram: "https://instagram.com/camilarocha.exemplo"
    },
    {
      nome: "Daniela Alves",
      cargo: "Engenheira de Software",
      bio: "Desenvolvedora backend e entusiasta do código aberto. Focada em criar ferramentas acessíveis para biólogos.",
      linkedin: "https://linkedin.com/in/danialves-exemplo",
      instagram: "https://instagram.com/danialves.exemplo"
    },
    {
      nome: "Elisa Mendes",
      cargo: "Co-organizadora",
      bio: "Focada em diversidade na tecnologia. Organiza nossos meetups, hackathons e parcerias com outras instituições.",
      linkedin: "https://linkedin.com/in/elisamendes-exemplo",
      instagram: "https://instagram.com/elisamendes.exemplo"
    },
    {
      nome: "Fernanda Lima",
      cargo: "Desenvolvedora Web",
      bio: "Responsável por manter nossas plataformas no ar. Ama unir design de interfaces com a lógica da programação.",
      linkedin: "https://linkedin.com/in/fernandalima-exemplo",
      instagram: "https://instagram.com/fernandalima.exemplo"
    }
  ];

  return (
    <section className="px-8 md:px-24 py-16 flex flex-col gap-10 bg-gray-50">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <h2 className="bg-primary text-black text-2xl font-bold px-6 py-2 rounded-xl">Equipe</h2>
        <p className="text-gray-700 max-w-xl">
          Conheça as cientistas, desenvolvedoras e pesquisadoras que fazem o PyLadies Bioinfo acontecer. Uma equipe apaixonada por tecnologia, diversidade e ciência aberta.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {membros.map((membro, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            
            {/* Imagem / Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-5 flex items-center justify-center bg-gray-50 border-4 border-white shadow-sm shrink-0">
              <Image 
                src="/icon.png" 
                alt={`Foto de ${membro.nome}`} 
                width={96} 
                height={96} 
                className="object-cover"
                priority 
              />
            </div>
            
            {/* Nome */}
            <h3 className="font-bold text-xl text-secondary mb-2">
              {membro.nome}
            </h3>
            
            {/* Cargo */}
            <span className="bg-gray-100 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              {membro.cargo}
            </span>
            
            {/* Bio */}
            <p className="text-sm text-gray-600 mb-6 line-clamp-3">
              {membro.bio}
            </p>
            
            {/* Redes Sociais Dinâmicas */}
            <div className="flex gap-4 mt-auto">
              {/* O href agora puxa o link específico de cada membro */}
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 shadow-sm"
                aria-label={`LinkedIn de ${membro.nome}`}
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* O href agora puxa o link específico de cada membro */}
              <a
                href={membro.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 shadow-sm"
                aria-label={`Instagram de ${membro.nome}`}
              >
                <FaInstagram size={18} />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}