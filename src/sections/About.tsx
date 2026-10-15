import { MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="quem-somos" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <img
          src="/images/equipe.webp"
          alt="Equipe de técnicos e engenheiros da Searcon"
          className="aspect-[3/2] w-full rounded-xl object-cover shadow-xl"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Quem somos</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Tecnologia térmica com foco em relacionamento
          </h2>
          <p className="mt-4 text-gray-600">
            Há mais de 10 anos atuando no mercado de tecnologia térmica, com grande atuação nos
            segmentos de ar-condicionado, refrigeração industrial e comercial e EO&amp;M
            (engenharia, operação e manutenção) — desde a concepção do projeto, na venda,
            instalação e com total ênfase no pós-venda.
          </p>
          <p className="mt-4 text-gray-600">
            Com o software de controle por QR-Code, temos o mais completo PMOC do mercado. Contamos
            ainda com setor especializado em limpeza de dutos, com sistema de monitoramento por
            robô e escovação — os equipamentos mais modernos disponíveis.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <div className="text-sm">
                <span className="block font-bold text-brand-900">Hortolândia — SP</span>
                <span className="text-gray-600">Rua das Melissas, 223 — CEP 13187-040</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <div className="text-sm">
                <span className="block font-bold text-brand-900">Sorocaba — SP</span>
                <span className="text-gray-600">Rua Amazonas, 126 — CEP 18035-520</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
