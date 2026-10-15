import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "pmoc",
    label: "PMOC",
    title: "PMOC — Plano de Manutenção, Operação e Controle",
    description:
      "Soluções em contratos de manutenção com cronograma regular executado por profissionais altamente qualificados. Gerenciamos nossas manutenções com o software Leankeep para garantir máxima eficiência e melhoria contínua dos serviços.",
    bullets: [
      "Conformidade com a Portaria 3.523/98 e a Lei 13.589/2018",
      "Cronograma de manutenção regular e documentado",
      "Gestão digital com software Leankeep e QR-Code",
      "Redução de custos com energia e quebras de equipamento",
    ],
    image: "/images/servico-pmoc.webp",
    alt: "Técnico Searcon executando checklist de PMOC em unidade de tratamento de ar",
  },
  {
    id: "manutencao",
    label: "Manutenção",
    title: "Manutenção Preventiva e Corretiva",
    description:
      "Funcionamento contínuo, maior eficiência e durabilidade dos aparelhos. Atendemos sistemas centrais, chillers, VRF, splits e ar-condicionado de painel, com equipe própria e resposta ágil.",
    bullets: [
      "Manutenção em sistemas centrais e chillers",
      "Manutenção em ar-condicionado de painel",
      "Atendimento corretivo com agilidade",
      "Peças e insumos de qualidade certificada",
    ],
    image: "/images/servico-manutencao.webp",
    alt: "Técnico Searcon reparando unidade condensadora industrial",
  },
  {
    id: "dutos",
    label: "Limpeza de Dutos",
    title: "Limpeza e Higienização de Dutos",
    description:
      "Referência no segmento em limpeza e higienização de dutos, com equipamentos de última geração — sistema de monitoramento por robô e escovação — eliminando riscos à saúde de colaboradores e clientes.",
    bullets: [
      "Monitoramento por robô e escovação mecanizada",
      "Melhor qualidade do ar interior",
      "Menor risco à saúde de clientes e colaboradores",
      "Relatórios técnicos com evidências fotográficas",
    ],
    image: "/images/servico-dutos.webp",
    alt: "Robô de limpeza em duto de ventilação metálico",
  },
  {
    id: "instalacao",
    label: "Projetos e Instalação",
    title: "Projeto, Execução e Instalação",
    description:
      "Do orçamento inicial até a entrega total do projeto. Equipe certificada desde a concepção até a instalação, atendendo todos os requisitos e cálculos técnicos necessários.",
    bullets: [
      "Concepção e projeto técnico completo",
      "Cálculos de carga térmica e dimensionamento",
      "Execução com equipe própria certificada",
      "Entrega com documentação e treinamento",
    ],
    image: "/images/servico-instalacao.webp",
    alt: "Engenheiros Searcon instalando sistema VRF em obra comercial",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-3 text-lg text-gray-600">
            Soluções em sistemas de refrigeração e climatização comercial e industrial
          </p>
        </div>

        <Tabs defaultValue="pmoc" className="mt-12">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent">
            {services.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold data-[state=active]:border-brand-500 data-[state=active]:bg-brand-500 data-[state=active]:text-white"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="aspect-square w-full rounded-xl object-cover shadow-lg"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-900">{s.title}</h3>
                  <p className="mt-4 text-gray-600">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 bg-brand-500 font-bold hover:bg-brand-600">
                    <a href="#contato">Solicitar contato</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
