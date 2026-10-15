import { Factory, Store, Headset, Hospital } from "lucide-react"

const groups = [
  {
    icon: Factory,
    title: "Indústria",
    items: ["Alimentos e Bebidas", "Automotivo", "Papel e Celulose", "Farmacêutico", "Siderurgia e Metalurgia"],
  },
  {
    icon: Store,
    title: "Comércio",
    items: ["Shopping Centers", "Hotéis e Pousadas", "Restaurantes", "Varejo", "Prédios Comerciais"],
  },
  {
    icon: Headset,
    title: "Serviços",
    items: ["Call Centers", "Clínicas", "Bancos e Instituições", "Escolas e Universidades"],
  },
  {
    icon: Hospital,
    title: "Hospitalar",
    items: ["Hospitais", "Laboratórios", "Clínicas especializadas", "Ambientes críticos"],
  },
]

export default function Segments() {
  return (
    <section id="segmentos" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">Segmentos que atendemos</h2>
          <p className="mt-3 text-lg text-gray-600">
            Preparados para um vasto segmento de empresas: indústrias, escritórios, hotéis,
            hospitais, laboratórios e muito mais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl bg-white p-6 shadow-sm">
              <g.icon className="h-8 w-8 text-brand-500" />
              <h3 className="mt-3 text-lg font-bold text-brand-900">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                {g.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
