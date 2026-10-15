import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import TrustBar from "@/sections/TrustBar"
import Services from "@/sections/Services"
import Differentials from "@/sections/Differentials"
import WhyChoose from "@/sections/WhyChoose"
import Segments from "@/sections/Segments"
import Clients from "@/sections/Clients"
import FAQ from "@/sections/FAQ"
import About from "@/sections/About"
import ContactCta from "@/sections/ContactCta"
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Differentials />
        <WhyChoose />
        <Segments />
        <Clients />
        <FAQ />
        <About />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
