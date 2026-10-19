import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { QrCode, Users, Bot, Wrench } from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Controle por QR-Code",
    text: "Software Leankeep com rastreabilidade total de cada manutenção executada.",
  },
  {
    icon: Users,
    title: "Equipe própria",
    text: "Profissionais contratados e com capacitação contínua — nada de terceirização improvisada.",
  },
  {
    icon: Bot,
    title: "Robô de limpeza de dutos",
    text: "Monitoramento por robô e escovação com o que há de mais moderno no mercado.",
  },
  {
    icon: Wrench,
    title: "Soluções sob medida",
    text: "Projetos que se adaptam à operação da sua empresa, não o contrário.",
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-brand-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Tecnologia e processo em cada visita técnica
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Climatização sem dor de cabeça começa com controle: o nosso é digital, documentado e auditável.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cyan-brand font-bold text-brand-950 hover:bg-white">
              <Link to="/diferenciais">Ver todos os diferenciais</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10">
              <a href="#contato">Conhecer na prática</a>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <f.icon className="h-8 w-8 text-cyan-brand" />
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
