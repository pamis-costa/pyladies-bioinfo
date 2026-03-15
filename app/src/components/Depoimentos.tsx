"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Depoimentos() {
  const depoimentos = [
    { nome: "Luana Costa", texto: "O PyLadies Bioinfo me deu a confiança que eu precisava para usar programação no meu mestrado. A rede de apoio é incrível!", data: "10 Mar 2026" },
    { nome: "Jessica Alves", texto: "Sempre achei que programar não era pra mim. Encontrar mulheres da minha área codando me inspirou a mudar de carreira.", data: "05 Mar 2026" },
    { nome: "Pâmela Costa", texto: "A comunidade me ajudou a desenvolver ferramentas incríveis e a fazer networking com profissionais que admiro muito.", data: "28 Fev 2026" },
    { nome: "Amanda Silva", texto: "Os minicursos de Biopython abriram minha mente. Hoje consigo analisar sequências genômicas com muito mais facilidade!", data: "15 Fev 2026" },
    { nome: "Camila Rocha", texto: "Um espaço seguro, livre de julgamentos e cheio de mulheres inspiradoras. Recomendo para todas da área da biologia.", data: "02 Fev 2026" },
    { nome: "Fernanda Lima", texto: "Participar do PyLadies Bioinfo foi um divisor de águas na minha carreira. Hoje sou desenvolvedora e mentora na comunidade!", data: "20 Jan 2026" },
    { nome: "Elisa Mendes", texto: "A diversidade e a inclusão são o coração do PyLadies Bioinfo. Me sinto acolhida e motivada a crescer cada dia mais.", data: "10 Jan 2026" },
    { nome: "Mariana Santos", texto: "Aprendi muito com os eventos e workshops do PyLadies Bioinfo. A comunidade é extremamente acolhedora e colaborativa.", data: "05 Jan 2026" }
  ];

  return (
    <section id="depoimentos" className="bg-gray-100 px-8 md:px-24 py-16 flex flex-col gap-10">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <h2 className="bg-primary text-black text-2xl font-bold px-6 py-2 rounded-xl">Depoimentos</h2>
        <p className="text-gray-700 max-w-xl">
          Leia os relatos e descubra o impacto da nossa comunidade na trajetória de mulheres que transformaram suas carreiras e pesquisas através da programação.
        </p>
      </div>

      {/* Carrossel Swiper */}
      <div className="w-full pb-10"> {/* pb-10 dá um espacinho para as bolinhas de paginação */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} 
          pagination={{ clickable: true }} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            // Quando a tela tiver 768px ou mais (Tablet)
            768: {
              slidesPerView: 2,
            },
            // Quando a tela tiver 1024px ou mais (Desktop)
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full h-full"
        >
          {depoimentos.map((depoimento, index) => (
            <SwiperSlide key={index} className="pb-12"> {/* pb-12 empurra as bolinhas pra baixo do card */}
              <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white h-full flex flex-col justify-between cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                
                {/* Texto do Depoimento */}
                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  "{depoimento.texto}"
                </p>
                
                {/* Rodapé do Card: Avatar e Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {/* Pega a primeira letra do nome pra fazer um avatarzinho legal */}
                    {depoimento.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{depoimento.nome}</p>
                    <p className="text-xs text-gray-500">{depoimento.data}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS extra para transformar as bolinhas em estrelas */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #cbd5e1; /* Cor da estrela inativa (cinza) */
          opacity: 0.5;
          width: 18px; /* Largura da estrela */
          height: 18px; /* Altura da estrela */
          border-radius: 0; /* Tira o formato redondo padrão do Swiper */
          
          /* A mágica do recorte em formato de estrela: */
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #FFC82C; /* Cor da estrela ativa (Seu Amarelo Primary) */
          opacity: 1;
          transform: scale(1.3); /* Dá uma leve aumentada na estrela selecionada */
        }
      `}</style>

    </section>
  );
}