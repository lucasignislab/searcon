import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

const navItems = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

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
