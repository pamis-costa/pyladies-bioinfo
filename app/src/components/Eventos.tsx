// src/components/Eventos.tsx

export default function Eventos() {
  return (
    <section id="eventos" className=" bg-gray-100 px-8 md:px-24 py-16 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <h2 className="bg-secondary text-white text-2xl font-bold px-6 py-2 rounded-xl">Eventos/Agenda</h2>
        <p className="text-gray-700 max-w-xl">
          Fique por dentro dos nossos próximos encontros, workshops e palestras. Participe para expandir seu conhecimento em análise de dados, fazer networking e evoluir junto com a gente.
        </p>
      </div>

      <div className="bg-primary rounded-3xl p-15 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-yellow-600/30">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col gap-4 pt-6 md:pt-0 md:px-6 first:px-0">
            <h3 className="text-white font-medium text-lg">X Meeting 2025: Minicurso Biopython</h3>
            <a href="#" className="text-secondary font-bold flex items-center gap-2 hover:underline">
              Ver detalhes ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}