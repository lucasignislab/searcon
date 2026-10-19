import { useEffect } from "react"
import { Link } from "react-router"
import Header from "@/sections/Header"
import Footer from "@/sections/Footer"
import { services } from "@/data/services"
import { Button } from "@/components/ui/button"
import {
  QrCode,
  Users,
  Bot,
  Wrench,
  Leaf,
  ShieldCheck,
  ChevronRight,
  Phone,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react"

const differentials = [
  {
    icon: QrCode,
    title: "Controle digital com Leankeep e QR-Code",
    text: "Gerenciamos todas as manutenções com o software Leankeep. Cada equipamento recebe uma tag com QR-Code: o técnico aponta, registra e você acompanha o histórico completo — relatórios, evidências e indicadores em tempo real.",
  },
  {
    icon: Users,
    title: "Equipe própria, sem improviso",
    text: "Nossos profissionais são contratados e treinados pela Searcon. Nada de terceirização improvisada: quem atende sua empresa conhece os equipamentos, os processos e os padrões de qualidade que seguimos.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação contínua",
    text: "Treinamento constante em novas tecnologias, normas regulamentadoras e boas práticas de segurança. A equipe evolui junto com o mercado de climatização.",
  },
  {
    icon: Bot,
    title: "Robô de limpeza de dutos",
    text: "Setor especializado em limpeza de dutos com sistema de monitoramento por robô e escovação mecanizada — os equipamentos mais modernos disponíveis no mercado, com relatórios fotográficos do antes e depois.",
  },
  {
    icon: Leaf,
    title: "Produtos biodegradáveis",
    text: "Compromisso com o meio ambiente e com a integridade dos técnicos: utilizamos produtos biodegradáveis e antibactericidas nas manutenções preventivas e higienizações.",
  },
  {
    icon: ShieldCheck,
    title: "Certificações e registro",
    text: "Certificada ISO 9001, associada à ABRAVA e registrada no CREA. Seguimos rigorosamente as normas regulamentadoras para melhor atender sua empresa.",
  },
  {
    icon: ClipboardCheck,
    title: "Engenheiro responsável em cada contrato",
    text: "Todo contrato conta com engenheiro mecânico responsável pela qualidade, supervisor de campo organizando as agendas e mecânico líder supervisionando as equipes.",
  },
  {
    icon: Wrench,
    title: "Soluções sob medida",
    text: "Nenhum projeto é igual ao outro. Desenvolvemos soluções totalmente customizadas, que se adaptam à operação da sua empresa — e não o contrário.",
  },
]

const stats = [
  { value: "15 anos", label: "de mercado" },
  { value: "5 estados", label: "de atuação (SP, RJ, MG, PR, SC)" },
  { value: "24h", label: "para acionar a corretiva" },
  { value: "ISO 9001", label: "certificação de qualidade" },
]

export default function DiferenciaisPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Diferenciais | Searcon Ar Condicionado"
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src="/images/equipe.webp"
              alt="Equipe de técnicos e engenheiros da Searcon"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-900/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 text-white lg:py-32">
            <nav className="mb-6 flex items-center gap-1.5 text-sm text-gray-300">
              <Link to="/" className="hover:text-cyan-brand">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-cyan-brand">Diferenciais</span>
            </nav>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Por que empresas escolhem a Searcon
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              Tecnologia, processo e gente: a combinação que mantém a climatização da sua
              empresa funcionando sem surpresas.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand-500 font-bold hover:bg-brand-600">
              <Link to="/#contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </section>

        {/* Números */}
        <section className="bg-brand-900 py-12 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block text-3xl font-black text-cyan-brand sm:text-4xl">{s.value}</span>
                <span className="mt-1 block text-sm text-gray-300">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grade de diferenciais */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">
                Nossos diferenciais
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                O que colocamos em cada contrato, cada visita técnica e cada projeto
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentials.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow-md"
                >
                  <d.icon className="h-8 w-8 text-brand-500" />
                  <h3 className="mt-4 font-bold text-brand-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
            <img
              src="/images/por-que.webp"
              alt="Central de chillers moderna atendida pela Searcon"
              className="aspect-square w-full rounded-xl object-cover shadow-xl"
              loading="lazy"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">
                Como trabalhamos
              </h2>
              <p className="mt-4 text-gray-600">
                Nosso Setor de Planejamento, Execução e Gestão de Contratos estrutura cada
                atendimento em dois formatos: <strong>Full Time</strong>, com equipe fixa na
                planta do cliente, ou <strong>equipes volantes</strong>, com visitas semanais ou
                mensais definidas pela avaliação do nosso engenheiro.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span><strong>Engenheiro mecânico</strong> garante a qualidade do serviço e o bom funcionamento dos equipamentos, com visitas periódicas.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span><strong>Supervisor de campo</strong> organiza as agendas e aciona a corretiva em até 24h quando surge um chamado não programado.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span><strong>Mecânico líder</strong> acompanha todos os contratos, orienta as equipes e identifica melhorias contínuas.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-950 py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Quer ver isso na sua empresa?</h2>
              <p className="mt-2 text-gray-300">Agende uma visita técnica com um especialista Searcon.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-brand-500 font-bold hover:bg-brand-600">
                <Link to="/#contato">Solicitar contato</Link>
              </Button>
              <a
                href="tel:+551938875218"
                className="inline-flex items-center gap-2 text-lg font-extrabold text-cyan-brand hover:text-white"
              >
                <Phone className="h-5 w-5" /> (19) 3887-5218
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-extrabold text-brand-900">Conheça nossos serviços</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="group rounded-xl border border-gray-200 p-5 transition hover:border-brand-500 hover:shadow-md"
                >
                  <h3 className="font-bold text-brand-900 group-hover:text-brand-500">{s.shortTitle}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-gray-600">{s.subtitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
                    Ver serviço <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
