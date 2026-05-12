
import { useContext, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'
export default function Navbar() {
  const { lang, setLang } = useContext(LanguageContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]


{/* NAV */}
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">JDRL</div>
    
        {/* Botón hamburguesa — solo visible en mobile via CSS */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
        </button>
    
        {/* Al hacer click se agrega/quita la clase "open" */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#sobre-mi"    className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href="#experiencia" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
          <a href="#habilidades" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a>
          <a href="#educacion"   className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.education}</a>
          <a href="#contacto"    className="nav-link nav-link-cta" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          <button
            onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMenuOpen(false) }}
            className="lang-btn"
          >
            {lang === 'es' ? '🇺🇸 EN' : '🇨🇴 ES'}
          </button>
        </div>
      </div>
    </nav>
}
