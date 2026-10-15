import { ShieldCheck, Award, FileCheck2, Clock } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "Empresa Certificada",
    text: "Associada à ABRAVA, certificada ISO 9001 e registrada no CREA, seguindo as normas regulamentadoras.",
  },
  {
    icon: FileCheck2,
    title: "Especialista em PMOC",
    text: "Plano de Manutenção, Operação e Controle seguindo todas as normas para melhor atender sua empresa.",
  },
  {
    icon: Award,
    title: "Qualidade do ar",
    text: "Melhor qualidade do ar, maior durabilidade dos equipamentos e redução no gasto de energia.",
  },
  {
    icon: Clock,
    title: "15 anos de mercado",
    text: "Equipe própria com capacitação contínua, do orçamento inicial até a entrega total do projeto.",
  },
]

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg border-l-4 border-brand-500 bg-white p-5 shadow-sm">
            <item.icon className="h-7 w-7 text-brand-500" />
            <h3 className="mt-3 font-bold text-brand-900">{item.title}</h3>
            <p className="mt-1.5 text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
