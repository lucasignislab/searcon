export interface ServiceSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export interface ServiceStep {
  title: string
  text: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface Service {
  slug: string
  shortTitle: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  intro: string
  sections: ServiceSection[]
  benefitsTitle?: string
  benefits?: string[]
  stepsTitle?: string
  steps?: ServiceStep[]
  faqTitle?: string
  faqs?: ServiceFaq[]
}

export const services: Service[] = [
  {
    slug: "pmoc",
    shortTitle: "PMOC",
    title: "PMOC — Plano de Manutenção, Operação e Controle",
    subtitle: "Conformidade total com as normas, qualidade do ar e máxima eficiência dos seus equipamentos.",
    image: "/images/servico-pmoc.webp",
    imageAlt: "Técnico Searcon executando checklist de PMOC em unidade de tratamento de ar",
    intro:
      "Atendendo os estados de São Paulo, Rio de Janeiro, Minas Gerais, Paraná e Santa Catarina, a Searcon segue um cronograma de manutenção regular executado por profissionais altamente qualificados. Para gerenciar nossas manutenções, utilizamos o software Leankeep, garantindo máxima eficiência e melhoria contínua dos serviços.",
    sections: [
      {
        heading: "Compromisso com as normas e com o meio ambiente",
        paragraphs: [
          "Seguimos rigorosamente todas as normas relacionadas ao PMOC, mantendo um alto nível na gestão dos nossos processos.",
          "Nossa empresa se compromete a usar produtos biodegradáveis nas manutenções preventivas, respeitando o meio ambiente e a integridade dos técnicos.",
          "A manutenção preventiva garante a máxima eficiência do equipamento com o menor consumo energético, prolonga sua vida útil e melhora a qualidade do ar. Elaboramos um cronograma para futuras trocas de componentes, evitando manutenções corretivas por quebra.",
        ],
      },
      {
        heading: "Contratos Full Time e equipes volantes",
        paragraphs: [
          "Nosso Setor de Planejamento, Execução e Gestão de Contratos trabalha com dois formatos: contratos Full Time, quando a equipe fica fixa na planta do cliente, e contratos de equipes volantes, com visitas semanais ou mensais conforme avaliação do nosso engenheiro.",
        ],
        list: [
          "Engenheiro Mecânico — garante a qualidade do serviço e o bom funcionamento dos equipamentos, com visitas periódicas aos clientes.",
          "Supervisor de Campo — organiza as agendas das equipes volantes e aciona rapidamente a manutenção corretiva em chamados não programados.",
          "Mecânico Líder — presente em todos os contratos, supervisiona, orienta e auxilia as equipes, identificando melhorias.",
          "Equipe de Manutenção Preventiva — executa o cronograma com medições periódicas (pressão de fluido refrigerante, tensão, reaperto de componentes) e higienização com produtos biodegradáveis e antibactericidas.",
          "Equipe de Manutenção Corretiva — entra em ação em até 24h após o chamado, para manutenções fora do programado.",
        ],
      },
    ],
    benefitsTitle: "Vantagens de contratar as Soluções PMOC",
    benefits: [
      "Menor consumo de energia elétrica",
      "Aumento de até 75% na vida útil dos equipamentos",
      "Evita multas",
      "Funcionamento contínuo dos aparelhos",
      "Melhor qualidade do ar interior, livre de contaminações",
      "Atende todas as leis, normas, portarias e resoluções",
    ],
    stepsTitle: "Como funciona, passo a passo",
    steps: [
      {
        title: "Visita e proposta",
        text: "Realizamos uma visita com abrangência comercial e técnica para compreender sua necessidade e elaborar a solução adequada.",
      },
      {
        title: "Assinatura do contrato",
        text: "Com a proposta aprovada, enviamos o contrato padrão para assinatura. Depois, é só começar a trabalhar.",
      },
      {
        title: "Divisão de equipes",
        text: "Equipe preventiva mensal dedicada, equipe corretiva para chamados não programados e engenheiro responsável acompanhando tudo.",
      },
      {
        title: "Tags e cronograma",
        text: "Todas as máquinas recebem identificação por tags e um cronograma de manutenção conforme a prioridade de cada equipamento.",
      },
      {
        title: "Garantia do serviço",
        text: "Todos os esforços físicos e financeiros voltados para o benefício do cliente. A sua satisfação é o que nos move.",
      },
    ],
  },
  {
    slug: "manutencao-sistemas-centrais",
    shortTitle: "Manutenção",
    title: "Manutenção em Sistemas Centrais",
    subtitle: "Equipes especializadas em Chiller, VRF, Splitão e Self — do comercial ao industrial.",
    image: "/images/servico-manutencao.webp",
    imageAlt: "Técnico Searcom em manutenção de sistema central de climatização",
    intro:
      "Para o serviço pontual de manutenção em sistemas centrais, a Searcon conta com equipes exclusivas, lideradas por engenheiro mecatrônico e mecânico, garantindo o bom funcionamento. Fazemos qualquer serviço pertinente a sistemas de ar-condicionado, independente da capacidade, com foco em atendimento comercial e industrial — indústrias, fábricas, hotéis, grandes lojas e demais estabelecimentos que exigem climatização de alta capacidade.",
    sections: [
      {
        heading: "O que executamos em cada manutenção",
        list: [
          "Limpeza dos filtros de ar",
          "Verificação do sistema elétrico e consumo (tensão, corrente etc.)",
          "Verificação das serpentinas do evaporador e condensador",
          "Verificação de possíveis entupimentos na mangueira do dreno",
          "Verificação do isolamento térmico",
          "Medição da pressão de equilíbrio do gás refrigerante",
          "Limpeza das bandejas coletoras de água",
          "Verificação da parte elétrica e eletrônica",
          "Verificação do funcionamento de controles e termostatos",
          "Correção de ruídos e vibrações anormais",
          "Aplicação de produto bactericida, fungicida e germicida",
          "Limpeza geral",
        ],
      },
      {
        heading: "Conformidade garantida",
        paragraphs: [
          "Tudo de acordo com as exigências da ANVISA (Lei 13.589/2018), Resolução RE 09/2003, Portaria 3.523 e Normas ABNT NBR 14679 e 15848.",
        ],
      },
    ],
    benefitsTitle: "Vantagens de manter a manutenção em dia",
    benefits: [
      "Menor consumo de energia elétrica",
      "Aumento de até 75% na vida útil dos equipamentos",
      "Evita multas",
      "Funcionamento contínuo dos aparelhos",
      "Melhor qualidade do ar interior, livre de contaminações",
      "Atende todas as leis, normas, portarias e resoluções",
    ],
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        q: "O que é feito na manutenção preventiva de ar-condicionado?",
        a: "De modo geral, a manutenção preventiva consiste em uma verificação geral do funcionamento do aparelho, da conservação das peças e limpeza dos equipamentos.",
      },
      {
        q: "Qual a periodicidade da manutenção preventiva?",
        a: "Semanal: limpeza do filtro de poeira. Mensal: limpeza da mangueira e bandeja de drenagem e verificação das aletas. A cada 6 meses: limpeza do trocador de calor, reaperto de contatos e cabos elétricos, troca de filtros. Anual: substituição de pilhas do controle, verificação do isolamento e travamento da tubulação entre as unidades.",
      },
      {
        q: "Qual a diferença entre manutenção preventiva e corretiva?",
        a: "A preventiva antecipa qualquer possível problema que possa ocorrer com o equipamento. A corretiva é feita após o surgimento do problema, com o intuito de corrigi-lo.",
      },
    ],
  },
  {
    slug: "limpeza-de-dutos",
    shortTitle: "Limpeza de Dutos",
    title: "Limpeza e Higienização de Dutos",
    subtitle: "Maior qualidade do ar. Menor risco à saúde de clientes e colaboradores.",
    image: "/images/servico-dutos.webp",
    imageAlt: "Robô de limpeza atuando dentro de duto de ventilação",
    intro:
      "A Searcon é referência no segmento quando o assunto é limpeza e higienização de dutos. A limpeza dos dutos de ar-condicionado é essencial para uma boa qualidade do ar, prezando pela saúde de clientes e colaboradores. A falta de limpeza pode provocar doenças graves e até fatais por bactérias como a Legionella, causadora de infecções agudas e pneumonia. Trabalhamos com material de alta tecnologia — robôs, câmeras e aspiradores superpotentes — que dão fim à sujeira em minutos.",
    sections: [
      {
        heading: "Tecnologia de ponta a favor da sua operação",
        paragraphs: [
          "Agende uma visita técnica e faça a limpeza e higienização dos dutos de ar-condicionado da sua empresa com quem é referência no assunto.",
        ],
      },
    ],
    benefitsTitle: "Benefícios da limpeza e higienização de dutos",
    benefits: [
      "Maior qualidade do ar",
      "Dentro das normas NBR 14679 e 15848 da ABNT",
      "Aumenta a conservação e eficiência do aparelho",
      "Menor risco à saúde",
      "Remediação de mofo",
    ],
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        q: "Com que frequência deve ser feita a limpeza dos dutos?",
        a: "Essa frequência é definida por leis estaduais — em geral, a limpeza deve ser feita uma vez por ano.",
      },
      {
        q: "E os exames de qualidade do ar e inspeção visual interna dos dutos?",
        a: "A Resolução 09 da Anvisa determina que os exames em laboratório e a inspeção visual sejam feitos a cada 6 meses.",
      },
      {
        q: "Posso ser multado se não fizer a limpeza com frequência?",
        a: "Sim. Sua empresa pode ser multada por descumprimento da Portaria 3.523/MS e da Resolução RE 09 da ANVISA, com multas que podem chegar a R$ 200.000,00, além de responder a processos judiciais por disseminação ou agravamento de doenças respiratórias em ocupantes do ambiente.",
      },
    ],
  },
  {
    slug: "instalacoes-e-obras",
    shortTitle: "Instalações e Obras",
    title: "Projetos de Instalações e Obras",
    subtitle: "Da concepção à entrega do projeto, com acompanhamento completo.",
    image: "/images/servico-instalacao.webp",
    imageAlt: "Engenheiros Searcon instalando sistema de climatização em obra",
    intro:
      "Especialistas em infraestrutura: desde o início da obra, com acompanhamento completo e dimensionamento da carga térmica, até a instalação final do ar-condicionado.",
    sections: [
      {
        heading: "Etapas do trabalho",
        list: [
          "Estudo do projeto — verificação de todos os pontos a climatizar, capacidades e modelos.",
          "Orçamento — serviços e produtos detalhados.",
          "Execução — passagem de infraestrutura em sincronia com os demais profissionais da obra (pedreiro, gesseiro etc.).",
          "Instalação — montagem das unidades evaporadoras e condensadoras.",
          "Start-up — nosso engenheiro verifica todos os parâmetros exigidos pelo fabricante antes da primeira partida, garantindo funcionamento perfeito e a garantia dos equipamentos.",
        ],
      },
      {
        heading: "Agende uma visita técnica",
        paragraphs: [
          "Um especialista da Searcon visita sua empresa, avalia a obra e apresenta a melhor solução em climatização. Nossa equipe está preparada para atender com agilidade e profissionalismo.",
        ],
      },
    ],
  },
  {
    slug: "ar-condicionado-de-painel",
    shortTitle: "Ar-Condicionado de Painel",
    title: "Manutenção em Ar-Condicionado de Painel",
    subtitle: "Manutenção preventiva e corretiva para climatização de painéis elétricos.",
    image: "/images/servico-painel.webp",
    imageAlt: "Unidade de climatização instalada em painel elétrico industrial",
    intro:
      "Em sistemas elétricos é comum que os painéis superaqueçam, comprometendo o funcionamento da rede e do próprio painel. Para isso existe o ar-condicionado de painel: a opção mais inteligente em ambientes com altos níveis de poluentes ou quando a temperatura necessária nos painéis elétricos é menor ou igual à temperatura ambiente.",
    sections: [
      {
        heading: "Climatização eficiente para seus componentes eletrônicos",
        paragraphs: [
          "Em ambientes agressivos — altas temperaturas, aplicações que exigem lavagem do painel ou produtos químicos suspensos no ar — o ar ambiente deve ser mantido fora do painel elétrico a todo momento.",
          "Atenção à temperatura: valores muito baixos podem causar condensação sobre os componentes. A recomendação é operar em 35 °C, garantindo eficiência e evitando riscos à rede e aos painéis elétricos.",
        ],
      },
      {
        heading: "Quando usar ar-condicionado de painel",
        list: [
          "Quando a climatização não puder ser feita com o ar ambiente em torno do painel (ventiladores com filtro).",
          "Quando a temperatura necessária dentro do painel for igual ou menor que a temperatura ambiente.",
          "Quando o ar externo ao painel estiver fortemente contaminado com óleo ou partículas de sujeira.",
        ],
      },
      {
        heading: "Considerações importantes",
        list: [
          "Garanta boa entrada e saída de ar do circuito externo da unidade para a troca de energia térmica com o ambiente.",
          "A temperatura mínima no interior do painel não deve ser baixa demais, para evitar condensação sobre os componentes — 35 °C é o ponto ideal de operação.",
        ],
      },
    ],
    benefitsTitle: "Motivos para manter a manutenção preventiva em dia",
    benefits: [
      "Controle da temperatura dentro do painel",
      "Vida útil dos componentes elétricos",
      "Economia de energia futura",
    ],
    faqTitle: "Por que contratar a Searcon?",
    faqs: [
      {
        q: "Por que devo contratar o serviço da Searcon?",
        a: "A Searcon é especialista em PMOC, há mais de 10 anos no mercado de refrigeração, segue as normas regulamentadoras, possui certificação ISO 9001 e equipe qualificada e treinada. Atendemos diversos segmentos: indústria, prédios comerciais, varejo e muito mais.",
      },
    ],
  },
]

export function getService(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug)
}
