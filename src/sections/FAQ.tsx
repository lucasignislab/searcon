import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "O que é PMOC e por que minha empresa precisa dele?",
    a: "O PMOC (Plano de Manutenção, Operação e Controle) é obrigatório por lei (Lei 13.589/2018) para edifícios de uso público e coletivo com ambientes climatizados. Ele garante a qualidade do ar interior, previne doenças respiratórias e evita multas. A Searcon elabora e executa o PMOC completo, com documentação e rastreabilidade via software.",
  },
  {
    q: "Quais normas a Searcon segue?",
    a: "Seguimos a Portaria 3.523/98 do Ministério da Saúde, a Lei 13.589/2018, as normas da ABNT (NBR 16401), as normas regulamentadoras do trabalho e somos certificados ISO 9001, associados à ABRAVA e registrados no CREA.",
  },
  {
    q: "Como funciona o contrato de manutenção preventiva?",
    a: "Montamos um cronograma de visitas técnicas regulares conforme a criticidade dos seus equipamentos. Cada manutenção é registrada no software Leankeep com QR-Code, gerando histórico completo, relatórios e indicadores para sua gestão de facilities.",
  },
  {
    q: "A Searcon atende emergências corretivas?",
    a: "Sim. Clientes com contrato de manutenção têm atendimento corretivo prioritário, com equipe própria e ágil para restabelecer o funcionamento dos sistemas o quanto antes.",
  },
  {
    q: "Como é feita a limpeza de dutos?",
    a: "Utilizamos sistema de monitoramento por robô com escovação mecanizada, equipamentos de última geração. O serviço inclui inspeção, limpeza, higienização e relatório técnico com evidências fotográficas do antes e depois.",
  },
  {
    q: "Vocês elaboram projetos de climatização do zero?",
    a: "Sim. Atuamos desde a concepção: levantamento de carga térmica, dimensionamento, especificação de equipamentos, execução da obra e entrega com documentação completa e treinamento da equipe do cliente.",
  },
  {
    q: "Quais regiões a Searcon atende?",
    a: "Temos unidades em Hortolândia e Sorocaba, atendendo toda a região metropolitana de Campinas, interior de São Paulo e projetos em outras regiões sob consulta.",
  },
  {
    q: "A manutenção preventiva realmente reduz custos?",
    a: "Sim. Equipamentos sujos ou desregulados consomem até 30% mais energia. A manutenção regular aumenta a vida útil dos aparelhos, reduz o gasto de energia e evita paradas emergenciais custosas para a operação.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-3 text-lg text-gray-600">
            Tire as principais dúvidas sobre climatização empresarial
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="mb-3 rounded-lg border bg-white px-5">
              <AccordionTrigger className="text-left font-semibold text-brand-900 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
