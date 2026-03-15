"use client";

import { useState } from 'react';

export default function SobreNos() {
  // Esse estado controla qual card está aberto. Começa com o 1 aberto.
  const [openCard, setOpenCard] = useState<number>(1);

  // Lista com os conteúdos para facilitar a montagem
  const accordionItems = [
    {
      id: 1,
      num: "01",
      title: "Nossa Missão",
      content: "Promover a diversidade e a equidade de gênero na ciência de dados e bioinformática."
    },
    {
      id: 2,
      num: "02",
      title: "O que é Bioinformática?",
      content: "A união perfeita entre biologia, ciência da computação e estatística para entender dados biológicos complexos."
    },
    {
      id: 3,
      num: "03",
      title: "Espaço Seguro",
      content: "Um ambiente livre de julgamentos, onde todas podem fazer perguntas, errar e aprender juntas."
    },
    {
      id: 4,
      num: "04",
      title: "Grupos de Estudo",
      content: "Encontros focados em nivelar o conhecimento, desde o básico em Python até análises genômicas."
    },
    {
      id: 5,
      num: "05",
      title: "Mentoria e Apoio",
      content: "Conectamos iniciantes com profissionais experientes para impulsionar carreiras na ciência e tecnologia."
    },
    {
      id: 6,
      num: "06",
      title: "Código Aberto",
      content: "Incentivamos a colaboração, criação de projetos práticos e contribuição em repositórios no GitHub."
    }
  ];

  // Função que abre e fecha os cards
  const toggleCard = (id: number) => {
    // Se clicar no card que já está aberto, ele fecha. Se não, abre o novo.
    setOpenCard(openCard === id ? 0 : id);
  };

  return (
    <section id="sobrenos" className="  bg-gray-100 py-20 px-8 md:px-24">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 max-w-4xl mx-auto">
        <h2 className="bg-secondary text-white text-2xl font-bold px-6 py-2 rounded-xl">
          Sobre nós
        </h2>
        <p className="text-gray-900 text-sm font-medium leading-relaxed max-w-lg">
          Conheça a nossa história, nossos valores e como estamos construindo uma ponte segura e acolhedora entre as ciências da vida e a programação para mulheres de todo o Brasil.
        </p>
      </div>

      {/* Lista de Cards (Accordion) */}
      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        {accordionItems.map((item) => {
          const isOpen = openCard === item.id;

          return (
            <div
              key={item.id}
              onClick={() => toggleCard(item.id)}
              className={`cursor-pointer transition-all duration-300 rounded-[2rem] overflow-hidden ${
                isOpen
                  ? 'bg-secondary shadow-xl border-2 border-secondary' 
                  : 'bg-[#F8F9FA] border-2 border-gray-800 shadow-[0_6px_0_0_rgba(0,0,0,0.8)]' // Efeito 3D do Figma
              }`}
            >
              <div className="p-6 md:px-10 md:py-8 flex items-center justify-between">
                
                {/* Número e Título */}
                <div className={`flex items-center gap-6 ${isOpen ? 'text-black' : 'text-black'}`}>
                  <span className="text-4xl md:text-5xl font-light">{item.num}</span>
                  <span className="text-xl md:text-2xl font-bold">{item.title}</span>
                </div>

                {/* Botão circular de + e - */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                  {isOpen ? (
                    <span className="text-black mb-1">-</span>
                  ) : (
                    <span className="text-primary">+</span>
                  )}
                </div>
              </div>

              {/* Conteúdo que aparece quando abre */}
              {isOpen && (
                <div className="px-6 md:px-10 pb-8 pt-0">
                  <hr className="border-gray-900/40 mb-6" />
                  <p className="text-black font-medium text-base md:text-lg">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}