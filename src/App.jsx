import { useEffect } from 'react'

import './styles/global.css'

// import {NavBar} from '../components/NavBar'


function App() {
  // const [count, setCount] = useState(0)

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
 
    // Cleanup: remueve los listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', setActiveNav)
      window.removeEventListener('scroll', handleNavShadow)
      if (skillsObserver && skillsSection) {
        skillsObserver.unobserve(skillsSection)
      }
    }
 
  }, [])




  return (
    <>

      {/* <NavBar /> */}

    <nav className="nav">
        <div className="nav-container">
            <div className="nav-brand">JDRL</div>
            <div className="nav-links">
                <a href="#sobre-mi" className="nav-link">Sobre mí</a>
                <a href="#experiencia" className="nav-link">Experiencia</a>
                <a href="#habilidades" className="nav-link">Habilidades</a>
                <a href="#educacion" className="nav-link">Educación</a>
                <a href="#contacto" className="nav-link nav-link-cta">Contacto</a>
            </div>
        </div>
    </nav>


        {/* hero-section */}
       <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Disponible para oportunidades</div>
        <h1>
          Hola, soy <span className="highlight">Juan David</span>
          <br />
          
          <p className="hero-subtitle">Desarrollador de software</p>
          <p className="hero-description">
                Ingeniero de software enfocado en crear soluciones eficientes y escalables.
                Especializado en C#, Python, JavaScript y SQL Server.
          </p>

          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">Contáctame</a>
            <a href="#experiencia" className="btn btn-secondary">Mi experiencia</a>
          </div>
        </h1>
      </div>
    </section>

        
        

        {/* <!-- About Section --> */}
    <section id="sobre-mi" class="section about">
        <div class="container">
            <h2 class="section-title">Sobre mí</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="about-intro">
                        Ingeniero de software hábil para identificar necesidades y dirigir esfuerzos hacia objetivos claros. 
                        Me destaco por mi capacidad para trabajar en equipo, aprender rápidamente y asumir responsabilidades con compromiso.
                    </p>
                    <p>
                        Mi enfoque está en consolidar mis habilidades técnicas, especialmente en lenguajes como <strong>C#, Python, JavaScript</strong> 
                        y bases de datos <strong>SQL Server</strong>.
                    </p>
                    <p>
                        Busco una oportunidad en la que pueda aplicar mis conocimientos y habilidades para aportar al crecimiento de la organización 
                        y continuar mi desarrollo profesional.
                    </p>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">2+</div>
                        <div class="stat-label">Años de experiencia</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">6+</div>
                        <div class="stat-label">Tecnologías</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">2</div>
                        <div class="stat-label">Empresas</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Experience Section */}
    <section id="experiencia" class="section experience">
        <div class="container">
            <h2 class="section-title">Experiencia</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">Jun 2024 - Sep 2024</div>
                        <h3 class="timeline-title">Analista QA</h3>
                        <div class="timeline-company">Maui and Sons</div>
                        <ul class="timeline-description">
                            <li>Diseño de casos de prueba para sistema de puntos de venta</li>
                            <li>Ejecución de pruebas manuales unitarias y de integración en etapas iniciales de desarrollo</li>
                            <li>Gestión y documentación de incidentes mediante la herramienta Trello</li>
                        </ul>
                        <div class="timeline-tags">
                            <span class="tag">QA Testing</span>
                            <span class="tag">Trello</span>
                            <span class="tag">Testing Manual</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">Jun 2023 - Dic 2023</div>
                        <h3 class="timeline-title">Prácticas en Auditoría de Tecnología</h3>
                        <div class="timeline-company">Bancolombia</div>
                        <ul class="timeline-description">
                            <li>Extracción, depuración y estructuración de información clave para las pruebas de auditoría</li>
                            <li>Apoyo en auditoría para desarrollo de modelos analíticos para la gerencia</li>
                        </ul>
                        <div class="timeline-tags">
                            <span class="tag">Auditoría IT</span>
                            <span class="tag">Análisis de Datos</span>
                            <span class="tag">SQL</span>
                        </div>
                    </div>
                </div>
                

                 <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">Proximamente</div>
                        <h3 class="timeline-title">Futuras experiencias</h3>
                    </div>
                </div>


            </div>
        </div>
    </section>

    {/* Education section */}
    <section id="educacion" className="section education">
        <div className="container">
            <h2 class="section-title">Educación</h2>
            <div className="education-grid">
                <div className="education-card">
                    <div className="education-icon">🎓</div>
                    <div className="education-content">
                        <h3 className="education-title">Ingeniería de Software</h3>
                        <div className="education-institution">Institución Universitaria Pascual Bravo</div>
                        <div className="education-date">Culminado Agosto 2024</div>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-icon">💻</div>
                    <div className="education-content">
                        <h3 className="education-title">Tecnología en Desarrollo de Software</h3>
                        <div className="education-institution">Institución Universitaria Pascual Bravo</div>
                        <div className="education-date">Culminado Agosto 2021</div>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-icon">📚</div>
                    <div className="education-content">
                        <h3 className="education-title">Máster en SQL Server: Desde Cero a Profesional</h3>
                        <div className="education-institution">Udemy</div>
                        <div className="education-date">Culminado Enero 2026</div>

                    <div className='certification-link'>
                        <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-25145c90-9a3c-40d6-b2f8-ed32b61a2002.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Ver certificado</a>
                    </div>


                    </div>
                </div>
            </div>
        </div>
    </section>




    {/* Habilidades Section */}
     <section id="habilidades" className="section skills">
        <div className="container">
            <h2 className="section-title">Habilidades</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3 className="skill-category-title">Lenguajes & Frameworks</h3>
                    <div className="skill-list">
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">SQL Server</span>
                                <span className="skill-level">Intermedio</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">C#</span>
                                <span className="skill-level">Básico</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">Python</span>
                                <span className="skill-level">Básico</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">JavaScript</span>
                                <span className="skill-level">Básico</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">React</span>
                                <span className="skill-level">Básico</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">Angular</span>
                                <span className="skill-level">Aprendiendo</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Habilidades Blandas</h3>
                    <div className="soft-skills">
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">🤝</div>
                            <div className="soft-skill-name">Trabajo en equipo</div>
                        </div>
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">💪</div>
                            <div className="soft-skill-name">Resiliente</div>
                        </div>
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">⚡</div>
                            <div className="soft-skill-name">Trabajo bajo presión</div>
                        </div>
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">💬</div>
                            <div className="soft-skill-name">Comunicación asertiva</div>
                        </div>
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">👥</div>
                            <div className="soft-skill-name">Relaciones interpersonales</div>
                        </div>
                        <div className="soft-skill-card">
                            <div className="soft-skill-icon">🔧</div>
                            <div className="soft-skill-name">Conocimiento técnico</div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Idiomas</h3>
                    <div className="languages">
                        <div className="language-item">
                            <span className="language-name">Español</span>
                            <span className="language-level">Nativo</span>
                        </div>
                        <div className="language-item">
                            <span className="language-name">Inglés</span>
                            <span className="language-level">Intermedio (B1)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default App
