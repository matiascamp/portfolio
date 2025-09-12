import { Github, Linkedin, Mail, Menu, X, ExternalLink, Terminal, BriefcaseBusiness, FolderCode, MessagesSquare } from "lucide-react"
import { useEffect, useState } from "react"
import { icons, projects, sections } from "./constants"
import profile from './assets/perfil.png'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.title = "Matias Campodonico - Full Stack Developer | React, Node.js, VTEX"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Full Stack Developer especializado en React, Node.js y VTEX IO. +3 años de experiencia desarrollando aplicaciones web escalables y optimizadas para e-commerce.'
      )
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Matias Campodonico",
      "jobTitle": "Full Stack Web Developer",
      "description": "Full Stack Developer especializado en aplicaciones web dinámicas, optimizaciones de código y aumentos de performance",
      "url": window.location.href,
      "image": profile,
      "sameAs": [
        "https://linkedin.com/in/matias-campodonico",
        "https://github.com/matiascamp"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Valtech"
      },
      "knowsAbout": [
        "React", "Node.js", "JavaScript", "TypeScript", "VTEX IO", "GraphQL",
        "CSS", "HTML", "PostgreSQL", "Git", "Full Stack Development"
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "Academia Henry"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const isMobile = window.innerWidth < 768

      let active = "hero"
      let bestMatch = { section: "hero", visibility: 0 }

      const sectionIds = sections.map(section => section.id)

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()

          const visibleTop = Math.max(0, -rect.top)
          const visibleBottom = Math.min(rect.height, windowHeight - rect.top)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibilityRatio = rect.height > 0 ? visibleHeight / rect.height : 0

          const threshold = isMobile ? 0.15 : 0.2

          if (visibilityRatio >= threshold) {
            if (visibilityRatio > bestMatch.visibility) {
              bestMatch = { section: sectionId, visibility: visibilityRatio }
            }
          }

          const viewportCenter = windowHeight / 2
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            active = sectionId
          }
        }
      }

      if (bestMatch.visibility > 0.3) {
        active = bestMatch.section
      }

      // Override para el final del documento
      if (scrollY + windowHeight >= document.documentElement.scrollHeight - 100) {
        active = "contact"
      }

      setActiveSection(active)
    }

    const observerOptions = {
      threshold: [0.1, 0.2, 0.3],
      rootMargin: "0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          element.classList.add("animate-in")

          const cards = element.querySelectorAll(".card-animate")
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in")
            }, index * 200)
          })

          const children = element.querySelectorAll(".stagger-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in")
            }, index * 150)
          })
        }
      })
    }, observerOptions)

    const animatableElements = document.querySelectorAll(".animate-on-scroll")
    animatableElements.forEach((el) => observer.observe(el))

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" })
    }
    setSidebarOpen(false)
  }


  return (

    <div className="min-h-screen bg-background dark">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-3 md:hidden bg-background/80 backdrop-blur-sm border rounded-lg p-2 "
        aria-label={sidebarOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <X className="w-6 h-6" color="white" /> : <Menu className="w-6 h-6" color="white" />}
      </button>
      <nav className={`fixed top-0 h-full w-60 z-2 bg-background/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-100"} md:translate-x-0`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex-1">
            <ul className="relative h-full w-full flex flex-col justify-evenly items-center ">
              <div className="absolute left-0 border-l-1 border-green-600 h-full" />
              {
                sections.map((section) => (
                  <li key={section.id} className="flex items-center justify-center w-full">
                    <div className={`bg-green-300 rounded-full p-2 absolute -left-2  ${activeSection === section.id ? "bg-primary/100  border border-primary/100" : "bg-primary/50 hover:bg-card/50 hover:neon-text"}`} />
                    <button onClick={() => scrollToSection(section.id)}
                      className={`text-lg cursor-pointer ${activeSection === section.id ? "text-white neon-text" : "text-white hover:neon-text"}`}
                      aria-current={activeSection === section.id ? "page" : undefined}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      {
        sidebarOpen && (
          <div className="fixed inset-0 z-1 md:hidden"
            aria-hidden="true"
          />
        )
      }
      <div className="min-h-screen md:ml-64">
        <section id="hero" className=" pt-20 md:pt-25 flex items-start justify-center px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll transition-all duration-1000 ease-out">
            <div className="flex items-center justify-center gap-10 py-5">
              <img src={profile}
                className="w-25 h-30 rounded-full"
                alt="Foto de perfil de Matias Campodonico, Full Stack Developer"
                loading="eager"
              />
              <p className="neon-border rounded-2xl p-2 border text-white  transition-all duration-400 transform hover:scale-105 text-xl">Disponible para trabajar</p>
            </div>
            <header>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 stagger-child transition-all duration-800">
                Matias Campodonico
                <span className="text-primary block neon-text-large">
                  Full stack web developer
                </span>
              </h1>
            </header>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed stagger-child transition-all duration-800 ease-out">
              Full Stack Developer con experiencia en el sector e-commerce,especializado en aplicaciones web dinamicas,optimizaciones de código y aumentos de performance.
            </p>
            <div className="py-10 flex items-center justify-center gap-5">
              <a
                className="neon-border rounded-2xl py-2 px-4 border text-white  transition-all duration-400 transform hover:scale-105"
                href="mailto:campodonicomatias@outlook.com"
                aria-label="Enviar email a Matias Campodonico"
              >Contactame</a>
              <a
                className="neon-border rounded-2xl py-2 px-4 border text-white  transition-all duration-400 transform hover:scale-105"
                target="_blank"
                href="https://linkedin.com/in/matias-campodonico"
                rel="noopener noreferrer"
                aria-label="Ver perfil de LinkedIn de Matias Campodonico (se abre en nueva pestaña)"
              >Linkedln</a>
            </div>
          </div>
        </section>
        <section id="experience" className="py-16 px-6" aria-labelledby="experience-heading">
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <div className="flex items-center w-full  mb-12 gap-5 justify-center">
              <BriefcaseBusiness size={50} color="white" aria-hidden="true" />
              <h2 className="text-4xl md:text-5xl font-bold text-center neon-text text-white">Experiencia laboral</h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 neon-glow"></div>
              <div className="space-y-12">
                <article className="relative flex items-center">
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full neon-glow z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-gray-900/50 p-6 rounded-lg neon-border hover:neon-glow transition-all duration-300">
                      <header className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-emerald-400">UI Developer</h3>
                        <time className="text-sm text-gray-400 bg-emerald-500/20 px-3 py-1 rounded-full">
                          2021 - 2024
                        </time>
                      </header>
                      <h4 className="text-lg font-semibold mb-3 text-white">Valtech</h4>
                      <ul className="text-gray-300 space-y-2 text-md">
                        <li>• Desarrollo de interfaces responsivas usando React,CSS nativo y jQuery</li>
                        <li>• Integraciones de funciones desde el back-end con Node.js en la plataforma VTEX IO</li>
                        <li>• Re rediseños de webs pixel perfect segun requerimientos del cliente</li>
                        <li>• Consumo y manejo de APIs mediante graphQl</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["React", "Node.js", "VTEX IO", "Typescript", "graphql"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30"
                            role="listitem"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
                <article className="relative flex items-center md:justify-end">
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full neon-glow z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                    <div className="bg-gray-900/50 p-6 rounded-lg neon-border hover:neon-glow transition-all duration-300">
                      <header className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-emerald-400">Full Stack Developer</h3>
                        <time className="text-sm text-gray-400 bg-emerald-500/20 px-3 py-1 rounded-full">2021</time>
                      </header>
                      <h4 className="text-lg font-semibold mb-3 text-white">Academia Henry</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Bootcamp intensivo con +800 horas para cubrir las bases del full stack development</li>
                        <li>• Maestria en tecnologias web modernas y metodologias de desarrollo</li>
                        <li>• Desarrollo de multiples proyectos usando React,Node.js y bases de datos</li>
                        <li>• Aprendizaje de metodologias agiles y desarrollos colaborativos</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["React", "Node.js", "PostgreSQL", "JavaScript", "Git"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30"
                            role="listitem"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-16 px-6" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <div className="flex items-center justify-center w-full gap-5  mb-12">
              <FolderCode size={50} color="white" aria-hidden="true" />
              <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-center neon-text text-white">Proyectos</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg overflow-hidden neon-border hover:neon-glow transition-all duration-300 transform hover:scale-105 animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                  role="listitem"
                >
                  <div className={`${Array.isArray(project.image) && "columns-4 gap-x-1 object-cover"} relative h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"`}>
                    {Array.isArray(project.image) ?
                      project.image.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Screenshot ${index + 1} del proyecto ${project.title}`}
                          className="h-full object-cover w-auto"
                          loading="lazy"
                        />
                      )) :
                      <img
                        src={project.image}
                        alt={`Screenshot del proyecto ${project.title}`}
                        className="w-full h-full object-cover opacity-80"
                        loading="lazy"
                      />
                    }
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label={`Tecnologías usadas en ${project.title}`}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                          role="listitem"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {
                      project.link &&
                      <a target="_blank"
                        href={project.link}
                        className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer"
                        rel="noopener noreferrer"
                        aria-label={`Ver demo del proyecto ${project.title} (se abre en nueva pestaña)`}
                      >
                        <span className="mr-2">Ver demo</span>
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="stack" className="min-h-[400px] md:min-h-[600px] py-10 px-6 flex items-center" aria-labelledby="stack-heading">
          <div className="max-w-7xl mx-auto animate-on-scroll">
            <div className="flex items-center justify-center gap-5 mb-12">
              <Terminal size={50} color="white" aria-hidden="true" />
              <h2 id="stack-heading" className="text-4xl md:text-5xl font-bold text-center  text-white neon-text">Stack</h2>
            </div>
            <div className="flex flex-wrap lg:justify-start justify-center w-full gap-6" role="list">
              {icons.map((tech, index) =>
              (
                <div
                  key={tech.name}
                  className="flex flex-col items-center max-w-30 py-6 px-7 bg-gray-900/50 rounded-lg neon-border hover:neon-glow transition-all duration-300 transform hover:scale-110 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                  role="listitem"
                >
                  <div className="text-emerald-400 mb-3">
                    <img
                      src={tech.icon}
                      alt={`Logo de ${tech.name}`}
                      className="w-8 h-8 md:w-auto md:h-auto"
                      loading="lazy"

                    />
                  </div>
                  <span className="text-sm font-medium text-center text-white">{tech.name}</span>
                </div>
              )
              )}
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 md:py-20 px-6" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="flex items-center w-full justify-center gap-5 mb-8 ">
              <MessagesSquare size={50} color="white" aria-hidden="true" />
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold neon-text text-white">Contacto</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href="mailto:campodonicomatias@outlook.com"
                target="_blank"
                className="bg-gray-900/50 p-6 rounded-lg neon-border hover:neon-glow transition-all duration-300 transform hover:scale-105"
                aria-label="Enviar email a campodonicomatias@outlook.com"
                role="listitem"
              >
                <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">campodonicomatias@outlook.com</p>
              </a>

              <a
                href="https://linkedin.com/in/matias-campodonico"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 p-6 rounded-lg neon-border hover:neon-glow transition-all duration-300 transform hover:scale-105"
                aria-label="Ver perfil de LinkedIn (se abre en nueva pestaña)"
                role="listitem"
              >
                <Linkedin className="w-8 h-8 text-emerald-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 text-white">LinkedIn</h3>
                <p className="text-gray-300">Perfil</p>
              </a>

              <a
                href="https://github.com/matiascamp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 p-6 rounded-lg neon-border hover:neon-glow transition-all duration-300 transform hover:scale-105"
                aria-label="Ver perfil de GitHub (se abre en nueva pestaña)"
                role="listitem"
              >
                <Github className="w-8 h-8 text-emerald-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
                <p className="text-gray-300">Perfil</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default Portfolio
