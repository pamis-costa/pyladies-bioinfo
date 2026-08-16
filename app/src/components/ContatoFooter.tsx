"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinktree } from "react-icons/si";

export default function ContatoFooter() {
  // Estado para controlar o botão e a mensagem de sucesso na tela
  const [status, setStatus] = useState("pendente"); // Pode ser: 'pendente', 'enviando', 'sucesso', 'erro'

  // Função que envia o formulário sem recarregar a página
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede a tela de piscar/recarregar
    setStatus("enviando");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // 💡 Atenção: Adicionamos o "/ajax/" no link do FormSubmit para ele não sair da página!
      const response = await fetch("https://formsubmit.co/ajax/f380a3d907f47381e61a3057dd2b45a3", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus("sucesso");
        form.reset(); // Limpa os campos depois de enviar
        
        // Faz a mensagem verde de sucesso sumir sozinha após 5 segundos
        setTimeout(() => setStatus("pendente"), 5000);
      } else {
        setStatus("erro");
      }
    } catch (error) {
      setStatus("erro");
    }
  };

  return (
    <footer id="contato" className="bg-gray-50 flex flex-col gap-16">
      {/* Seção de Contato */}
      <section className="px-8 md:px-24 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10">
          <h2 className="bg-primary text-black text-2xl font-bold px-6 py-2 rounded-xl">
            Contato
          </h2>
          <p className="text-gray-700 max-w-xl">
            Ficou com alguma dúvida, quer propor uma parceria ou precisa de
            ajuda para dar os primeiros passos na bioinformática? Preencha o
            formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          
          {/* Agora o formulário usa o nosso evento onSubmit ao invés de action */}
          <form 
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col gap-4 relative"
          >
            {/* Campos ocultos do FormSubmit (O _next não é mais necessário aqui, mas manter o _captcha é bom) */}
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full border text-black border-gray-500 rounded-lg p-3 focus:outline-none focus:border-[#004B87]"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Email*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border text-black border-gray-500 rounded-lg p-3 focus:outline-none focus:border-[#004B87]"
                placeholder="Seu email"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Mensagem*
              </label>
              <textarea
                name="mensagem"
                required
                className="w-full text-black border border-gray-500 rounded-lg p-3 h-32 focus:outline-none focus:border-[#004B87]"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === "enviando"} // Desativa o botão para não clicarem duas vezes
              className={`font-bold py-3 rounded-lg transition mt-2 cursor-pointer text-black
                ${status === "enviando" ? "bg-gray-300 cursor-not-allowed" : "bg-amber-300 hover:bg-[#004B87] hover:text-white"}
              `}
            >
              {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {/* MENSAGEM DE SUCESSO OU ERRO NA TELA */}
            {status === "sucesso" && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg text-center font-medium animate-pulse">
                ✅ Mensagem enviada com sucesso! Logo entraremos em contato.
              </div>
            )}
            {status === "erro" && (
              <div className="mt-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg text-center font-medium">
                ❌ Ops! Ocorreu um erro ao enviar. Tente novamente.
              </div>
            )}

          </form>

          <div className="w-full md:w-1/2 flex justify-center hidden md:flex">
            <Image
              src="/mulheres1.png"
              alt="Ilustração de mulheres unidas"
              width={600}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Footer Amarelo */}
      <div className="bg-primary px-8 md:px-24 py-12 rounded-t-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="col-span-2">
            <div className="flex flex-col items-center max-w-sm">
              <div className="mb-4">
                <Image
                  src="/logo-vetorizada.svg"
                  alt="Logo PyLadies Bioinfo"
                  width={170}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-900 font-medium text-center">
                Somos um grupo dentro do PyLadies Brasil, composto por pessoas que
                se autodeclaram como mulheres e estão dispostas a aprender e
                ensinar Python aplicado a assuntos biológicos.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2 text-gray-800">
              <a href="#sobrenos">
                <li className="hover:text-black transition-colors cursor-pointer">Sobre nós</li>
              </a>
              <a href="#projetos">
                <li className="hover:text-black transition-colors cursor-pointer">Projetos</li>
              </a>
              <a href="#eventos">
                <li className="hover:text-black transition-colors cursor-pointer">Eventos</li>
              </a>
              <a href="#contato">
                <li className="hover:text-black transition-colors cursor-pointer">Contato</li>
              </a>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Apoio</h4>
            <ul className="flex flex-col gap-2 text-gray-800 mb-6">
              <a href="https://www.vakinha.com.br/vaquinha/pyladies-bioinfo" target="_blank" rel="noopener noreferrer">
                <li className="hover:text-black transition-colors cursor-pointer">Doe</li>
              </a>
              <a href="https://docs.google.com/document/d/1QfJESmNuV8ct2athw5zp5Z0SWReq04NCzi45Ty4Tl2Q/edit?tab=t.0#heading=h.q3ft7gv1rta2" target="_blank" rel="noopener noreferrer">
                <li className="hover:text-black transition-colors cursor-pointer">Políticas</li>
              </a>
            </ul>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/pyladies-bioinfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#004B87] hover:text-white transition-colors duration-300 shadow-sm"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="mailto:bioinfopyladies@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#004B87] hover:text-white transition-colors duration-300 shadow-sm"
              >
                <MdEmail size={20} />
              </a>

              <a
                href="https://instagram.com/pyladiesbioinfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#004B87] hover:text-white transition-colors duration-300 shadow-sm"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://linktr.ee/pyladiesbioinfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#004B87] hover:text-white transition-colors duration-300 shadow-sm"
              >
                <SiLinktree size={20} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-900 mb-6" />
        <p className="text-sm text-gray-900">
          © 2026 Pyladies Bioinfo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}