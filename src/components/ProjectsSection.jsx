import { featuredProjects } from '../data/pricing'
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">

        <div className="projects-section__header">
          <div className="badge">⭐ Trabajos Destacados</div>
          <h2 className="section-title">Proyectos Recientes</h2>
          <p className="section-subtitle">
            Una muestra de los servicios entregados a clientes de la Región de Tarapacá.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-section__cta">
          <a
            href="https://github.com/CoipoNorte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--lg"
          >
            Ver más en GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { title, description, tech, category, emoji, image, link } = project

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="project-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" aria-hidden="true" />
        <span className="project-card__category-badge">
          {emoji} {category}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <div className="project-card__tech">
          {tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link btn btn--accent"
        >
          Ver proyecto →
        </a>
      </div>
    </article>
  )
}