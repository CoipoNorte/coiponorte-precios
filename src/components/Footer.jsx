import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="footer">
      <div className="container">

        <div className="footer__top">

          {/* Brand col */}
          <div className="footer__brand">
            <div className="footer__logo">CN</div>
            <div>
              <p className="footer__brand-name">CoipoNorte</p>
              <p className="footer__brand-tagline">Desarrollo y Servicios Informáticos</p>
            </div>
          </div>

          {/* Info */}
          <div className="footer__info">
            <p className="footer__person">Christian Marcelo Cáceres Marín</p>
            <p className="footer__role">Ingeniero Civil en Computación e Informática</p>
            <p className="footer__location">📍 Iquique, Región de Tarapacá — Chile 🇨🇱</p>
          </div>

          {/* Brands */}
          <div className="footer__brands">
            <p className="footer__brands-title">Marcas</p>
            <div className="footer__brand-item">
              <span className="footer__brand-dot footer__brand-dot--blue" />
              <div>
                <strong>CoipoNorte</strong>
                <span>Desarrollo de Software</span>
              </div>
            </div>
            <div className="footer__brand-item">
              <span className="footer__brand-dot footer__brand-dot--green" />
              <div>
                <strong>DenguNorte</strong>
                <span>Soporte e Informática</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__brands-title">Contacto</p>
            <a
              href="https://wa.me/56989198933?text=Hola,%20quiero%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.856L.057 23.998l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.656-.492-5.193-1.354l-.373-.22-3.873 1.016.991-3.776-.243-.388A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="https://github.com/CoipoNorte"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__legal">
            © {year} CoipoNorte · DenguNorte — Christian Marcelo Cáceres Marín.
            Todos los precios son referenciales en CLP.
          </p>
          <p className="footer__disclaimer">
            Los valores pueden variar según alcance, complejidad, plazos y requerimientos específicos.
          </p>
        </div>

      </div>
    </footer>
  )
}
