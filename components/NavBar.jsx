
const NavBar = () => {
<nav className="nav">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">Juan David</a>
          <ul className="navbar-menu">
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
}

export default NavBar;

// Animate skill bars
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateSkillBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
};

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(animateSkillBars, observerOptions);
    skillsObserver.observe(skillsSection);
}
