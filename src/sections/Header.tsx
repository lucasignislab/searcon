import { useState } from "react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { services } from "@/data/services"
import { Menu, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react"

const navItems = [
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Barra superior */}
      <div className="bg-brand-900 text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:text-sm">
          <span className="hidden font-medium sm:block">
            Climatização comercial e industrial com engenharia de verdade
          </span>
          <div className="flex items-center gap-5">
            <a href="tel:+551938875218" className="flex items-center gap-1.5 hover:text-cyan-brand">
              <Phone className="h-3.5 w-3.5" /> (19) 3887-5218
            </a>
            <a href="mailto:contato@searcon.com.br" className="flex items-center gap-1.5 hover:text-cyan-brand">
              <Mail className="h-3.5 w-3.5" /> contato@searcon.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center">
          <img src="/images/logo-searcon.png" alt="Searcon Ar Condicionado" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {/* Dropdown de Serviços (hover) */}
          <div className="group relative">
            <a
              href="/#servicos"
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 transition-colors group-hover:text-brand-500"
            >
              Serviços
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/servicos/${s.slug}`}
                    className="flex items-center justify-between gap-3 border-b border-gray-50 px-5 py-3.5 transition-colors last:border-0 hover:bg-brand-50"
                  >
                    <div>
                      <span className="block text-sm font-bold text-brand-900">{s.shortTitle}</span>
                      <span className="mt-0.5 line-clamp-1 block text-xs text-gray-500">{s.subtitle}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition-colors hover:text-brand-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="bg-brand-500 font-bold hover:bg-brand-600">
            <a href="/#contato">Solicite um Orçamento</a>
          </Button>
        </div>

        {/* Menu mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-4">
              {/* Serviços expansível no mobile */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-base font-semibold text-gray-800 hover:text-brand-500"
                >
                  Serviços
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-3 flex flex-col gap-3 border-l-2 border-brand-100 pl-4">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicos/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-gray-600 hover:text-brand-500"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-brand-500"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4 bg-brand-500 font-bold hover:bg-brand-600">
                <a href="/#contato" onClick={() => setOpen(false)}>
                  Solicite um Orçamento
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
