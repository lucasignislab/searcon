import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShieldCheck, Award, BadgeCheck } from "lucide-react"

export default function Hero() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const body = encodeURIComponent(
      `Nome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("telefone")}\nEmpresa: ${data.get("empresa")}\n\nMensagem:\n${data.get("mensagem")}`
    )
    window.location.href = `mailto:contato@searcon.com.br?subject=${encodeURIComponent(
      "Solicitação de orçamento — site"
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="top" className="relative">
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="Técnico Searcon inspecionando unidades de ar-condicionado em cobertura comercial"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div className="flex flex-col justify-center text-white">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-brand">
            Ar-condicionado para empresas
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            Climatização com manutenção planejada, não com surpresas
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-100">
            PMOC, manutenção preventiva e corretiva, limpeza de dutos, projetos e instalações.
            Há 15 anos cuidando do ar de indústrias, hospitais, shoppings e escritórios.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-cyan-brand" />
              <div className="text-sm leading-tight">
                <span className="block text-xl font-extrabold">ISO 9001</span>
                <span className="text-gray-200">Empresa certificada</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-8 w-8 text-cyan-brand" />
              <div className="text-sm leading-tight">
                <span className="block text-xl font-extrabold">ABRAVA + CREA</span>
                <span className="text-gray-200">Associada e registrada</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-8 w-8 text-cyan-brand" />
              <div className="text-sm leading-tight">
                <span className="block text-xl font-extrabold">15 anos</span>
                <span className="text-gray-200">de mercado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-xl bg-white p-6 shadow-2xl sm:p-8">
          <h2 className="text-xl font-extrabold text-brand-900">Solicite um orçamento</h2>
          <p className="mt-1 text-sm text-gray-500">
            Nosso time de especialistas retorna rapidamente.
          </p>

          {sent ? (
            <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm font-medium text-brand-800">
              Obrigado! Abrimos seu e-mail com a mensagem pronta para envio. Se preferir, ligue
              para <a href="tel:+551938875218" className="font-bold underline">(19) 3887-5218</a>.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" name="nome" required placeholder="Seu nome" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" required placeholder="voce@empresa.com.br" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" name="telefone" type="tel" required placeholder="(19) 99999-0000" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="empresa">Empresa</Label>
                <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="mensagem">Como podemos ajudar?</Label>
                <Input id="mensagem" name="mensagem" placeholder="Ex.: PMOC para unidade fabril" />
              </div>
              <Button type="submit" className="mt-1 h-12 bg-brand-500 text-base font-bold hover:bg-brand-600">
                Solicitar contato
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
