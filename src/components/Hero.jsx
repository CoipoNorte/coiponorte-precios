import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container hero__inner">

        <div className="hero__content fade-up">
          <div className="badge">📍 Región de Tarapacá · Iquique, Chile 🇨🇱</div>

          <h1 className="hero__title">
            Lista de Precios<br />
            <span className="hero__title-accent">Referencial 2026</span>
          </h1>

          <p className="hero__desc">
            Servicios informáticos para particulares, emprendedores y empresas.
            Los precios son referenciales en CLP y pueden variar según alcance,
            urgencia y complejidad del proyecto.
          </p>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Vigente 2026
            </div>
            <div className="hero__meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Moneda: CLP
            </div>
            <div className="hero__meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Tarapacá
            </div>
          </div>

          <div className="hero__ctas">
            <a
              href="https://wa.me/56989198933?text=Hola,%20quiero%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent btn--lg"
            >
              💬 Solicitar Cotización
            </a>
            <a href="#proyectos" className="btn btn--ghost btn--lg">
              Ver Proyectos →
            </a>
          </div>
        </div>

        <div className="hero__stats fade-up" style={{ animationDelay: '.15s' }}>
          <StatCard icon="💻" label="Servicios Técnicos" value="9+" />
          <StatCard icon="🌍" label="Servicios Web"      value="6+" />
          <StatCard icon="⚙️" label="Tipos de Software"  value="5+" />
          <StatCard icon="🏢" label="Planes Empresas"    value="3" />
        </div>

      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-secondary)"/>
        </svg>
      </div>
    </section>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-card__icon">{icon}</span>
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  )
}
