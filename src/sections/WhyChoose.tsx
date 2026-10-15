import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const points = [
  "Mais de 10 anos atuando em tecnologia térmica, refrigeração industrial e comercial e EO&M",
  "Atuação desde a concepção do projeto, venda, instalação e total ênfase no pós-venda",
  "PMOC completo com software de controle por QR-Code",
  "Setor especializado em limpeza de dutos com monitoramento por robô",
  "Soluções totalmente customizadas com princípios físicos estabelecidos e tecnologia de ponta",
]

export default function WhyChoose() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Por que a Searcon</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Atuamos como se fôssemos parte da sua empresa
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nosso foco está no relacionamento com os clientes, aliando seus valores aos nossos.
            Essa é a base do nosso crescimento estruturado.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 bg-brand-500 font-bold hover:bg-brand-600">
            <a href="#contato">Falar com um especialista</a>
          </Button>
        </div>
        <img
          src="/images/por-que.webp"
          alt="Central de chillers moderna atendida pela Searcon"
          className="aspect-square w-full rounded-xl object-cover shadow-xl"
          loading="lazy"
        />
      </div>
    </section>
  )
}
