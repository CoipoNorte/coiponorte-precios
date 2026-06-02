import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import PricingSection  from './components/PricingSection'
import ProjectsSection from './components/ProjectsSection'
import Footer          from './components/Footer'
import { sections }    from './data/pricing'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Secciones de precios */}
        {sections.map(section => (
          <PricingSection key={section.id} section={section} />
        ))}

        {/* Proyectos destacados */}
        <ProjectsSection />
      </main>

      <Footer />
    </>
  )
}