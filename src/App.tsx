import { Audiences } from './components/Audiences'
import { Faq } from './components/Faq'
import { FinalCta, Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Steps } from './components/Steps'
import { Verified } from './components/Verified'
import { useRevealAll } from './hooks'

export default function App() {
  useRevealAll()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Verified />
        <Audiences />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
