import './Hero.css'
import { smoothScroll } from '../utils/smoothScroll'

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Vigente 2026
            </div>
            <div className="hero__meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Moneda: CLP
            </div>
            <div className="hero__meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
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
          <StatCard icon="💻" label="Servicios Técnicos" value="9+" anchor="computadores" floatStyle={{ '--float-y': '10px', '--float-dur': '3.8s', '--float-delay': '0s' }} />
          <StatCard icon="🌍" label="Servicios Web" value="6+" anchor="web" floatStyle={{ '--float-y': '14px', '--float-dur': '4.5s', '--float-delay': '0.6s' }} />
          <StatCard icon="⚙️" label="Tipos de Software" value="5+" anchor="software" floatStyle={{ '--float-y': '8px', '--float-dur': '3.2s', '--float-delay': '1.1s' }} />
          <StatCard icon="🏢" label="Planes Empresas" value="3" anchor="empresas" floatStyle={{ '--float-y': '12px', '--float-dur': '5.0s', '--float-delay': '0.3s' }} />
        </div>

      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>
    </section>
  )
}


function StatCard({ icon, label, value, anchor, floatStyle }) {
  return (
    <div
      className="stat-card stat-card--float"
      style={floatStyle}
      onClick={() => anchor && smoothScroll(anchor)}
      role={anchor ? 'button' : undefined}
      tabIndex={anchor ? 0 : undefined}
      onKeyDown={(e) => e.key === 'Enter' && anchor && smoothScroll(anchor)}
      title={anchor ? `Ir a ${label}` : undefined}
    >
      <span className="stat-card__icon">{icon}</span>
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
      {anchor && <span className="stat-card__arrow">↓</span>}
    </div>
  )
}
