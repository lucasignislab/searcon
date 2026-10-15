const clients = [
  { name: "Toyota", logo: "/images/clientes/toyota.png" },
  { name: "John Deere", logo: "/images/clientes/john-deere.png" },
  { name: "Bridgestone", logo: "/images/clientes/bridgestone.png" },
  { name: "ZF", logo: "/images/clientes/zf.png" },
  { name: "Gestamp", logo: "/images/clientes/gestamp.png" },
  { name: "IBBL", logo: "/images/clientes/ibbl.png" },
  { name: "Mitsuba", logo: "/images/clientes/mitsuba.png" },
  { name: "Rose Plastic", logo: "/images/clientes/rose-plastic.png" },
  { name: "Stoller", logo: "/images/clientes/stoller.png" },
]

export default function Clients() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">Nossos clientes</h2>
          <p className="mt-3 text-lg text-gray-600">Parceiros que confiam em nosso trabalho</p>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-6 grayscale transition hover:grayscale-0"
            >
              <img src={c.logo} alt={`Logo ${c.name}`} className="max-h-12 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
