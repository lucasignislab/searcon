import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

export default function ContactCta() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = encodeURIComponent(
      `Nome: ${data.get("nome")}\nTelefone: ${data.get("telefone")}\nE-mail: ${data.get("email")}`
    )
    window.location.href = `mailto:contato@searcon.com.br?subject=${encodeURIComponent(
      "Solicite contato — site"
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contato" className="bg-brand-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Como podemos ajudar?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Nosso time de especialistas está pronto para te atender. Deixe seus dados ou ligue agora.
          </p>
          <a
            href="tel:+551938875218"
            className="mt-8 inline-flex items-center gap-3 text-2xl font-extrabold text-cyan-brand hover:text-white"
          >
            <Phone className="h-7 w-7" /> (19) 3887-5218
          </a>
          <p className="mt-2 text-gray-300">contato@searcon.com.br</p>
        </div>

        <div className="rounded-xl bg-white p-6 text-gray-900 shadow-2xl sm:p-8">
          {sent ? (
            <div className="rounded-lg bg-brand-50 p-4 text-sm font-medium text-brand-800">
              Obrigado! Abrimos seu e-mail com a mensagem pronta para envio.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="cta-nome">Nome *</Label>
                <Input id="cta-nome" name="nome" required placeholder="Seu nome" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="cta-telefone">Telefone *</Label>
                  <Input id="cta-telefone" name="telefone" type="tel" required placeholder="(19) 99999-0000" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="cta-email">E-mail *</Label>
                  <Input id="cta-email" name="email" type="email" required placeholder="voce@empresa.com.br" />
                </div>
              </div>
              <Button type="submit" className="mt-1 h-12 bg-brand-500 text-base font-bold hover:bg-brand-600">
                Solicite contato
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
