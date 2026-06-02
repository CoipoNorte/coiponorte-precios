import { useState, useEffect, useRef } from 'react'
import { sections } from '../data/pricing'
import './Navbar.css'

const NAV_GROUPS = [
  {
    label: 'Técnico',
    icon: '🔧',
    ids: ['impresiones', 'apoyo', 'computadores', 'impresoras'],
  },
  {
    label: 'Redes',
    icon: '🌐',
    ids: ['redes'],
  },
  {
    label: 'Consultoría',
    icon: '🧠',
    ids: ['consultoria'],
  },
  {
    label: 'Web',
    icon: '🌍',
    ids: ['web'],
  },
  {
    label: 'Software',
    icon: '⚙️',
    ids: ['software'],
  },
  {
    label: 'Empresas',
    icon: '🏢',
    ids: ['empresas', 'recargos'],
  },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [activeSection, setActive] = useState('')
  const dropRef = useRef(null)

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = sections.map(s => s.id)
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-60px 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleGroupClick = (group) => {
    if (group.ids.length === 1) {
      scrollTo(group.ids[0])
      setMenuOpen(false)
      setDropdown(null)
    } else {
      setDropdown(dropdown === group.label ? null : group.label)
    }
  }

  const isGroupActive = (group) =>
    group.ids.includes(activeSection)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">

          {/* Brand */}
          <button
            className="navbar__brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/coiponorte-precios/assets/coiponorteSinFondo.ico"
              alt="CoipoNorte"
              className="navbar__logo-img"
            />
            <span className="navbar__brand-text">
              CoipoNorte <span className="navbar__brand-sub">Precios 2026</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="navbar__links" ref={dropRef}>
            {NAV_GROUPS.map(group => (
              <div className="navbar__group" key={group.label}>
                <button
                  className={`navbar__link ${isGroupActive(group) ? 'active' : ''}`}
                  onClick={() => handleGroupClick(group)}
                >
                  <span className="navbar__link-icon">{group.icon}</span>
                  {group.label}
                  {group.ids.length > 1 && (
                    <svg className={`navbar__chevron ${dropdown === group.label ? 'open' : ''}`}
                      width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {group.ids.length > 1 && dropdown === group.label && (
                  <div className="navbar__dropdown">
                    {group.ids.map(id => {
                      const sec = sections.find(s => s.id === id)
                      return sec ? (
                        <button
                          key={id}
                          className={`navbar__dropdown-item ${activeSection === id ? 'active' : ''}`}
                          onClick={() => { scrollTo(id); setDropdown(null) }}
                        >
                          <span>{sec.emoji}</span> {sec.title}
                        </button>
                      ) : null
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar__actions">
            <a
              href="https://wa.me/56989198933?text=Hola,%20quiero%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              💬 Cotizar
            </a>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu__inner">
          {NAV_GROUPS.map(group => (
            <div key={group.label} className="mobile-menu__group">
              <p className="mobile-menu__group-label">{group.icon} {group.label}</p>
              {group.ids.map(id => {
                const sec = sections.find(s => s.id === id)
                return sec ? (
                  <button
                    key={id}
                    className={`mobile-menu__item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => { scrollTo(id); setMenuOpen(false) }}
                  >
                    {sec.emoji} {sec.title}
                  </button>
                ) : null
              })}
            </div>
          ))}
          <a
            href="https://wa.me/56900000000?text=Hola,%20quiero%20cotizar%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent btn--full"
            onClick={() => setMenuOpen(false)}
          >
            💬 Solicitar Cotización
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
