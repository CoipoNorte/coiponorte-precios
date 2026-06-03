import { useEffect }     from 'react'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import PricingSection    from './components/PricingSection'
import ProjectsSection   from './components/ProjectsSection'
import Footer            from './components/Footer'
import { sections }      from './data/pricing'
import { initGlobalSmoothScroll } from './utils/smoothScroll'

export default function App() {
  useEffect(() => {
    initGlobalSmoothScroll()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.map(section => (
          <PricingSection key={section.id} section={section} />
        ))}
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}