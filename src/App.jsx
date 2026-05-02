// import { useState } from 'react'

// import './App.css'
import './styles/global.css'

// import {NavBar} from './components/NavBar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <NavBar /> */}
    <nav className="nav">
        <div class="nav-container">
            <div class="nav-brand">JDR</div>
            <div class="nav-links">
                <a href="#sobre-mi" class="nav-link">Sobre mí</a>
                <a href="#experiencia" class="nav-link">Experiencia</a>
                <a href="#habilidades" class="nav-link">Habilidades</a>
                <a href="#educacion" class="nav-link">Educación</a>
                <a href="#contacto" class="nav-link nav-link-cta">Contacto</a>
            </div>
        </div>
    </nav>


        {/* hero-section */}
       <section className="hero">
      <div className="hero-content">
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



    </>
  )
}

export default App
