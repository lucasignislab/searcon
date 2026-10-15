import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router"
import Header from "@/sections/Header"
import Footer from "@/sections/Footer"
import { getService, services } from "@/data/services"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, ChevronRight, Phone } from "lucide-react"

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (service) document.title = `${service.shortTitle} | Searcon Ar Condicionado`
  }, [service])

  if (!service) return <Navigate to="/" replace />

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Header />
      <main>
        {/* Hero da página */}
        <section className="relative">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-900/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 text-white lg:py-32">
            <nav className="mb-6 flex items-center gap-1.5 text-sm text-gray-300">
              <Link to="/" className="hover:text-cyan-brand">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>Serviços</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-cyan-brand">{service.shortTitle}</span>
            </nav>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">{service.subtitle}</p>
            <Button asChild size="lg" className="mt-8 bg-brand-500 font-bold hover:bg-brand-600">
              <Link to="/#contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-lg leading-relaxed text-gray-700">{service.intro}</p>
          </div>
        </section>

        {/* Seções de conteúdo */}
        {service.sections.map((sec, i) => (
          <section key={sec.heading} className={i % 2 === 0 ? "bg-gray-50 py-16" : "py-16"}>
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">{sec.heading}</h2>
              {sec.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-gray-600">{p}</p>
              ))}
              {sec.list && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {sec.list.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2.5 text-gray-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        {/* Benefícios */}
        {service.benefits && (
          <section className="bg-brand-900 py-16 text-white">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-2xl font-extrabold sm:text-3xl">{service.benefitsTitle}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-brand" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Passo a passo */}
        {service.steps && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">{service.stepsTitle}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {service.steps.map((step, i) => (
                  <div key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-bold text-brand-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {service.faqs && (
          <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">{service.faqTitle}</h2>
              <Accordion type="single" collapsible className="mt-8">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="mb-3 rounded-lg border bg-white px-5">
                    <AccordionTrigger className="text-left font-semibold text-brand-900 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-brand-950 py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Como podemos ajudar?</h2>
              <p className="mt-2 text-gray-300">Nosso time de especialistas está pronto para te atender.</p>
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

        {/* Outros serviços */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-extrabold text-brand-900">Conheça também</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => (
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
