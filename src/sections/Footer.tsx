import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"

const serviceLinks = [
  "PMOC — Plano de Manutenção, Operação e Controle",
  "Manutenção Preventiva e Corretiva",
  "Limpeza e Higienização de Dutos",
  "Projeto, Execução e Instalação",
  "Manutenção em Ar-Condicionado de Painel",
]

const social = [
  { icon: Linkedin, href: "https://br.linkedin.com/company/searcon-ar-condicionado", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/searconarcondicionado/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/searcon.arcondicionado/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/watch?v=a-COaReqmJM", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo-searcon.png" alt="Searcon Ar Condicionado" className="h-10 w-auto rounded bg-white p-1" />
          <p className="mt-4 text-sm">
            Soluções em sistemas de refrigeração e climatização comercial e industrial.
            Certificada ISO 9001, associada à ABRAVA e registrada no CREA.
          </p>
          <div className="mt-5 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full bg-white/10 p-2 hover:bg-brand-500"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Serviços</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#servicos" className="hover:text-cyan-brand">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+551938875218" className="flex items-center gap-2 hover:text-cyan-brand">
                <Phone className="h-4 w-4 shrink-0" /> (19) 3887-5218
              </a>
            </li>
            <li>
              <a href="mailto:contato@searcon.com.br" className="flex items-center gap-2 hover:text-cyan-brand">
                <Mail className="h-4 w-4 shrink-0" /> contato@searcon.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Unidades</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Rua das Melissas, 223<br />CEP 13187-040 — Hortolândia/SP</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Rua Amazonas, 126<br />CEP 18035-520 — Sorocaba/SP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} Searcon Ar Condicionado Ltda — CNPJ 13.693.539/0001-15</span>
          <span>Hortolândia · Sorocaba · São Paulo</span>
        </div>
      </div>
    </footer>
  )
}
