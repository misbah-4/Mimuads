import { Advertisers } from './components/Advertisers'
import { Agencies } from './components/Agencies'
import { Faq } from './components/Faq'
import { CtaBand, Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Hosts } from './components/Hosts'
import { HowItWorks } from './components/HowItWorks'
import { Nav } from './components/Nav'
import { Platform } from './components/Platform'
import { useRevealAll } from './hooks'

export default function App() {
  useRevealAll()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Platform />
        <Advertisers />
        <Agencies />
        <Hosts />
        <HowItWorks />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
