"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones do menu

export default function Navbar() {
  // Esse estado controla se o menu de celular está aberto (true) ou fechado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Função para inverter o estado ao clicar no botão
  const toggleMenu = () => setIsOpen(!isOpen);

  // Função para fechar o menu automaticamente ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  return (
    // Adicionei relative e z-50 para o menu flutuante não ficar escondido atrás de outras coisas
    <nav className="bg-[#085692] w-full flex justify-between items-center text-white px-8 py-4 md:px-20 relative z-50">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-vetorizada.svg"
            alt="Logo PyLadies Bioinfo"
            width={250}
            height={75}
            className="object-contain"
            priority
          />
        </Link>
      </div>
      
      {/* Menu Desktop (Escondido no celular: hidden md:flex) */}
      <ul className="hidden md:flex gap-10 font-bold text-lg">
        <li>
          <Link href="#sobrenos" className="hover:text-primary cursor-pointer transition">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link href="#projetos" className="hover:text-primary cursor-pointer transition">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="#eventos" className="hover:text-primary cursor-pointer transition">
            Eventos
          </Link>
        </li>
        <li>
          <Link href="#contato" className="hover:text-primary cursor-pointer transition">
            Contato
          </Link>
        </li>
      </ul>

      {/* Botão Sanduíche (Aparece só no celular: md:hidden) */}
      <div className=" cursor-pointer md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white hover:text-primary transition focus:outline-none cursor-pointer">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Menu Dropdown do Celular */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#085692] flex flex-col items-center gap-6 py-8 md:hidden shadow-lg border-t border-blue-900/50">
          <Link href="#sobrenos" onClick={closeMenu} className="hover:text-primary font-bold text-xl cursor-pointer transition">
            Sobre nós
          </Link>
          <Link href="#projetos" onClick={closeMenu} className="hover:text-primary font-bold text-xl cursor-pointer transition">
            Projetos
          </Link>
          <Link href="#eventos" onClick={closeMenu} className="hover:text-primary font-bold text-xl cursor-pointer transition">
            Eventos
          </Link>
          <Link href="#contato" onClick={closeMenu} className="hover:text-primary font-bold text-xl cursor-pointer transition">
            Contatos
          </Link>
        </div>
      )}
    </nav>
  );
}