import { useEffect, useState } from 'react'
import { translations } from '../components/translations'
import './styles/global.css'
import fotoJuan from '../images/Foto.jpg'


function App() {

  const [lang, setLang] = useState('es')
  const t = translations[lang]

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    // 1. Smooth scroll con offset para el navbar fijo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
      })
    })

    // 2. Animación de barras de habilidades al hacer scroll
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const animateSkillBars = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress')
          skillBars.forEach(bar => {
            const width = bar.style.width
            bar.style.width = '0%'
            setTimeout(() => { bar.style.width = width }, 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }

    const skillsSection = document.querySelector('.skills')
    let skillsObserver = null
    if (skillsSection) {
      skillsObserver = new IntersectionObserver(animateSkillBars, observerOptions)
      skillsObserver.observe(skillsSection)
    }

    // 3. Animación fade-up de tarjetas y timeline al hacer scroll
    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }

    const scrollAnimateElements = document.querySelectorAll(
      '.timeline-item, .education-card, .stat-card'
    )
    scrollAnimateElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'all 0.6s ease-out'
    })

    const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions)
    scrollAnimateElements.forEach(el => scrollObserver.observe(el))

    // 4. Nav link activo según la sección visible
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')

    const setActiveNav = () => {
      const scrollY = window.pageYOffset
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active')
            }
          })
        }
      })
    }

    window.addEventListener('scroll', setActiveNav)

    // 5. Sombra del navbar al hacer scroll
    const nav = document.querySelector('.nav')
    const handleNavShadow = () => {
      if (nav) {
        nav.style.boxShadow = window.scrollY > 50
          ? '0 4px 20px rgba(0, 0, 0, 0.1)'
          : 'none'
      }
    }

    window.addEventListener('scroll', handleNavShadow)

    console.log('Portfolio loaded successfully! 🚀')

    return () => {
      window.removeEventListener('scroll', setActiveNav)
      window.removeEventListener('scroll', handleNavShadow)
      if (skillsObserver && skillsSection) {
        skillsObserver.unobserve(skillsSection)
      }
    }

  }, [lang]) // <- se re-ejecuta cuando cambia el idioma

  return (
    <>
    {/* Nav */}
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


      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">{t.hero.badge}</div>
          <h1>
            {t.hero.greeting} <span className="highlight">Juan David</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">{t.hero.btnContact}</a>
            <a href="https://www.github.com/Juandarl1" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          
        </div>
             <div className='hero-image-wrapper'>
            <div className='hero-image-frame'>
              <img
                src={fotoJuan}
                alt="Juan David Rodríguez Londoño"
                className="hero-image"
              />
            </div>
          </div>

      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="section about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">{t.about.intro}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">{t.about.stat1}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">{t.about.stat2}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">{t.about.stat3}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="section experience">
        <div className="container">
          <h2 className="section-title">{t.experience.title}</h2>
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{t.experience.job1.date}</div>
                <h3 className="timeline-title">{t.experience.job1.role}</h3>
                <div className="timeline-company">{t.experience.job1.company}</div>
                <ul className="timeline-description">
                  {t.experience.job1.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {t.experience.job1.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{t.experience.job2.date}</div>
                <h3 className="timeline-title">{t.experience.job2.role}</h3>
                <div className="timeline-company">{t.experience.job2.company}</div>
                <ul className="timeline-description">
                  {t.experience.job2.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {t.experience.job2.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{t.experience.job3.date}</div>
                <h3 className="timeline-title">{t.experience.job3.role}</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section id="educacion" className="section education">
        <div className="container">
          <h2 className="section-title">{t.education.title}</h2>
          <div className="education-grid">

            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h3 className="education-title">{t.education.degree1.title}</h3>
                <div className="education-institution">{t.education.degree1.institution}</div>
                <div className="education-date">{t.education.degree1.date}</div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">💻</div>
              <div className="education-content">
                <h3 className="education-title">{t.education.degree2.title}</h3>
                <div className="education-institution">{t.education.degree2.institution}</div>
                <div className="education-date">{t.education.degree2.date}</div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">📚</div>
              <div className="education-content">
                <h3 className="education-title">{t.education.degree3.title}</h3>
                <div className="education-institution">{t.education.degree3.institution}</div>
                <div className="education-date">{t.education.degree3.date}</div>
                <div className="certification-link">
                  <a
                    href="https://udemy-certificate.s3.amazonaws.com/image/UC-25145c90-9a3c-40d6-b2f8-ed32b61a2002.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    {t.education.degree3.certBtn}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    {/* FIXME: Cambiar nivel por tecnologias que he trabajado, no se ve bien  */}

      {/* HABILIDADES */}
      <section id="habilidades" className="section skills">
        <div className="container">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="skills-grid">

            <div className="skill-category">
              <h3 className="skill-category-title">{t.skills.cat1}</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">SQL Server</span>
                    <span className="skill-level">{t.skills.levels.intermediate}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">C#</span>
                    <span className="skill-level">{t.skills.levels.basic}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Python</span>
                    <span className="skill-level">{t.skills.levels.basic}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">{t.skills.levels.basic}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">React</span>
                    <span className="skill-level">{t.skills.levels.basic}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Angular</span>
                    <span className="skill-level">{t.skills.levels.learning}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '10%' }}></div>
                  </div>
                </div>

                <div className="front_tecnologies">
                  <h1 className="front_tecnologies_title">{t.skills.otherTech}</h1>
                  <div className="tecnology-link">
                    <h3>{t.skills.inProgress}</h3>
                  </div>
                </div>

              </div>
            </div>
              
{/* Fixme / */}

            <div className="skill-category">
              <h3 className="skill-category-title">{t.skills.cat2}</h3>
              <div className="soft-skills">
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">🤝</div>
                  <div className="soft-skill-name">{t.skills.soft.teamwork}</div>
                </div>
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">💪</div>
                  <div className="soft-skill-name">{t.skills.soft.resilient}</div>
                </div>
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">⚡</div>
                  <div className="soft-skill-name">{t.skills.soft.pressure}</div>
                </div>
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">💬</div>
                  <div className="soft-skill-name">{t.skills.soft.communication}</div>
                </div>
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">👥</div>
                  <div className="soft-skill-name">{t.skills.soft.interpersonal}</div>
                </div>
                <div className="soft-skill-card">
                  <div className="soft-skill-icon">🔧</div>
                  <div className="soft-skill-name">{t.skills.soft.technical}</div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">{t.skills.cat3}</h3>
              <div className="languages">
                <div className="language-item">
                  <span className="language-name">{t.skills.languages.spanish}</span>
                  <span className="language-level">{t.skills.languages.spanishLevel}</span>
                </div>
                <div className="language-item">
                  <span className="language-name">{t.skills.languages.english}</span>
                  <span className="language-level">{t.skills.languages.englishLevel}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contact">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p className="contact-intro">{t.contact.intro}</p>
              <p>{t.contact.p}</p>
            </div>
            <div className="contact-cards">
              <a href="mailto:judarolo02@gmail.com" className="contact-card">
                <div className="contact-icon">📧</div>
                <div className="contact-label">{t.contact.emailLabel}</div>
                <div className="contact-value">judarolo02@gmail.com</div>
              </a>
              <a href="tel:+573052471550" className="contact-card">
                <div className="contact-icon">📱</div>
                <div className="contact-label">{t.contact.phoneLabel}</div>
                <div className="contact-value">(+57) 305 2471550</div>
              </a>
              <a href="https://www.linkedin.com/in/juan-david-rodriguez-londono/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">💼</div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">Juan David Rodriguez Londoño</div>
              </a>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div className="contact-label">{t.contact.locationLabel}</div>
                <div className="contact-value">Medellín, Antioquia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer.rights}</p>
          <p className="footer-note">{t.footer.made}</p>
        </div>
      </footer>

    </>
  )
}

export default App